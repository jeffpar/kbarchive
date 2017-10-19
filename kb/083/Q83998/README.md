---
layout: page
title: "Q83998: PRB: PrintDlg() Returns PDERR_NODEVICES w/ HP DeskJet"
permalink: /kb/083/Q83998/
---

## Q83998: PRB: PrintDlg() Returns PDERR_NODEVICES w/ HP DeskJet

	Article: Q83998
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application that uses the Print dialog box provided by the common dialog
	boxes Dynamic-Link Library (DLL), when the user selects HP DeskJet Printers in
	the Specific Printer combo box, the value PDERR_NODEVICES (0x1007) is returned
	to the application.
	
	CAUSE
	=====
	
	The Hewlett-Packard (HP) DeskJet 500C printer driver was installed incorrectly.
	The HP DeskJet driver provided with Windows 3.1 does not support the HP DeskJet
	500C.
	
	RESOLUTION
	==========
	
	Reinstall the HP DeskJet 500C printer driver through the Control Panel. When the
	Install Driver dialog box prompts for a vendor- supplied printer driver disk,
	insert the driver disk provided with the printer. For additional information on
	this procedure, query on the following words in the Microsoft Knowledge Base:
	
	  install and deskjet and 500c
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	PrintDlg() displays the Print dialog box. After the user selects a printer and
	dismisses the dialog box, PrintDlg() sets the fields of a PRINTDLG data
	structure to reflect the selections.
	
	In the case described above, the hDevMode field points to a DEVMODE data
	structure in which the dmDeviceName field is set to "HP DeskJet." However, the
	printer name is listed in the [devices] section of the WIN.ini file as "HP
	DeskJet Printers." Because the two entries do not match, PrintDlg returns the
	PDERR_NODEVICES error to the application.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
