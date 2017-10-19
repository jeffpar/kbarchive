---
layout: page
title: "Q120358: Volume Label Lost/Changed After Opening Properties Dialog Box"
permalink: /kb/120/Q120358/
---

## Q120358: Volume Label Lost/Changed After Opening Properties Dialog Box

	Article: Q120358
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you click Properties to open a properties dialog box, the default keyboard
	focus is on the first control box of the sheet. In the 5 1/4 (or 3 1/2) Floppy
	properties dialog box, the focus is on the Label box. If you press any key on
	the keyboard at this point, the volume label for the disk in that drive is
	removed or replaced.
	
	This can cause problems with software that requires the disk to have a volume
	label for verification or security purposes. After the volume label has been
	changed, there is no method in Windows 95 to undo the change. You must re-enter
	the volume label manually. If you don't know what the previous volume label name
	was, you may need to contact the manufacturer of the data on the disk to
	retrieve the volume label name.
	
	Additional query words: missing label standard highlight
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
