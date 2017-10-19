---
layout: page
title: "Q200785: SMS: Site System Connection Accounts"
permalink: /kb/200/Q200785/
---

## Q200785: SMS: Site System Connection Accounts

	Article: Q200785
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbBindery kbInboxMgr kbNDS
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, the Site System Connection accounts are used
	(instead of the Systems Management Server Service account) in Novell NetWare
	environments by Logon Server Manager and Inbox Manager to connect to NetWare
	site systems. In pure Microsoft Windows NT environments, these accounts are
	optional.
	
	MORE INFORMATION
	================
	
	Each NetWare Bindery server, NetWare Data Services (NDS) container, and volume
	must be accessible by at least one NetWare Site System Connection account. For
	greater security, you can specify separate accounts for NetWare client access
	points (CAPs) and distribution points.
	
	NetWare NDS Site System Connection accounts must be created in both the Systems
	Management Server Administrator console at the primary site server and on the
	NetWare site systems. Each account must have Administrator permissions to the
	NDS containers. NetWare Bindery Site System Connection accounts must have
	Supervisor equivalence.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms novel admin
	
	======================================================================
	Keywords          : kbBindery kbInboxMgr kbNDS 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
