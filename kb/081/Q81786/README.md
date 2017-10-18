---
layout: page
title: "Q81786: Windows 3.1 Startup Group Order"
permalink: kb/081/Q81786/
---

## Q81786: Windows 3.1 Startup Group Order

	Article: Q81786
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 3.1 loads the programs in the Startup group from left to
	right. However, if you completely superimpose one icon over another, the program
	represented by the covered icon aren't executed.
	
	WORKAROUND
	==========
	
	To prevent the problem from occurring, use proper care when moving your icons.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.1 and 3.11.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this, do the following.
	
	1. Move or copy two icons into your Startup group.
	
	2. Move one icon over the other so that the second icon is no longer visible.
	  Note that Auto Arrange under the Options menu in Program Manager must be off
	  to reproduce this.
	
	3. Exit from Windows and then restart it. The application whose icon you covered
	  up isn't loaded.
	
	Additional query words: 3.1 3.10 win31 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
