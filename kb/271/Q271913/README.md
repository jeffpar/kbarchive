---
layout: page
title: "Q271913: XADM: CDO MAPI Session Logon Does Not Work Running As a Service"
permalink: /kb/271/Q271913/
---

## Q271913: XADM: CDO MAPI Session Logon Does Not Work Running As a Service

	Article: Q271913
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Collaboration Data Objects (CDO) are run from a service by using the
	account of a user who is not logged on, an attempt to pass a distinguished name
	(DN) to the profileinfo string of the logon call may fail and a MAPI_E_NOT_FOUND
	error may occur.
	
	CAUSE
	=====
	
	This problem can occur if MAPI.Session.Logon fails when it passes a profileinfo
	string that contains a DN with invalid file-system characters. Messaging
	Application Programming Interface (MAPI) does not create the MMP file for the
	profile because MAPI uses the profile name from CDO without checking for invalid
	file-system characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: CDO.DLL MAPI_E_NOT_FOUND SERVICE
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
