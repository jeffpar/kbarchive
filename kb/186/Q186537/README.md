---
layout: page
title: "Q186537: Terminal Server Commands: PERUSER"
permalink: /kb/186/Q186537/
---

## Q186537: Terminal Server Commands: PERUSER

	Article: Q186537
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PERUSER enables or disables per-user file associations.
	
	Syntax
	------
	
	peruser [/query] [/enable] [/disable]
	
	Parameters
	----------
	
	none
	
	/query
	
	  Queries the current setting.
	
	/enable
	
	  Enables per-user file associations.
	
	/disable
	
	  Disables per-user file associations.
	
	Security Restrictions
	---------------------
	
	Only administrators can run peruser.
	
	PERUSER -- Additional Notes
	---------------------------
	
	By default, all file associations in applications such as File Manager are system
	global (they apply to all users). Per-user file associations are not enabled
	because they may cause user profiles to grow 1-2 MB. If you have users who
	require per-user file associations (for example, if one user wants to associate
	.doc files with Microsoft Word but another user wants them to start the Word
	Viewer), you can enable per-user file associations by using the peruser /enable
	command. Use peruser /disable to disable per- user file associations. Use
	peruser /query to check if per-user file associations are enabled.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
