---
layout: page
title: "Q76831: SMARTDRV.SYS Reports &quot;Bad or Missing Command Interpreter&quot;"
permalink: /kb/076/Q76831/
---

## Q76831: SMARTDRV.SYS Reports &quot;Bad or Missing Command Interpreter&quot;

	Article: Q76831
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDRV.SYS may report "bad or missing command interpreter" and hang during
	start up if there is a problem in extended memory. The symptoms or possible
	causes are:
	
	- HIMEM.SYS does not load properly.
	
	- The following line in the CONFIG.SYS:
	
	     device=c:\dos\smartdrv.sys <InitCacheSize>
	
	  could give "bad or missing command interpreter" error message if InitCacheSize
	  is set to some value.
	
	MORE INFORMATION
	================
	
	Possible Solutions
	------------------
	
	- Use a memory diagnostic program to check the memory and replace memory chips
	  if necessary.
	
	- Check with the hardware manufacturer to make sure the motherboard is
	  compatible with HIMEM.SYS. Some motherboards such as GENE II or HAWK from
	  Gateway 2000 are not compatible with HIMEM.SYS.
	
	WORKAROUND
	==========
	
	- Load SMARTDRV.SYS with no cache size at all.
	
	- Load other drivers that take up extended memory first, such as RAMDRIVE.SYS.
	  Because RAMDRIVE.SYS will not use the memory immediately, it should work to
	  use it to block the bad extended memory. SMARTDRV.SYS should be loaded after
	  that.
	
	If the above workarounds or solutions don't work, you may want to use another
	extended memory manager.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
