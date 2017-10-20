---
layout: page
title: "Q104591: Executing REXX CMD Files with the LAN Manager AT Utility"
permalink: /kb/104/Q104591/
---

## Q104591: Executing REXX CMD Files with the LAN Manager AT Utility

{% raw %}

	Article: Q104591
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	REXX was originally a VM/SP batch language used on IBM Virtual Machine (VM)
	systems. It is shipped with LAN Manager for OS/2. Command files written in REXX
	can be executed by the LAN Manager AT utility or can be run manually.
	
	Here are suggestions for porting REXX applications to NT.
	
	
	1. Copy the OS/2 1.3 (not OS/2 2.0) CMD.EXE file to a directory on your NT
	  machine.
	
	2. Copy the OS/2 1.3 (not OS/2 2.0) OS2\DLL\REXX*.DLL DLLs to a directory in the
	  Os2LibPath statement on your NT machine.
	
	3. Run the OS/2 1.3 CMD.EXE file.
	
	4. Run a REXX script. The REXX file should be named *.CMD and its first two
	  characters must be slash asterisk (/*). The first REXX file you run won't
	  work. Re-run it and it should run correctly.
	
	NOTE: Testing has determined that the PUSH and PULL commands generate error
	messages.
	
	Additional query words: 2.00 2.10 2.10a 2.20 2.0 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
