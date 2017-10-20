---
layout: page
title: "Q126126: Windows NT Setup Fails when SCSI Controller is Not Detected"
permalink: /kb/126/Q126126/
---

## Q126126: Windows NT Setup Fails when SCSI Controller is Not Detected

{% raw %}

	Article: Q126126
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the upgrade process to Windows NT version 3.5, Setup does not detect the
	SCSI controller on your computer. When you supply the driver from the SCSI
	controller manufacturer, the computer stops responding (hangs) or the following
	message appears:
	
	  STOP 0x0000007B
	  Inaccessible Boot Device
	
	
	CAUSE
	=====
	
	This problem occurs when Setup fails to copy the SCSI controller driver from the
	manufacturer-supplied disk to the %SYSTEMROOT%\SYSTEM32\DRIVERS directory.
	
	WORKAROUND
	==========
	
	If you are installing Windows NT on to a file allocation table (FAT) volume:
	
	1. After Windows NT Setup reboots the computer (after the MS-DOS-based portion
	  of Windows NT Setup completes), place an MS-DOS boot disk in the bootable
	  floppy disk drive (usually drive A).
	
	2. Copy the manufacturer-supplied driver to the following directory:
	
	  %SYSTEMROOT%\SYSTEM32\DRIVERS
	
	3. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt trap 0x7b lock
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
