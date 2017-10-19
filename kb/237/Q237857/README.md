---
layout: page
title: "Q237857: Error 5aa When Using the Regrest Tool"
permalink: /kb/237/Q237857/
---

## Q237857: Error 5aa When Using the Regrest Tool

	Article: Q237857
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Regrest.exe (included in the Windows NT resource kit) to restore
	registry hives that you backed up using Regback.exe, you may receive the
	following error message:
	
	  Replacing sam with sam.old
	  Replace failed hivebranch='machine', hive='sam', result='0x000005aa'
	  newfile='sam.old'
	  savefile=sam.bak'
	
	CAUSE
	=====
	
	This behavior occurs because Regrest.exe requires enough space for two copies of
	the registry hives that you are restoring. When Regrest.exe restores registry
	hives, it loads the new copies into memory (along with the old copies). When the
	computer is restarted, the new copy is used and the old one is deleted.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the maximum Registry Size Limit to at least
	twice the current size:
	
	1. On the toolbar click Start, point to Settings, click Control Panel, and then
	  double-click System.
	
	2. On the Performance tab, click Change in the Virutal Memory section.
	
	3. In the Registry Size section, type the appropriate value in the Maximum
	  Registry Size (MB) box.
	
	4. If this still fails with the error then stop and disable all third party
	  services and restart.
	
	5. Run steps 1 - 3 again.
	
	MORE INFORMATION
	================
	
	Error 5aa hex is error 1450 in decimal format. The following text is contained
	in error 1450:
	
	  Insufficient system resources exist to complete the requested service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
