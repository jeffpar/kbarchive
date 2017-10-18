---
layout: page
title: "Q85608: FAX: Typical Support Issues"
permalink: kb/085/Q85608/
---

## Q85608: FAX: Typical Support Issues

	Article: Q85608
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists common problems you may encounter while installing the
	Microsoft Mail Gateway to Fax.
	
	1. Installing the fax board.
	
	  The fax board must be installed as indicated in the Microsoft Mail Gateway to
	  Fax "Administrator's Guide." The most common problem encountered with the fax
	  board is the board conflicting with another piece of hardware in the gateway
	  machine. To avoid this problem, check the I/O addresses of the existing
	  hardware in the gateway computer, and make sure the fax board does not
	  conflict with any of these addresses.
	
	2. Configuring the fax board software.
	
	  The fax board software must be configured as indicated in the Microsoft Mail
	  Gateway to Fax "Administrator's Guide." For example, the Intel SatisFAXtion
	  software must be installed on the postoffice, and certain files must be
	  copied to the gateway machine. If this is not done, the gateway will not work
	  correctly.
	
	3. Incorrect file types.
	
	  The only allowable file types are black and white DCX and PCX files, and ASCII
	  text files.
	
	4. Microsoft Mail version 2.1a PROFILE.GLB file format.
	
	  Because the version 2.1a profile file does not have its own editor, editing
	  the PROFILE.GLB file can cause problems. Do not delete semicolons or comments
	  from the file. The Printer path and Logo file parameters should be terminated
	  with a backslash (\). If you encounter major problems, copy the original
	  PROFILE.GLB from the install disks and modify it again.
	
	5. Microsoft Mail version 3.0 PROFILE.GLB file format.
	
	  In version 3.0 of the gateway, the Printer path and Logo file parameters do
	  not need to be terminated with a backslash (\). You can edit the file using
	  the PROFILE.EXE program; therefore, it should be relatively easy to modify.
	
	6. Printer path.
	
	  Entering the wrong parameters in the profile file can cause problems. Printer
	  path is one of the more confusing parameters--it looks for a file called
	  PPB.EXE, which should be in the mail executables directory. The path entered
	  in this field should point to that file.
	
	7. Logo file.
	
	  This path should point to the logo file being used. This field cannot be left
	  blank.
	
	8. Unable to spool incoming faxes to printer.
	
	  Before the fax gateway can spool items to the printer, the DISPLAY.EXE program
	  must be run to create a printer driver. DISPLAY.EXE must be run from the same
	  directory the fax gateway is run from.
	
	
	Additional query words: 3.00 pcmail satisfaxion
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
