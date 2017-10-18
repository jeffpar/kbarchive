---
layout: page
title: "Q71502: Cannot Remove WinPopup from Load= Line in WIN.INI"
permalink: kb/071/Q71502/
---

## Q71502: Cannot Remove WinPopup from Load= Line in WIN.INI

	Article: Q71502
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run Microsoft Windows configured for a Microsoft LAN Manager 2.0 or 2.1
	enhanced (or 100% compatible) network, and the network is currently loaded with
	the NetPopup service active, you cannot start Windows without WinPopup being
	loaded.
	
	If you remove WinPopup from the LOAD= line in the WIN.INI file, and you exit
	Windows and restart Windows while the NetPopup service is active, WinPopup is
	added back to the LOAD= line. This occurs because NetPopup determines that
	Windows is active and then checks to determine if WinPopup is there. If it
	WinPopup isn't already there, NetPopup adds it.
	
	If you want to remove WinPopup, you must first prevent NetPopup from being
	automatically loaded. This article describes that procedure.
	
	MORE INFORMATION
	================
	
	Preventing NetPopup From Loading Automatically
	----------------------------------------------
	
	1. Switch to the directory that contains the LANMAN.INI file. The default is
	  C:\LANMAN.DOS.
	
	2. Make a backup copy of the LANMAN.INI file.
	
	3. Open LANMAN.INI with a text editor, such as Notepad.
	
	4. In the [workstation] section, find the following line:
	
	  WRKSERVICES=
	
	5. Remove NETPOPUP from the WRKSERVICES= line, and save the file.
	
	6. Restart the network.
	
	7. Open the WIN.INI file with a text editor, such as Notepad.
	
	8. Remove WinPopup from the LOAD= line, and save the file.
	
	9. Restart Windows and the WinPopup icon should not be present.
	
	NOTE: Any messages received are not displayed but are written to the MESSAGES.LOG
	file that is in the LOGS subdirectory under the LANMAN.DOS directory and can be
	viewed using any text editor, such as Notepad.
	
	Restarting NetPopup
	-------------------
	
	After exiting Windows, if you desire to start the NetPopup service, type the
	following at the MS-DOS command prompt:
	
	  net start netpopup
	
	NOTE: To end this service, you must restart the network. If you run NetPopup and
	then start Windows while this service is active, it adds WinPopup back in the
	LOAD= line.
	
	The NET PAUSE NETPOPUP command does not work because message service is still
	active, although it does not send any messages through.
	
	Additional query words: 3.0 3.00 win31 3.10 3.11 pop-up popup net
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
