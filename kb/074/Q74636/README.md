---
layout: page
title: "Q74636: A20 Hardware Error Installing Windows 3.0 on AST Premium"
permalink: /kb/074/Q74636/
---

## Q74636: A20 Hardware Error Installing Windows 3.0 on AST Premium

	Article: Q74636
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Windows version 3.0 Setup program may hang on disk #2 when you
	install Windows under Microsoft MS-DOS version 5.0 on an AST Premium 80386
	machine when the message "A20 Hardware Error" is displayed on the screen.
	
	WORKAROUND
	==========
	
	If this error occurs, check the CONFIG.SYS file for the line "DOS=high." If it
	exists, change it to "DOS=low", and remove any third-party device drivers such
	as ASTEMM.SYS. Reboot the machine to have the change take effect.
	
	Begin the Windows Setup program again.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
