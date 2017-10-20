---
layout: page
title: "Q156654: How to Disable the Installation of Exchange During Setup"
permalink: /kb/156/Q156654/
---

## Q156654: How to Disable the Installation of Exchange During Setup

{% raw %}

	Article: Q156654
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to disable the installation of the Exchange client
	during Windows NT Setup.
	
	MORE INFORMATION
	================
	
	When you install Windows NT, the Microsoft Exchange client for Windows NT is
	installed and an Exchange icon is placed on the desktop. To disable the
	installation of the Exchange client during Windows NT Setup, follow these
	steps:
	
	WARNING: Modifications to INF files incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from modifications of INF files can
	be solved. Use this method at your own risk.
	
	NOTE: This procedure requires that you install (locally or over the network) from
	a flat folder on a hard drive. To complete these steps, you must be able to
	modify the Syssetup.inf file. By default, the Syssetup.inf file is compressed on
	the Windows NT 4.0 CD-ROM.
	
	1. Copy the I386 folder from the Windows NT CD-ROM to a hard drive.
	
	2. In the I386 folder on the hard drive, expand the Syssetup.in_ file to
	  Syssetup.inf using the following command:
	
	  "expand Syssetup.in_ Syssetup.inf" (without the quotation marks)
	
	  NOTE: Expand.exe must be run from within Windows NT.
	
	3. Rename the Syssetup.in_ file to Syssetup.old. By default, setup will use the
	  compressed version if both exist.
	
	4. Open Syssetup.inf in a text editor, and then place a semicolon before the
	  MSMAIL.INF entry in the [BaseWinOptionsInfs] section of the file.
	
	  The change should look like this:
	
	  [BaseWinOptionsInfs]
	  accessor.inf
	  communic.inf
	  games.inf
	  imagevue.inf
	  mmopt.inf
	  ;msmail.inf
	  multimed.inf
	  optional.inf
	  pinball.inf
	  wordpad.inf
	
	The procedure to disable the installation of the Exchange client described above
	works with a local, network, or local installation of Windows NT.
	
	Additional query words: prodnt how to inbox
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
