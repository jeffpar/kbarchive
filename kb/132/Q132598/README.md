---
layout: page
title: "Q132598: Must Restart Computer Before Running Grolier Encyclopedia"
permalink: /kb/132/Q132598/
---

## Q132598: Must Restart Computer Before Running Grolier Encyclopedia

{% raw %}

	Article: Q132598
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Grolier Multimedia Encyclopedia and instruct Setup to restore
	the Msacm.dll and Msacm.drv files that it replaced, you may receive the
	following error message if you try to start the Grolier Multimedia Encyclopedia
	without first restarting Windows 95:
	
	  GME95 Caused a Segment Load Failure in Module KRNL386.EXE
	
	CAUSE
	=====
	
	On many computers, the Msacm.dll file is loaded by Windows 95 by default when it
	starts. The Grolier Multimedia Encyclopedia Setup program overwrites and then
	restores this file while it is resident in memory, causing the copy of the file
	that is resident in memory to become unstable.
	
	RESOLUTION
	==========
	
	Restart Windows 95 before running the Grolier Multimedia Encyclopedia for the
	first time.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
