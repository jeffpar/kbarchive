---
layout: page
title: "Q68652: Printing to Windows LPT1.OS2 or LPT1.DOS Port"
permalink: kb/068/Q68652/
---

## Q68652: Printing to Windows LPT1.OS2 or LPT1.DOS Port

	Article: Q68652
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You may be unable to print from Microsoft Windows version 3.0 or 3.1 to the
	LPT1: port, although you can print to the LPT1.OS2 port, or LPT1.DOS port if
	using Windows 3.1. Some networks and print-sharing devices may require using the
	LPT1.OS2 or LPT1.DOS port. For the most part, this should be considered a
	temporary workaround. If you can print to LPT1.OS2 or LPT1.DOS and cannot print
	to LPT1, the reason is probably one of the following:
	
	1. Windows cannot create temporary files. This could be caused by any of the
	  following:
	
	  a. SET TEMP points to a nonexistent directory.
	
	  b. SET TEMP points to a directory where you don't have create, modify, or
	     write privileges.
	
	  c. The SET TEMP line is not typed properly.
	
	  d. SET TEMP points to a directory with little or no disk space.
	
	  e. The SET TEMP line does not exist and Windows is trying to create temporary
	     files in a directory that falls into category b or d above.
	
	  f. FAT (file allocation table) is corrupt. Using the CHKDSK/F command might
	     correct this.
	
	2. Poor cabling or printer-to-computer wiring exists. Try a different cable or
	  verify that the cable is firmly connected to the printer and computer.
	
	MORE INFORMATION
	================
	
	When Windows prints to a port, such as LPT1:, it uses a printing method that
	allows it to detect errors on the printer. While this method has advantages, it
	is not supported by some network software packages. When Windows prints to
	LPT1.OS2 or LPT1.DOS, a different method of printing is used that does not allow
	Windows to check for errors during printing. As a result, garbled output may
	occur during printing, especially when printing large files.
	
	When Windows prints to the LPT1.OS2 or LPT1.DOS port, it prints to a file named
	LPT1.OS2 or LPT1.DOS. When DOS gets the request from Windows to open the file
	LPT1.OS2 or LPT1.DOS, it interprets that as a request to send data to the
	printer port, and it sends the data out through its own printing handler.
	Because Windows thinks that LPT1.OS2 or LPT1.DOS is a DOS file, the Print
	Manager is not used. Windows will not spool output to this port.
	
	The extension .OS2 or .DOS is a dummy; any extension could be used with the same
	effect. Ports other than LPT1: can be printed to this way. Printing to the file
	LPT2.XYZ causes data to be sent to a printer on the computer's LPT2: port.
	Although you can print to COM ports in this manner (for example, COM1.PRN), it
	is not recommended because it requires a MODE statement in MS-DOS with the
	proper communication parameters.
	
	Note: This technique is a WORKAROUND to a printer problem. It does not truly
	solve the problem, although it does indicate that the problem is probably NOT in
	the Windows printer driver. When possible, other Windows troubleshooting steps
	should be tried to avoid future difficulties, even if using LPT1.OS2 or LPT1.DOS
	seems to solve the problem. For more information on troubleshooting Windows
	printing problems, query on the following words:
	
	  "tshoot" (without the quotation marks) and "printing" (without the quotation
	  marks)
	
	
	Additional query words: 3.00 3.00a KBPrint 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
