---
layout: page
title: "Q68990: MS-DOS Shell Spawns Two COMMAND.COMs"
permalink: /kb/068/Q68990/
---

## Q68990: MS-DOS Shell Spawns Two COMMAND.COMs

{% raw %}

	Article: Q68990
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.0,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you spawn a COMMAND.COM using the Command Prompt option in the program list
	of MS-DOS Shell and run "MEM /P" if using MS-DOS version 5.0 or "MEM /PROGRAM"
	with earlier versions, it shows that you are running two copies of COMMAND.COM.
	Why does it do this?
	
	MORE INFORMATION
	================
	
	When you create and run a program item in MS-DOS Shell's program list, Shell
	spawns a command processor to run the program that is listed in the program
	item; therefore, when you have a program item that runs COMMAND.COM, it spawns a
	command processor to run COMMAND.COM, and you have two copies of COMMAND.COM
	running. This also occurs when you run COMMAND.COM from the file list.
	
	You can avoid running two copies of COMMAND.COM by using the SHIFT+F9 command to
	spawn a command processor instead of the program item in the program list.
	
	
	Additional query words: 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401
	Version           : MS-DOS:4.0,4.01,5.0
	
	=============================================================================
	

{% endraw %}
