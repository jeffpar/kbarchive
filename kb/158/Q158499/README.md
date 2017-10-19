---
layout: page
title: "Q158499: WD97: Cannot Use ScanProt with Word 97"
permalink: /kb/158/Q158499/
---

## Q158499: WD97: Cannot Use ScanProt with Word 97

	Article: Q158499
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Word 97, when you attempt to run the ScanProt macro virus protection tool,
	you get one of the following error messages:
	
	  Run-time error '548'
	  Unable to create or edit macros using the WordBasic object.
	
	  -or-
	
	  Run-time error '438'
	  Object doesn't support this property or method.
	
	CAUSE
	=====
	
	When you open the ScanProt template, Word 97 automatically converts the ScanProt
	macros to Microsoft Visual Basic code. After conversion, these macros no longer
	work. They contain WordBasic macro commands that do not function in Visual Basic
	for Applications.
	
	
	RESOLUTION
	==========
	
	Word 97 has a built-in detection scheme that warns you when you are opening
	documents or templates that contain macros. This process gives you the
	opportunity to open the document or template with or without the macros. If you
	suspect that a document or template contains macros that you do not want, you
	can open the document or template without the macros.
	
	When you convert document templates to Word 97 formatted files, Word
	automatically converts all macros to Visual Basic code. During the conversion
	process, Word 97 looks for specific ScanProt code in your Normal.dot file, and
	if found, does not convert these macros.
	
	
	Microsoft recommends that you install anti-virus software that is specifically
	designed to detect Word macro viruses. Such software is available from several
	third-party companies. For additional information virus protection software
	which detect Word macro viruses, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
