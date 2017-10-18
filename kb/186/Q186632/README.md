---
layout: page
title: "Q186632: Terminal Server Commands: TSPROF"
permalink: kb/186/Q186632/
---

## Q186632: Terminal Server Commands: TSPROF

	Article: Q186632
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
	
	TSPROF copies the Terminal Server user configuration information (displayed in
	User Manager for Domains) from one user to another. TSprof also can update the
	profile path for a user. In Citrix Winframe, this utility is called WFPROF.
	
	Syntax
	------
	
	tsprof /update /domain:domainname /profile:profilepath username
	tsprof /copy /domain:domainname [/profile:profilepath] src_username
	dest_username
	tsprof /query /domain:domainname username
	
	Parameters
	----------
	
	username
	
	  Specifies the name of the user for whom you want to update or query the
	  server profile path for information.
	
	src_username
	
	  Specifies the name of the user from whom you want to copy the user
	  configuration information.
	
	dest_username
	
	  Specifies the name of the user to whom you want to copy the user
	  configuration information.
	
	/update
	
	  Updates the profile path information for username in domain domainname to
	  profilepath.
	
	/copy
	
	  Copies the user configuration information from src_username to dest_username,
	  and also updates the profile path information for dest_username to
	  profilepath. Both src_username and dest_username must be in domain
	  domainname.
	
	/query
	
	  Displays the current profile path for username in domain domainname.
	
	Security Restrictions
	---------------------
	
	Only administrators can run tsprof.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
