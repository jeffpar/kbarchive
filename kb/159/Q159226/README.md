---
layout: page
title: "Q159226: WD:97 Ami Pro 3.x Style Sheets Open Blank in Word"
permalink: kb/159/Q159226/
---

## Q159226: WD:97 Ami Pro 3.x Style Sheets Open Blank in Word

	Article: Q159226
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbualink97 kbtemplatekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Word does not recognize Ami Pro style sheet files (.sty) as Ami Pro
	documents. For example, when you attempt to convert a style sheet and select the
	Ami Pro 3.0 converter in the Convert File dialog box, default (boilerplate) text
	contained in the style sheet is not converted and Word opens a blank document.
	
	CAUSE
	=====
	
	Ami Pro uses style sheet files to create new documents, similar to how Microsoft
	Word uses templates. Unlike Microsoft Word templates, however, the Ami Pro style
	sheet files are text-only files which contain instructions in a format similar
	to an .ini file. Because these files are not formatted as Ami Pro documents, the
	Ami Pro 3.0 converter opens a blank document.
	
	WORKAROUND
	==========
	
	To use the style sheet in Word, first create a document in Ami Pro based on the
	style sheet, save it as an Ami Pro document (.sam) and then open this document
	in Word.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q212265 WD: Additional Text Converters and Image Filters Available in
	  Microsoft Office Converter Pack
	
	Ami Pro is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: AmiPro conversion convert boilerplate default envelope letter memo template 8.0 word8 word97 converting translate translating transferring transfering textconv
	
	======================================================================
	Keywords          : kbinterop kbualink97 kbtemplate kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
