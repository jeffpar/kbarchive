---
layout: page
title: "Q193242: Windows Hangs at Logo Screen After Attaching External Device"
permalink: /kb/193/Q193242/
---

## Q193242: Windows Hangs at Logo Screen After Attaching External Device

{% raw %}

	Article: Q193242
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): kbhw win95 win98 kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	If this article does not describe your hardware-related issue, please see the following Microsoft Web site to view more articles about hardware: 
	
	  http://support.microsoft.com/support/windows/topics/hardware/hwddresctr.asp
	
	SYMPTOMS
	========
	
	When you attempt to start your Windows-based computer after connecting an
	external Small Computer System Interface (SCSI) device, your computer may stop
	responding (hang) at the Windows logo screen.
	
	CAUSE
	=====
	
	This behavior can occur if your computer contains a SCSI adapter with two
	internal ports as well as an external port, and there are devices connected to
	both of the internal ports. Connecting a device to the external port is not
	supported in this configuration.
	
	RESOLUTION
	==========
	
	To work around this issue, disconnect the external SCSI device and then restart
	your computer.
	
	For information about how to reconfigure your SCSI devices, please refer to the
	documentation included with your computer or the SCSI adapter, or contact the
	computer's or adapter's manufacturer.
	
	
	Additional query words: HWSCSI w98sstop channel multi-channel
	
	======================================================================
	Keywords          : kbhw win95 win98 kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :2000,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
