---
layout: page
title: "Q104425: ATT: Running SMTPGET and SMTPPUT Manually"
permalink: kb/104/Q104425/
---

## Q104425: ATT: Running SMTPGET and SMTPPUT Manually

	Article: Q104425
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to AT T, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 1.0 of the Microsoft Mail Gateway to AT&T is based on the Microsoft
	Mail File Format Application Program Interface (FFAPI). FFAPI is used to place
	mail messages into and extract messages from the Microsoft Mail for PC Networks
	postoffice. The gateway uses the FFAPI executables common to the SMTP gateway
	because they both require the same SMTP addressing components and mail queues.
	
	MORE INFORMATION
	================
	
	The SMTPGET.EXE and SMTPPUT.EXE executable files are spawned by the AT&T
	gateway executable using the following command lines:
	
	  smtpput -f1 -h -l\attgate\log.txt mmff.put
	
	  smtpget -f1 -h -j -l\attgate\l\log.txt mmff.get
	
	Both the MMFF.PUT and MMFF.GET files are placed in the ATTGATE\MMFF subdirectory
	on the Microsoft Mail postoffice. They are in an ASCII text file that contains
	the complete mail message in FFAPI format.
	
	NOTE: This is a good test to use when trying to determine if a problem with the
	gateway is caused by FFAPI executables or the gateway executables themselves. It
	is a good starting place for mail and database issues.
	
	REFERENCES
	==========
	
	File Format Application Program; Interface AT&T to Microsoft Mail Gateway
	Technical Manual.
	
	Additional query words: 1.00 File Format API
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateATT100
	Version           : :1.0
	
	=============================================================================
	
