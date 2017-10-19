---
layout: page
title: "Q155524: SMS 1.1 Client Program Group Always Pops Up in Windows NT 4.0"
permalink: /kb/155/Q155524/
---

## Q155524: SMS 1.1 Client Program Group Always Pops Up in Windows NT 4.0

	Article: Q155524
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT 4.0 Server and Workstation become client computers in Systems
	Management Server, the SMS client program group opens when you log on and it
	remains open until the logon script completes. You can minimize or close the
	program group, but the program group appears during each logon.
	
	CAUSE
	=====
	
	Windows NT 4.0 handles program group/item DDE actions differently. SMSRUN32 uses
	DDE to manipulate the SMS client group. Therefore, in Systems Management Server
	1.1, the symptom mentioned above occurs.
	
	This behavior does not occur in Systems Management Server 1.2 and Windows NT 4.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
