---
layout: page
title: "Q108928: Setting Baud Rates in Windows 3.1"
permalink: /kb/108/Q108928/
---

## Q108928: Setting Baud Rates in Windows 3.1

	Article: Q108928
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbprogramming kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows 3.1, baud rates are specified in the BaudRate field of the
	communications port's DCB structure, and are set using SetCommState(). Baud
	rates can be specified by using the CBR_ constants listed in WINDOWS.H, or by
	using the actual baud rate.
	
	MORE INFORMATION
	================
	
	OpenComm(), by default, sets the baud rate of a communications port to
	BuildCommDCB() can be used to set the baud rate; however, BuildCommDCB() accepts
	only the following baud rates: 110, 150, 300, 600, 1200, 2400, 4800, 9600, and
	19200. If none of these baud rates are used, BuildCommDCB() returns an error.
	
	The SetCommState() function can be used to set the baud rate to values between 2
	and 115,200. The following CBR_ constants are defined in WINDOWS.H:
	
	  CBR_110        CBR_14400
	  CBR_300        CBR_19200
	  CBR_600        CBR_38400
	  CBR_1200       CBR_56000
	  CBR_2400       CBR_128000
	  CBR_4800       CBR_256000
	  CBR_9600
	
	NOTE: These are not the same constants as a listed in the Windows 3.1 SDK
	documentation for the DCB structure.
	
	NOTE: The CBR_56000 constant actually corresponds to a baud rate of 57,600.
	
	NOTE: The baud rate divisor is incorrect for CBR_14400.
	
	
	SetCommState() allows either the CBR_ constant or the actual baud rate in the
	BaudRate field of the DCB. SetCommState() calls into COMM.DRV to apply the DCB
	settings to the communications port. Although CBR_128000 and CBR_256000 are
	defined, they are not used in the communications driver (COMM.DRV).
	
	When setting the baud rate, COMM.DRV first determines if the baud rate is a CBR_
	constant; if so, COMM.DRV looks up the baud rate divisor in a table.
	
	If the baud rate is not in the CBR_ constant table and the UART is 8250, 16540,
	or 16550, the baud rate is set using 115,200 as the divisor and is divided by
	the user specified baud rate. The subsequent integer value from this division is
	used to set the baud rate (the remainder from the division is not used). For
	example, if the user specified a baud rate of 60000, the calculation would be
	115200/60000, which is 1.
	
	Therefore, the baud rate can be set to 115,200 by placing any value in BaudRate
	that is greater than CBR_56000 (57,600) and less than CBR_110, because this will
	always equal a baud rate of 1 (using the above formula) and signal the UART to
	operate at it's highest possible speed (115,200). A 115,200 baud rate cannot be
	specified directly in the DCB structure because the baud rate variable is an
	unsigned integer and cannot be larger than 64k in the 16 bit world.
	
	Third-party replacement communications drivers may set baud rates differently. If
	using a replacement, check with the software manufacturer to determine how to
	correctly set the baud rate.
	
	Additional query words: CBR_128000 CBR_256000 COMM.DRV
	
	======================================================================
	Keywords          : kbprogramming kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
