---
layout: page
title: "Q87041: SMTP: How to Start Up the SMTP Gateway"
permalink: kb/087/Q87041/
---

## Q87041: SMTP: How to Start Up the SMTP Gateway

	Article: Q87041
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To start the Microsoft Mail Gateway to SMTP, ensure that the gateway machine is
	logged onto the network you are using (for example, Microsoft LAN Manager or
	Novell NetWare), and ensure that a drive is mapped to the mail database
	directory for the "Gateway Postoffice" and a search mapping or path is available
	to the mail executable's directory.
	
	To start up the gateway (assuming the M drive is mapped to the mail database
	directory), use the following command:
	
	  " SMTPGATE " (without the quotation marks)
	
	If the mail database directory is mapped to any drive other than M, you must
	specify the drive to be used as follows:
	
	  " SMTPGATE -DP " (without the quotation marks)
	
	In this example, the drive letter assigned to the mail database directory is P.
	The -D indicates that the letter following it is the assigned drive letter for
	the mail database.
	
	REFERENCES
	==========
	
	Microsoft Mail Gateway to SMTP Administrator's Guide
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
