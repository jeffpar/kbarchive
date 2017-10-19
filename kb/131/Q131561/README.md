---
layout: page
title: "Q131561: Matching User ID and Passwords in WinNT and LAN Manager Domains"
permalink: /kb/131/Q131561/
---

## Q131561: Matching User ID and Passwords in WinNT and LAN Manager Domains

	Article: Q131561
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A LAN Manager client, logged on to a LAN Manager domain, with a matching user ID
	and password in a Windows NT domain, can connect to Windows NT servers providing
	user validation (PDCs or BDCs), assuming the user ID has access privilege.
	
	However, Windows NT servers not performing account validation (non- PDCs/BDCs)
	cannot pass through validation for the client, even if a matching and valid
	account and password exist for that client in the Windows NT Domain.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q103390 Network Access Validation Algorithm and Example
	
	WORKAROUND
	==========
	
	Have the LAN Manager client log on to the Windows NT domain where they already
	have an existing account.
	
	-or-
	
	Allow the Everyone group on the Windows NT Server to have access to the share.
	
	-or-
	
	Create an account on the local Windows NT Server for the LAN Manager user. Make
	sure the user ID and password match the LAN Manager user ID and password.
	
	Additional query words: prodnt SMB member standalone
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan220c
	Version           : winnt:3.5
	
	=============================================================================
	
