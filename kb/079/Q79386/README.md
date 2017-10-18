---
layout: page
title: "Q79386: PRB: High Granularity Setting Affects Windows/VB Form Resizing"
permalink: kb/079/Q79386/
---

## Q79386: PRB: High Granularity Setting Affects Windows/VB Form Resizing

	Article: Q79386
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the granularity of Windows' invisible sizing grid to a value greater
	than zero, you may notice that form resizing is no longer smooth.
	
	RESOLUTION
	==========
	
	This behavior is correct and can be changed by setting the granularity back to
	zero.
	
	MORE INFORMATION
	================
	
	The Windows Control Panel program group contains several icons that allow you to
	customize the Windows environment. The Desktop program allows you to specify the
	Windows granularity setting. If you notice that Visual Basic forms do not
	smoothly resize, but instead resize in "chunks," the problem may be caused by a
	granularity setting that is too high.
	
	To change the Windows granularity setting:
	
	1. Open the Windows Main program group.
	
	2. Double-click the Control Panel icon.
	
	3. Double-click the Desktop icon.
	
	4. Move to the granularity text box in the lower right portion of the dialog
	  box.
	
	5. Click the up or down scroll arrow to the right of the text box to increase or
	  decrease the size of the grid. Or type the number you want in the text box.
	
	  NOTE: The allowable range of values is 0-49 inclusive. Setting the granularity
	  to zero will produce the smoothest form resizing.
	
	6. Choose OK.
	
	REFERENCES
	==========
	
	"Microsoft Windows 3.0 Graphical Environment: Users Guide," version 3.0, page
	157
	
	Additional query words: 1.00 3.00 3.00a 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : :1.0,3.0,3.0a,3.1
	Issue type        : kbprb
	
	=============================================================================
	
