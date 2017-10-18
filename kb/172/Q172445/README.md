---
layout: page
title: "Q172445: Directory Replication Is Erratic With Ntconfig.pol, Config.pol"
permalink: kb/172/Q172445/
---

## Q172445: Directory Replication Is Erratic With Ntconfig.pol, Config.pol

	Article: Q172445
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an export server exports a Ntconfig.pol file to its own import directory, and
	if the file is changed (by adding or removing a privilege), the file is not
	replicated. No errors appear in the event log, and the status reads OK, but the
	date/time stamp on the export directory file is changed, although the previous
	time remains on the import directory file.
	
	A small text file placed in the export folder will replicate along with the
	Ntconfig.pol file. If that text file is edited, replication will occur for the
	whole directory. If you modify the Ntconfig.pol file only, it will not
	replicate. No errors appear, and replication status reads OK.
	
	RESOLUTION
	==========
	
	Rename the Ntconfig.pol, keeping the .pol extension. Allow replication to occur,
	and then rename the file, giving it the original file name (Ntconfig.pol or
	Config.pol). Replication should occur normally. After this, you can change the
	file as needed; replication continues unless a file is open.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and posts new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
