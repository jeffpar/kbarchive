---
layout: page
title: "Q135344: Unable to Install Third-Party Drivers During Windows NT Upgrade"
permalink: /kb/135/Q135344/
---

## Q135344: Unable to Install Third-Party Drivers During Windows NT Upgrade

{% raw %}

	Article: Q135344
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install your third-party network interface card (NIC) driver (provided by
	your NIC manufacturer on floppy disk) during the original installation of
	Windows NT, and then upgrade to a later version of Windows NT using the CD-ROM,
	the following message appears when you attempt to install the updated NIC
	driver:
	
	  Please insert the disk labeled:
	  "<NIC Driver Disk Name>" into <CD-ROM drive>:
	
	You are not allowed to change the drive letter to the NIC driver's source disk.
	Therefore you must choose Cancel and exit Windows NT Setup.
	
	CAUSE
	=====
	
	This problem occurs due to text in the NIC information file (OEMSETUP.INF). The
	text should instruct Windows NT to prompt the user for the correct path to
	install the updated driver. The problem occurs during the upgrade because during
	the original installation of Windows NT, Setup copied OEMSETUP.INF to
	%SYSTEMROOT%\SYSTEM32\OEMNADx.INF, where x is a number designating the quantity
	of third-party drivers you have installed on your computer.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Find the OEMNADx.INF file corresponding to your NIC driver in the original
	  Windows NT installation.
	
	2. Rename the NIC driver information file in the %SYSTEMROOT%\SYSTEM32 directory
	  to another file name. For example, rename OEMNADx.INF to OEMNADx.PSS.
	
	3. Upgrade to the later version of Windows NT.
	
	4. Rename the OEMNADx.PSS file to OEMNADx.INF so you can configure or change NIC
	  settings.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
