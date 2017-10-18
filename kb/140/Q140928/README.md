---
layout: page
title: "Q140928: WINST Files Corrupted, Contain Previously Canceled Job Requests"
permalink: kb/140/Q140928/
---

## Q140928: WINST Files Corrupted, Contain Previously Canceled Job Requests

	Article: Q140928
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Workstation INS (WINST) files become corrupt and contain available commands from
	previously canceled job requests. The only indicator of abnormal behavior within
	the system is in the despooler log file. Specifically, when CTool::Decompress()
	attempts to open the INS file to decompress it, a WIN32 error 32 (sharing
	violation) results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
