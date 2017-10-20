---
layout: page
title: "Q259855: HOWTO: Enable Debug Prints in IEEE 1394 Drivers"
permalink: /kb/259/Q259855/
---

## Q259855: HOWTO: Enable Debug Prints in IEEE 1394 Drivers

{% raw %}

	Article: Q259855
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDK kbADO260fixkbfaq
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Institute of Electrical and Electronics Engineers (IEEE) 1394 drivers,
	1394Bus.sys and Ohci1394.sys, print debug messages to the kernel debugger
	depending upon the current debug level. By enabling debug message printing, you
	can see all the debug messages that are being printed by the driver. These debug
	messages are very useful for developers who are building their driver or
	application around the 1394 drivers.
	
	MORE INFORMATION
	================
	
	The current debug level is stored in a global variable that is defined in the
	respective driver. This value must be changed in order to see the debug
	messages. By default, this value is set to 0 (zero) and can be increased to a
	larger value. Larger values result in more verbose messages.
	
	The debug message is available only in checked build binaries. The checked build
	version of Windows 2000 should be used to get the debug messages. To get the
	debug messages in the retail build of Windows 2000, replace the 1394Bus.sys and
	Ohci1394.sys files with checked build binaries. Also, the symbols are required
	in the host computer to change the debug level.
	
	Changing the Debug Level for 1394Bus.sys
	----------------------------------------
	
	This can be done by typing the following command in the kernel debugger:
	
	  "ed 1394bus!BusDebugLevel 2" (without the quotation marks)
	
	  -or-
	
	  "ed 1394bus!BusDebugLevel" (without the quotation marks)
	
	This will print the current value and prompt for a new value as follows:
	
	  
	
	  0xBFF94CFC  00000000> 2
	  0xBFF94D00  bff94e20>
	
	Type the new value, and then press ENTER for the next value. The command sets the
	new debug level to 2.
	
	Changing the Debug Level for Ohci1394.sys
	-----------------------------------------
	
	This can be done by typing the following command in the kernel debugger:
	
	  "ed ohci1394!OhciDebugLevel 2" (without the quotation marks)
	
	  -or-
	
	  "ed ohci1394!OhciDebugLevel" (without the quotation marks)
	
	This will print the current value and prompt for a new value as follows:
	
	  
	
	  0xBFF94CFC  00000000> 2
	  0xBFF94D00  bff94e20>
	
	Type the new value, and then press ENTER for the next value. The command sets the
	new debug level to 2.
	
	When you change the value, the following error message may appear:
	
	  Unable to modify memory
	
	Or, instead of printing the current value, question marks are printed, as
	follows:
	
	  
	
	  > ed ohci1394!OhciDebugLevel
	  0x00000001  ????????>
	
	This happens when the expression evaluator is set to the wrong type. To change
	this, type the following command:
	
	  ".opt masmeval on" (without the quotation marks)
	
	To check the current setting of the expression evaluator, use the following
	command:
	
	  ".opt masmeval" (without the quotation marks)
	
	This command displays either "MasmEval off" or "MasmEval on", which indicates the
	state of expression evaluator.
	
	REFERENCES
	==========
	
	For additional information on Debug printing implementation and the expression
	evaluator, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q90082 INFO: Debug Printing Implementation in the Device Drivers
	
	  Q180577 Windows NT Kernel WinDbg Message Unable to modify memory
	
	Additional query words: IEEE 1394 ohci1394 debug
	
	======================================================================
	Keywords          : kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDK kbADO260fix kbfaq
	Component         : DDK
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : :2000
	Hardware          : x86
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
