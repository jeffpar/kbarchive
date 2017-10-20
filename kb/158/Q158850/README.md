---
layout: page
title: "Q158850: Cannot Compress Write-Protected Removable Media"
permalink: /kb/158/Q158850/
---

## Q158850: Cannot Compress Write-Protected Removable Media

{% raw %}

	Article: Q158850
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1,95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are compressing a write-protected disk in a removable media drive with
	DriveSpace, you may receive a message stating that there are errors on the disk.
	This message is likely to occur with large-capacity removable media when the
	compress operation is approximately 16 percent complete, and with floppy disks
	when the compress operation is approximately 25 percent complete.
	
	CAUSE
	=====
	
	DriveSpace in OEM Service Release 2 and DriveSpace 3 in Microsoft Plus! perform
	read and write testing.
	
	RESOLUTION
	==========
	
	Remove the write protection on the disk and then run the DriveSpace operation
	again.
	
	MORE INFORMATION
	================
	
	When you run ScanDisk with OEM Service Release 2 or Microsoft Plus!, ScanDisk
	may report that the disk is write-protected when the operation is approximately
	16 percent complete with large removable media or when the operation is
	approximately 25 percent complete with floppy disks.
	
	Windows 95 DriveSpace performs read testing but does not perform write testing.
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210 kbPlus95
	Version           : :2,2.1,95
	
	=============================================================================
	

{% endraw %}
