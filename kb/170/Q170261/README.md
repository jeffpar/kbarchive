---
layout: page
title: "Q170261: Cannot Reapply Service Pack 5 from November 1996 MSDN"
permalink: /kb/170/Q170261/
---

## Q170261: Cannot Reapply Service Pack 5 from November 1996 MSDN

{% raw %}

	Article: Q170261
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to reapply Service Pack 5 in Windows NT Workstation 3.51 from
	the November, 1996 MSDN CD-ROM, you may be repeatedly prompted for the Windows
	NT Workstation CD-ROM or the CD-ROM containing the Service Pack files.
	
	CAUSE
	=====
	
	Service Pack 5 was moved to CD-ROM 10 in the November, 1996 MSDN library. In
	previous MSDN libraries, Service Packs and Windows NT installation folders are
	on the same CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Install Service Pack 5 from the most current MSDN release.
	
	- Download Windows NT 3.51 Service Pack 5 from the Microsoft Web site at
	  http://www.microsoft.com.
	
	- Copy the Service Pack 5 and Windows NT 3.51 installation folders to a
	  temporary folder on the local hard disk. Copy the Service Pack 5 files to the
	  <tempdir>\Winnt351.sp5\<platform> folder, and copy the Windows NT
	  3.51 files to the <tempdir>\<ntplatform> folder, where
	  <tempdir> is the temporary folder on the local hard disk,
	  <ntplatform> is the folder containing the appropriate Windows NT
	  installation files for the type of computer you are using (for example, I386
	  for Intel-based computers), and <platform> is the folder containing the
	  appropriate Service Pack 5 installation files for the type of computer you
	  are using. Then, run Update.exe from the
	  <tempdir>\Winnt351.sp5\<platform> folder.
	
	MORE INFORMATION
	================
	
	Later MSDN CD-ROM kits may have the Service Pack files on an alternate CD-ROM.
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sp5
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
