---
layout: page
title: "Q142289: PC Rmt: Troubleshooting Options for the Command Line"
permalink: kb/142/Q142289/
---

## Q142289: PC Rmt: Troubleshooting Options for the Command Line

	Article: Q142289
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to troubleshoot issues with Mail Remote for MS-DOS, you can use
	additional options from the command line when you execute the Mail program
	(MAIL.EXE). By default, the Mail program is located in the \RMAIL directory.
	
	MORE INFORMATION
	================
	
	The following command line options can be used for additional troubleshooting
	information:
	
	Option                    Description
	----------------------------------------------------------------------
	
	-L<path\filename>         Logging. This creates a text file in the
	                         path specified.
	
	-Q1                       Additional logging information for message
	                         transfer.
	
	-Q2                       Additional logging information for
	                         asynchronous or modem transfer.
	
	-Q3                       Additional logging information for message
	                         envelopes.
	
	-Q4                       Additional logging for memory usage.
	
	-V                        Verbose. Adds additional logging information.
	
	NOTE: The -Q options can be used in sequence. For example,
	
	  mail -lrmail.log -q1234 -v
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q116434 EXTERNAL.INI Equivalents to -Qx Command-Line Options
	
	Additional query words: 3.00 debug debugging
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS
	Version           : MS-DOS:3.0
	
	=============================================================================
	
