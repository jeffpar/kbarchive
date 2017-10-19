---
layout: page
title: "Q157534: XCLN: Memory Valet Utility to Correct &quot;Out of Memory&quot; Errors"
permalink: /kb/157/Q157534/
---

## Q157534: XCLN: Memory Valet Utility to Correct &quot;Out of Memory&quot; Errors

	Article: Q157534
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange on 16-bit Windows platforms (Windows 3.x Windows
	for Workgroups 3.1x) you may receive unexplained "Out of Memory" and
	"Insufficient Memory" error messages. In some circumstances, a utility called
	"Memory Valet" can prevent these errors.
	
	This utility is available from Microsoft and should only be used after normal
	troubleshooting steps have failed. See the following Microsoft Knowledge Base
	articles for initial client troubleshooting:
	
	  Q151359 XCLN: Out of Memory Errors Starting Schedule+ After Exchange
	
	  Q150156 XCLN: Cannot Send from Word When Exchange Client Not Running
	
	  Q112676 Troubleshooting Insufficient Memory Errors
	
	MORE INFORMATION
	================
	
	The utility Memory Valet 2.0 is included in Application Note WG1137. This
	utility is available from Microsoft Product Support and can be mailed to
	customers who continue to have problems with out of memory errors after
	following the troubleshooting steps listed in the articles above.
	
	This application note is not available through electronic services.
	
	
	Memory Valet can help in situations in which there is not enough memory below
	640K in the Windows system virtual machine to create a task database (TDB). In
	such a situation, the following problems can occur:
	
	- When you try to run an application, you receive the message "Out of memory.
	  Close one or more applications and try again."
	
	- An application calls WinExec to launch a component of itself and then fails.
	
	- An OLE or dynamic data exchange (DDE) session fails to start the server
	  application.
	
	- When you try to run an application, you receive the message "Too many files
	  open, please close one or more files," and increasing file handles does not
	  correct the problem. (This is a rare occurrence and should only affect
	  applications that require more than 20 open file handles.)
	
	Memory Valet contains two components: the executable file (Memvalet.exe) and the
	Control Panel utility (Memval.cpl). Memval.cpl lets you configure Memory Valet
	and then displays the current state of the low-memory area. By using Memval.cpl,
	you can determine how much low-memory space is available, the size of the
	largest free block, and how many TDBs can fit in low memory given its current
	state.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
