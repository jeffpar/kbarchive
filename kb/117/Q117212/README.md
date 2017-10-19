---
layout: page
title: "Q117212: How to Use the FoxPro Spelling Checker (SPELLCHK.APP)"
permalink: /kb/117/Q117212/
---

## Q117212: How to Use the FoxPro Spelling Checker (SPELLCHK.APP)

	Article: Q117212
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 3.00 | 2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended to provide supplemental information on how to use the
	FoxPro spelling checker (SPELLCHK.APP). Note that there are no examples showing
	how to use the spelling checker in either the manuals or the online Help files.
	
	MORE INFORMATION
	================
	
	_SPELLCHK is a system memory variable that contains the drive, path, and name of
	the spelling checker program. For example, the value contained in the _SPELLCHK
	variable might be:
	
	  "C:\FOXPROW\SPELLCHK.APP"
	
	This information can be found in the online Help file by searching for
	"SPELLCHK," but cannot be found in any of the manuals.
	
	To illustrate how to use the spelling checker, do the following:
	
	1. Use the Screen Builder to create a screen named TEST.
	
	2. The Setup Code snippet should contain:
	
	        USE tutorial\salesman
	
	3. The Cleanup Code snippet should contain:
	
	        CLOSE ALL
	
	4. Place the following objects on the screen:
	
	  a. A GET object with an input field of SALESMAN.NAME.
	
	  b. An EDIT region object with an input field of SALESMAN.NOTES.
	
	  c. A push button object with a variable field of CHOICE, a push button prompt
	     of "Spell Check" (without the quotation marks), and a VALID clause
	     procedure containing the following code:
	
	           SET SAFETY OFF
	           CREATE TABLE notefile (dummy C(1), notes m)
	           APPEND BLANK
	           REPLACE notefile.notes WITH salesman.notes
	
	           MODIFY MEMO notefile.notes NOWAIT
	           DO (_SPELLCHK)
	           CLOSE MEMO notefile.notes
	           REPLACE salesman.notes WITH notefile.notes
	
	           USE
	           ERASE notefile.dbf
	           ERASE notefile.fpt
	           ERASE notefile.bak
	           SET SAFETY ON
	
	           SELECT salesman
	           SHOW GETS
	
	5. Generate the screen, and then run it by issuing the following command in the
	  Command window:
	
	        DO TEST.SPR
	
	
	NOTE: The file MSSPELL.DLL, which is a dynamic-link library installed by
	Microsoft Word 6.0, Microsoft Excel, Microsoft Publisher, and Microsoft Works
	for Windows, must be present in the WINDOWS\SYSTEM or WINDOWS\MSAPPS\PROOF
	subdirectory for SPELLCHK.APP to work.
	
	MSSPELL.DLL is owned and licensed by a third-party vendor. To use this DLL, you
	must contact the vendor and obtain a licensing agreement. The vendor will
	require a nominal fee for licensing the usage of its DLL.
	
	Soft-Art's owns MSSPELL.DLL and can be reached at:
	
	Linguistic Software Solutions (Soft-Arts's marketing group) Phone: 813-642-6010
	Fax: 813-642-5774 Attn: Pat Carder
	
	Additional query words: VFoxWin FoxMac FoxWin 2.50 memvar docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 2.60 3.00 | 2.5
	
	=============================================================================
	
