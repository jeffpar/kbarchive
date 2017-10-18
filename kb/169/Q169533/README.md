---
layout: page
title: "Q169533: WD97: Language Format Is Not Applied to All Parts of a Document"
permalink: kb/169/Q169533/
---

## Q169533: WD97: Language Format Is Not Applied to All Parts of a Document

	Article: Q169533
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the language format (on the Tools menu) for only the body of
	your document by clicking Select All on the Edit menu, this change is not
	applied to headers, footers, text boxes, footnotes, or endnotes.
	
	CAUSE
	=====
	
	The Select All command on the Edit menu does not select headers, footers, text
	boxes, and footnotes or endnotes; therefore, if you change the language format
	in the main part of your document, these other parts of the document are not
	affected.
	
	WORKAROUND
	==========
	
	To assure the Language setting is applied to all text in the entire document,
	regardless of its location, use either of the following methods.
	
	Method 1: Add the Language Format to the Styles in Your Document
	----------------------------------------------------------------
	
	1. On the Format menu, click Style.
	
	2. In the Style dialog box, click one of the styles used in the document, and
	  then click Modify.
	
	3. Select the Add To Template check box if you want to permanently redefine the
	  style in your template.
	
	4. Click the Format button, and then click Language.
	
	5. Select the language you want.
	
	6. Click OK twice and then click Close.
	
	7. Repeat steps 1-6 for each style in your document.
	
	Method 2: Select the Text and Manually Apply the Language Format
	----------------------------------------------------------------
	
	1. Select the text.
	
	2. On the Tools menu, select Language and clcik Set Language.
	
	3. Select the language you want and click OK.
	
	MORE INFORMATION
	================
	
	When you insert form fields inserted into a document, the language format of the
	form field is set to No Proofing. Therefore, you need set the language format of
	the form field manually.
	
	For additional information about the Language format, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q163057 WD97: Unable to Change Default Language for New Documents
	
	  Q141306 How to Enable Support for Multiple Languages in Windows 95
	
	  Q79482 WinWord: No Proofing Highlighted If Two Languages Are Selected
	
	  Q89646 WD: Error Msg: Text Formatted with No Proofing Was Skipped
	
	Additional query words: foreign keyboard layout
	
	======================================================================
	Keywords          : kbproof winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
