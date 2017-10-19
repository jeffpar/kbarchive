---
layout: page
title: "Q71270: Windows Setup Hangs if SYSTEM.INI Has EOF Character"
permalink: /kb/071/Q71270/
---

## Q71270: Windows Setup Hangs if SYSTEM.INI Has EOF Character

	Article: Q71270
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade from Windows 3.0 to Windows 3.0a, and the SYSTEM.INI file
	contains an end-of-file character, the Setup program stops responding (hangs)
	without displaying an error message.
	
	NOTE: This problem does not occur in later versions of Windows.
	
	CAUSE
	=====
	
	If the SYSTEM.INI file terminates with an end-of-file (EOF) character, the
	Windows Setup program stops (hangs). Most text editors (such as Edlin) terminate
	ASCII files with the "1Ah" (end-of-file) character. If you have used this type
	of editor to edit the SYSTEM.INI file, then Setup hangs when updating video or
	other OEM drivers. This occurs with either the DOS- or Windows-based Setup
	program.
	
	WORKAROUND
	==========
	
	Edit the SYSTEM.INI file with an editor such as Notepad or SysEdit that doesn't
	use the EOF character, or use a HEX editor that removes this character. Setup
	then operates correctly.
	
	Additional query words: 3.0 3.00 3.00a win30 stop freeze lockup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
