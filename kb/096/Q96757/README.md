---
layout: page
title: "Q96757: TSR Causes System to Hang When Running MS-DOS Editor or QBASIC"
permalink: /kb/096/Q96757/
---

## Q96757: TSR Causes System to Hang When Running MS-DOS Editor or QBASIC

	Article: Q96757
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you bring up an Int 16-based terminate-and-stay-resident (TSR) program when
	MS-DOS Editor or QBASIC is running, your computer stops responding (hangs).
	
	NOTE: The Banyan VINES MS-DOS redirector uses INT 16 calls.
	
	This problem occurs when the TSR loads a 25-line character display image over
	MS-DOS Editor or QBASIC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of MS-DOS Editor
	and QBASIC included with MS-DOS versions 6.0, 6.2, and 6.21. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
