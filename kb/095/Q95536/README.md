---
layout: page
title: "Q95536: Results of DBLSPACE /CHKDSK"
permalink: /kb/095/Q95536/
---

## Q95536: Results of DBLSPACE /CHKDSK

{% raw %}

	Article: Q95536
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DBLSPACE /CHKDSK command evaluates errors and then sorts them into three
	categories: lost clusters, cross-linked files, and other.
	
	The "other" category indicates one or more of the following problems:
	
	- There is a damaged extended BIOS parameter block (BPB). (This is the BPB
	  specific to the compressed volume file [CVF].)
	
	- There is a damaged beginning or ending signature in the CVF.
	
	- An entry in the MD-FAT (Microsoft DoubleSpace - file allocation table) is
	  corrupt (unreadable).
	
	- The MD-FAT makes a reference to the MS-DOS FAT that is not valid.
	
	- The sector heap offset is out of range; for example, the sector heap is
	  larger than the CVF or beyond the size of the logical compressed drive.
	
	NOTE: The DBLSPACE /CHKDSK command will repair, or attempt to repair, the "other"
	error.
	
	Additional query words: 6.0 double space cross link crosslink
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
