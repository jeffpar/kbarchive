---
layout: page
title: "Q233976: Cannot Retrieve UserName Property in Windows Script Host"
permalink: kb/233/Q233976/
---

## Q233976: Cannot Retrieve UserName Property in Windows Script Host

	Article: Q233976
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbProgramming kbtool
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to retrieve the UserName property using the WScript.Network
	object in a Windows 95/98 logon script, you receive a null value. In some cases
	you may also receive an error code of 800704DD.
	
	CAUSE
	=====
	
	This issue occurs because a Windows 95/98 logon script is run before the logon
	process is complete.
	
	RESOLUTION
	==========
	
	To work around this issue, use a While loop to continue to retrieve the value as
	long as it remains null.
	
	The following VBScript code is a sample of how to implement the workaround.
	
	  On Error Resume Next
	  Dim strUserName
	  Set WSHNetwork = CreateObject("WScript.Network")
	  While strUserName = ""
	      strUserName = WSHNetwork.UserName
	  WEnd
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbProgramming kbtool 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
