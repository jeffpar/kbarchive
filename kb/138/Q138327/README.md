---
layout: page
title: "Q138327: WD97: Properties Contents Tab Is Blank"
permalink: kb/138/Q138327/
---

## Q138327: WD97: Properties Contents Tab Is Blank

	Article: Q138327
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Contents tab (on the File menu, click Properties), the
	Document contents box is blank, shows only "Title", or shows the title (or first
	line of text) of the document.
	
	CAUSE
	=====
	
	This functionality is by design. In Microsoft Word, the Contents tab displays
	only the document's title or first line. However, in other Microsoft Office
	programs, the Contents tab displays information about parts of the file.
	
	For example, in Microsoft Excel, the Contents tab lists the sheets that are part
	of a workbook. In Microsoft PowerPoint, the Contents tab lists fonts used in the
	presentation as well as slide titles. In Microsoft Binder, the Contents tab
	lists the sections in the file.
	
	
	MORE INFORMATION
	================
	
	Unless you specify a document's title, Word uses the first line of the document
	for the title when you first save the file. Word places this information on the
	Summary and Contents tabs of the Properties dialog box.
	
	To specify a document title, click Properties on the File menu, click the Summary
	tab, and type a title in the Title text box. If you specify a title, Word copies
	it from the Summary tab to the Contents tab.
	
	If a file does not show a title on the Summary and Contents tabs, one of the
	following is probably true:
	
	- The file has not been saved.
	
	  -or-
	
	- The file is not a Word file.
	
	  -or-
	
	- The file was created in an earlier version of Word.
	
	A document can inherit its template's title; if a template has a title, the same
	title appears in documents based on that template.
	
	To view a document's properties from Microsoft Word, click Properties on the File
	menu. Click the Summary tab to see the document's title, or click the Contents
	tab to see the title.
	
	NOTE: If you change the document's title, the updated title does not appear on
	the Contents tab until you click OK and then reopen the Properties dialog box.
	
	To view a document's properties from Windows, right-click the document in Windows
	Explorer and then click Properties on the shortcut menu that appears. Click the
	Summary tab and the Statistics tab to get information about the file.
	
	New Functionality for Microsoft Word 97 for Windows:
	
	The Contents tab can be used to show the organization of the document by
	displaying the contents of the heading styles (Heading 1 through Heading 3)
	paragraphs. (H1 through H3 headings are also displayed for Web pages.)
	
	To allow the text formatted with Heading 1, Heading 2, or Heading 3 styles to
	appear on the Contents tab, follow these steps:
	
	1. In your Word document, format the text that you want to appear on the
	  Contents tab with the Heading 1, Heading 2, or Heading 3 style, and then save
	  your document.
	
	For more information about how to format text with a style, click Microsoft Word
	Help on the Help menu, type "apply a style" (without the quotation marks) in the
	Office Assistant or the Answer Wizard, and then click Search to view the topics
	returned.
	
	2. On the File menu, click Properties.
	
	3. On the Summary tab, select the "Save preview picture" check box and click
	  OK.
	
	  NOTE: If "Save preview picture" is not selected, the first word, phrase, or
	  sentence that appears in the document when it is saved for the first time is
	  displayed on the Contents tab.
	
	When you now view the Contents tab, the organization of the document based on the
	heading styles (Heading 1, Heading 2, and Heading 3) is displayed.
	
	Text that appears on the Contents tab may be used as search criteria when you are
	trying to find a particular document. To do this, follow these steps:
	
	1. Close your Word document.
	
	2. On the File menu, click Open.
	
	3. In the Open dialog box, click Advanced.
	
	4. In the Advanced Find dialog box, under the "Define more criteria" section,
	  change the Property box to Contents. Then change the Condition and Value
	  boxes to what you want to search for, and click Find Now.
	
	Additional query words: binder file open tab empty
	
	======================================================================
	Keywords          : kbualink97 kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
