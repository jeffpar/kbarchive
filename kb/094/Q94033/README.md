---
layout: page
title: "Q94033: Windows: Auto Resume Failure on Toshiba Computers"
permalink: /kb/094/Q94033/
---

## Q94033: Windows: Auto Resume Failure on Toshiba Computers

{% raw %}

	Article: Q94033
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows on a Toshiba T2200SX, T3300SL, T4400SX (family),
	and T6400 (family) computer, and the computer is turned off when Auto Resume is
	enabled, an
	
	  Auto Resume Failure
	
	error message may appear the next time the computer is turned on and Windows is
	loaded.
	
	CAUSE
	=====
	
	This problem occurs when running Windows in 386 enhanced mode and using
	EMM386.EXE supplied with Windows 3.1. The following steps can be used to correct
	this problem.
	
	1. Using a text editor, edit the CONFIG.SYS file to load the EMM386.EXE file
	  provided with Toshiba DOS.
	
	2. Using a text editor, edit the SYSTEM.INI file in the Windows directory and
	  add the following line to the [386Enh] section:
	
	  device=WRESUME.386
	
	The WRESUME.386 driver can be obtained from the Toshiba Diagnostic Supplemental
	Disk or from Toshiba technical support. The driver is also available from
	CompuServe.
	
	Toshiba computers are manufactured by Toshiba, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3rdparty third party
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
