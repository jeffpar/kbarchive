---
layout: page
title: "Q75940: BUG: VKD_API_Force_Key Can Cause Windows Crash"
permalink: kb/075/Q75940/
---

## Q75940: BUG: VKD_API_Force_Key Can Cause Windows Crash

	Article: Q75940
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows-based application calls the virtual keyboard device (VKD) service
	VKD_API_Force_Key to simulate keystrokes into a virtual 8086-mode MS-DOS session
	without requesting a simulated change in shift state, Windows crashes.
	
	RESOLUTION
	==========
	
	This problem may be avoided by either of two methods:
	
	- Request a change in shift state each time this service is used
	
	-or-
	
	- Modify the VKD to eliminate the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	The remainder of this article describes the required changes to the VKD source
	code to enable this service to work correctly without requesting a change in the
	shift state.
	
	If VKD_API_Force_Key is called with DX set to -1 (which indicates that this API
	should not make a simulated change in shift state), the logic flow is such that
	the scan code (AL register) and the repeat count (ECX register) will not get
	initialized. This causes a keyboard hardware buffer overflow and a system
	crash.
	
	To correct this situation, make the following three changes to the VKD source
	module VKD.ASM, which is included with the Windows Device Development Kit (DDK)
	in the \VXD\VKD directory:
	
	1. Move the label at line 2293 (afk_no_ss:) up to line 2289, to include the
	  lines that set the register values for the AL and ECX registers.
	
	2. Insert a new label name (such as afk_put_keys:) at line 2293.
	
	3. Change line 2302 to loop to the new label. This might read:
	
	        loop    afk_put_keys
	
	After making these changes to VKD.ASM, perform these four steps:
	
	1. Build the VKD virtual driver (this will create a VKD.386 file).
	
	2. Copy VKD.386 to the Windows system directory (by default this is the
	  \WINDOWS\SYSTEM directory).
	
	3. Modify the SYSTEM.INI file to change the "keyboard=*vkd" under the [386enh]
	  section to read:
	
	  keyboard=VKD.386
	
	4. Exit Windows and restart. The corrected VKD will be loaded.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	
	=============================================================================
	
