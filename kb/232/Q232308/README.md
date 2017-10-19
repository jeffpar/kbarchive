---
layout: page
title: "Q232308: Empty Folder Created in %SystemRoot%&#92;Profiles"
permalink: /kb/232/Q232308/
---

## Q232308: Empty Folder Created in %SystemRoot%&#92;Profiles

	Article: Q232308
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user attempts to log on to a computer that is missing the default user
	profile, the logon request is denied and the following error message is
	displayed:
	
	  The operating system was unable to load your profile. Please contact your
	  network administrator (2).
	
	In addition, an empty folder is created in the %SystemRoot%\Profiles folder.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This is not fixed in Windows NT
	4.0, including Service Pack 5.
	
	MORE INFORMATION
	================
	
	The expected behavior is that no folder is created, because the user's logon
	request is denied. If the user tries many times to log on, many different
	folders named <username>.xxx (where <username> is the name of the
	user whose logon attempt was denied) are created in the %SystemRoot%\Profiles
	folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
