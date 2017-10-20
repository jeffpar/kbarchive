---
layout: page
title: "Q69485: COMPAQ DESKPRO Unable to Read Extended DOS Partitions"
permalink: /kb/069/Q69485/
---

## Q69485: COMPAQ DESKPRO Unable to Read Extended DOS Partitions

{% raw %}

	Article: Q69485
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The COMPAQ DESKPRO 286 requires the ENHDISK.SYS device driver installed to read
	extended COMPAQ DOS partitions. The CONFIG.SYS should have the line:
	
	     DEVICE=ENHDISK.SYS
	
	This device driver allows for the recognition of DOS partitions on a physical
	hard drive that is larger than 32 MB.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding the product's performance
	or reliability.
	
	Additional query words: 3rdparty WIN30 3.00 3.0 3.00a 3.0a dwsa Compaq-DOS Compac KBHW MS-DOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
