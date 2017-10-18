---
layout: page
title: "Q166034: Writer 2: ErrMsg: Creative Writer Had Trouble Spell Checking..."
permalink: kb/166/Q166034/
---

## Q166034: Writer 2: ErrMsg: Creative Writer Had Trouble Spell Checking...

	Article: Q166034
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbusagekbfaq
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you try to spell check a document
	using the International English version of Creative Writer 2 (dated 4/10/96):
	
	  Creative Writer had trouble spell checking your document. Something may be
	  broken in the spell checker.
	
	  Please re-install Creative Writer by running Setup from the Creative Writer
	  CD.
	
	CAUSE
	=====
	
	You will receive this error message if you have one of the following selected in
	Regional Settings in the Windows Control Panel:
	
	- English (Australian)
	
	- English (Canadian)
	
	- English (Caribbean)
	
	- English (Ireland)
	
	- English (Jamaica)
	
	- English (New Zealand)
	
	- English (South Africa)
	
	NOTE: If the settings are English (United States) or English (British), the
	spelling checker will run correctly, using the US English and British English
	spelling conventions. US and British English use the same dictionary file
	(Mssp2_en.lex).
	
	For additional information about the spelling dictionaries, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q117547 No Prompt for Spelling Dictionary Language During Setup
	
	RESOLUTION
	==========
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Cw2patch.exe
	  (http://download.microsoft.com/download/cwriter20win95/Patch/1/WIN98/EN-US/Cw2patch.exe)
	
	Release Date: Nov-18-1996
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	The new version of Writer.exe (dated 11/18/96) provides the following changes:
	
	If Regional Settings is set to English (British), the spelling checker will
	correct the spelling according to British spelling conventions.
	
	If Regional Settings is set to any of the settings listed below, the spelling
	checker will correct the spelling according to US English conventions.
	
	- English (Australian)
	
	- English (Canadian)
	
	- English (Caribbean)
	
	- English (Ireland)
	
	- English (Jamaica)
	
	- English (New Zealand)
	
	- English (South Africa)
	
	- English (United States)
	
	For additional information about problems with spell checking in Creative Writer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q161853 Writer 2: Problems Spell Checking
	
	Additional query words: 2.00 kids mskids artist maggie max writer cw2 cw2.0 2 1.00 1.10 1.1a 1.1b 1.1c kbmm win95 nt4 nt40 patch
	
	======================================================================
	Keywords          : kberrmsg kbfile kbusage kbfaq
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
