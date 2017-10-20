---
layout: page
title: "Q170851: How Windows NT/Challenge Response Authentication Works"
permalink: /kb/170/Q170851/
---

## Q170851: How Windows NT/Challenge Response Authentication Works

{% raw %}

	Article: Q170851
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Your Web server supports Microsoft Windows NT Challenge/Response authentication,
	which identifies users without requiring the transmission of actual passwords or
	account information across a network. Instead, the Web server authenticates
	users by carrying out a procedure that challenges the user's Web browser to
	carry out a specific mathematical computation involving the password and to
	respond by returning the results of the computation to their Web server.
	
	Next, your Web server duplicates this computation using the user's account
	password information, and compares this result to the user's result. If both
	results match, your Web server recognizes that the user has the correct password
	and grants access.
	
	Your server will not switch to another authentication method if the user is
	initially denied access. Instead, the user's Web browser will prompt the user
	for a user name and password, which the browser will process and send to your
	Web server as part of the Windows NT Challenge/Response authentication protocol.
	If this second authentication attempt fails, the user will be denied access to
	the Web server.
	
	MORE INFORMATION
	================
	
	You will find Windows NT Challenge/Response authentication useful in an Intranet
	environment, where both user and Web server computers are in the same, secure
	domain. Additionally, you can only use Windows NT Challenge/Response to
	authenticate users that logon with Web browsers capable of supporting this
	method. Currently, Microsoft Internet Explorer version 2.0 or later is the only
	Web browser that supports Windows NT Challenge\Response.
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
