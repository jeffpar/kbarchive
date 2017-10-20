---
layout: page
title: "Q78411: Restoring MS-DOS Editor to the MS-DOS Shell Main Program List"
permalink: /kb/078/Q78411/
---

## Q78411: Restoring MS-DOS Editor to the MS-DOS Shell Main Program List

{% raw %}

	Article: Q78411
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
	
	If MS-DOS Editor is deleted from the MS-DOS Shell Main program list, it may be
	restored using Shell to recreate the Editor program item.
	
	MORE INFORMATION
	================
	
	To add the Editor back to the Main program list, do the following:
	
	1. Press TAB to select the Main area of the Shell screen. If the Shell screen
	  doesn't show the area titled "Main," you may change the display by pressing
	  ALT+V to select the View Menu. From the View menu, choose Program/File Lists,
	  and press ENTER.
	
	2. From the File menu, choose New, and press ENTER.
	
	3. In the New Program Object dialog box, select the Program Item option and
	  choose OK.
	
	4. In the Program Title text box of the Add Program dialog box, enter "Editor"
	  (without the quotation marks). In the Commands text box, enter "Edit %1"
	  (without the quotation marks) and choose OK.
	
	5. Another Program Item Properties dialog box will be displayed. In the Window
	  Title text box, enter "File to Edit" (without the quotation marks). In the
	  Program Information text box, enter "Enter the name of the file to edit"
	  (without the quotation marks). In the Prompt Message text box, enter "File to
	  Edit" (without the quotation marks). Choose OK.
	
	6. The Editor should now appear as a program item within the Main section of the
	  screen.
	
	If you are using MS-DOS 5.0 or 5.0a you can also add the Editor to the Main
	program list by using the EXPAND utility to replace the DOSSHELL.INI file. If
	you are using MS-DOS 6.0, expand the appropriate file for your video card and
	monitor. For example, type "EXPAND A:\EGA.IN_ C:\DOS\DOSSHELL.INI" (without the
	quotation marks) at the MS-DOS command prompt and then press ENTER. Any changes
	made to the DOSSHELL.INI file since installation will be lost.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS Getting Started," version 5.0, page 45
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, Chapters 3, 8
	
	
	Additional query words: 5.00 dosshell 6.00 doshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
