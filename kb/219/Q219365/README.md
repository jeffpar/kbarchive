---
layout: page
title: "Q219365: Free Disk Space Error When Attempting to Install SP4"
permalink: kb/219/Q219365/
---

## Q219365: Free Disk Space Error When Attempting to Install SP4

	Article: Q219365
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT 4.0 Service Pack 4 (SP4), the following
	error message may be displayed:
	
	  Service Pack Setup Error
	  You do not have enough free disk space to install the Service Pack. The
	  Service Pack requires 40 MB, or 80 MB if you choose to also backup files for
	  uninstall.
	
	This error message may be displayed even though the computer has the amount of
	free space on its boot partition that the message indicates is not present.
	
	CAUSE
	=====
	
	This behavior occurs because SP4 may require up to 60 MB of free disk space, or
	120 MB if you choose to also backup files for uninstallation.
	
	RESOLUTION
	==========
	
	To resolve this problem, increase the amount of free disk space in the partition
	where Windows NT is installed to at least 60 MB (if you do not want to create an
	uninstallation folder), or to 120 MB (if you want to create an uninstallation
	folder).
	
	
	This problem does not occur in Windows NT 4.0 Service Pack 5.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	4.0 SP4. This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
