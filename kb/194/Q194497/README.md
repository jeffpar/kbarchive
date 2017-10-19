---
layout: page
title: "Q194497: WD97: PRIVATE Fields Appear in Converted WordPerfect Documents"
permalink: /kb/194/Q194497/
---

## Q194497: WD97: PRIVATE Fields Appear in Converted WordPerfect Documents

	Article: Q194497
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when you open a document that is in WordPerfect 5.x or 6.x
	format, you may see PRIVATE fields at the beginning of and throughout the
	converted document.
	
	CAUSE
	=====
	
	This is a design feature of Word and the WordPerfect converter. A PRIVATE field
	stores data for documents converted from other file formats. The field contains
	data that allows Word to retain formatting information not used by Word but that
	is necessary for optimally converting the file back to its original format. At
	this time, PRIVATE fields are used only when converting documents from
	WordPerfect 5.x and 6.x format to Word.
	
	PRIVATE fields do not affect document layout in Word. If you do not want PRIVATE
	fields to be displayed in your document, click the Show/Hide button on the
	Formatting toolbar. Sometimes there is no way to turn off the PRIVATE field,
	regardless of whether Show/Hide or Field Codes are turned off. However, it will
	not appear in print preview or when the document is actually printed.
	
	MORE INFORMATION
	================
	
	The PRIVATE field that appears at or near the beginning of converted WordPerfect
	documents notifies Word that the document was originally opened from
	WordPerfect. This enables Word to make necessary adjustments to process other
	PRIVATE fields for table of contents formatting codes and several other formats
	if you later choose to save the document in WordPerfect format.
	
	Sometimes, whether Field Codes are on or off under the View or Print tabs (on the
	Tools menu, click Options), the {PRIVATE} fields are shown in normal and print
	preview views and print {PRIVATE} on the document. When this behavior occurs,
	Bookmark Not Defined is also shown in page layout view. To work around this
	behavior, find these codes and cut them from the document.
	
	You can search for these fields by using Replace or Find on the Edit menu. Type
	"^dPRIVATE" (without the quotation marks). You can also manually search through
	the document for the {PRIVATE} fields, select them, and then click Cut on the
	Edit menu.
	
	
	
	Additional query words: textconv wpft5 convert converted converts converting conversion transfer transferred transfers transferring translate translated translates translating word-perfect word perfect 5.1 5.2 wpft6 6.1
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
