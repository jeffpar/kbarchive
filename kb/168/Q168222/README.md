---
layout: page
title: "Q168222: Error Message: &quot;Port in Use&quot; or &quot;Port Already Open&quot;"
permalink: /kb/168/Q168222/
---

## Q168222: Error Message: &quot;Port in Use&quot; or &quot;Port Already Open&quot;

	Article: Q168222
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a communications program, you may receive one of the
	following error messages:
	
	  Error: port in use
	
	  OpenComm: Port already open
	
	CAUSE
	=====
	
	This behavior can occur if Rnaapp.exe is active in memory.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. Click Rnaapp to select it, and then click End Task.
	
	3. Start your communications program.
	
	MORE INFORMATION
	================
	
	When you finish using a communications program and close the connection,
	Rnaapp.exe is still running and the port remains unavailable to non-TAPI
	programs.
	
	Rnaapp.exe is left in memory to allow TAPI programs to open faster. Rnaapp.exe is
	eventually unloaded from memory (unless Dial-Up Networking Server is set to
	allow caller access), but it may take 10-15 minutes.
	
	======================================================================
	Keywords          : kberrmsg kbtool dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
