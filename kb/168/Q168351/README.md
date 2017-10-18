---
layout: page
title: "Q168351: WD97: Word for Alpha Crashes Converting Some WP Graphics"
permalink: kb/168/Q168351/
---

## Q168351: WD97: Word for Alpha Crashes Converting Some WP Graphics

	Article: Q168351
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you open a WordPerfect 5.1 for MS-DOS document in Microsoft Word 97 for
	Windows on the Alpha platform, an Invalid Page Fault (IPF) may occur if the
	document contains some types of graphics.
	
	CAUSE
	=====
	
	The IPF occurs when the WordPerfect converter (WPFT532.CNV) calls the WPG export
	filter (WPGEXP32.FLT).
	
	NOTE: Microsoft Word 97 running on the Intel platform does not generate an IPF;
	instead you get the following error message:
	
	  Unable to convert graphic. Continue with document conversion?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about converting WordPerfect documents, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q157476 WD97: Equation Editor Objects Not Visible In Converted Document
	
	  Q158467 WD97: Description of Options for Conversion Wizard
	
	  Q157085 WD97: Limitations of Converting from Word 97 to WordPerfect 5.x
	
	  Q133127 Crash Saving Document with TOC Field as WordPerfect 5.x Format
	
	For more information about "WordPerfect conversions," click the Office Assistant,
	type "WordPerfect conversion," click Search, and then click "Results of saving
	Microsoft Word 97 documents in other file formats."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: gpf general protection fault
	
	======================================================================
	Keywords          : kbenv kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
