---
layout: page
title: "Q273825: SMS: Remote.exe Generates Access Violation When Selecting Help"
permalink: kb/273/Q273825/
---

## Q273825: SMS: Remote.exe Generates Access Violation When Selecting Help

	Article: Q273825
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200preSP3
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Systems Management Server 2.0 (SMS), when remote controlling a workstation,
	an access violation (Drwatson.exe) may occur, which is caused by Remote.exe, and
	you may receive an error message similar to this one:
	
	  An application error has occurred and an application error log is generated.
	  Remote.exe
	  Exception: Access Violation (0xc0000005), Address: <Mem Address>
	
	CAUSE
	=====
	
	This problem can occur when you try to open SMS Help from the Quick Viewer
	window of the Remote Control session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
