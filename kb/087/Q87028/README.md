---
layout: page
title: "Q87028: SMTP: How to Recognize Successful SMTP Gateway Installation"
permalink: kb/087/Q87028/
---

## Q87028: SMTP: How to Recognize Successful SMTP Gateway Installation

	Article: Q87028
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
	
	If the installation of the Microsoft Mail Gateway to SMTP is successful, this
	message is displayed:
	
	  Microsoft Mail Gateway to SMTP installed.
	
	The installation makes these changes to the Mail file system:
	
	MASTER.GLB      (SMTP Gateway bit turned on)
	NETWORK.GLB     (check for previous SMTP mailbag)
	CONTROL.GLB     (get next available number for creating mailbag)
	0000XXXX.MBG    (create SMTP mailbag)
	SMTPPUT.EXE     (copy executable to mail executable directory)
	SMTPGET.EXE     (copy executable to mail executable directory)
	LOCAL.CFG       (copy default copy of configuration file)
	ADDR_MAP.CFG    (copy default copy of configuration file)
	SMTPXXX.EXE     (copy and rename the appropriate smtpgate executable)
	
	To see the SMTP mailbag created, type the NETWORK.GLB file and look for the
	number after the letters SMTP. The configuration options seen in the Admin
	program are not viewable until the Access component is installed.
	
	REFERENCES
	==========
	
	KB article Q87030--SMTP: Software Components: Downstream Installation
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
