---
layout: page
title: "Q128605: Managing Profiles of USRMGR.HLP States Invalid Network Path"
permalink: /kb/128/Q128605/
---

## Q128605: Managing Profiles of USRMGR.HLP States Invalid Network Path

{% raw %}

	Article: Q128605
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	User Manager Help
	-----------------
	
	  3. Optionally, to specify a home directory, select the Local Path
	     box and type a local path (including the drive letter). Or, select
	     the Connect box and specify a drive letter, and then select the To
	     box and type a network path.
	
	     For example you might type a local path of c:\users\jeffho. Or,
	     you might specify drive H and type a network path of
	     \\airedale\accounts\cristalw.
	
	User Manager for Domains Help
	-----------------------------
	
	  4. Optionally, to specify a home directory, select the Connect box
	     and specify a drive letter, and then select the To box and type
	     a network path. Or, select the Local Path box and type a local
	     path (including the drive letter).
	
	     For example, you might specify drive H and type a network path of
	     \\airedale\users\cristalw. Or, you might type a local path of
	     c:\users\jeffho. When administering domain user accounts, specify
	     a network path.
	
	     Optionally, substitute %USERNAME% for the last subdirectory in the
	     path. For example, you might specify drive Q and then type a network
	     path of \\airedale\accounts\%USERNAME%.
	
	Both Help file statements above are incorrect. You cannot specify a network
	path as stated above. The proper universal naming convention (UNC) for a
	network path is \\<server name>\<share name>.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
