---
layout: page
title: "Q119072: DoubleSpace/DriveSpace Limits on 1028 MB to 1153 MB Partitions"
permalink: /kb/119/Q119072/
---

## Q119072: DoubleSpace/DriveSpace Limits on 1028 MB to 1153 MB Partitions

{% raw %}

	Article: Q119072
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you are compressing a disk using DriveSpace or DoubleSpace, you receive the
	following error message:
	
	  DriveSpace ran out of free space and some files were left on the newly
	  created drive.
	
	CAUSE
	=====
	
	If you run DoubleSpace or DriveSpace on a disk with a partition size between
	1028 megabytes (MB) and 1153 MB, you cannot create compressed drives that reach
	the standard limit of 512 MB.
	
	WORKAROUND
	==========
	
	To work around this situation, you must change the partition size to less than 1
	gigabyte before you run DoubleSpace or DriveSpace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in DoubleSpace and DriveSpace. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Compressed volume files (CVFs) that are created on partitions between 1028 MB
	and 1153 MB cannot be increased. Additionally, the maximum estimated compression
	ratio (ECR) that can be entered is 1.5 to 1. You can usually make the CVF
	smaller and decrease the ECR.
	
	If all the data cannot be compressed, it remains available on the host drive.
	
	Following are examples of the maximum size of the CVF for a number of partition
	sizes between 1028 MB and 1153 MB:
	
	  Partition   CVF
	  ---------------
	   1028      11
	   1034      16
	   1030      33
	   1040      50
	   1050      88
	   1070     145
	   1080     168
	   1090     184
	   1144     341
	
	NOTE: All values are in megabytes.
	
	For more information about CVF size limits, query on the following words in the
	Microsoft Knowledge Base:
	
	  " dblspace and limitation and size " (without the quotation marks)
	
	For more information about partitioning drives, see the "Repartitioning Your Hard
	Disk" section in following article in the Microsoft Knowledge Base:
	
	  Q106423 Repartitioning Your Hard Disk to Upgrade to 6.0 or 6.2
	
	Additional query words: appnote 6.00 6.20 1.1GB max logical limitation resize eide lba 1gb
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
