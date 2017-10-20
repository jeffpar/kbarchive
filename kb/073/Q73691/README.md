---
layout: page
title: "Q73691: Opening Editor with Selected File in Shell"
permalink: /kb/073/Q73691/
---

## Q73691: Opening Editor with Selected File in Shell

{% raw %}

	Article: Q73691
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within MS-DOS version 5.0 or later Shell, you can open the Editor with the
	default file selected from the files listing box.
	
	MORE INFORMATION
	================
	
	By default, when Editor is opened from Shell, a File to Edit window (also called
	the %1 prompt dialog) first appears, prompting you to enter the name of the file
	to edit. You must then type either the name of the file and choose OK to edit an
	existing file or choose OK to create a new file.
	
	When editing an existing file, you can select a file from the files listing box
	(the top right box on the main Shell screen) and open the Editor with that file
	selected to edit. To select a file from the files listing box to edit, do the
	following:
	
	1. Select Editor (do not open the Editor.)
	
	2. From the File menu, choose Properties.
	
	3. Choose OK.
	
	4. Type "%f" (without the quotation marks) in the Default Parameters text box
	  (for the %1 prompt dialog.)
	
	5. Choose OK to save this change and return to the main Shell screen.
	
	Once you have completed the above steps, Editor automatically displays the
	filename of the currently selected file in the File to Edit window. Choose OK to
	edit the selected file.
	
	Additional query words: parameter dosshell 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
