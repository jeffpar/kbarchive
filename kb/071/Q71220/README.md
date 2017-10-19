---
layout: page
title: "Q71220: Immediate &quot;Cannot Print&quot; Error Message from Windows"
permalink: /kb/071/Q71220/
---

## Q71220: Immediate &quot;Cannot Print&quot; Error Message from Windows

	Article: Q71220
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains information on possible causes for an immediate "Cannot
	Print" error message when trying to print from a Windows application under
	Microsoft Windows 3.0.
	
	MORE INFORMATION
	================
	
	The following problems can cause this error message. Where available, steps for
	correcting each problem are provided.
	
	Invalid Temporary File Directory
	--------------------------------
	
	The error occurs if the temporary file directory pointed to by the DOS TEMP
	variable is invalid.
	
	To correct the problem, verify that a SET TEMP statement exists and points to a
	directory with sufficient space (and access privileges if a network is being
	used).
	
	Printer Doesn't Provide Proper Handshaking
	------------------------------------------
	
	If you are using a serial port, make sure the printer is connected directly to
	the computer, not through a switch box or print-sharing device. Try a different
	cable.
	
	If you are using a parallel port, the same considerations apply. Additionally,
	the printer should maintain the Centronics parallel "Paper Out" signal in an OFF
	position and the "Select In" signal in an ON position for printing to begin.
	
	Corrupted Printer Driver
	------------------------
	
	Check the files size of the printer driver to see if it has been corrupted. If it
	doesn't match the original file size, reinstall the driver.
	
	Windows Does Not Recognize the Printer Port
	-------------------------------------------
	
	If you are on a network, make sure the appropriate port is redirected properly;
	use either an MS-DOS command or the Windows 3.0 Control Panel Network section to
	make any required corrections. If you are not on a network, this may indicate a
	hardware port configuration problem.
	
	Ports should be configured with the following hardware interrupt and base I/O
	port addresses:
	
	  Port      Base I/O Address   Hardware Interrupt
	  ------------------------------------------------
	
	  LPT1        3BCh or 378h             7
	  LPT2            278h                 5
	  COM1            3F8h                 4
	  COM2            2F8h                 3
	
	You can use the MS-DOS Debug command to verify the existing base I/O address (see
	below).
	
	If you are using a parallel port and are able to print from MS-DOS, a temporary
	workaround for testing purposes may be to use the Windows 3.0 Control Panel to
	connect the printer driver to a port of LPTx.OS2 rather than LPTx: (where x is
	the appropriate port number). This allows Windows to print through MS-DOS rather
	than directly to the port hardware.
	
	Verifying the Base I/O Port Address
	-----------------------------------
	
	Use the following procedure to verify the base I/O port address settings for
	printer ports.
	
	Information on the I/O port starting address for each of the installed serial and
	parallel ports is contained in the ROM BIOS data segment at memory location
	0040:0000. Each entry is a 16-bit port address stored in two hexadecimal bytes.
	As with all 16-bit addresses, each pair of bytes should be reversed to read
	correctly. For example, the entry "F8 03" yields an address of 3F8 hexadecimal
	(the standard starting address for COM1). You can easily examine the contents of
	the ROM BIOS data segment yourself, using the DOS DEBUG utility. The Debug
	command to display a range of memory is "D" for "Dump." Run DEBUG and enter the
	command "d40:0" (without the quotation marks) at the C:\> prompt, as
	follows:
	
	  C:\>debug
	  -d40:0
	  0040:0000  F8 03 F8 02 00 00 00 00-78 03 00 00 00 00 00 00
	  PORT       COM1: COM2: COM3: COM4: LPT1: LPT2: LPT3:
	  BYTE       00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
	
	The notations on the last two lines were included for clarity and are not part of
	the DEBUG output. The first eight bytes show the addresses for COM1 through
	COM4. The last eight bytes show LPT1 through LPT3, followed by two unused bytes.
	This particular output shows a machine with two COM ports at addresses 3F8h and
	2F8h, and one LPT port at address 378h. Zeros indicate nonexistent ports. After
	examining the segment, enter "Q" (without the quotation marks) to quit DEBUG.
	
	
	Additional query words: 3.0 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
