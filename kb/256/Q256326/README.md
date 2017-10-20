---
layout: page
title: "Q256326: Cluster Server Cannot Use Disk Beyond Device Number 25"
permalink: /kb/256/Q256326/
---

## Q256326: Cluster Server Cannot Use Disk Beyond Device Number 25

{% raw %}

	Article: Q256326
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using an array of 30 disks, Disk Administrator can access,
	partition, format, and assign drive letters to any drive in the system. With
	Microsoft Cluster Server installed, you can use any disk provided that the disk
	has a device number in the range of from 0 to 25.
	
	CAUSE
	=====
	
	This limitation is caused by a hard-coded value for the disk resource DLL, which
	should be set to maximum disks (which equates to 100).
	
	RESOLUTION
	==========
	
	To resolve this issue, apply the hotfix described in the following Microsoft
	Knowledge Base article:
	
	  Q251007 Some Cluster Disks Are Not Available After Installing SP6
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This fix also includes the modifications described in the following Microsoft
	Knowledge Base article:
	
	  Q252974 Error Message: System Process - Lost Delayed-Write Data
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
