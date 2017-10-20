---
layout: page
title: "Q119118: Windows 95 Fails to Install on an 80386 Computer"
permalink: /kb/119/Q119118/
---

## Q119118: Windows 95 Fails to Install on an 80386 Computer

{% raw %}

	Article: Q119118
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 95 Setup program fails or displays the following error message:
	
	  Setup error B1: Setup has detected an 80386 processor that is not compatible
	  with this version of Windows. Before you can run this version of Windows, you
	  need to upgrade your processor. Contact your computer manufacturer for more
	  information.
	
	CAUSE
	=====
	
	Intel 386 microprocessors dated before April 1987 are known as B1 stepping
	chips. These chips are known to introduce random math errors when performing
	32-bit operations, thus making them incompatible with Windows 95.
	
	RESOLUTION
	==========
	
	If your 386 chip was manufactured before April 1987 or has a label on it that
	reads "For 16-bit operations only," contact your hardware manufacturer about a
	microprocessor upgrade.
	
	MORE INFORMATION
	================
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: MHz locks freezes hangs err msg 16 20 dx compaq deskpro 386/20 b-step
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
