---
layout: page
title: "Q82523: Character Map Displays FaceLift Fonts Incorrectly"
permalink: kb/082/Q82523/
---

## Q82523: Character Map Displays FaceLift Fonts Incorrectly

	Article: Q82523
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under the Microsoft Windows operating system version 3.1, the Charmap program
	may incorrectly display Bitstream FaceLift fonts. This problem occurs with lower
	point sizes (9 points and lower).
	
	To correct this problem, the threshold of the Parameters setting in the FaceLift
	control panel should be set lower.
	
	The default FaceLift threshold for screen fonts is 9 points. FaceLift does not
	display a font on the screen any smaller than this; therefore, the font in the
	Character Map grid is incorrect. Larger point sizes are displayed correctly.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
