---
layout: page
title: "Q80882: Installing PaintJet Printer Fonts on a Windows Network"
permalink: /kb/080/Q80882/
---

## Q80882: Installing PaintJet Printer Fonts on a Windows Network

	Article: Q80882
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Zenographic fonts for an HP PaintJet or PaintJet XL on a
	shared network installation of Windows 3.0, the following error message may
	appear:
	
	  Error Processing Current Font ZFM File Not Built
	
	NOTE: This information applies to the Microsoft Windows versions 3.0 and 3.0a.
	This information does not apply to later versions of Windows.
	
	CAUSE
	=====
	
	The following three PaintJet fonts for the PaintJet Series driver that are
	supplied with Windows 3.0:
	
	  CR124PA.PJF
	  LG08RPA.PJF
	  LG12RPA.PJF
	
	During the installation of these fonts, a file named PJ$.ZFM needs to be created
	in the shared directory of Windows 3.0. Once the PJ$.ZFM file is created, it is
	necessary to leave the rights on this file set to write and read so that any
	future changes to the fonts are saved in the PJ$.ZFM file without generating an
	error message.
	
	RESOLUTION
	==========
	
	To correct this problem, you must have the authorization to write to the shared
	copy of Windows 3.0 on the server. Change the PJ$.ZFM file rights to write and
	read.
	
	MORE INFORMATION
	================
	
	For information on how to install the fonts, query on
	
	  Zenographics and Windows
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
