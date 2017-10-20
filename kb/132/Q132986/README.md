---
layout: page
title: "Q132986: Damaged Registry Values Prevent Connection to The MS Network"
permalink: /kb/132/Q132986/
---

## Q132986: Damaged Registry Values Prevent Connection to The MS Network

{% raw %}

	Article: Q132986
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to The Microsoft Network, you may receive one of the
	following error messages:
	
	- Some files needed to connect to The Microsoft Network are missing. Please
	  reinstall The Microsoft Network. To do this, look up Add/Remove Programs in
	  the Windows Help Index.
	
	- Out of memory. There is not enough memory available to complete this task.
	  Try closing other windows and quitting other programs.
	
	CAUSE
	=====
	
	One or more of the values for the registry keys located in
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MOS\Directories
	
	may be damaged or changed. The keys and their associated values are:
	
	  Key         Correct Value
	  -----------------------------------------------------------
	  (Default)   (value not set)
	  MOS         <drive letter>:\Progra~1\TheMic~1
	  MOSBin      <drive letter>:\Progra~1\TheMic~1
	  Win         <drive letter>:\<Windows directory>
	  WinHelp     <drive letter>:\<Windows directory>\HELP
	  WinSys      <drive letter>:\<Windows directory>\SYSTEM
	
	RESOLUTION
	==========
	
	To resolve this problem, remove and reinstall The Microsoft Network. To do so,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click The Microsoft Network check box to clear it,
	  and then click Apply.
	
	4. Click The Microsoft Network check box to select it, and then click OK.
	
	When you next connect to MSN you must allow the software update to occur.
	
	NOTE: If you have the MSN 2.0 CD-ROM, you can run the Msn13.exe file to manually
	update the MSN software.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	

{% endraw %}
