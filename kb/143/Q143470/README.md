---
layout: page
title: "Q143470: Run Logon Scripts Synchronously Not Applied to New Users"
permalink: kb/143/Q143470/
---

## Q143470: Run Logon Scripts Synchronously Not Applied to New Users

	Article: Q143470
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the system administrator selects Run Logon Script Synchronously for a group
	of users in System Policy Editor, the logon script belonging to this group
	executes synchronously as expected and the Windows NT shell does not appear
	until the completion of the logon script.
	
	If the system administrator makes any changes to the system policies in System
	Policy Editor and leaves Run Logon Script Synchronously selected, the logon
	script for new users added to this group does not execute synchronously and the
	Windows NT shell appears before the completion of the logon script. The logon
	script continues to work correctly for existing users.
	
	CAUSE
	=====
	
	There is a problem with the Winnt.adm data file for System Policy Editor
	(Poledit.exe.)
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: logon script poledit.exe
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
