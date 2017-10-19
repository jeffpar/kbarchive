---
layout: page
title: "Q140385: Error Using Uplodprf on NTFS Volumes"
permalink: /kb/140/Q140385/
---

## Q140385: Error Using Uplodprf on NTFS Volumes

	Article: Q140385
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use UPLODPRF (cps) with the -a switch to upload the entire volume, the
	error message, "(32) File is in use by another process" appears. The UPLODPRF
	utility stops processing and exits to the command prompt.
	
	CAUSE
	=====
	
	UPLODPRF is stopping on the pagefile. This only happens on NTFS volumes and when
	using the -a switch is used. If you use the /dir option, processing starts, but
	errors out trying to set attributes on the pagefile.
	
	WORKAROUND
	==========
	
	There are three workarounds to this problem. They are as follows:
	
	- Move the pagefile to a different partition than the one being profiled.
	
	- Use the FAT file system on the Master system and convert to NTFS on the
	  target system during the Winntp portion of CPS. For additional information,
	  please see the following article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q136636
	  TITLE : Converting to NTFS
	
	- The uplodprf command also has a switch, \dir. This switch will allow for a
	  specific directory(s) to be uploaded to the distribution server, in addition
	  to the \systemroot.
	
	Example command line syntax:
	
	  uplodprf /s:w:\ /i:profile.ini \users \win32app
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Resource Kit 3.51. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt filesystem cps setup unattended automate
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbMSPressSearch kbWinNTS351search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : 3.51
	
	=============================================================================
	
