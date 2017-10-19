---
layout: page
title: "Q91677: Docerr: README.WRI Incorrectly References Display=&#42;vddvga"
permalink: /kb/091/Q91677/
---

## Q91677: Docerr: README.WRI Incorrectly References Display=&#42;vddvga

	Article: Q91677
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Section 9.7, "Third Party Display Drivers Running Non-Windows Applications," in
	the Windows 3.1 README.WRI file incorrectly instructs you to change the setting
	in the [386Enh] section of the SYSTEM.INI file:
	
	     device=*vddvg
	
	The SYSTEM.INI file setting should read:
	
	     display=*vddvga
	
	Additional query words: 3.10 docerr 386 enh
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
