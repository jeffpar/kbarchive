---
layout: page
title: "Q268272: CDO MAPI Session Logon Fails If No Thread Token"
permalink: /kb/268/Q268272/
---

## Q268272: CDO MAPI Session Logon Fails If No Thread Token

	Article: Q268272
	Product(s): Microsoft Exchange
	Version(s): 1.2,1.21,5.5
	Operating System(s): 
	Keyword(s): kbDSupport kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Collaboration Data Objects (CDO), versions 1.2, 1.21, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows 2000, when an ActiveX EXE using CDO 1.2x creates a MAPI Session
	object and then calls the Logon method, the Logon method can return
	MAPI_E_LOGON_FAILED when the ActiveX EXE's identity is configured (under
	DCOMCNFG) to run under a specific user. If the ActiveX EXE is configured to run
	under the "interactive user" then it works fine and the Logon succeeds. The
	exact same application runs properly on a Windows NT 4.0 server.
	
	CAUSE
	=====
	
	A MAPI Session Logon call from a thread needs the ThreadToken set.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| CDO.dll   | 5.5.2652.75 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CDO version 1.21. This problem
	was first corrected in Exchange Server 5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbExchange550sp4Fix 
	Technology        : kbOutlookSearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :1.2,1.21,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
