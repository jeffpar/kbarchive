---
layout: page
title: "Q97041: 32-Bit Disk Access Can Degrade Hard Drive Performance"
permalink: /kb/097/Q97041/
---

## Q97041: 32-Bit Disk Access Can Degrade Hard Drive Performance

{% raw %}

	Article: Q97041
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Disabling 32-bit disk access can improve hard drive performance if you have a
	system BIOS or hard drive controller designed and optimized specifically for
	your hard drive.
	
	MORE INFORMATION
	================
	
	Some hard drive controllers have built-in optimizing routines that are similar
	to those that the 32-Bit Disk Access system uses. In these cases, 32-bit disk
	access can degrade hard drive performance because some optimization routiness
	may occur multiple times for each disk operation. This results in slower overall
	disk access.
	
	Consult your hardware documentation to see if your hard drive controller or BIOS
	provides any built-in disk access optimizations that may make the use of 32-bit
	disk access unnecessary. Check your Windows documentation for the advantages of
	using 32-bit disk access.
	
	Additional query words: 3.1 3.11 3.10 win32
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
