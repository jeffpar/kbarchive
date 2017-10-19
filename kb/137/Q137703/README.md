---
layout: page
title: "Q137703: PC WFW: WFWs MSMAIL.EXE Disables Retail Mail's Spell Checking"
permalink: /kb/137/Q137703/
---

## Q137703: PC WFW: WFWs MSMAIL.EXE Disables Retail Mail's Spell Checking

	Article: Q137703
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade an existing Microsoft Windows for Workgroups postoffice (WGPO)
	to the retail version of Microsoft Mail for PC Networks, the MSMAIL.EXE file is
	modified to enable spell checking. If the original MSMAIL.EXE is restored or
	copied from another location, the spell check option be will disabled.
	
	
	MORE INFORMATION
	================
	
	When you lose the ability to spell check, check the MSMAIL.INI file entries and
	that the *.DLL files are installed.
	
	You may also want to ensure that the MSMAIL.EXE file was not unintentionally
	copied or restored from a location other than the updated \MAILEXE directory.
	
	Additional query words: 3.00 3.20 3.50 3.x wfw client spelling
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
