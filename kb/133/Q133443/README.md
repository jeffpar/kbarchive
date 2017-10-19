---
layout: page
title: "Q133443: PIFs Are Not Created in the PIF Folder"
permalink: /kb/133/Q133443/
---

## Q133443: PIFs Are Not Created in the PIF Folder

	Article: Q133443
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program information files (PIFs) for MS-DOS-based programs are not created in
	the Windows\PIF folder.
	
	CAUSE
	=====
	
	When you double-click an MS-DOS-based program file (.exe or .com file) in
	Windows Explorer, a PIF is created in the same folder as the program file. If
	the PIF cannot be created in the same folder (such as when you run a program
	from a CD-ROM), the PIF is created in the Windows\PIF folder. The PIF has the
	same filename as the program file, but with a .pif extension.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
