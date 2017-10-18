---
layout: page
title: "Q179493: WD97: Line Pattern Printed Solid If Pasted as Picture or Bitmap"
permalink: kb/179/Q179493/
---

## Q179493: WD97: Line Pattern Printed Solid If Pasted as Picture or Bitmap

	Article: Q179493
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a Microsoft Word AutoShape or object that contains a pattern fill
	of lines, like the Light Downward Diagonal pattern, it is printed as a solid
	color.
	
	CAUSE
	=====
	
	This problem occurs when you copy a Microsoft Word AutoShape or object and then
	paste it as a picture or bitmap.
	
	This occurs because the resolution for a picture or bitmap object is less than
	that for a Word AutoShape or object; thus, Word prints it as a solid object
	without lines.
	
	WORKAROUND
	==========
	
	To work around this problem use either of the following methods.
	
	Method 1: Paste as an MS Office Drawing Object
	----------------------------------------------
	
	To paste the object as an MS Office Drawing Object, follow these steps:
	
	1. After copying the AutoShape or object, click Paste Special on the Edit menu.
	
	2. Under As, click MS Office Drawing Object and then click OK.
	
	Method 2: Change the Printer Resolution
	---------------------------------------
	
	Set the printer resolution to either 75 or 150 dots per inch (dpi) by following
	these steps:
	
	1. On the File menu, click Print.
	
	2. Click Properties and then click the Graphics tab.
	
	3. Change the Resolution to either 75 or 150 dpi.
	
	NOTE: This method may cause other graphic printing problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	In Word, an object pasted as a picture or bitmap appears as a black-and- white
	image. Word sends its fill patterns to the printer as bitmaps (that is, patterns
	of dots or pixels); therefore, the patterns are dependent on the printer
	resolution setting to determine the distance between the individual pixels in
	the pattern. With a low resolution, the patterns are recognizable. With a high
	resolution, the width of the lines and the spacing between each line is so small
	that the resulting pattern is printed as a smooth, solid gray color.
	
	
	Additional query words: epson hp
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
