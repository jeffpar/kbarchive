---
layout: page
title: "Q106546: Resouce Kit Doc Error: London Appears in the From Box..."
permalink: kb/106/Q106546/
---

## Q106546: Resouce Kit Doc Error: London Appears in the From Box...

	Article: Q106546
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	The Windows NT Resource Guide (volume 1 of the Microsoft Windows NT
	Resource Kit) on page 612 states:
	
	London appears in the From box at the initial logon screen of Windows
	NT computers in the Topeka domain. Thus a user from the Topeka domain
	can log on at a computer in the London domain.
	
	This information is incorrect.
	
	The previous page (page 611) of the guide states that London trusts
	Topeka. In this instance, Topeka appears in the From box at the
	initial logon screen of Windows NT computers in the London domain.
	Users logging on in the Topeka domain will only see Topeka and their
	local workstation.
	
	Additional query words: prodnt reskit trust
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.1
	
	=============================================================================
	
