---
layout: page
title: "Q107471: WFWG 3.11 Err Msg: Segment Load Failure"
permalink: /kb/107/Q107471/
---

## Q107471: WFWG 3.11 Err Msg: Segment Load Failure

{% raw %}

	Article: Q107471
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open or copy a file larger than 2 megabytes (MB), you may
	receive one of the following error messages:
	
	  Segment Load Failure
	
	-or-
	
	  Insufficient Memory
	
	CAUSE
	=====
	
	These errors occur if both of the following conditions exist:
	
	- You are using a permanent swap file without 32-bit disk access enabled. This
	  causes paging to occur through MS-DOS.
	
	  -and-
	
	- You are using 32-bit file access. Since 32-bit disk access is disabled, the
	  real-mode mapper (RMM.D32) is used to provide 32-bit file services.
	
	These errors do not occur if the permanent swap file is on a drive with 32-bit
	disk access enabled or if 32-bit file access is disabled.
	
	WORKAROUND
	==========
	
	To work around these errors do one of the following:
	
	- If your hard disk controller is WD1003 compatible, enable 32-bit disk
	  access.
	
	  -or-
	
	- Disable 32-bit file access.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Bases as it becomes available.
	
	MORE INFORMATION
	================
	
	This size of the file needed to trigger this error is not always 2 MB. The limit
	is 512 multiplied by the size of the allocation unit for the drive where the
	target file resides. The allocation unit size is commonly 4096 bytes, thus the
	apparent 2 MB limit. In cases in which the allocation unit size is different,
	the limit is also different.
	
	Additional query words: 3.11 errors out of memory vfat fastdisk incompatible incompatibility doesn't work not working
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
