---
layout: page
title: "Q150297: Directory Replication Stop Messages"
permalink: /kb/150/Q150297/
---

## Q150297: Directory Replication Stop Messages

{% raw %}

	Article: Q150297
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click OK in the Directory Replication dialog box, one of the following
	STOP messages appears:
	
	  The system cannot find the file specified.
	
	  The device or directory does not exist.
	
	CAUSE
	=====
	
	The first error can occur if the registry parameters ExportPath and/or
	ImportPath contain an invalid path entry, for instance a nonexistent directory.
	
	The second error can occur if the registry parameters ExportPath and/or
	ImportPath contain an invalid drive entry.
	
	An invalid ExportPath can cause the error even if the computer is not configured
	as an export computer.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Edit the following HKEY_LOCAL_MACHINE subtree registry entries:
	
	  SYSTEM\CurrentControlSet\Services\Replicator\Parameters
	      \ExportPath
	
	  SYSTEM\CurrentControlSet\Services\Replicator\Parameters
	      \ImportPath
	
	Make sure that ExportPath and ImportPath point to valid drives and directories.
	
	Close the Registry Editor and restart the computer.
	
	For additional information on corrupted directory replicator registry entries,
	please see the following article in the Microsoft Knowledge Base:
	
	Q133475Corrupted Directory Replicator Registry Entries
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
