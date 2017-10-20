---
layout: page
title: "Q119574: WinNT 3.1 to 3.5 Upgrade Does Not Copy OEM SCSI Drivers to Disk"
permalink: /kb/119/Q119574/
---

## Q119574: WinNT 3.1 to 3.5 Upgrade Does Not Copy OEM SCSI Drivers to Disk

{% raw %}

	Article: Q119574
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50Bug
	
	WINDOWS
	
	kbsetup kbbug3.50 kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading your computer from Windows NT version 3.1 to Windows NT version
	3.5, OEM SCSI drivers are not copied from the OEM setup floppy to the
	%SYSTEMROOT%\SYSTEM32\DRIVERS directory. The 3.1 version of the driver remains
	in the directory.
	
	Some computers cannot boot Windows NT 3.5 using the 3.1 version of their SCSI
	driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
