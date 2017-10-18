---
layout: page
title: "Q250667: XWEB: Mailbox access through OWA is denied when Proxy server is"
permalink: kb/250/Q250667/
---

## Q250667: XWEB: Mailbox access through OWA is denied when Proxy server is

	Article: Q250667
	Product(s): Microsoft Exchange
	Version(s): 5.5
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
	
	When you access a mailbox by using Outlook Web Access (OWA) through a proxy
	server that is in a separate domain from your Exchange Server computer, one of
	the following error messages may be displayed:
	
	  Failed to get Inbox.
	
	  - or -
	
	  OWA was unable to get your Inbox.
	
	  - or -
	
	  Access is Denied.
	
	CAUSE
	=====
	
	This problem may be caused by one or both of the following conditions:
	
	- The minimum one-way trust required between the two domains does not exist.
	  (The domain of the proxy server must trust the users in the domain of the
	  Exchange Server computer.)
	
	- A group of users from the domain of the Exchange Server computer has not been
	  given rights on the proxy server to access the computer from the network or
	  to log on locally.
	
	RESOLUTION
	==========
	
	Create a trust relationship if one does not already exist. You must configure
	the domain of the proxy server as the trusting domain and the domain of the
	Exchange Server computer as the trusted domain.
	
	For more information about how to set up trust relationships, please refer to the
	Windows NT administrator documentation.
	
	After you create a trust relationship, grant a group of users from the domain of
	the Exchange Server computer rights on the proxy server to access the computer
	from the network and to log on locally. To do this, perform the following
	steps:
	
	1. Create a global group in the domain of the Exchange Server computer, and then
	  add all of the OWA users to the global group.
	
	2. Create a local group in the domain of the proxy server, on the proxy server.
	
	3. Add the global group from the domain of the Exchange Server computer to the
	  local group in the domain of the proxy server.
	
	4. On the proxy server, assign the new local group rights to access the computer
	  from the network and rights to log on locally.
	
	MORE INFORMATION
	================
	
	Microsoft Proxy Server version 2.0 implements the Web Proxy service by using an
	Internet Server API (ISAPI) filter that loads under the context of the default
	Web site on the proxy server. Because of this, the same considerations that
	apply to security configuration on an Outlook Web Access server also apply to
	the security configuration on the proxy server.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q248486 XCCC: Mailbox Access Across Domains Is Denied Through OWA
	
	  Q173470 XCLN: Troubleshooting Failed to get Inbox Error Message
	
	  Q175892 XWEB: Permissions Required for Outlook Web Access
	
	For more information about how to correctly configure Outlook Web Access, please
	see the Troubleshooting Guide for Outlook Web Access at the following Microsoft
	Web site:
	
	  http://support.microsoft.com/support/exchange/content/whitepapers/owa_tshoot.asp
	
	Additional query words: OWA external internet
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
