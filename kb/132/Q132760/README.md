---
layout: page
title: "Q132760: Skewing Filled Rectangle in Paint Causes Confusing Image"
permalink: kb/132/Q132760/
---

## Q132760: Skewing Filled Rectangle in Paint Causes Confusing Image

	Article: Q132760
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you draw a filled rectangle in Paint, select it, and then skew it, the result
	may be confusing. The fill color may seem to invade the drawing.
	
	CAUSE
	=====
	
	The same color is used to specify both the fill color and the transparent color
	for the image. You did not select the appropriate background color for the image
	before skewing the rectangle.
	
	RESOLUTION
	==========
	
	Select the correct background color before stretching or skewing the rectangle.
	
	MORE INFORMATION
	================
	
	You can use the Undo command to undo the skew or stretch command and then use
	the resolution listed above.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
