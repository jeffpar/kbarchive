---
layout: page
title: "Q135944: Problems Using WISE Setup Toolkit When System Agent Is Running"
permalink: /kb/135/Q135944/
---

## Q135944: Problems Using WISE Setup Toolkit When System Agent Is Running

	Article: Q135944
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
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
	
	When you are installing a Windows-based program that uses Great Lakes Software's
	WISE Setup Toolkit, you may receive a general protection (GP) fault error
	message, or an invalid page fault error message.
	
	The following sample error message was encountered installing NavCIS version 1.62
	for Windows:
	
	  INSTALL caused a general protection fault in module ~GLC1164.TMP at
	  0002:00000f0c.
	
	CAUSE
	=====
	
	These errors are caused by a problem in the WISE Setup Toolkit version 3.0g and
	earlier. The errors seem to occur more frequently if you are using System Agent,
	but may occur even if you are not using System Agent.
	
	RESOLUTION
	==========
	
	You may be able to work around this problem by temporarily disabling System
	Agent. To disable System Agent and install your program, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click System Agent.
	
	2. On the Advanced menu, click Stop Using System Agent.
	
	3. When you are prompted to confirm that you want to stop using System Agent,
	  click Yes.
	
	4. Install your program following the instructions included with that program.
	
	5. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click System Agent.
	
	6. When you are prompted whether you want to run System Agent, click Yes.
	
	NOTE: It has been reported that this problem is fixed in version 3.0h of the WISE
	Setup Toolkit. You may want to contact your software vendor to inquire about
	obtaining a version of your program that uses the updated toolkit.
	
	MORE INFORMATION
	================
	
	The following programs use the WISE Setup Toolkit and have been reported to
	exhibit the problem described in this article:
	
	- EDrive Movie Viewer version 2.1
	
	- Galt Software Hang Em
	
	- NavCIS for Windows SE version 1.62
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: install gpf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
