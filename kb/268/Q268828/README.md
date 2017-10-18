---
layout: page
title: "Q268828: How to Modify the Registry to Delete Locally Cached Profiles"
permalink: kb/268/Q268828/
---

## Q268828: How to Modify the Registry to Delete Locally Cached Profiles

	Article: Q268828
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the System Policy Editor to modify the registry
	on the Terminal Server computer to delete locally cached profiles.
	
	MORE INFORMATION
	================
	
	1. Create Terminal Server roaming profiles for all users.
	
	2. On the Terminal Server computer, click Start, click Run, and then type
	  poledit.
	
	3. On the File menu, select Open Registry.
	
	4. Double-click Local Computer, and then double-click Windows NT User Profiles.
	
	5. Click to select the Delete cached copies of roaming profiles check box, and
	  then click OK.
	
	6. Close the System Policy Editor. You are prompted to save the changes to the
	  registry.
	
	7. Click Yes to save the changes.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q214470 How to Move the Location of a Locally Cached Profile
	
	NOTE: The UserEnv.dll file is responsible for creating the locally cached profile
	and enumerating the registry with the local profile path:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\ProfileList
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	
	=============================================================================
	
