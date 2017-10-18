---
layout: page
title: "Q135953: 3D Landscape Displays Incorrectly When System Agent Is Running"
permalink: kb/135/Q135953/
---

## Q135953: 3D Landscape Displays Incorrectly When System Agent Is Running

	Article: Q135953
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	3D Landscape version 1.0 by Books That Work does not draw the screen correctly
	if System Agent is running. When System Agent is running, the landscaping
	symbols are drawn on top of each other in one corner of the screen, rather than
	at their proper locations across the screen.
	
	CAUSE
	=====
	
	This problem is caused by an incompatibility in 3D Landscape 1.0. The problem is
	more likely to occur when System Agent is running, but may occur even when
	System Agent is not running.
	
	RESOLUTION
	==========
	
	To run 3D Landscape 1.0, temporarily disable System Agent, and then run 3D
	Landscape. To do so, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click System Agent.
	
	2. On the Advanced menu, click Stop Using System Agent.
	
	3. When you are prompted to confirm that you want to stop using System Agent,
	  click Yes.
	
	4. Run 3D Landscape. When you are done using 3D Landscape, close the program.
	
	5. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click System Agent.
	
	6. When you are prompted whether you want to run System Agent, click Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : WINDOWS:95
	
	=============================================================================
	
