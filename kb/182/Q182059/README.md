---
layout: page
title: "Q182059: Cache ISAPI Application Option Causes ASP to Return Error"
permalink: /kb/182/Q182059/
---

## Q182059: Cache ISAPI Application Option Causes ASP to Return Error

{% raw %}

	Article: Q182059
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to configure the way that Microsoft Internet Information Services
	(IIS) caches Internet Server Application Programming Interface (ISAPI)
	applications. Changing the default selection from caching ISAPI application to
	not caching ISAPI application causes IIS to return the following error to the
	browser when an Active Server Page (ASP) is executed on the server:
	
	  The requested resource is in use
	
	CAUSE
	=====
	
	This setting can be changed from the Web Site properties by selecting
	Configuration on the Home Directory tab. In Application Mappings there is a
	checkbox for the Cache ISAPI Applications option. Changing this selection
	modifies the default behavior of IIS . This option is for non-production testing
	only.
	
	If the Cache ISAPI Applications option is deselected, IIS does not cache ISAPI
	applications. All ISAPI applications are loaded and unloaded from IIS memory
	immediately after the ISAPI application is executed on the server, including
	ASP. ASP sets up application and session state object and variable that must be
	gracefully unloaded from memory. ASP returns the error when it is being unloaded
	from memory and an ASP page is attempting to execute. When ASP is loaded and
	unloaded from memory, an event is logged in the Windows NT Application event
	log. Event ID of Event 3 "Service started" and Event 4 "Service stopped" will be
	logged every time ASP is loaded or unloaded from memory.
	
	
	MORE INFORMATION
	================
	
	This behavior is by design. Microsoft welcomes suggestions or comments about
	changes in functionality and product design. You are invited to submit
	suggestions by filling out the form at the following Microsoft Web site:
	
	http://www.microsoft.com/regwiz/regwiz.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
