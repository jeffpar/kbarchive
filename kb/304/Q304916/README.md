---
layout: page
title: "Q304916: ASP Pages Return a 403.1 Error After Upgrade to Windows 2000"
permalink: kb/304/Q304916/
---

## Q304916: ASP Pages Return a 403.1 Error After Upgrade to Windows 2000

	Article: Q304916
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Outlook Web Access (OWA) logon and Active Server Pages (ASP) pages may
	not be functional after you upgrade your operating system from Microsoft Windows
	NT Server 4.0 to Microsoft Windows 2000 Server. All ASP pages return the
	following error message:
	
	  403.1 - Forbidden: Execute Access Forbidden.
	
	CAUSE
	=====
	
	The script mappings for .asp were not modified during the upgrade process to
	include the verb GET.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the verb GET is listed for the ASP
	script mapping. To do this, follow these steps:
	
	1. In the Internet Server Manager, right-click the computer icon and click
	  Properties. Under Master Properties, click WWW Service and click Edit.
	
	2. Click the Home Directory tab and click Configuration.
	
	This is where all the mapped extensions that are recognized by IIS are listed.
	The verb GET should be listed for the .asp mapping. If it is missing, you
	receive the "Execute Access Forbidden" error message.
	
	To add the verb GET to the mapping for .asp, follow these steps:
	
	1. Select the .asp extension, then click Edit.
	
	2. In the Limit To field, ensure that GET, HEAD, POST, and TRACE are listed.
	
	3. Click OK until all property windows are closed. If you are prompted, select
	  all of the nodes for which you want this setting to apply.
	
	Additional query words: iis5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
