---
layout: page
title: "Q157201: WD97: Word 97 RTF Document Opens Blank in WordPerfect 6.x"
permalink: /kb/157/Q157201/
---

## Q157201: WD97: Word 97 RTF Document Opens Blank in WordPerfect 6.x

{% raw %}

	Article: Q157201
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbconversion winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In WordPerfect 6.x, when you open a Rich Text Format (RTF) document that was
	created in Word 97 for Windows, the document is empty.
	
	
	
	CAUSE
	=====
	
	WordPerfect 6.x does not correctly convert a Microsoft Unicode rich-text file
	(RTF).
	
	This problem occurs when the following conditions are true:
	
	- You create a document in Word 97.
	
	  -and-
	
	- You click Save As on the File menu, and save the file in the Rich Text Format
	  (*.rtf), Word 6.0/95 (*.doc), or the Word 97 & 6.0/95 - RTF (*.doc)
	  format.
	
	  -and-
	
	- You open the document in WordPerfect 6.x.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q177289 WD97: Why Are Two Word 6.0/95 Converters Listed in Save As Type?
	
	WORKAROUND
	==========
	
	To work around this problem, save the Word 97 document in the WordPerfect 5.x
	for Windows format before you open it in WordPerfect 6.x.
	
	MORE INFORMATION
	================
	
	The RTF Specification provides a format for text and graphics interchange that
	can be used with different output devices, operating environments, and operating
	systems. RTF uses the ANSI, PC-8, Macintosh, or IBM PC character set to control
	the representation and formatting of a document, both on the screen and in
	print. With the RTF Specification, documents created under different operating
	systems and with different software applications can be transferred between
	those operating systems and applications.
	
	For additional information about the updated RTF Specifications, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q164472 WD97: GC1282: Rich Text Format Addendum (Spec. for Word 97)
	
	The latest version of the RTF specification, version 1.6, is available in the
	MSDN library at the following URL:
	
	  http://msdn.microsoft.com/library/ (http://msdn.microsoft.com/library/)
	
	Click Specifications, click Applications, and then click Rich Text Format (RTF)
	Specification, version 1.6.
	
	Additional query words: 8.0 conversion converting converted transferring transferred transfers transfer import export empty blank null nil nothing void
	
	======================================================================
	Keywords          : kb3rdparty kbconversion winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
