---
layout: page
title: "Q324396: PRB: SAK Server Managers Group Security Issue"
permalink: /kb/324/Q324396/
---

## Q324396: PRB: SAK Server Managers Group Security Issue

{% raw %}

	Article: Q324396
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK) Add On Pack Version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On systems with the Role-Based user interface (UI) installed, a user who is a
	member of the Server Managers group can run applications under the System
	account. This results in the administrative credentials of the user being
	elevated to local system administrator. Therefore, members of the Server
	Managers group must be treated as members of the Administrators group.
	
	RESOLUTION
	==========
	
	Administrators must not put users who are not trustworthy into the Server
	Managers group.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Server Managers have full access to the Microsoft Internet Information Services
	(IIS) Metabase through Active Directory Server Interfaces (ADSI) or Microsoft
	Windows Management Instrumentation (WMI) calls from Active Server Pages (ASP).
	Web sites can be configured to run with full System privileges. Therefore,
	members of the Server Managers group can gain Administrator access to the
	server.
	
	The role of the Server Managers can be used to limit the Web UI for a group of
	users who must create Web sites and Web users. However, members of the Server
	Managers group must be treated as having full administrative credentials.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q248187 HOWTO: Impersonate a User from the Active Server Pages
	
	Additional query words: role based administrator server managers
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSAKAdd200
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
