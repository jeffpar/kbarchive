---
layout: page
title: "Q68756: Using COM1.OS2 or COM1.PRN Ports in Windows 3.0"
permalink: kb/068/Q68756/
---

## Q68756: Using COM1.OS2 or COM1.PRN Ports in Windows 3.0

	Article: Q68756
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using COM1.OS2 or COM1.PRN as a workaround for printing problems with
	Microsoft Windows version 3.0, you must configure the serial port through the
	AUTOEXEC.BAT file. The statement
	
	  MODE COMn[:]bb[,x[,y[,z]]]
	
	must be added to the AUTOEXEC.BAT file, where the following is true:
	
	  "n" is the name of the communications port.
	  "bb" is the number of bits per second to be received or sent.
	  "x" is the type of parity.
	  "y" is the number of data bits.
	  "z" is the number of stop bits.
	
	In addition, you must add the following line to the [PORTS] section of the
	WIN.INI file
	
	  [PORTS]
	  COMn.PRN=
	  ...
	
	where "n" is the name of the communications port.
	
	NOTE: Using the COMn.PRN workaround is not recommended, as explained in the "MODE
	Statement" section below.
	
	MORE INFORMATION
	================
	
	The function of the MODE COMn statement is to set the parameters of the
	communications port that define the speed and form of the data transmitted
	through the port. When using a COM port in Windows, these settings are taken
	care of by the Control Panel. When using the COM1.OS2 and COM1.PRN workarounds
	in Windows, the print job is sent to the MS-DOS COMn device, which requires the
	serial port be reconfigured for it to work correctly with every print job.
	
	Printing to a port such as LPT1.OS2, LPT2.OS2, or COM1.PRN is a TEMPORARY
	workaround or troubleshooting step. If Windows can print to these ports, and not
	the normal Windows port, you could have any of the following problems:
	
	- Windows cannot create temporary files.
	
	- The printer cable is defective.
	
	- The printer-to-computer connection is loose or not connected properly.
	
	- Corrupted installation of Windows.
	
	MODE Statement
	--------------
	
	Printing to COMn.PRN ports requires a MODE statement at the MS-DOS level. If this
	statement gets changed or deleted, Windows won't print to the COM port. Testing
	printing to a serial printer from MS-DOS, using a COM port, may not work with
	some printers (such as PostScript printers). As a result, using the COMn.PRN
	workaround is not recommended.
	
	For example:
	
	  MODE LPT1=COMn.PRN (where n=1,2,3, or 4)
	
	For more information on printing to ports, such as COM1.PRN and LPT1.OS2, query
	on the following words:
	
	  "LPT1.OS2" (without the quotation marks) and "LPT1.PRN" (without the
	  quotation marks)
	
	
	Additional query words: COM2, COM3, COM4 3.0 3.00 win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
