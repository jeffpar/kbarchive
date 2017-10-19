---
layout: page
title: "Q173273: XADM: Dr Watson Access Violation in Admin.exe"
permalink: /kb/173/Q173273/
---

## Q173273: XADM: Dr Watson Access Violation in Admin.exe

	Article: Q173273
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In the Microsoft Exchange Administrator program when you create a custom
	recipient using an X.400 address, you may receive an access violation and, if Dr
	Watson is enabled, you will receive the following error message:
	
	  An application error has occurred and a log is being generated.
	  ADMIN.EXE Exception: access violation (0xc0000005) : address: 0x0050f361.
	
	CAUSE
	=====
	
	The array that was allocated for the X.400 address information is being
	overwritten.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: access violation
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
