---
layout: page
title: "Q176014: 8.3 Short File Names not Retained after Tape Restore"
permalink: /kb/176/Q176014/
---

## Q176014: 8.3 Short File Names not Retained after Tape Restore

	Article: Q176014
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you back up a volume that contains long file names with associated 8.3
	short file names, the short file names that were previously associated with the
	long file names may not be retained after a restore operation. This may happen
	using the Windows NT backup program called Ntbackup or any third-party OEM
	backup software.
	
	Using the COPY or XCOPY command will result in the same behavior of not retaining
	short file names. Short file names are always created dynamically. This may
	cause certain applications to fail if they are looking for specific 8.3 short
	file names to be associated with long file name (LFN) files.
	
	CAUSE
	=====
	
	NTBackup restores the files in alpha-numeric order and does not restore the
	short file name. The short file name is therefore recreated and may not be the
	same as the original.
	
	WORKAROUND
	==========
	
	Adhere to a pure 8.3 short file naming convention if in a mixed environment of
	clients that are both capable and incapable of using long file names. That way
	the backup programs will be dealing strictly with 8.3 short file names and
	restore them correctly.
	
	
	Additional query words: short file name NTBackup
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
