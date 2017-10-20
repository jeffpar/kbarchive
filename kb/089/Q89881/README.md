---
layout: page
title: "Q89881: WinMeter Abnormally High with Some Programs"
permalink: /kb/089/Q89881/
---

## Q89881: WinMeter Abnormally High with Some Programs

{% raw %}

	Article: Q89881
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WinMeter application that comes with Windows for Workgroups may report
	abnormally high CPU activity when some programs are run, including the following
	programs:
	
	- 3.10 3.11 WIN.SRC Spooler Print ManagerMS-DOS virtual machine (VM) (that is,
	  COMMAND.COM)
	
	- POINTER.EXE from the Microsoft Mouse software
	
	- Norton Desktop for Windows
	
	These programs make it appear that the system is busier then it really is. Try
	disabling the program(s), then check WinMeter again.
	
	MORE INFORMATION
	================
	
	WinMeter reports CPU performance by monitoring CPU idle cycles. If a program
	does not allow the CPU to return to idle after issuing an instruction, WinMeter
	shows higher levels of activity than normal.
	
	One such application is COMMAND.COM. Keyboard polling in MS-DOS creates an
	instructional loop that causes the CPU to rarely return to a completely idle
	state. The behavior of WinMeter is therefore determined by the applications that
	are running on the system. This behavior is normal and expected. WinMeter is
	merely reporting the behavior of the applications.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Windows in 386 enhanced mode.
	
	2. From the Accessories group, start WinMeter.
	
	3. From the Main group, start MS-DOS Prompt.
	
	4. Press ALT+ENTER to create an MS-DOS window.
	
	5. WinMeter shows higher activity, possibly as high as 100 percent. It remains
	  that way while the MS-DOS window is the active window.
	
	Changing the foreground and background priority values of the MS-DOS command
	prompt and the Exclusive execution option has no effect on the program's
	behavior.
	
	However, if you do select the MS-DOS virtual machine to run in the background,
	WinMeter shows higher than normal activity whenever the MS-DOS window is
	maximized but not highlighted, as well as minimized and highlighted.
	
	Additional query words: 3.10 3.11 Max ndw 3rdparty win meter
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
