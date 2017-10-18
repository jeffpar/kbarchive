---
layout: page
title: "Q198509: XWEB: &quot;Unable to get your inbox&quot; Using OWA via Proxy Server"
permalink: kb/198/Q198509/
---

## Q198509: XWEB: &quot;Unable to get your inbox&quot; Using OWA via Proxy Server

	Article: Q198509
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5,5.5SP1; WINNT:1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Proxy Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing an Outlook Web Access (OWA) server using Windows NT
	Challenge/Response (NTLM) authentication on the Exchange virtual directory in
	Microsoft Internet Information Server (IIS) through a Microsoft Proxy Server,
	you may get the following error:
	
	  OWA was unable to get your Inbox.
	
	CAUSE
	=====
	
	NTLM is not supported through Proxy Server because NTLM requires a persistent
	connection.
	
	WORKAROUND
	==========
	
	To work around this problem, turn NTLM authentication off on the Exchange
	Virtual Web in IIS, and set permissions to Basic Clear Text.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q175805 PRB: "Access Is Denied" Error When Expecting Logon Dialog
	
	  Q183730 HTML Administrator Doesn't Work Through Proxy with NTLM
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbZNotKeyword6 kbExchangeSearch kbProxyServ100 kbZNotKeyword2 kbProxyServSearch kbOWASearch kbOWA550 kbOWA550SP1 kbProxyServ200 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5,5.5SP1; WINNT:1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
