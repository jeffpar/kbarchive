---
layout: page
title: "Q245141: Error Initializing When Starting Access 97 Using Terminal Server"
permalink: /kb/245/Q245141/
---

## Q245141: Error Initializing When Starting Access 97 Using Terminal Server

	Article: Q245141
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Access 97 on a computer running Microsoft
	Windows NT 4.0, Terminal Server Edition, you may receive the following error
	message:
	
	  The application fails to initialize correctly. 0xC0000022
	
	However, an administrator can start Access 97 without receiving the error
	message.
	
	CAUSE
	=====
	
	This behavior can occur if the Everyone group does not have Full Control
	permission on the Msjet35.dll file.
	
	RESOLUTION
	==========
	
	To resolve this issue, ask your system administrator to grant Full Control
	permission on the Msjet35.dll file to the Everyone group.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
