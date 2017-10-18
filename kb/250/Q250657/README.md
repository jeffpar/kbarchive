---
layout: page
title: "Q250657: XWEB: OWA Prompts Three Times for Credentials Connecting w Proxy"
permalink: kb/250/Q250657/
---

## Q250657: XWEB: OWA Prompts Three Times for Credentials Connecting w Proxy

	Article: Q250657
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a mailbox by using Outlook Web Access (OWA) through a proxy
	server, you may be prompted for credentials three times, and then a blank screen
	or an "Access is Denied" message may be displayed.
	
	CAUSE
	=====
	
	The default Web site on the proxy server has Windows NT Challenge/Response
	authentication enabled and Basic authentication disabled.
	
	RESOLUTION
	==========
	
	You need to enable Basic authentication and disable Windows NT
	Challenge/Response authentication at the default Web site on the proxy server.
	To do this, perform the following steps:
	
	1. At the proxy server, start the Internet Service Manager tool.
	
	2. Right-click the default Web site, and then click Properties.
	
	3. Click the Directory Security tab, and then under Anonymous Access and
	  Authentication Control, click Edit.
	
	4. Under Authentication Methods, click to select the Basic Authentication check
	  box, and then click to clear the Windows NT Challenge/Response check box.
	
	After you enable Basic authentication and disable Windows NT Challenge/Response
	authentication, you need to stop and restart the World Wide Web services. To do
	this, perform the following steps:
	
	1. Click the default Web site, and then click the small black square in the
	  toolbar to stop the service.
	
	2. After the service stops, click the small black triangle that points to the
	  right to restart the service.
	
	MORE INFORMATION
	================
	
	Microsoft Proxy Server version 2.0 implements the Web Proxy service by using an
	Internet Server API (ISAPI) filter that loads under the context of the default
	Web site. Because of this, the same considerations that apply to Outlook Web
	Access configuration also apply to the default Web site on a proxy server.
	
	Windows NT Challenge/Response (NTLM) cannot authenticate users who do not have a
	direct connection to the Internet Information Service (IIS) server, so users who
	connect over the Internet are unable to authenticate by using NTLM.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q175805 PRB: Access Is Denied Error When Expecting Logon Dialog Box to Appear
	
	  Q246101 Issues with Microsoft Proxy 2.0 and the Internet Information Server
	  4.0 Default Web Site
	
	For more information about how to correctly configure Outlook Web Access, please
	see the Troubleshooting Guide for Outlook Web Access at the following Microsoft
	Web site:
	
	  http://support.microsoft.com/support/exchange/content/whitepapers/owa_tshoot.asp
	
	Additional query words: External proxy
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
