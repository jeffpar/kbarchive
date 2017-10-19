---
layout: page
title: "Q93110: HP DJ500 Draft Mode Required to Print TrueType Fonts in Draft"
permalink: /kb/093/Q93110/
---

## Q93110: HP DJ500 Draft Mode Required to Print TrueType Fonts in Draft

	Article: Q93110
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If the print quality mode on a Hewlett-Packard (HP) DeskJet 500 printer is set
	for non-draft or letter quality printing, you cannot print TrueType fonts by
	selecting Draft Mode in the Printer Setup dialog box if you are using the
	following printer driver:
	
	- The HP DeskJet driver version 1.1 that ships with Windows 3.1.
	
	MORE INFORMATION
	================
	
	The HP DeskJet 500 Printer Owner's Manual states that selections made through
	your software always override hardware settings. However, if the printer is
	configured for letter quality output, this setting will override any software
	settings made in Windows 3.1.
	
	If the printer is configured for draft mode, software settings will override the
	hardware settings. Therefore, if the printer is set for draft mode, TrueType
	fonts can be printed in both draft and letter quality.
	
	Printer fonts are not affected and can be overridden by software selections in
	either mode on the HP DeskJet 500.
	
	REFERENCES
	==========
	
	DeskJet 500 Printer Owner's Manual, pages 1-12
	
	
	Additional query words: 3rdparty 3.10 True Type font DJ win31
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
