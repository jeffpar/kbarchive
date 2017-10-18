---
layout: page
title: "Q193355: SMS: Status MIF Creator - Ismif16.exe"
permalink: kb/193/Q193355/
---

## Q193355: SMS: Status MIF Creator - Ismif16.exe

	Article: Q193355
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ismif16.exe is a utility that is available from the BackOffice Resource Kit. It
	writes a generic status MIF file from information provided in a command line, a
	dialog box, or both.
	
	ISMIF16 is a 16-bit application that opens a dialog box that allows you to type
	any information that is not specified on the command line. Items specified on
	the command line appear in the corresponding fields of the dialog box.
	
	MORE INFORMATION
	================
	
	Files Required for ISMIF16
	--------------------------
	
	  Ismif16.dll
	  Ismif16.exe
	
	ISMIF16 Syntax
	--------------
	
	  ismif16 [-f Filename] [-c Manufacturer] [-p Product] [-v Version]
	  [-l Locale] [-n Serial_Number] [-d Description] [-s Status] [-q] [-?]
	
	Options                    Description
	-f Filename                Specifies the name of the MIF file that will be
	                          created. A MIF extension is automatically
	                          appended. The default file name is Setup.mif.
	
	-c, -p, -v, -l, -n, -d     Each of these options can specify a text string.
	                          Each of these options corresponds to a field in
	                          the resulting dialog box. Strings containing
	                          spaces must be enclosed in quotation marks.
	
	-s Status                  Value can equal 0 or 1. The number 1 means
	                          success.
	
	-q                         Quiet mode. No output is displayed on the
	                          screen.
	
	-?                         Provides a usage statement.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA MIPS x86
	Issue type        : kbinfo
	
	=============================================================================
	
