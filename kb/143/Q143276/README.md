---
layout: page
title: "Q143276: DriveSpace Reboot Fails When Compressing Large Hard Disk"
permalink: /kb/143/Q143276/
---

## Q143276: DriveSpace Reboot Fails When Compressing Large Hard Disk

{% raw %}

	Article: Q143276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are trying to compress a large hard disk with DriveSpace, Windows 95
	may not restart successfully in mini-Windows mode.
	
	CAUSE
	=====
	
	Some large hard disks require that drivers be loaded from the Config.sys file.
	These drivers may call overlay (.ovl) files. Since the .ovl files are not
	directly listed in the Config.sys file, they are not copied into the
	Failsafe.drv folder on the host drive.
	
	RESOLUTION
	==========
	
	Copy any necessary .ovl files to the Failsafe.drv folder on the host drive. Run
	DriveSpace and try the compression operation again.
	
	MORE INFORMATION
	================
	
	For information about .ovl files called by your hard disk's driver, please refer
	to the documentation included with your hard disk.
	
	Additional query words: dblspace ez drive rocket
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
