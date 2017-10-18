---
layout: page
title: "Q201055: SMS: Resource Manager Does Not Use Domain Names"
permalink: kb/201/Q201055/
---

## Q201055: SMS: Resource Manager Does Not Use Domain Names

	Article: Q201055
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsMeterkbfaq
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, administrators have the ability to limit users
	of licensed software by adding or importing Windows NT users and groups from
	Windows NT domain controllers. This is a function of software metering and is
	done in Resource Manager. When you add a Windows NT user or group in Resource
	Manager, you do not specify Windows NT domains. Therefore, you cannot add a user
	or group with the same name from two different Windows NT domains.
	
	Resource Manager does not distinguish between user or group names from different
	domains. This is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsmsMeter kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
