---
layout: page
title: "Q134587: Err Msg: Can't Use -REALBREAK Under this Version of DPMI"
permalink: /kb/134/Q134587/
---

## Q134587: Err Msg: Can't Use -REALBREAK Under this Version of DPMI

	Article: Q134587
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
	
	When you try to run an MS-DOS-based program, you may receive the following error
	message:
	
	  error.TNT:20074: can't use -REALBREAK under this version of DPMI
	
	This error is more likely to occur with computer-aided design (CAD) programs such
	as Cadkey Light or AutoCad.
	
	CAUSE
	=====
	
	In order to run in Windows 95, these programs require that the Pharlap.386
	driver be loaded in the System.ini file.
	
	RESOLUTION
	==========
	
	Install the Pharlap.386 device driver in the System.ini file. To do so, follow
	these steps:
	
	1. Use any text editor (such as Notepad) to open the System.ini file in the
	  Windows directory.
	
	2. Add the following line to the [386Enh] section of the file
	
	  device=<path>:\pharlap.386
	
	  where <path> is the full path to the Pharlap.386 file.
	
	3. Save and then close the System.ini file.
	
	4. Restart Windows 95.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
