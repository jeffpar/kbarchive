---
layout: page
title: "Q106140: Cannot Run 32-Bit File Access with NE2000 ODI Driver"
permalink: /kb/106/Q106140/
---

## Q106140: Cannot Run 32-Bit File Access with NE2000 ODI Driver

{% raw %}

	Article: Q106140
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load the Novell NE2000.COM ODI driver and use 32-bit file access with
	the real-mode mapper (RMM.D32), you may experience a five- second delay when
	loading applications from the Windows GUI interface. (This delay does not occur
	when loading MS-DOS-based applications from an MS-DOS virtual machine [VM].)
	This may also cause Windows for Workgroups to load more slowly.
	
	CAUSE
	=====
	
	This delay occurs because the NE2000.COM driver is causing RMM.D32 to generate a
	time-out, and the time-out value is hard coded to be five seconds. Once the
	application loads, it then runs as fast as it should because it has been stored
	in cache memory (VCACHE.386).
	
	This problem is in the NE2000.COM MLID and only occurs when IPXODI, which is
	needed to access NetWare servers, is loaded.
	
	The NE2000 MLIDs known to cause this problem are from the Novell DOSUP7 client
	files dated 1/18/93, DOSUP8 client files dated 7/30/93, and version 1.34 dated
	6/3/91.
	
	
	Additional query words: 3.11 vfat RMM Slow idle scsi unsupported incompatible hangs locks
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
