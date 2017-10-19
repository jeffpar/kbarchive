---
layout: page
title: "Q147824: Export and Import Servers in Directory Replication"
permalink: /kb/147/Q147824/
---

## Q147824: Export and Import Servers in Directory Replication

	Article: Q147824
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Directory Replication is the duplication of a master set of directories from the
	export server to the import computer in the same or other domains. Each export
	server maintains a list of computers and/or domain names to which subdirectories
	are exported and each import computer maintains a list of computers and/or
	domain names from which subdirectories are imported.
	
	During directory replication, the export server initializes the session with the
	import server. The export server then replicates all new file and directory
	information from the export directory to the import computer's import directory.
	
	MORE INFORMATION
	================
	
	Import directories are overwritten each time replication occurs and because of
	this, it is recommended that replication be used for read-only information.
	
	The export server must be running Windows NT Server. The default export path is
	located under <winnt_root>\System32\Repl\Export shared as Repl$.
	
	The import computer can be Windows NT domain controllers and servers, Windows NT
	Workstations, Windows NT 3.1, Windows NT 3.1 Advanced Server and Microsoft
	Lanmanager OS/2 Servers and OS/2 peer servers. The default import directory is
	<winnt_root>\System32\Repl\Import.
	
	There are two directory replication parameters that can only be configured in the
	registry of the export computer under HKEY_LOCAL_MACHINE\system\
	CurrentControlSet\Services\Replicator\Parameters.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	The first entry is Interval (REG_DWORD). This parameter determines how often an
	export server checks the replicated directories for changes. The second
	parameter is GuardTime (REG_DWORD). This parameter sets the number of minutes an
	export directory must be stable before it will be replicated.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
