---
layout: page
title: "Q155573: &quot;Stop 0x50&quot; Transferring Files over RAS with Windows NT 4.0"
permalink: /kb/155/Q155573/
---

## Q155573: &quot;Stop 0x50&quot; Transferring Files over RAS with Windows NT 4.0

{% raw %}

	Article: Q155573
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are downloading files using FTP with Windows NT 4.0, you may receive
	the following error message on a blue screen:
	
	  Stop 0x00000050 PAGE_FAULT_IN_NONPAGED_AREA
	
	CAUSE
	=====
	
	Running Windows NT 4.0 with an incorrect version of the Aic78xx.sys driver for
	Adaptec SCSI adapters causes this condition to occur intermittently.
	
	RESOLUTION
	==========
	
	Check the time and date stamp and file size of the Aic78xx.sys driver to
	determine if the correct Windows NT 4.0 version is installed. This driver file
	is located in Winnt\System32\Drivers folder.
	
	  Aic78xx.sys   27K   8/2/96 1:30 AM
	
	Compare the installed aic78xxx.sys file with the one located on the Windows NT
	4.0 CD-ROM and if it is different, replace it.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
