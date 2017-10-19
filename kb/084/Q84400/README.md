---
layout: page
title: "Q84400: LPTx.OS2 Port Selection Not Available in Printers Connect"
permalink: /kb/084/Q84400/
---

## Q84400: LPTx.OS2 Port Selection Not Available in Printers Connect

	Article: Q84400
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	New installations (as opposed to upgrades) of Windows 3.1 will not have the
	LPT1.OS2 or LPT2.OS2 ports selections available in the Printers Connect section
	of the Control Panel or in Print Manager. Choose LPT1.DOS or LPT2.DOS instead.
	
	MORE INFORMATION
	================
	
	Page 77 of the "Getting Started with Microsoft Windows" booklet for Windows 3.1
	incorrectly states:
	
	  If you are printing to LPT1, try printing to the LPT1.OS2 file instead. To
	  specify the LPT1.OS2 file, choose the Printers icon in Control Panel. When
	  the Printers dialog box appears, choose the Connect button. Choose LPT1.OS2
	  from the Ports list. If LPT1.OS2 does not appear in the list, you need to add
	  it to the list of ports in the ports section of the WIN.INI file.
	
	If you upgraded to Windows 3.1 from Windows 3.0, the LPTx.OS2 options will be
	listed in the Ports section of the WIN.INI unless the options were removed
	manually. Upgrading to Windows 3.1 preserves the LPTx.OS2 port listings in the
	WIN.INI. If Windows 3.1 was set up as a new installation, the new port listings
	of LPT1.DOS and LPT2.DOS will be available.
	
	The LPTx.OS2 and LPTx.DOS listings are alternative port selections for
	troubleshooting Windows printing problems while printing directly to the port.
	Choosing one of these ports causes Windows to print to a file that is handled by
	MS-DOS and then sent to the appropriate port for printing.
	
	Additional query words: lptx os2 3.10 doc err
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
