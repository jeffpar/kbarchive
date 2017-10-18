---
layout: page
title: "Q138403: ErrMsg 524300: Unable To Execute File on IBM DOS LAN Requester"
permalink: kb/138/Q138403/
---

## Q138403: ErrMsg 524300: Unable To Execute File on IBM DOS LAN Requester

	Article: Q138403
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork smsinterop
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you configure the IBM DOS LAN Requester 3.0 client computers to work with
	Systems Management Server, the following error messages appear:
	
	  Error: Unable to execute file
	  (\\<server>\<share>\<path>\CLI_DOS.EXE); error 524300
	
	  Error: Unable to execute file
	  (\\<server>\<share>\<path>\INVDOS.EXE); error 524300
	
	CAUSE
	=====
	
	The IBM DOS LAN Requester 3.0 client computer is not able to make use of the
	Universal Naming Convention (UNC) names specified in the SMSLS.BAT file.
	
	WORKAROUND
	==========
	
	To work around this problem, provide a network drive letter (persistent
	connection) in place of the UNC names specified the SMSLS.BAT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork smsinterop 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
