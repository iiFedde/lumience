from PIL import Image
import numpy as np

src = r"C:\Users\fedde\.cursor\projects\c-Users-fedde-stanicdesign-clone\assets\c__Users_fedde_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_24_mrt_2026__19_59_19-70774b35-6f44-45b5-9e12-545b5a653632.png"
out = r"C:\Users\fedde\stanicdesign-clone\public\logo-astro.png"

img = Image.open(src).convert("RGBA")
arr = np.array(img, dtype=np.float32)
r, g, b, _ = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]

brightness = 0.299 * r + 0.587 * g + 0.114 * b

# Transparent background; keep white graffiti strokes with soft edges
alpha = np.clip((brightness - 20) / 35 * 255, 0, 255).astype(np.uint8)

result = np.dstack(
    (
        np.clip(r, 0, 255).astype(np.uint8),
        np.clip(g, 0, 255).astype(np.uint8),
        np.clip(b, 0, 255).astype(np.uint8),
        alpha,
    )
)

out_img = Image.fromarray(result, "RGBA")
bbox = out_img.getbbox()
if bbox:
    pad = 8
    left = max(0, bbox[0] - pad)
    top = max(0, bbox[1] - pad)
    right = min(out_img.width, bbox[2] + pad)
    bottom = min(out_img.height, bbox[3] + pad)
    out_img = out_img.crop((left, top, right, bottom))

out_img.save(out, "PNG")
print(f"Saved {out_img.size} -> {out}")
