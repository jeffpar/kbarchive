---
layout: page
title: "Q290569: PRB: #exec with IIS Buffering Displays HTTP Headers in Browser"
permalink: /kb/290/Q290569/
---

## Q290569: PRB: #exec with IIS Buffering Displays HTTP Headers in Browser

{% raw %}

	Article: Q290569
	Product(s): Internet Information Server
	Version(s): 1.0,4.0,4.0 (Spanish version),5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 4.0, 4.0 (Spanish version) 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you utilize the Server Side Include (SSI) #exec directive to call an Active
	Server Pages (ASP) page, and buffering is enabled, the content is processed and
	loaded but the ASP page also displays the HTTP headers.
	
	The syntax is as follows:
	
	  #EXEC CGI = "/YOUR.ASP"
	
	CAUSE
	=====
	
	The HTTP headers appear with the #exec command when it calls an ASP page that
	has buffering enabled. Because the buffering stores all data that is created
	when the ASP is processed, and #exec calls everything from the buffer, the ASP
	page includes the HTTP headers. If buffering is not enabled, the request is
	processed as it would be in response to any other client (that is, without
	displaying the HTTP headers).
	
	RESOLUTION
	==========
	
	There are three ways to work around this problem:
	
	- Turn off buffering in IIS.
	
	To do this, follow these steps:
	  1. In the IIS Microsoft Management Console (MMC), right-click the Web site
	     and click Properties.
	
	  2. Click the Home Directory tab and click Configuration.
	
	  3. Click the App Option tab and clear Enable Buffering.
	
	- Turn off buffering on the called pages.
	
	To do this, set Response.Buffer to False at the top of the pages that #exec
	calls. This causes buffering to be turned off on these pages, but still allows
	buffering for the site.  - Flush the buffer before it responds to #exec.
	
	To do this, place the Response.Flush command at the top of the pages that #exec
	calls.
	
	MORE INFORMATION
	================
	
	Buffering refers to when script commands are processed and stored before content
	is sent to the client. You can enable buffering in IIS either through IIS
	management tools or by using the Response.Buffer = true command on the page.
	
	When buffering is enabled in IIS, buffering is set on all pages. In IIS version
	4.0 buffering is turned off by default; in IIS version 5.0, buffering is turned
	on by default.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVisIDsearch kbiisSearch kbAudDeveloper kbiis500 kbiis400 kbHLangSpanish kbVisID100 kbVisID600
	Version           : :1.0,4.0,4.0 (Spanish version),5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
