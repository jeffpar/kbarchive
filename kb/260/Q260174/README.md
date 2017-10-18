---
layout: page
title: "Q260174: Special Pool Feature Prevents Creation of Memory Dump"
permalink: kb/260/Q260174/
---

## Q260174: Special Pool Feature Prevents Creation of Memory Dump

	Article: Q260174
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you turn on the special pool feature, the system may reboot to a bugcheck.
	This may occur upon every reboot and at any phase of the reboot process,
	preventing access to the system and the ability to complete a successful memory
	dump. Common memory access stop codes include, but are not limited to: Stop
	0x00000050, Stop 0x0000001E, Stop 0x0000001A and Stop 0x0000000A.
	
	CAUSE
	=====
	
	When the special pool features are used to isolate pool damage, the system
	bugchecks immediately if a driver attempts to corrupt the pool. If the driver
	attempts to corrupt the pool during the boot process, the system bugchecks. If a
	driver consistently attempts to corrupt the pool during boot, the system is not
	able to boot with the special pool feature turned on.
	
	RESOLUTION
	==========
	
	Use the following technique to allow the system to boot and complete the memory
	dump. In some situations you may have to start by removing the pool tags as in
	step 6, or by manually editing the registry and then proceeding with step 1.
	
	1. Verify that the crash recovery options are set correctly to ensure successful
	  capture of the memory dump.
	
	For additional information on memory dump, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q235496 How to Enable a Memory.dmp File Capture Using the Graphical User
	  Interface or the Registry
	
	2. Turn on (or in some cases, turn on again) the special pool as necessary.
	
	3. Restart the computer and do not log on.
	
	4. Let the computer crash and complete the dump of contents from memory to the
	  pagefile. You will see this on the screen.
	
	  Once this is complete, restart the computer. The computer will restart
	  automatically if set to do so in the crash recovery settings.
	
	5. When the computer restarts, use the "last known good" configuration option to
	  start the computer.
	
	This will remove the registry changes set by the special pool feature, restore
	the computer to its previous state, and allow the computer to complete the
	startup process. This should allow the pagefile write operation to complete and
	result in a successful memory dump.
	
	MORE INFORMATION
	================
	
	To use the "last known good" configuration, follow these steps:
	
	1. Start the computer and select the proper boot menu entry on the OS Loader
	  screen.
	
	  You will see the following message displayed on the screen for a few seconds:
	  "NTDETECT V4.0 Checking Hardware".
	
	2. Press the SPACEBAR when you see the next message, "Press spacebar NOW to
	  invoke Hardware Profile/Last Known Good menu." This will bring you to the
	  default Configuration menu, which allows you to select different hardware
	  profiles.
	
	3. Press L to switch to the "last known good" configuration menu.
	
	  Original Configuration is selected by default.
	
	4. Press ENTER.
	
	For more information on how control sets and last known good configuration are
	handled by the registry, see the "Windows NT Workstation Resource Kit," Chapter
	36, Pages 1051 - 1053.
	
	REFERENCES
	==========
	
	For additional information on this issue, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q188831 How to Use the Special Pool Feature to Isolate Pool Damage
	
	  Q250453 Determining Special Pool Tagging Options When Debugging
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
