---
layout: page
title: "Q128931: Enabling SCSI-Tagged Command Queuing for NCR PCI SCSI Controller"
permalink: /kb/128/Q128931/
---

## Q128931: Enabling SCSI-Tagged Command Queuing for NCR PCI SCSI Controller

{% raw %}

	Article: Q128931
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NCR 53C810 PCI SCSI host adapter is built-in on most Dell computers and it
	supports SCSI-tagged command queuing. The SCSI-tagged command queuing allows a
	SCSI host adapter to send multiple SCSI commands to a device before receiving a
	response for any of the commands. If this feature is disabled (the Windows NT
	default), the SCSI host adapter must wait for a command response before sending
	another. In some environments, enabling SCSI-tagged command queuing results in
	improved system performance.
	
	MORE INFORMATION
	================
	
	To enable SCSI-tagged command queuing for the NCR 53C810 PCI SCSI host adapter
	(using the NCRSDMS.SYS driver):
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	From the HKEY_LOCAL_MACHINE subtree
	
	1. Log on to Windows NT as an administrator.
	
	2. Start Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CurrentControlSet\Services\ncrsdms
	
	4. From the Edit menu, select Add Key.
	
	5. In the Key Name text box, type the following and then choose OK:
	
	  Device
	
	6. Select the Device subkey.
	
	7. From the Edit menu, choose Add Value.
	
	8. Enter the following:
	
	     Value Name: DriverParameter
	     Data Type:  REG_SZ
	     String:     UseTags=1
	
	9. Exit Registry Editor and restart Windows NT.
	
	For more information on the NCR 53C810 PCI SCSI host adapter, refer to the SCSI
	Device Driver Installation and Configuration Guide shipped with the computer or
	contact Dell Technical Support at (800) 284-1200.
	
	The product included here is manufactured by Dell Computer Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
