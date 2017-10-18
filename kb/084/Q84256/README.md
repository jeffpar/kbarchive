---
layout: page
title: "Q84256: How Program Shortcut Keys Work in Windows 3.1"
permalink: kb/084/Q84256/
---

## Q84256: How Program Shortcut Keys Work in Windows 3.1

	Article: Q84256
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to use the Application Shortcut Keys feature in the
	Program Item Properties dialog box under Windows 3.1.
	
	MORE INFORMATION
	================
	
	Shortcut Key Rules
	------------------
	
	1. You can use shortcut keys to start Windows- and MS-DOS-based applications
	  only if Program Manager has the current application focus (active). If the
	  application is not the current focus, then the shortcut key is lost because
	  no current application has use for it.
	
	2. You can switch between running MS-DOS- and Windows-based applications using
	  shortcut keys that have been assigned to the applications by selecting
	  Properties from the File menu, and then modifying Program Item Properties.
	
	  WARNING: Some keys do not function properly for the two previous rules above.
	
	  The arrow keys and the INSERT, END, PAGE UP, PAGE DOWN, and HOME keys can
	  cause problems by allowing you to start multiple instances of the
	  application, if the application allows for multiple instances. There is a
	  difference between number values on the numeric pad and the normal number
	  keys at the top of the keyboard (not the function keys).
	
	
	3. Page 276 of the "Microsoft Windows User's Guide" for version 3.1 incorrectly
	  states that CTRL+ALT+SHIFT+"character" is different from
	  CTRL+SHIFT+ALT+"character." Actually, these keystrokes are equivalent
	  statements.
	
	Steps to Assign Shortcut Keys
	-----------------------------
	
	1. From Program Manager, hold down the ALT key and choose the icon of the
	  program to which you want to assign a shortcut key.
	
	2. Select the Shortcut Key box, and then press the key combination you want to
	  use for the application. The following are the valid key sequences:
	
	   - CTRL+SHIFT+"character"
	
	   - CTRL+ALT+SHIFT+"character
	
	   - CTRL+ALT+"character"
	
	Example of Shortcut Key Functionality
	-------------------------------------
	
	1. Assign a shortcut key to version 4.0 of Excel for Windows (CTRL+ALT+X) and to
	  version 2.0 of Word for Windows (CTRL+ALT+W).
	
	2. With Program Manager as the current focus and no other application running,
	  press CTRL+ALT+W. Word for Windows will start.
	
	3. With Word for Windows as the current focus, press CTRL+ALT+X, and nothing
	  will happen (unless those keys have been assigned to something in Word for
	  Windows).
	
	4. Switch the focus back to Program Manager and press CTRL+ALT+X. Excel version
	  4.0 will start.
	
	5. Press CTRL+ALT+W to bring Word for Windows back into focus, and then press
	  CTRL+ALT+X to switch to Excel.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.1, pages 79-80, 276-277
	
	Additional query words: 3.10 3.11 keys hot key hotkeys
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
