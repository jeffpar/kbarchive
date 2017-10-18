---
layout: page
title: "Q86955: 3COM: What the Gateway Does"
permalink: kb/086/Q86955/
---

## Q86955: 3COM: What the Gateway Does

	Article: Q86955
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here is a description of the actions the Microsoft Mail Gateway to 3Com 3+Mail
	performs during the cycle of checking for mail messages:
	
	1. The gateway checks the 3Com 3+Mail database for mail addressed to the
	  _GATEWAY user.
	
	2. If mail is found, the gateway transfers the mail items to the MFFPUT
	  directory.
	
	3. The gateway processes each item in the MFFPUT directory, building an FFAPI
	  compatible file.
	
	4. The gateway spawns COURPUT.EXE to submit files to the mail database.
	
	5. The gateway checks the Microsoft Mail database for mail to 3Com 3+Mail.
	
	6. COURGET.EXE is spawned. Mail items are extracted from the mailbag and put
	  into MFFGET directory.
	
	7. The items are processed and put into the mailbags of users in the 3+Mail
	  database.
	
	
	Additional query words: 3.00 pcmail 3com
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus300
	Version           : :3.0
	
	=============================================================================
	
