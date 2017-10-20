---
layout: page
title: "Q107525: Drive Letters Swapped After Converting Stacker Drives"
permalink: /kb/107/Q107525/
---

## Q107525: Drive Letters Swapped After Converting Stacker Drives

{% raw %}

	Article: Q107525
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After converting several Stacker-compressed drives to DoubleSpace- compressed
	drives, your drive letter assignments may be incorrect. For example, the drive
	letters for a removable media drive and its host drive may be reversed.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	To work around this problem, use the DBLSPACE /HOST command to set the correct
	drive letters for your drives.
	
	For more information on using the DBLSPACE /HOST command, type "help dblspace
	/host" (without the quotation marks) at the MS-DOS command prompt and then press
	ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS Conversion Disk for Users
	of Stacker. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 6.20 Bernoulli
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
