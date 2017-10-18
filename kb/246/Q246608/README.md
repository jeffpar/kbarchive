---
layout: page
title: "Q246608: XCON: Event ID 9405: MTA Causes Access Violation"
permalink: kb/246/Q246608/
---

## Q246608: XCON: Event ID 9405: MTA Causes Access Violation

	Article: Q246608
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 12-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may generate a Dr. Watson event
	with the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	  emsmta.exe
	  Exception: access violation (0xc0000005), Address: 0x0041cb74
	
	At the same time, the MTA generates a 9405 event in the application event log as
	follows:
	
	  Event ID: 9405 Source: MSExchangeMTA
	  Type: Error Category: Field Engineering
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate. Error: Access violation (0xc0000005) at Address 0x41cb74 reading
	  from 0x4. [BASE TRANSFER 16] (16)
	
	Further examination of the User.dmp file reveals the following call stack:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	0471fea4  00426fb3  00000000 00920006 00000000 EMSMTA!<B>MtaQueueAdd</B>+0x51({...})
	0471fee0  00426cea  00435c0f 00000001 01dc7210 EMSMTA!oxpusecu+0x1e3
	0471ff10  00426c2d  00435c0f 0471ff44 00426b37 EMSMTA!oxptrxfr+0xa1
	0471ff1c  00426b37  00435c0f 00435c0f 01e54494 EMSMTA!oxptrrcv+0x2d
	0471ff44  00416536  00435c0f 017dff68 01e9ac68 EMSMTA!oxptrcv+0x13b
	0471ff5c  004569fd  01eb4be8 01be0014 00000258 EMSMTA!UtilSendXapiQueue+0x56
	0471ff8c  00435c86  01be0014 1004f868 0000000f EMSMTA!otpomain+0x15b
	0471ffb8  77f04f3e  0000000f 01be0014 1004f868 0x00435c86
	0471ffec  00000000  00000000 00000000 00000000 KERNEL32!BaseThreadStart+0x51
	
	At this point, the MTA will not start until the problem is resolved.
	
	CAUSE
	=====
	
	The access violation occurs when the MTA is trying to build an X.400 application
	programming interface (XAPI) transfer queue to an Exchange Server computer that
	no longer exists within the site.
	
	RESOLUTION
	==========
	
	The problem may be prevented by removing all references to the problem XAPI
	connector (that is, Internet Mail Service, cc:Mail, Notes, GroupWise, SNADS,
	OV/VM, Fax, Pager, and so on). Specifically, use the Delete Raw Object option to
	remove the problem XAPI connector from the Connections container, and then
	recalculate routing.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click the problem XAPI connector in the Connections container, and then on
	  the Edit menu, click Delete RAW Object.
	
	3. You receive the following message:
	
	  The selected object and all objects below it will be deleted from the
	  directory service. Deletions will take effect immediately and will replicate
	  to other servers. Are you sure you want to proceed?
	
	4. Click OK, and then click YES.
	
	5. You may also see the following warning:
	
	  Extension 'SMTP' could not be loaded.
	
	  If you do, click Ignore. The connector should now be removed.
	
	You must now recalculate the routing table:
	
	1. In the Exchange Server Administrator program, click to expand the Site
	  object, click Configuration, and double-click the Site Addressing object to
	  open its properties.
	
	2. Click the Routing tab, and then click the Recalculate Routing button. A
	  message appears that states:
	
	  It will take several minutes for the new routing information to be replicated
	  across your site and then take effect.
	
	3. Check each server's routing table in the site, and make sure that this route
	  gets removed.
	
	4. After the route is removed from the entire site, you may restart the MTA on
	  the Exchange Server computer that had the access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	If the procedure described above does not resolve this problem, contact Microsoft
	Product Support Services for assistance with detailed troubleshooting of the
	problem.
	
	
	Additional query words: crash drwtsn32.log user.dmp evt hang
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
