---
layout: page
title: "Q110613: PROFS: Err Msg: PWACSI Copy of PO USR Failed - Space"
permalink: /kb/110/Q110613/
---

## Q110613: PROFS: Err Msg: PWACSI Copy of PO USR Failed - Space

	Article: Q110613
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.4 of the Microsoft Mail Gateway to PROFS and OfficeVision cannot
	export the Microsoft Mail for PC Networks userlist to PROFS. Each time the
	export is attempted, the Host Access generates an Incident Report which reads:
	
	  Incident Report Generated <date> <time>
	  PWACSI Copy of PO USR Failed. Probably not enough disk space.
	
	CAUSE
	=====
	
	When the exported userlist reaches the 191 disk of Host Access, Host Access
	attempts to copy the file (which is named POSTOFFICE_name USR). If the file
	already exits on the 191 disk, the copy command issues and unexpected return
	code to Host Access.
	
	RESOLUTION
	==========
	
	There are two workarounds for this problem:
	
	1. Store the Exported userlist on a disk other than the MSGATE's 191 disk.
	
	2. Prior to exporting the userlist, rename the existing file on the MS-GATE's
	  191 disk, thus preventing the error caused by the unexpected return code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4 of Microsoft Mail
	Gateway to PROFS. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.40 exporting
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
