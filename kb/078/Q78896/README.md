---
layout: page
title: "Q78896: SysEdit Does Not Save Read-Only Configuration Files"
permalink: /kb/078/Q78896/
---

## Q78896: SysEdit Does Not Save Read-Only Configuration Files

	Article: Q78896
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SysEdit configuration utility included with Windows 3.0 and 3.0a allows you
	to edit and save the AUTOEXEC.BAT, CONFIG.SYS, WIN.INI, and SYSTEM.INI files
	with the MS-DOS archive file attribute even if the files are marked with the
	read-only file attribute prior to running SysEdit.
	
	CAUSE
	=====
	
	When you edit the AUTOEXEC.BAT, CONFIG.SYS, WIN.INI, and SYSTEM.INI files,
	SysEdit creates a backup of the original files and assigns an .SYD extension to
	each. The .SYD files inherit the read-only attribute from the original files
	read from the hard disk, but do not transfer the file attribute to the modified
	AUTOEXEC.BAT, CONFIG.SYS, WIN.INI, and SYSTEM.INI files that are saved when
	exiting SysEdit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem was corrected and does not occur in later versions of Windows.
	
	Additional query words: 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
