---
layout: page
title: "Q85685: MS-DOS Err Msg: Not Ready Reading Drive A"
permalink: /kb/085/Q85685/
---

## Q85685: MS-DOS Err Msg: Not Ready Reading Drive A

{% raw %}

	Article: Q85685
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Sysgen's Omnibridge controller card driver ONMIBRG.SYS version 3.3 or
	earlier with Windows version 3.1, the following MS-DOS error message is
	displayed after you type "win" (without the quotation marks) to execute
	Windows:
	
	  Not ready reading drive A
	  Abort, Retry, Fail
	
	Same problem was reported with Sysgen driver named BRIDGE_B.DRV
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	You can either updated the driver to version 3.5 or later (updates are available
	from Sysgen), or you can follow this procedure:
	
	1. Insert a disk in drive A.
	
	2. Retry several times.
	
	3. Remark out the OMNIBRG.SYS driver.
	
	MORE INFORMATION
	================
	
	The Sysgen Omnibridge is a floppy drive controller card that allows high-density
	floppy support on XTs and above for up to four floppy drives. It can be the
	primary or secondary controller.
	
	The Sysgen products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability. KBCategory: kbhw kberrmsg kb3rdparty
	KBSubcategory: win31 winboot
	
	Additional query words: 3.1 3.11 3.10 omni disk Sisgen
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
