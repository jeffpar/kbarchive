---
layout: page
title: "Q84780: COMxProtocol Setting Not Explained in SYSINI.WRI File"
permalink: kb/084/Q84780/
---

## Q84780: COMxProtocol Setting Not Explained in SYSINI.WRI File

	Article: Q84780
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 93 of the "Getting Started with Microsoft Windows" manual for Windows 3.1
	incorrectly states that the COMxProtocol setting for the SYSTEM.INI file is
	explained in the SYSINI.WRI file.
	
	There is no reference to this entry in the SYSINI.WRI file that is provided with
	Windows 3.1. However, this entry is included in the SYSINI.WRI file that is
	provided in the Microsoft Windows Resource Kit for Windows 3.1.
	
	MORE INFORMATION
	================
	
	The following explanation is from the SYSINI.WRI file that is provided with the
	Microsoft Windows Resource Kit:
	
	  COM1Protocol=<XOFF-or-blank>
	  COM2Protocol=<XOFF-or-blank>
	  COM3Protocol=<XOFF-or-blank>
	  COM4Protocol=<XOFF-or-blank>
	
	  Default:  (Default is no entry, which is the same as any
	            entry other than XOFF)
	
	  Purpose:  Specifies whether Windows in 386 enhanced mode
	            should stop simulating characters into a virtual
	            machine after the virtual machine sends an XOFF
	            character. Set the value for a port to XOFF if a
	            communications application using that port is
	            losing characters while doing text transfers at
	            high baud rates. Windows will resume simulating
	            characters when the virtual machine sends another
	            character after the XOFF character. Leave this
	            setting disabled if the application is doing
	            binary data transfers; enabling this switch might
	            suspend binary transmissions. Windows will not
	            check for XOFF characters if this setting is blank
	            or set to anything other than XOFF. If the
	            application continues to lose characters after
	            this setting is properly set, try increasing the
	            corresponding COMxBuffer value.
	
	NOTE: COMxProtocol does not apply to Windows-based applications that call the
	Comm application program interface (API) functions. Windows-based applications
	can set their protocol using SetCommState. However, COMxProtocol may work for
	Windows-based applications that use terminate-and- stay-resident (TSR) programs
	for communication instead of the Comm API functions (for example, WinFax).
	
	To modify this setting, use Notepad to edit the SYSTEM.INI file.
	
	Additional query words: 3.10 3.11 wrk 3rdparty doc err
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
