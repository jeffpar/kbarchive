---
layout: page
title: "Q172340: STOP C0000221 Bad Image Checksum After Adding RAM"
permalink: /kb/172/Q172340/
---

## Q172340: STOP C0000221 Bad Image Checksum After Adding RAM

{% raw %}

	Article: Q172340
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add additional RAM to your Windows NT system you may receive the error
	message:
	
	  STOP C0000221 - Bad Image Checksum the image comctl32.dll is possibly
	  corrupt, the header checksum does not match the computed checksum.
	
	The filename may be different and may change on subsequent restarts.
	
	CAUSE
	=====
	
	A corrupt pagefile may be the cause of this error, or bad or incompatible
	memory.
	
	RESOLUTION
	==========
	
	1. Return the system to the original RAM configuration. If you have a FAT
	  partition, boot to DOS, and delete the Pagefile.sys. If you have an NTFS
	  partition, try to log back on as administrator.
	
	
	2. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the System icon.
	
	3. From the System Properties dialog box, click the Performance tab, and then
	  click Change in the Virtual Memory section.
	
	4. From the Virtual Memory dialog box, select the individual Drive(s) the
	  pagefiles are on, and set the Initial Size and the Maximum Size of the
	  pagefile(s) to 0. Do not restart the system.
	
	5. Run CHKDSK C: /F /R; run on any drive that contained a pagefile. If you have
	  multiple pagefiles, perform the CHKDSK on non-system partitions first,
	  because running CHKDSK on the system partition requires a restart.
	
	6. Restart the system.
	
	7. Set the pagefile to an optimal level for the amount of RAM you will add. For
	  more information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q99768 Optimizing Your Paging File (PAGEFILE.SYS)
	
	8. Shutdown the system and add your RAM, the RAM added should follow the
	  specifications for the hardware it is being added too. All speeds and type of
	  RAM should be the same (i.e. EDO and non-EDO).
	
	If you still experience the same error message after re-adding the RAM, you may
	have defective hardware, and should consult your hardware vendor.
	
	Additional query words: 0xc221 prodnt
	======================================================================
	Keywords          : kbenv kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
