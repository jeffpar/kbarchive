---
layout: page
title: "Q187122: Deleted Files Appear Under in Recycler for All SIDs"
permalink: /kb/187/Q187122/
---

## Q187122: Deleted Files Appear Under in Recycler for All SIDs

	Article: Q187122
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete files, they may appear in the Recycler folder for every SID.
	This is apparent, if you have a File Allocation Table (FAT) partition. Everyone
	with a FAT partition sees files that were deleted by other users. This is not
	limited to FAT partitions, though (both in the Recycle Bin and in Explorer for
	their SID in the Recycler folder). If the administrator deletes some files from
	an NTFS partition and then looks at the Recycler folder, the files appear for
	every SID.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the case of files deleted from a FAT partition, every user sees every deleted
	file, and if a user deletes the file from his or her recycle bin, it is deleted
	from all SIDs in the Recycler folder. The administrator can delete every
	reference to a file deleted from an NTFS partition by deleting the file once
	from anywhere it appears.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
