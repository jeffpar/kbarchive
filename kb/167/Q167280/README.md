---
layout: page
title: "Q167280: XFOR: Err Msg: Cannot Open, HTTP/1.0 500 Server Error"
permalink: /kb/167/Q167280/
---

## Q167280: XFOR: Err Msg: Cannot Open, HTTP/1.0 500 Server Error

	Article: Q167280
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbusage exc5
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Internet browser to log on to Microsoft Exchange Server, you are
	prompted to enter your user name and password. When you type the correct name
	and password, one of the following two error messages may appear:
	
	  Cannot open http://<server_name>/exchange/logon.asp
	
	  HTTP/1.0 500 Server Error (Not enough storage is available to process this
	  command.)
	
	CAUSE
	=====
	
	The first error message appears when only basic (clear text) password
	authentication is being used, or when all three authentication methods (basic,
	anonymous, and Windows NT challenge/Response) are in use. Using all three is the
	default.
	
	The second error message appears if anonymous authentication, Windows NT
	challenge/response authentication, or both are being used without basic
	authentication.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Check the security permissions on the file Exchsrvr\Bin\Amhtml.dll and verify
	  that the group Everyone has a minimum access level of Read.
	
	  To assign full control (or any other combination of rights) to the group
	  Everyone.
	
	- In Windows Explorer, right-click the Exchsrvr directory and click Properties,
	  and then click Security, and then Permissions.
	
	
	Additional query words: logon.asp Active Server Pages
	
	======================================================================
	Keywords          : kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
