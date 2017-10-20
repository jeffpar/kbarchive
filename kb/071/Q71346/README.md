---
layout: page
title: "Q71346: PIF Optional Parameters and Different Modes in Windows"
permalink: /kb/071/Q71346/
---

## Q71346: PIF Optional Parameters and Different Modes in Windows

{% raw %}

	Article: Q71346
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are in 386 enhanced mode, entries in the Optional Parameters field of a
	PIF do not appear in the same PIF when viewed in real (Windows 3.0 only) or
	standard mode. This is by design.
	
	To have an optional parameter available in all three modes, do the following:
	
	1. Set up the PIF as you normally would.
	
	2. From the Mode menu, choose the mode not currently checked.
	
	3. Choose OK to confirm the mode setting.
	
	4. Enter the optional parameters.
	
	MORE INFORMATION
	================
	
	There are two Optional Parameters fields in a PIF, one for real and standard
	mode and one for enhanced mode. This is by design. It allows different
	parameters to be passed to an MS-DOS application to match the memory management
	of Windows.
	
	For example, let's say you have an MS-DOS application that uses expanded memory.
	386 enhanced mode Windows can provide expanded memory to MS-DOS applications.
	Standard mode Windows cannot provide expanded memory. The Optional Parameters
	for the DOS application can be set to take advantage of expanded memory when run
	in enhanced mode, and to optimize use of conventional memory when run in
	standard mode.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Windows in enhanced mode.
	
	2. Open the PIF editor in the Accessories group.
	
	3. Enter "COMMAND.COM" (without the quotation marks) in the Program Filename box
	  and then enter "test" for the Optional Parameters.
	
	4. From the File menu, choose Save As and name the file "TEST.PIF."
	
	5. From the Mode menu, choose Standard.
	
	6. Choose OK to confirm the mode setting.
	
	The Optional Parameters field will now be blank.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
