---
layout: page
title: "Q90794: SMARTDRV.EXE Hangs After CTRL+ALT+DEL"
permalink: /kb/090/Q90794/
---

## Q90794: SMARTDRV.EXE Hangs After CTRL+ALT+DEL

{% raw %}

	Article: Q90794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use SMARTDrive version 4.0 with either of the two expanded memory
	managers listed below, your machine may stop responding (hang) after you press
	CTRL+ALT+DEL to restart it. If you enable the SMARTDrive Write cache, the
	elements in the cache are successfully written to the hard disk.
	
	  Versions prior to 5.09 of Compaq's CEMM.EXE
	  Version 4.20.06x or 4.33.06x of EMM386.EXE, which ships with MS-DOS 5.0
	
	To correct this problem, use one of the following methods:
	
	- Use Compaq's CEMM.EXE version 5.09.
	
	  -or-
	
	- Use EMM386.EXE version 4.44, which is included with the Windows 3.1 package.
	
	MORE INFORMATION
	================
	
	CEMM.EXE version 5.09 also corrects the following problems:
	
	- LTE LITE computer systems stop because of a video ROM conflict.
	
	- The inability to obtain CEMM statistics when a program hooks the interrupt
	  67h after CEMM has loaded.
	
	CEMM.EXE is manufactured by Compaq, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.10 3.11 flush lazy write hanging hang warm boot up
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
