---
layout: page
title: "Q97671: ECR Cannot Be Decreased Beyond a Certain Range"
permalink: /kb/097/Q97671/
---

## Q97671: ECR Cannot Be Decreased Beyond a Certain Range

{% raw %}

	Article: Q97671
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The estimated compression ratio (ECR) cannot be decreased beyond a certain range
	if a drive has become too fragmented.
	
	CAUSE
	=====
	
	This situation occurs when there is a large unused section in the file
	allocation table (FAT) and a used cluster exists at the very end. If you could
	reduce the ECR below the value DoubleSpace limits you to, the last cluster would
	be truncated by the edge of the new FAT table size.
	
	WORKAROUND
	==========
	
	To work around this problem, run Microsoft Defragmenter (Defrag) on your
	compressed drive.
	
	Additional query words: 6.00 defrag chopped cut off double space 6.20 dblspace ecr
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
