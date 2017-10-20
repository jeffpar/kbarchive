---
layout: page
title: "Q260981: Cannot Change Expired Domain Password When Accessing Web Server"
permalink: /kb/260/Q260981/
---

## Q260981: Cannot Change Expired Domain Password When Accessing Web Server

{% raw %}

	Article: Q260981
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user with an expired Windows NT password tries to access a Web page on a
	server that requires authentication, the browser is redirected to a password
	change dialog box. Under special circumstances, the password change process
	fails and the following error message occurs:
	
	  Cannot find Server
	
	  The page cannot be displayed
	
	CAUSE
	=====
	
	The browser tries to open an SSL connection to the Web server to transfer the
	username and password. By design, the SSL connection is enforced, because the
	Windows NT account information would otherwise be exposed during the transfer to
	the server. If the Web server does not allow SSL connections because no
	certificate is installed, then the error message occurs.
	
	RESOLUTION
	==========
	
	Install a certificate on the Web site to enable SSL connections.
	
	REFERENCES
	==========
	
	  Q228991 How to Create and Install an SSL Certificate in IIS 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
