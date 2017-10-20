---
layout: page
title: "Q97035: 4DOS and NDOS are not Fully Compatible with MemMaker"
permalink: /kb/097/Q97035/
---

## Q97035: 4DOS and NDOS are not Fully Compatible with MemMaker

{% raw %}

	Article: Q97035
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Third-party command interpreters, such as JP Software's 4DOS and Symantec's
	NDOS, are not fully compatible with MemMaker.
	
	Because MemMaker does not know which command interpreter you are using, if you
	have a CALL command in your AUTOEXEC.BAT file, MemMaker uses COMMAND.COM and the
	following command during the sizing process:
	
	     COMMAND.COM /C=C:\NETWARE\INSTNET.BAT
	
	This causes problems if your current command interpreter is not COMMAND.COM.
	
	WORKAROUND
	==========
	
	To work around this problem, use COMMAND.COM for your command interpreter when
	you run MemMaker. To do this, place the following line in your CONFIG.SYS file,
	replacing the current SHELL command, and restart your computer:
	
	     shell=c:\dos\command.com c:\dos\ /e:1024 /p
	
	NOTE: If you use this SHELL command, make sure COMMAND.COM is in your \DOS
	directory.
	
	The 4DOS and NDOS products included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 6.22 6.0 3rdparty 6.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
