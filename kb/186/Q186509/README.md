---
layout: page
title: "Q186509: Terminal Server Commands: CPROFILE"
permalink: /kb/186/Q186509/
---

## Q186509: Terminal Server Commands: CPROFILE

	Article: Q186509
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
	
	CPROFILE cleans the specified profiles of wasted space and removes user-
	specific file associations from the registry when the file associations are
	disabled. Profiles that are currently in use will not be modified.
	
	Syntax
	------
	
	cprofile [/l] [/i] [/v] [/?] filelist
	
	Parameter
	---------
	
	filelist
	
	  A list of files from which you want to remove user-specific file
	  associations.
	
	/l
	
	  Cleans all local profiles (filelist does not need to be specified).
	
	/i
	
	  Interactively prompts the user with each profile.
	
	/v (verbose)
	
	  Displays information about the actions being performed.
	
	/?
	
	  Displays the syntax for the command and information about the command's
	  options.
	
	Security Restrictions
	---------------------
	
	Only administrators can run cprofile.
	
	CPROFILE -- Additional Notes
	----------------------------
	
	File associations allow users to associate a specific application with a specific
	file type. File association allows the Terminal Server to know what application
	to use to access files of a particular type. File types are registered using
	Explorer. Per-user file associations allow each user to have a different
	application associated with a specific file type. For example, one user could
	have .doc files associated with Microsoft Word and another user could have .doc
	files associated with Word Viewer.
	
	User-specific file associations are disabled by executing peruser /disable. If
	the user-specific file associations are not disabled, cprofile removes only the
	wasted space from the user's profile. When items are removed from a user's
	profile, the corresponding registry does not reduce in size. Cprofile is useful
	in clearing wasted space from the registry.
	
	Note: This command will not modify profiles that are currently in use.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
