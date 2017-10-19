---
layout: page
title: "Q160089: PRB: 16-bit Help Window Title Has Wrong Character"
permalink: /kb/160/Q160089/
---

## Q160089: PRB: 16-bit Help Window Title Has Wrong Character

	Article: Q160089
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using HC31.exe to compile a Help project, the .hpj file is assumed to be
	using OEM character sets (MS-DOS code, page 850 or 437). If the title specified
	in the .hpj file contains characters with values higher than 127, and the .hpj
	file is modified using a Windows editor such as Notepad, those characters can
	appear to be wrong when the Help file is run.
	
	CAUSE
	=====
	
	In an .hpj file, under the [OPTIONS] section, the title is specified as:
	
	  "TITLE=Help Example that contains [ASCII 224]"
	
	The "[ASCII 224]" character was entered using Notepad, holding down the ALT key,
	and typing "0224" (without the quotation marks) on the numeric keypad. When the
	Help file is run after being compiled using HC31.exe, you see that the Help
	window title reads:
	
	  "Help Example that contains [ASCII 211]"
	
	This problem occurs because of the difference between the OEM code page (850) and
	the ANSI code page (1252). Value 224 is the character '[ASCII 211]' under code
	page 850, but it is the character '[ASCII 224]' under code page 1252. Because
	the .hpj file is assumed to be using code page 850, '[ASCII 211]' is put on the
	title when HC31 is processing the Help project.
	
	RESOLUTION
	==========
	
	If your .hpj file contains characters with values higher than 127, use an MS-DOS
	editor, such as Edit, to write your .hpj file.
	
	Additional query words: 3.10 kbdsd
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
