---
layout: page
title: "Q168733: WD97: Template Layout Changes When Opened in Word"
permalink: kb/168/Q168733/
---

## Q168733: WD97: Template Layout Changes When Opened in Word

	Article: Q168733
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word 97, when you open a template created in an earlier version of Word, the
	template will look different from the way it looked in previous versions of
	Word. Specifically, document formatting (for example, character spacing, line
	spacing, and page breaks) is not displayed or printed the way that it is in
	earlier versions of Word.
	
	CAUSE
	=====
	
	Unlike previous versions of Microsoft Word, Word 97 does not rely on printer
	information (metrics) to lay out the document. Word 97 uses a new
	printer-independent layout scheme controlled by the "Use printer metrics to lay
	out document" compatibility option. In Word 97, this option is turned off by
	default.
	
	WORKAROUND
	==========
	
	To use printer metrics to lay out the document (and simulate the behavior of
	earlier versions of Word), do the following:
	
	1. On the Tools menu, click Options.
	
	2. Click the Compatibility tab.
	
	3. In the Recommended Options For list, click Microsoft Word 97.
	
	4. Click to select the "Use printer metrics to layout document" check box.
	
	The template will then use the layout scheme based on the current printer
	metrics.
	
	NOTE: This is a document-specific setting and only affects the current document
	unless you click the Default button. If you click the Default button, all the
	currently selected options on the selected tab will become the defaults for all
	new documents based on the current template. If you click the Default button,
	the Recommended Options For list changes to Custom.
	
	MORE INFORMATION
	================
	
	This behavior does not occur if the document or template contains printer fonts.
	If the document or template contains printer fonts, the document formatting will
	be the same regardless of whether you open it in Word 97 or in an earlier
	version of Word.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
