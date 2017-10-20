---
layout: page
title: "Q109250: Supplemental Disk GRAFTABL.COM ErrMsg: Incorrect DOS Version"
permalink: /kb/109/Q109250/
---

## Q109250: Supplemental Disk GRAFTABL.COM ErrMsg: Incorrect DOS Version

{% raw %}

	Article: Q109250
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After running GRAFTABL.COM from the MS-DOS 6.2 Supplemental Disk, you receive
	the following error message:
	
	  Incorrect DOS version
	
	CAUSE
	=====
	
	This problem occurs because the MS-DOS 6.2 Supplemental Disk removed
	"GRAFTABL.COM 5.00" from the MS-DOS 6.2 SETVER table and failed to add
	"GRAFTABL.COM 6.00."
	
	RESOLUTION
	==========
	
	To work around this problem, add GRAFTABL.COM back to the SETVER table. For
	example, type "setver graftabl.com 6.00" (without the quotation marks) at the
	MS-DOS command prompt and then press ENTER.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

{% endraw %}
