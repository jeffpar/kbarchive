---
layout: page
title: "Q145905: XCLN: Newprof.exe Command-Line Options"
permalink: /kb/145/Q145905/
---

## Q145905: XCLN: Newprof.exe Command-Line Options

	Article: Q145905
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 26-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Newprof.exe file is the Automatic Profile Generator Program. This article
	describes the command line options that this program recognizes.
	
	MORE INFORMATION
	================
	
	Newprof.exe requires a profile settings file (.PRF file) that contains the
	information about the profile to be generated. By default, if Newprof.exe is not
	supplied any parameters, it will look for the file Default.prf in the Windows
	directory.
	
	Newprof.exe accepts the following command line options:
	
	  NEWPROF [-P <Path to .PRF file>] [-S] [-X] [-Z]
	
	Where:
	
	-P <Path to .PRF file> is the .PRF file with the complete path.
	
	-S Causes the Newprof.exe to program to bring up a window, allows the user to
	choose a .PRF file, and displays status and error messages in this window.
	
	-X Causes Newprof.exe to start execution automatically when the -S option is
	used, without waiting for a .PRF file to be selected. Requires the -P option to
	be used or the Default.prf file to be present in the windows directory.
	
	-Z Causes Newprof.exe to display MAPI error codes in case any errors are
	encountered. This option requires the -S option.
	
	Newprof.exe does not generate any log files.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
