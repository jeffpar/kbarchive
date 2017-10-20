---
layout: page
title: "Q248136: An Error Occurred Reading or Setting a Configuration Parameter"
permalink: /kb/248/Q248136/
---

## Q248136: An Error Occurred Reading or Setting a Configuration Parameter

{% raw %}

	Article: Q248136
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Transaction Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Web application or change the settings of a Web application
	from a remote computer using the Microsoft Management Console (MMC), the
	following error message may occur:
	
	  An error occurred reading or setting a configuration parameter (80080005).
	
	CAUSE
	=====
	
	This error occurs when the identity of the Transaction Server Package is set to
	"Interactive User." The interactive user is the user that is currently logged on
	to the server (that is, the computer that hosts the Transaction Server Package).
	When this user logs off, the components in the Transaction Server Package cannot
	be created and executed, and an error message is returned.
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	Set the package identity to a specific user with the necessary access rights.
	
	REFERENCES
	==========
	
	  Q241057 PRB: Server Execution Failed when calling MTS COM Component from ASP
	
	Additional query words: IIS MTS MMC transaction server management console 80080005 remote administration
	
	======================================================================
	Keywords          :  
	Technology        : kbMTSsearch kbiisSearch kbAudDeveloper kbiis400 kbMTS200
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
