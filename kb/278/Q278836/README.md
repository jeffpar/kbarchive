---
layout: page
title: "Q278836: ADSI GetObject Queries May Fail from ASP but Work from VBScript"
permalink: /kb/278/Q278836/
---

## Q278836: ADSI GetObject Queries May Fail from ASP but Work from VBScript

{% raw %}

	Article: Q278836
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use a GetObject query from an Active Server Pages (ASP) page
	to list the users in a particular group, the result set may be blank, although
	this same query returns data if it is run from Microsoft Visual Basic Scripting
	Edition (VBScript) code on the IIS server. Also, queries for groups or other
	objects that are run from an ASP page return data.
	
	For example, the following query returns an empty user list:
	
	  Set ADsGroup = GetObject("WinNT://DOMAIN/SomeGroup,Group")
	   For Each Member in ADsGroup.members
	     response.write Member.name
	
	CAUSE
	=====
	
	This problem occurs if all of the following conditions are met:
	
	- The IIS server is not a domain controller.
	
	If the IIS server is a member server of a domain and is not a domain controller,
	Microsoft Windows NT GetObject queries must contact a domain controller to
	retrieve the requested information.
	
	- The ASP page that makes the query uses the Windows NT Challenge/Response
	  authentication method.
	
	If the page that makes the request is authenticated with Windows NT
	Challenge/Response, the query from the IIS computer to the domain controller is
	made with a NULL, or anonymous, user account because Windows NT
	Challenge/Response does not support double-hop impersonation.
	
	- The RestrictAnonymous registry key on the domain controller to be contacted
	  is set to 1.
	
	If the RestrictAnonymous registry key is set to 1 on the domain controller, the
	query will fail because the query uses a NULL, or anonymous, account.
	
	NOTE: Because the RestrictAnonymous registry key only restricts the listing of
	user accounts and shares, other queries, such as Group, succeed. The query also
	succeeds if it is run with VBScript because the query is initiated on the IIS
	server by a logged in user, so the query can run using the user's credentials.
	
	WORKAROUND
	==========
	
	Use any of the following methods to run the query:
	
	- Use Basic or Clear Text as your authentication method. This allows IIS to
	  pass the user's credentials to the domain controller.
	
	NOTE: When you use Clear Text as your authentication method, you should also
	consider using Secure Sockets Layer (SSL) to secure the page.
	
	- Move the IIS Web site that makes the query to a domain controller. This
	  allows the query to run using the credentials of the user that logged in.
	
	- Disable the RestrictAnonymous registry key on the domain controller.
	
	For additional information on the RestrictAnonymous registry key, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
