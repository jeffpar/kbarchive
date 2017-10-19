---
layout: page
title: "Q186507: Terminal Server Commands: CNVRTUC"
permalink: /kb/186/Q186507/
---

## Q186507: Terminal Server Commands: CNVRTUC

	Article: Q186507
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
	
	Beginning with Citrix Winframe 1.7, user configurations were stored in the SAM
	with the rest of user information. Prior to version 1.7, the information was
	stored in the registry. CNVRTUC is included with Terminal Server for upgrades
	from Citrix Winframe version 1.6 and should only be run on that server. This
	utility has no function in Terminal Server because, by default, all user
	configuration information is already stored in the SAM database. CNVRTUC
	converts user configurations from registry-based format to SAM-based format.
	
	Syntax
	------
	
	cnvrtuc [/all | [/user username] [/domain domainname]
	
	Parameters
	----------
	
	none /all
	
	  Converts all registry-based user configurations.
	
	/user username
	
	  Converts the registry-based user configuration for the specified user.
	
	/domain domainname
	
	  Converts user configurations in the specified domain.
	
	Security Restrictions
	---------------------
	
	Only domain administrators can run CNVRTUC.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
