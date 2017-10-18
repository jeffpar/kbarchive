---
layout: page
title: "Q238982: XWEB: Prompt for Security Credentials Before Logon.asp Loads"
permalink: kb/238/Q238982/
---

## Q238982: XWEB: Prompt for Security Credentials Before Logon.asp Loads

	Article: Q238982
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you access the default Web site or the Exchange Server virtual directory
	using Microsoft Internet Explorer 5 with Windows NT Challenge/Response (NTLM)
	authentication turned off, you may be prompted for security credentials before
	the Outlook Web Access Logon.asp page loads. This may happen even after you set
	Directory Security to Anonymous Only or Anonymous and Basic Authentication on
	the default Web site.
	
	RESOLUTION
	==========
	
	To correct this problem in Internet Explorer:
	
	1. On the Tools menu, click Internet Options.
	
	2. Click the Security tab.
	
	3. In the "Select a Web content zone to specify its security settings" box,
	  click Internet, and then click Custom Level. Scroll down to Cookies.
	
	4. Under "Allow cookies that are stored on your computer", click Prompt.
	
	5. Click OK twice.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
