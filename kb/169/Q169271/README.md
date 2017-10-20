---
layout: page
title: "Q169271: Err Msg: Database Already in Use w/ MS Access DB on Remote Share"
permalink: /kb/169/Q169271/
---

## Q169271: Err Msg: Database Already in Use w/ MS Access DB on Remote Share

{% raw %}

	Article: Q169271
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a Microsoft Access database with Internet Information Server
	(IIS) where the database is located on a remote share, you may get the following
	error message:
	
	  Database already in use
	
	CAUSE
	=====
	
	This error message is actually caused because the connection is denied access to
	the share.
	
	WORKAROUND
	==========
	
	Create an account on the server that contains the share for the Microsoft Access
	database that matches the IUSR account on the IIS server.
	
	For example:
	
	IIS Server user account = IUSR_IISBOX
	Remote server: Create an account called IUSR_IISBOX and make sure the password
	matches the IUSR_IISBOX account on the IIS server.
	
	If necessary, change the password on both accounts so they match and remember to
	change the password in the Internet Service Manager on the IIS server to match.
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
