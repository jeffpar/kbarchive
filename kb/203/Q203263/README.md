---
layout: page
title: "Q203263: Cirel FPX X.25 Network Adapter Does Not Work Correctly"
permalink: /kb/203/Q203263/
---

## Q203263: Cirel FPX X.25 Network Adapter Does Not Work Correctly

	Article: Q203263
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbhw kbnetwork kbHardware
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install a Cirel FPX X.25 network adapter in your Windows NT-based
	computer, the network adapter may not function properly.
	
	CAUSE
	=====
	
	This issue can occur if you install a Cirel FPX X.25 network adapter with the
	Cirel driver software. The Cirel driver software does not install two values in
	the Windows NT registry that are required for this network adapter to function
	properly.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, manually add the two missing registry values:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click HKEY_LOCAL_ MACHINE on Local Machine.
	
	3. Double-click the \SOFTWARE\Cirel\WntFpx\BOARD\FPX01 folder.
	
	4. On the Edit menu, click Add Value, type "FpxNumber" (without the quotation
	  marks), click REG_DWORD in the Data Type box, and then click OK.
	
	5. Type "10" (without the quotation marks) in the Data box, click Hex, and then
	  click OK.
	
	6. Double-click the \SOFTWARE\Cirel\WntFpx\BOARD\FPX01 folder.
	
	7. On the Edit menu, click Add Value, type "Link" (without the quotation marks),
	  click REG_SZ in the Data Type box, and then click OK.
	
	8. Type "X25" (without the quotation marks) in the Data box, and then click OK.
	
	9. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
