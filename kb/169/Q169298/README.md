---
layout: page
title: "Q169298: Canceling Routing and RAS Install Does Not Restore Oemnsvra.inf"
permalink: /kb/169/Q169298/
---

## Q169298: Canceling Routing and RAS Install Does Not Restore Oemnsvra.inf

	Article: Q169298
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Canceling an installation of Routing and Remote Access Service can cause
	problems with the legacy Windows NT Server 4.0 Remote Access.
	
	CAUSE
	=====
	
	When you cancel an installation of Routing and Remote Access, the original
	Oemnsvra.inf file does not get restored. This can cause problems in binding or
	updating of legacy Windows NT 4.0 RAS components.
	
	RESOLUTION
	==========
	
	Copy and expand the original Oemnsvra.inf file from the Windows NT Server CD
	into the %SystemRoot%\System32 directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access
	Service Update. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: rras
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
