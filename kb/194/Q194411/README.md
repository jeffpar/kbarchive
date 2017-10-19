---
layout: page
title: "Q194411: XWEB: OWA Error: &quot;The proxy server has encountered an error&quot;"
permalink: /kb/194/Q194411/
---

## Q194411: XWEB: OWA Error: &quot;The proxy server has encountered an error&quot;

	Article: Q194411
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to send an attachment with a message using the Outlook Web
	Access client, the following error may occur:
	
	  HTTP Proxy Reports: The proxy server has encountered an error (software
	  caused connection to abort).
	
	CAUSE
	=====
	
	By default, the option "Do not use proxy server for local addresses" is not
	selected in Internet Explorer. This causes the browser to use the proxy server
	for the local Outlook Web Access server.
	
	WORKAROUND
	==========
	
	To work around this problem, when you set up the proxy configuration for
	Internet Explorer, select the "Do not use Proxy Server for local addresses"
	option on the Connection settings tab.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
