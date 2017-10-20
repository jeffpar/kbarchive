---
layout: page
title: "Q159501: Compaq LTE 5000 with 2.167GB Drive Requires Updated HAL"
permalink: /kb/159/Q159501/
---

## Q159501: Compaq LTE 5000 with 2.167GB Drive Requires Updated HAL

{% raw %}

	Article: Q159501
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 on a 2.167GB IDE hard disk drive in a Compaq LTE
	5000 laptop and choose to convert the file system to NTFS format, Windows NT
	will do the conversion but will stop responding after the conversion is
	complete. Windows NT will no longer start after the drive is converted to the
	NTFS format. The crash will result in a STOP 0x0000007F
	UNEXPECTED_KERNEL_MODE_TRAP error.
	
	The same error occurs if you install Windows NT to a FAT partition and later
	convert to NTFS format using the Windows NT convert command.
	
	RESOLUTION
	==========
	
	The Compaq LTE 5000 series laptops require an updated hardware abstraction layer
	(HAL) to be able to recognize a Compaq 2.167GB hard disk drive that is formatted
	as NTFS. The HAL is available for download from Compaq.
	
	
	To install the updated HAL on the Compaq LTE 5000, perform the following steps:
	
	1. Install Windows NT as normal, but do not to convert to NTFS format.
	
	2. When the Windows NT installation is complete, go to the %SystemRoot%\System32
	  directory and rename Hal.dll to Hal.old
	
	3. Copy the updated Hal.dll provided by Compaq into %SystemRoot%\System32
	  directory.
	
	4. Restart Windows NT
	
	5. Convert the files system to NTFS using the following command:
	
	  CONVERT C: /FS:NTFS /V
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Compaq, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these product's
	performance or reliability.
	
	
	Additional query words: COMPAQ LTE IDE NTFS
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
