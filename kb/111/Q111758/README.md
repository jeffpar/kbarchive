---
layout: page
title: "Q111758: Stacker Conversion ErrMsg: Dblspace Was Not Able to Convert..."
permalink: /kb/111/Q111758/
---

## Q111758: Stacker Conversion ErrMsg: Dblspace Was Not Able to Convert...

{% raw %}

	Article: Q111758
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DoubleSpace may not be able to convert a Stacker 3.0 compressed drive if the
	stacked volume has a filename other than STACVOL.DSK. If the stacked volume is
	not named STACVOL.DSK, you may receive the following error message:
	
	  Dblspace was not able to convert your Stacker drives to dblspace format
	
	CAUSE
	=====
	
	The conversion process searches specifically for the stacked volume named
	STACKVOL.DSK.
	
	RESOLUTION
	==========
	
	To correct this problem, rename the stacked volume STACVOL.DSK. In addition,
	change the reference to the stacked volume in the CONFIG.SYS file. For example:
	
	     device=c:\stacker\stacker.com c:\stackvol.dsk
	
	MORE INFORMATION
	================
	
	The Stacker product included here is manufactured by STAC Electronics, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.00 6.20 convert convert.bat conversion dblspace doublespace format stack
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	

{% endraw %}
