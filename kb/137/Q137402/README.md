---
layout: page
title: "Q137402: APM Features May Be Unavailable in Windows 95"
permalink: kb/137/Q137402/
---

## Q137402: APM Features May Be Unavailable in Windows 95

	Article: Q137402
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, you may notice that none of the Advanced Power
	Management (APM) features were installed, or that there is no battery meter.
	
	CAUSE
	=====
	
	Some computers and BIOS revisions have known incompatibilities with the APM 1.1
	specification. You may be running Windows 95 on such a computer.
	
	RESOLUTION
	==========
	
	Although the hardware suspend functions of your computer should still function
	correctly, you cannot use the Windows 95 APM features.
	
	MORE INFORMATION
	================
	
	Different levels of APM are turned off by Windows 95 when it detects an
	incompatible BIOS.
	
	Windows 95 turns off APM support completely on the following computers:
	
	  AMIBIOS 07/08/94
	  AMIBIOS 07/08/1994
	  Wyse Forte GSV 486/66
	  Ultra laptop 486sx33
	  Zenon P5/90
	  DECpc LPv+ 1.00
	  DECpc LPv+ 1.01
	  DECpc LPv+ 1.02
	  AST Ascentia 900N
	  any Gateway ColorBook with APM 1.0
	  any Gateway ColorBook >1.0 w/SystemSoft BIOS
	  Canon Innova 150C
	  NCR/AT&T 3150
	  NCR/AT&T 3150
	
	Windows 95 turns off power status polling (so you do not see a battery meter) on
	the following computers:
	
	  IBM ThinkPad 500
	  LexBook
	  WinBook
	
	Windows 95 uses APM 1.0 mode on the following computers:
	
	  NEC Versa and AT&T Globalyst with APM 1.1 BIOS and no
	  Plug and Play BIOS
	
	The following IBM ThinkPad computers support APM 1.1:
	
	  ThinkPad 755C
	  ThinkPad 360/355 Family
	  ThinkPad 755CE/CD/CX/CV/CDV
	  ThinkPad 340CSE
	  ThinkPad 370C
	  ThinkPad 701C
	  ThinkPad 530CS
	
	The following IBM ThinkPad computers work with Windows 95, but only APM BIOS 1.0
	is supported:
	
	  ThinkPad 750 family
	  ThinkPad 340 (monochrome)
	  ThinkPad 230Cs
	
	For information about the differences between APM 1.0 and APM 1.1, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q119599 Differences Between Using APM 1.0 and APM 1.1
	
	The ASUS PCI/I P55SP4 motherboard with a SiS 5511/5512/5513 chip set and an AWARD
	BIOS has been known to exhibit similar problems. The battery meter may appear on
	the taskbar when it should not.
	
	ASUS states that this was fixed with Plug and Play BIOS version 0110 (11/21/95)
	for revision 1.2 and 1.3 motherboards. Revision 1.4 motherboards have this fix
	using Plug and Play BIOS version 0303 (11/21/95).
	
	Please contact ASUS for information about BIOS updates.
	
	
	Additional query words: pnp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
