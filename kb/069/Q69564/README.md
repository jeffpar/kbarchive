---
layout: page
title: "Q69564: Using Adobe Type Manager with Windows 3.0"
permalink: /kb/069/Q69564/
---

## Q69564: Using Adobe Type Manager with Windows 3.0

{% raw %}

	Article: Q69564
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adobe Type Manager (ATM) for Windows is an add-in program that creates matching
	screen and printer fonts in Microsoft Windows version 3.0 for dot matrix, HP
	LaserJet, and PostScript printers. It works in standard and enhanced mode, but
	not real mode and gives a WYSIWYG display environment.
	
	This package has a built-in soft font installer so that most Adobe-compatible
	Type 1 soft fonts can be used. It also supports the Lasermaster series of
	printers. This program uses approximately 240K or more memory depending on the
	size of the font cache that is used. The font cache is where built bit-mapped
	fonts are stored during a Windows session.
	
	MORE INFORMATION
	================
	
	When Adobe Type manager is installed from within Windows 3.00, it does the
	following:
	
	1. It creates two new directories: PCLFONTS and PSFONTS. These are the
	  directories where .PFM files (font metric file used for screen display) and
	  .PFB files (printer font file) are stored for the different printers.
	
	2. It builds an ATM.INI file that contains a listing of available fonts and
	  internal ATM settings, then copies this file to the Windows subdirectory. It
	  also copies ATMCNTRL.EXE to this directory and makes backup copies of the
	  SYSTEM.INI and WIN.INI files with the .BAK extension.
	
	3. ATM edits the WIN.INI and adds font information. For example, it would add
	  the following under the [HPPCL5A,LPT1] section of the WIN.INI file if you are
	  using an HP LaserJet series III:
	
	        softfonts=4 (or the number of fonts added)
	        softfont1=c:\pclfonts\xxxx.pfm,c:\pclfonts\xxxx.sfp)
	
	4. ATM edits the SYSTEM.INI, and under the [boot] section, it changes
	
	  system.drv=system.drv
	
	  to
	
	  system.drv=atmsys.drv
	
	  It then adds a new entry under this section,
	
	  atm.system.drv= system.drv
	
	If ATM is installed when Word for Windows is not running, delete the WINWORD.INI
	file in the Word for Windows directory to update the font choices and show the
	new fonts installed.
	
	Type Manager is manufactured by Adobe; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	REFERENCES
	==========
	
	README.TXT, Adobe Type Manager
	
	"PC Magazine," December 11, 1990.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
