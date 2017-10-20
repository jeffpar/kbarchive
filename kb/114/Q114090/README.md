---
layout: page
title: "Q114090: Can't Use Setup Disks with Dell DDA/DSA Controller"
permalink: /kb/114/Q114090/
---

## Q114090: Can't Use Setup Disks with Dell DDA/DSA Controller

{% raw %}

	Article: Q114090
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Setup from floppy disk or CD-ROM disc on a Dell system
	that has the boot drive installed on a Dell Drive Array (DDA) or Dell SCSI Array
	(DSA) controller, the following error message appears after Setup scans for SCSI
	interfaces:
	
	  Setup is unable to locate the hard drive partition prepared by the DOS
	  portion of Setup.
	
	These controllers are listed on the July and later Windows NT Hardware
	Compatibility Lists.
	
	The system starts and runs correctly from DOS.
	
	CAUSE
	=====
	
	This controller isn't a standard IDE or SCSI controller, so Setup is unable
	locate that controller with the drivers available on the floppy disk. Because of
	this, it is unable to find a DOS partition to copy the files to when it gets to
	that part of Setup.
	
	WORKAROUND
	==========
	
	To run Setup without receiving this error message, start DOS from the hard drive
	on the DDA or DSA and run WINNT.EXE from a CD-ROM or network connection. This
	creates a Setup disk that contains the drivers that recognize the DDA or DSA
	controller. Setup then runs correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT version
	3.5.
	
	The Dell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt 450SE
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
