---
layout: page
title: "Q125386: SFM Files Lose Long Filenames When Backed Up &amp; Restored"
permalink: kb/125/Q125386/
---

## Q125386: SFM Files Lose Long Filenames When Backed Up &amp; Restored

	Article: Q125386
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Services for Macintosh (SFM) files with names containing characters illegal
	under Windows NT lose their long names when backed up and restored using Windows
	NT Backup.
	
	CAUSE
	=====
	
	The legal SFM characters, but illegal Windows NT characters, are supported by
	Services for Macintosh by translating the characters to an unused area of the
	Unicode character set. Prior to Service Pack 2, Windows NT Backup did not
	support Unicode. When a version of Windows NT Backup that is not Unicode aware
	backs one of these files it is unable to record the correct long filename. In
	instead uses a traditional 8.3 character filename. As a result, the long
	filename is unrecoverable.
	
	NOTE: Tapes created by Windows NT Backup from Service Pack 2 or later record the
	long filenames correctly.
	
	RESOLUTION
	==========
	
	This problem has been corrected in Windows NT version 3.5 and the most current
	builds of Windows NT version 3.1. Because the data recorded to the tape from
	earlier versions of Windows NT Backup does not contain the full file names,
	there is no way to recover from the loss of this information; the files must be
	renamed from the Macintosh client to regain their original names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The following are characters are allowed by SFM but not by Windows NT:
	
	  *
	  / 
	  \ 
	  :
	
	Also, Windows NT does not allow filenames with trailing periods or trailing
	spaces.
	
	Additional query words: 3.10 lfn long name prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
