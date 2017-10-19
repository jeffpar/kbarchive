---
layout: page
title: "Q63267: FIX: PWB 1.0 menukey Switch Resets to ALT Shelling Out to MS-DOS"
permalink: /kb/063/Q63267/
---

## Q63267: FIX: PWB 1.0 menukey Switch Resets to ALT Shelling Out to MS-DOS

	Article: Q63267
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0; OS/2:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, version 1.0 
	- Microsoft Programmer's Workbench for OS/2, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the "menukey" switch in the MS-DOS version of the Programmer's Workbench
	(PWB) version 1.0 is set to anything other than ALT (which is the default), it
	will be redefined to the ALT key after shelling out to DOS. Thus, the menukey
	switch will lose its assignment any time you choose Compile, Run Program, Debug
	Program, or DOS Shell.
	
	RESOLUTION
	==========
	
	To work around this problem, you can use the Restart command to invoke a macro
	that redefines the menukey to the desired value each time you return from a DOS
	SHELL command, which will then keep ALT from activating the menu. For example,
	to cause F9 to always be reset as the only menukey, put the following line in
	the PWB tagged section of the TOOLS.INI file:
	
	  " restart:= arg "menukey:F9" assign " (without the quotation marks)
	
	Since the Restart command, if it exists in TOOLS.INI, is invoked automatically
	when returning from a SHELL command, this method guarantees that the key
	assignment will always remain consistent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB version 1.0. This problem
	was corrected in PWB version 1.1.
	
	MORE INFORMATION
	================
	
	The menukey switch determines which keystroke activates the PWB main menu bar.
	The ALT key is normally used for this, but menukey can be redefined to any
	keystroke. For example, menukey is automatically defined to F9 if you choose
	Brief Editor emulation when installing the Programmer's WorkBench.
	
	Whenever you invoke any function (such as Build) that goes out to DOS for
	execution and then returns, the menukey switch is reset to ALT, so that both ALT
	AND the user-defined keystroke invoke the menu.
	
	Additional query words: 1.00 buglist1.00 fixlist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB100OS2
	Version           : MS-DOS:1.0; OS/2:1.0
	Solution Type     : kbfix
	
	=============================================================================
	
