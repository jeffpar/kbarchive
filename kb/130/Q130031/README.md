---
layout: page
title: "Q130031: Cannot Remotely Administer RAS Server in Low Speed Connection"
permalink: kb/130/Q130031/
---

## Q130031: Cannot Remotely Administer RAS Server in Low Speed Connection

	Article: Q130031
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Remote Access Admin (RASADMIN.EXE) to remotely administer a Remote
	Access Service (RAS) server over a RAS connection and view user permissions, the
	user accounts Grant All button and Revoke All buttons are missing.
	
	CAUSE
	=====
	
	This problem occurs if you attempt RAS administration over a low speed
	connection. When a low speed connection is used, user accounts are not passed
	across the RAS link.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. In Remote Access Admin, select "Select Domain or Server" from the Server
	  menu.
	
	2. Clear the Low Speed Connection check box.
	
	3. Enter the domain or server name.
	
	Additional query words: prodnt option administrator
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
