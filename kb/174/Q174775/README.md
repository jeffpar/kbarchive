---
layout: page
title: "Q174775: How Windows NT Challenge/Response Works"
permalink: kb/174/Q174775/
---

## Q174775: How Windows NT Challenge/Response Works

	Article: Q174775
	Product(s): Internet Information Server
	Version(s): 2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) supports Microsoft Windows NT
	Challenge/Response authentication that a user identifies without requiring the
	transmission of actual passwords or account information across a network.
	
	However, the Web server authenticates users by carrying out a procedure that
	challenges the user's Web browser to carry out a specific mathematical
	computation involving the password and to respond by returning the results of
	the computation to IIS. IIS then duplicates this computation using the user's
	account password information, and compares this result to the user's result. If
	both results match, IIS recognizes that the user has the correct password and
	grants access.
	
	Your server will not switch to another authentication method if the user is
	initially denied access. Instead, the user's Web browser will prompt the user
	for a user name and password that the browser will process and send to IIS as
	part of the Windows NT Challenge/Response authentication protocol. If this
	second authentication attempt fails, the user will be denied access to IIS.
	
	MORE INFORMATION
	================
	
	You will find Windows NT Challenge/Response authentication useful in an intranet
	environment, where both user and Web server computers are in the same, secure
	domain. Additionally, you can only use Windows NT Challenge/Response to
	authenticate users that logon with Web browsers capable of supporting this
	method. Currently, Microsoft Internet Explorer version 2.0 or later is the only
	Web browser that supports Windows NT Challenge\Response.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0,4.0,5.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
