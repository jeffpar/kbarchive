---
layout: page
title: "Q291390: &quot;Internal Server Error 500 [20-0003-IS]&quot; Connecting to IIS 4.0"
permalink: kb/291/Q291390/
---

## Q291390: &quot;Internal Server Error 500 [20-0003-IS]&quot; Connecting to IIS 4.0

	Article: Q291390
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500prod2web kbProd2Web
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Netegrity SiteMinder is installed on the server, the following error may
	appear in the browser of the server when you connect to Internet Information
	Server (IIS) 4.0:
	
	  Internal Server Error 500 [20-0003-IS]
	
	Or, you may receive the following error in the browser of the client computers:
	
	  HTTP 500 - Internal server error
	
	No errors appear in the event log, and the IIS 4.0 computer no longer serves Web
	pages.
	
	CAUSE
	=====
	
	The "20-0003-IS" message indicates that the SiteMinder Web Agent is not
	connecting the SiteMinder Policy Server Authorization Service.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Netegrity at the following Web site:
	
	  http://www.netegrity.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the ISAPI filter from the WWW Service master
	properties or from the Web site as follows:
	
	1. On the Start menu, point to Programs, point to Windows NT Option Pack, point
	  to Internet Information Server, and then click Internet Services Manager.
	
	2. For the master properties of the WWW Service, right-click your server name,
	  and then click Properties.
	
	  For the Web site properties, right-click the appropriate Web site, and then
	  click Properties.
	
	3. On the ISAPI Filters tab, highlight the filter that belongs to SiteMinder
	  (SMW3Agent.dll or ISAPIWebAgent.dll), and click Remove.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: IIS 4
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500prod2web kbProd2Web 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
