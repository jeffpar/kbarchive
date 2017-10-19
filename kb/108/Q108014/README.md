---
layout: page
title: "Q108014: NET USE &#42; /HOME Err Msg: The Syntax Is Incorrect"
permalink: /kb/108/Q108014/
---

## Q108014: NET USE &#42; /HOME Err Msg: The Syntax Is Incorrect

	Article: Q108014
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the NET USE * /HOME command, you receive the following error
	message even though you have used the correct syntax:
	
	  The syntax is incorrect.
	  For help, type NET USE /?
	
	CAUSE
	=====
	
	If the error message is immediately displayed after typing the command and
	pressing ENTER, you are probably using incorrect syntax. If the message is
	returned after a brief delay (a few seconds), there is a problem with your
	Windows NT or LAN Manager home directory configuration.
	
	RESOLUTION
	==========
	
	To work around this problem, contact your network administrator to verify the
	home directory configuration.
	
	MORE INFORMATION
	================
	
	
	Using NET USE * /HOME from Multiple MS-DOS Command Prompts
	----------------------------------------------------------
	
	If you use the NET USE * /HOME command from more than one MS-DOS command prompt
	within Windows for Workgroups, your current directory will not be set correctly.
	Your current directory will be the root of the server containing your home
	directory instead of your default home directory.
	
	Additional query words: 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
