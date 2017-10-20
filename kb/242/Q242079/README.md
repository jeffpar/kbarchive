---
layout: page
title: "Q242079: Err Msg: Operation Could Not Be Completed. The RPC Server Is..."
permalink: /kb/242/Q242079/
---

## Q242079: Err Msg: Operation Could Not Be Completed. The RPC Server Is...

{% raw %}

	Article: Q242079
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a printer to your Microsoft Windows NT-based computer,
	you may receive the following error message:
	
	  Operation could not be completed. The RPC server is unavailable.
	
	CAUSE
	=====
	
	This issue can occur if the Spoolss.exe and Spoolss.dll files are missing from
	the %SystemRoot%\System32 folder, or are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Copy the Spoolss.exe and Spoolss.dll files from another Windows NT 4.0-based
	  server or workstation to the %SystemRoot%\System32 folder on the affected
	  computer.
	
	2. Apply or reapply the latest appropriate Windows NT service pack, and then
	  restart the computer.
	
	3. Set the Remote Procedure Call (RPC) Service to start automatically:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. On the Service list, click Remote Procedure Call (RPC) Service, and then
	     click Startup.
	
	  c. Under Startup Type, click Automatic, and then click OK.
	
	4. Restart your computer.
	
	Additional query words: remote procedure call
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
