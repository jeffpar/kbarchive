---
layout: page
title: "Q262271: XADM: Admin.exe Access Violation Attempting to Duplicate User"
permalink: /kb/262/Q262271/
---

## Q262271: XADM: Admin.exe Access Violation Attempting to Duplicate User

	Article: Q262271
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you duplicate a template user by clicking Duplicate User on the File menu,
	the Admin.exe program may cause an access violation and may stop responding (or
	"crash"). An error message similar to the following is displayed:
	
	  Admin.exe cause an access violation (0xC0000005) to occur at memory location
	  (0xXXXXXXXX).
	
	CAUSE
	=====
	
	This issue can occur if the template user resides on a server that is configured
	with an Active Directory Connector (ADC) Connection Agreement with a Microsoft
	Windows 2000 Active Directory and the template user is also a member of a
	distribution list.
	
	To determine whether you are encountering the issue that this article discusses,
	you need to use the Microsoft Exchange Server Administrator program in raw
	mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin.exe /r" (without the quotation marks)
	
	2. Check the raw properties of the template user (to do so, press SHIFT+ENTER)
	  to determine if the raw properties contain an ADC_GLOBAL_NAMES attribute.
	  This attribute only exists if the user is part of a recipients container for
	  which an ADC Connection Agreement is configured.
	
	3. Check the normal properties of the template user to determine whether that
	  user is a member of any distribution lists.
	
	The Admin.exe program earlier than version 5.5.2652.56 does not properly
	duplicate a user who is a member of a distribution list and also contains the
	ADC_GLOBAL_NAMES attribute.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use a template user who does not belong to any
	distribution lists and manually add the new duplicated user to the distribution
	lists after the duplication.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
