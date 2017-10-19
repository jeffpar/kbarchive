---
layout: page
title: "Q130533: Using Previous Windows Communications Switches in Windows 95"
permalink: /kb/130/Q130533/
---

## Q130533: Using Previous Windows Communications Switches in Windows 95

	Article: Q130533
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists COM port switches that are used in the [386Enh] section of
	the SYSTEM.INI file for previous versions of Windows and how those switches can
	be used in Windows 95.
	
	MORE INFORMATION
	================
	
	The following table lists the COM port switches, valid values for those
	switches, and where the switches can be used in Windows 95:
	
	  Switch           Value                Windows 95 Location
	  --------------------------------------------------------
	  COMxAutoAssign   Number or seconds    SYSTEM.INI
	  COMxBase         I/O address          Registry
	  ComxBuffer       number of characters SYSTEM.INI
	  COMMDrv30        True or false        Registry
	  COMxFIFO         True or false        SYSTEM.INI
	  COMxIRQ          IRQ number           Registry
	  COMIRQSharing    True or false        Registry
	  COMxProtocol     XOFF or blank        SYSTEM.INI
	
	
	If the Windows 95 location in the table above is SYSTEM.INI, you can use the
	setting in the [386Enh] section of the SYSTEM.INI file in Windows 95. The
	setting will affect only MS-DOS-based programs.
	
	If the Windows 95 location in the table above is Registry, the setting can be
	modified using the Windows 95 graphical user interface (GUI). The setting will
	affect only Windows-based programs. If you place the setting in the SYSTEM.INI
	file it will be ignored.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
