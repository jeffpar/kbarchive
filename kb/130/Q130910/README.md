---
layout: page
title: "Q130910: TSRs Knows to Conflict with USERTSR(IPX)"
permalink: /kb/130/Q130910/
---

## Q130910: TSRs Knows to Conflict with USERTSR(IPX)

	Article: Q130910
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following table documents some terminate-and-stay-resident (TSR) programs
	may conflict with USERTSR(IPX) when they are loaded in memory, and how you may
	resolve the conflict:
	
	Program                       Resolution
	-------                       ----------
	
	McAfee Virus Protection       Remove it from memory
	Alcom Fax Redirector          Change multiplex option from 203 to 204
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbinterop smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
