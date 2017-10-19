---
layout: page
title: "Q187650: Error: &quot;Server Returned Invalid or Unrecognized Response&quot;"
permalink: /kb/187/Q187650/
---

## Q187650: Error: &quot;Server Returned Invalid or Unrecognized Response&quot;

	Article: Q187650
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Microsoft Internet Explorer, you may receive the following error
	message:
	
	  Internet Explorer cannot open internet site <Web_site_name or
	  IP_Address>. Server returned invalid or unrecognized response.
	
	CAUSE
	=====
	
	Web publishing has been disabled in Proxy Server.
	
	WORKAROUND
	==========
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Click Web Proxy, then click Properties on the Action menu.
	
	3. On the Publishing tab, click to select the Enable Web Publishing check box.
	
	4. Click OK, and then quit the MMC.
	
	
	Additional query words: browser client turn turned off IE MSIE MS OWA 
	Outlook Web Access XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200
	Version           : WINNT:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
