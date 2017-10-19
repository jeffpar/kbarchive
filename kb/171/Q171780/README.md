---
layout: page
title: "Q171780: How to Use WinDiff to Compare Registry Files"
permalink: /kb/171/Q171780/
---

## Q171780: How to Use WinDiff to Compare Registry Files

	Article: Q171780
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	How can you compare registry entries before and after an upgrade, the
	installation of a new software package, or between two computers?
	
	MORE INFORMATION
	================
	
	To use the Windows NT 3.51 or 4.0 Resource Kit utility Windiff.exe to compare
	the differences between the registry entries before and after an upgrade,
	perform the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Regedt32.exe.
	
	2. Select each registry root that you want to compare.
	
	  Example: HKEY_LOCAL_MACHINE
	
	3. From the menu bar, click Registry.
	
	4. Click Save Subtree As.
	
	5. Click Save as type.
	
	6. Select Text files.
	
	7. Save the file as Filename.old.
	
	8. Follow the above steps for all subtrees.
	
	9. Install the new software or perform the upgrade.
	
	10. After the upgrade or install repeat steps 2-6.
	
	11. Save the file as Filename.new.
	
	12. Run Windiff from the resource kit and compare the two files, filename.old
	  and filename.new.
	
	NOTE: This procedure can be done for individual keys as well.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
