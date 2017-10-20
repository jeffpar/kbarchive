---
layout: page
title: "Q135724: Deleted Disk Space Not Released on Converted NTFS Volume"
permalink: /kb/135/Q135724/
---

## Q135724: Deleted Disk Space Not Released on Converted NTFS Volume

{% raw %}

	Article: Q135724
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you copy a large file to a nearly full disk, delete the file, and then copy
	another large file to the disk, the second copy attempt may fail. This problem
	occurs even though the system reports adequate disk space is available for the
	second file.
	
	This problem only occurs on computers that were upgraded to Windows NT 3.51 from
	a previous version of Windows NT, and on which the disk volume was converted to
	the Windows NT file system (NTFS) during or after the upgrade process. This
	problem occurs on uncompressed volumes, and will not occur on volumes that were
	formatted for NTFS prior to installing Windows NT 3.51.
	
	CAUSE
	=====
	
	When you copy then remove a large file from a nearly full NTFS partition, you
	may create free space between the beginning of the disk and the Master File
	Table (MFT). Because NTFS starts looking for free space at the MFT, NTFS does
	not see the free space after the file is deleted.
	
	RESOLUTION
	==========
	
	To work around this problem, install Windows NT 3.51 in a new directory.
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When NTFS is looking for free space on the disk, it scans through a bitmap of
	the disk that identifies the state of each block on the disk (free or in use).
	The scanning process starts at the MFT rather than the beginning of the disk. If
	free space exists before the MFT, the space is not found during the scanning
	process. If the disk was formatted for NTFS, there are no files between the
	start of the disk and the MFT. However, if the disk was converted to NTFS, then
	files can exist between the beginning of the disk and the MFT. Once those files
	are deleted, free space exists between the start of the disk and the MFT.
	Because the scanning process starts at the MFT, free blocks before the MFT are
	never be allocated to a file.
	
	For additional information on NTFS and Master File Table, please see the
	following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q101670
	  TITLE : Transaction Log Supports NTFS Recoverability
	
	Additional query words: prodnt diskspace
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
