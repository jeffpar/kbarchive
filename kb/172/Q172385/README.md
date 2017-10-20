---
layout: page
title: "Q172385: WD97: Text With Layout Not Listed in EditConversionOptions Macro"
permalink: /kb/172/Q172385/
---

## Q172385: WD97: Text With Layout Not Listed in EditConversionOptions Macro

{% raw %}

	Article: Q172385
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbconversion winword word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The option settings for the Text with Layout converter are not available when
	you use the EditConversionOptions macro in the Convert8.Wiz template.
	
	WORKAROUND
	==========
	
	You cannot use the EditConversionOptions macro to change how Word converts a
	Text with Layout document.
	
	To change how Word converts a Text with Layout document, you will need to create
	a MSTXTCNV.INI (if one does not already exist) in WordPad with the following
	information, and then save it as a TXT file with the name of MSTXTCNV.INI in the
	Windows folder:
	
	  [TextLytConv]
	  CharMaps=a,a
	  Width=80
	  PointSize=24
	
	If there is a MSTXTCNV.INI file, open it in WordPad, type or change the
	information, and then save and close the file.
	
	Once the MSTXTCNV.INI file exists in the Windows folder, the Text with Layout
	converter will use it when a Text with Layout file is saved or opened in
	Microsoft Word.
	
	STATUS
	======
	
	
	MORE INFORMATION
	================
	
	The MSTXTCNV.INI text file is used to modify how Word converts documents by
	changing the converter's filter options. For example, if you want to open a Text
	with Layout file in a point size of 14, you would need to modify the Text with
	Layout converter filter options for a point size of 14.
	
	The following information defines each of the available settings within the
	TextLytConv section of the MSTXTCNV.INI file:
	
	- CharMaps=a,a
	
	  Enter a Word character followed by a comma and the character you want to map
	  this Word character to when saving as Text with Layout. Multiple mappings are
	  separated by a semicolon. For example, a, b, and c can be mapped to A, B, and
	  C by specifying "a,A;b,B;c,C" (without the quotation marks. The neutral
	  default setting of "a,a" is provided as a syntax example.
	
	- Width=80
	
	  Enter a value between 1 and 80 characters to specify the absolute maximum
	  number of characters that can appear on one line when saving as Text with
	  Layout. Specifying a lesser value allows full lines to be displayed on
	  screens which display fewer than 80 characters per line. If the formatting in
	  your Word document allows fewer characters per line, document formatting
	  takes precedence over this setting.
	
	- PointSize=24
	
	  Enter a point size to control the number of characters that fit per line.
	  Specifying a value lower than 12 allows more characters to fit on each line,
	  and can be used to prevent premature line wrapping in a text file.
	
	This functionality is different as compared to Microsoft Word 6.x or 7.x. The
	EditConversionOptions macro in these earlier versions enabled you to change the
	Text with Layout converter's filter options from within Microsoft Word.
	
	For information about how to access the EditConversionOptions macro within
	Convert8.wiz, please see the following article in the Microsoft Knowledge Base:
	
	  Q162490 WD97: How to Access Sample Macros for Word 97
	
	For more information about the Text with Layout format, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q69698 WD: How Text with Layout Converter Determines Line Length
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbconversion winword word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
