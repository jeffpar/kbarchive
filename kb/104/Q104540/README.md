---
layout: page
title: "Q104540: CHKDSK Finds Lost Clusters When ScanDisk Does Not"
permalink: /kb/104/Q104540/
---

## Q104540: CHKDSK Finds Lost Clusters When ScanDisk Does Not

{% raw %}

	Article: Q104540
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CHKDSK may report lost clusters on a system when ScanDisk (or another
	third-party surface scan utility) indicates that the disk has no problems.
	
	CAUSE
	=====
	
	This situation occurs when you have corruption in the volume label. ScanDisk is
	ignoring clusters assigned to volume labels, while CHKDSK is not.
	
	RESOLUTION
	==========
	
	To work around this problem, run CHKDSK /F.
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
