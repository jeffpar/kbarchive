---
layout: page
title: "Q82610: DynaComm 3.0x Fails to Install from File Manager"
permalink: /kb/082/Q82610/
---

## Q82610: DynaComm 3.0x Fails to Install from File Manager

{% raw %}

	Article: Q82610
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use DynaComm version 3.0x with Windows, you may experience the following
	problems:
	
	- DynaComm 3.0x Fails to Install from File Manager
	
	- GP Fault Occurs When Invoking Windows Help
	
	MORE INFORMATION
	================
	
	DynaComm 3.0x Fails to Install from File Manager
	------------------------------------------------
	
	If you choose run from the File Manager File menu and the default directory does
	not contain the SETUP.EXE file, DynaComm version 3.0x the Setup program fails.
	The DynaComm Setup program expects the current directory to be the directory
	from which Setup is run. This is not always the case when you run a program from
	the File Manager Run dialog box. The Program Manager Run command, on the other
	hand, makes the directory specified in the path the current directory before
	running the Setup program.
	
	To install DynaComm 3.0x, run Setup from Program Manager, or select the Setup
	program filename in File Manager.
	
	
	GP Fault Occurs When Invoking Windows Help
	------------------------------------------
	
	DynaComm version 3.0 generates a general protection (GP) fault when you open
	Windows Help.
	
	A GP fault occurs in the module DYNACOMM.EXE just before Windows Help appears.
	Some machines may display the message "Help topic does not exist" instead of the
	GP fault message.
	
	Note: With Windows 3.0, an unrecoverable application error (UAE), rather than a
	GP fault, occurs.
	
	DynaComm version 3.0 allocates a buffer size of 34 bytes to hold the fully
	qualified path of the help file. If the DynaComm help file resides in a
	directory causing the full path to be too long for the buffer, a GP fault
	occurs. For example, the length of the following path causes a GP fault:
	
	  c:\win\winapps\newapps\dynacomm\dynacomm.hlp
	
	To successfully run Windows Help in DynaComm, install DynaComm in a directory
	such that the length of the fully qualified path is less than 34 characters. The
	DynaComm directory should not be deeply nested inside other directories.
	
	DynaComm is manufactured by Future Soft Engineering, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
