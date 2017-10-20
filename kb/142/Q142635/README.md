---
layout: page
title: "Q142635: Cannot Change the Drive Letter of Removable Drives"
permalink: /kb/142/Q142635/
---

## Q142635: Cannot Change the Drive Letter of Removable Drives

{% raw %}

	Article: Q142635
	Product(s): Microsoft Windows NT
	Version(s): Winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Disk Administrator will not allow you to change the logical drive letters of
	removable media drives such as an Iomega Zip, Jaz drives or Media Optical (MO)
	and recordable cd-rom drives.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To ensure that the logical drive in question receives a certain drive letter:
	
	1. With a disk in the removable drive, start Disk Administrator and look at how
	  the devices have been identified.
	
	2. Change the drive letters of the hard disk drive and CDROM devices to their
	  desired locations. If a desired letter is being used by the removable drive,
	  decide what letter the removable drive should use and make sure it is
	  available.
	
	3. Shut down the computer and disconnect the removable drive.
	
	4. Restart. Use Disk Administrator to make any changes to drive letters. Any
	  drive letter previously used by the removable drive should be available for
	  use. Be sure to leave the desired letter available for the removable drive.
	  Make the drive letters statically defined in the registry by highlighting
	  each partition in turn and clicking Assign Drive Letter... from the Tools
	  menu. Then placing it at the drive letter you want it to be clicking the OK
	  button.
	
	5. Shut down the computer, reconnect the removable drive, and restart.
	
	CAUTION: If the Windows NT system files are installed to a logical partition, and
	a removable drive is added to the system, the boot partition for Windows NT will
	be given a new letter. A message stating that the "ARC Path Needs To Be Changed"
	will appear. Until this correction is made in the Boot.ini file, Windows NT will
	not boot. When this correction is made, there are many registry entries that
	will not be changed and will still refer to the old location of the Windows NT
	system files. Therefore, it is recommended that the Windows NT system files be
	installed to a primary partition on a drive, not a logical one.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	Windows NT assigns drive letters first to physical devices, then to logical
	subdivisions/partitions. Therefore a removable drive such as JAZ and ZIP will
	receive a letter before any logical partitions.
	
	For example, if there are two hard drives, each with two partitions, and a
	removable drive, the drive letters will be assigned as follows:
	
	- First drive, first partition = C:
	
	- Second drive, first partition = D:
	
	- Removable (ZIP, JAZ etc ..) drive = E:
	
	- First drive, second partition = F:
	
	- Second drive, second partition = G:
	
	Additional query words: jazz assign drive letter cdrom
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : Winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
