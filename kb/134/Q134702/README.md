---
layout: page
title: "Q134702: PRB: &quot;VFP300.ESL: Error Code=0&quot; Error Occurs When Running .EXE"
permalink: kb/134/Q134702/
---

## Q134702: PRB: &quot;VFP300.ESL: Error Code=0&quot; Error Occurs When Running .EXE

	Article: Q134702
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a distributable Visual FoxPro .EXE file, this error occurs:
	
	  VFP300.ESL: Error Code=0
	
	This error message is followed by an unhandled exception detected error.
	
	CAUSE
	=====
	
	The Windows swap file is too small or the machine has 8 MB of RAM. NOTE: This
	error message occurs only on 16-bit operating systems such as Windows version
	3.1.
	
	WORKAROUND
	==========
	
	If your machine has at least 8 MB of RAM, increase the Windows virtual memory
	settings. If it has 8 MB of RAM, consider adding more RAM to your machine.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you install Microsoft Visual FoxPro on 16-bit operating systems (such as
	Windows version 3.1 and Windows for Workgroups version 3.11), Visual FoxPro
	installs the Win32s subsystem. Win32s requires a minimum swap file size of 10
	megabytes. Visual FoxPro distributable .EXE files have the same system
	requirements as Visual FoxPro.
	
	To increase virtual memory:
	
	1. Open the Windows Control Panel, and select the 386 Enhanced icon.
	
	2. Click the Virtual Memory button.
	
	3. Click the Change button.
	
	4. Recommended Swap File settings for Visual FoxPro are swap file of at least
	  10,000K. This is documented in the Visual FoxPro Installation Guide and
	  Master Index page 2. Permanent swap files require contiguous space, a utility
	  such as DEFRAG.EXE, that ships with MS-DOS version 6.x may be used to
	  defragment the drive and offer larger permanent swap file sizes.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a Visual FoxPro distributable .EXE file.
	
	2. If necessary, run the Setup Wizard to create distribution disks for the
	  application.
	
	3. Install the application on a 16-bit Windows platform such as Windows version
	  3.1.
	
	4. Change the virtual memory settings on the computer so that a swap file of
	  512K is created.
	
	5. After restarting Windows, attempt to execute the distributable .EXE file. At
	  this point, the error occurs.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
