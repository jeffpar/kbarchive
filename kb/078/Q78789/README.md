---
layout: page
title: "Q78789: Windows Err Msg: Could Not Print Page &lt;x&gt;"
permalink: /kb/078/Q78789/
---

## Q78789: Windows Err Msg: Could Not Print Page &lt;x&gt;

	Article: Q78789
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a printing error message when you try to print from a Windows
	application under Windows 3.0 or 3.0a. For example, you may receive the
	following error message in the Write:
	
	  Could not print page - Error:-1.
	
	This problem does not occur with later versions of Windows.
	
	CAUSE
	=====
	
	This may be caused by the file DOSSHELL.SWP being in the directory pointed to by
	the SET TEMP= setting in the AUTOEXEC.BAT file. The DOSSHELL.SWP file is created
	in this directory if the following statements are both true:
	
	- DOSSHELL has been executed and then shelled out by pressing SHIFT+F9.
	
	- Multiple instances of the DOSSHELL program have been entered and are running.
	
	RESOLUTION
	==========
	
	If multiple instances of DOSSHELL are started while Windows is running, use the
	following procedure to close the multiple instances of DOSSHELL to remove the
	DOSSHELL.SWP file from the temporary directory:
	
	1. Close Windows.
	
	2. At the command prompt, type
	
	  exit
	
	  to go into the DOSSHELL program.
	
	3. Close the DOSSHELL by pressing ALT+F to open the File menu, and press X to
	  exit.
	
	4. Repeat steps 2 and 3 above until you do not go into the DOSSHELL program when
	  you type:
	
	  exit
	
	This should remove the DOSSHELL.SWP file from the temporary directory.
	
	NOTE: If the computer has been turned off while the DOSSHELL.SWP file was in the
	temporary directory, the above procedure may not remove the file.
	
	The DOSSHELL.SWP file is created with a read-only attribute. The file can not be
	deleted until you clear the read-only attribute. The following command can be
	used to clear the read-only attribute of the file so that it can be deleted:
	
	  Attrib -r dosshell.swp
	
	Additional query words: shell Dos 5.0 Windows 3.00 3.00a dosshell err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
