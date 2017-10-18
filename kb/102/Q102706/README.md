---
layout: page
title: "Q102706: PRB: SECONDS() Function Is Not Reset at 12:00 A.M. (Midnight)"
permalink: kb/102/Q102706/
---

## Q102706: PRB: SECONDS() Function Is Not Reset at 12:00 A.M. (Midnight)

	Article: Q102706
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.60,2.60a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.60, 2.60a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the system clock goes past 12:00 A.M. while FoxPro for Windows is running,
	the value returned by the SECONDS() function may not be reset properly.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The value returned by the SECONDS() function should be the number of seconds
	that have elapsed since midnight. The SYS(2) function also returns the number of
	seconds that have elapsed since midnight, but it rounds the value to the nearest
	second.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start FoxPro for Windows.
	
	2. In the Command window, issue the following command:
	
	
	  ? SECONDS()
	
	
	3. In the Command window, issue the following command:
	
	
	  ? SYS(2)
	
	
	4. Use the Date/Time icon in the Windows Control Panel to change the system
	  clock to 11:59:00 P.M.
	
	5. Switch back to FoxPro and wait until the time reaches 12:00 A.M.
	
	6. Repeat steps 2 and 3.
	
	When the system clock reaches midnight, the value returned by the SYS(2) function
	is reset to 0, but value returned by the SECONDS() function is not.
	
	NOTE: Both SYS(2) and SECONDS() are reset to 0 at midnight in FoxPro 2.5a for
	MS-DOS.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.60,2.60a,3.0
	
	=============================================================================
	
