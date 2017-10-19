---
layout: page
title: "Q166174: WD97: Styles Not Automatically Updated Attaching to Normal.dot"
permalink: /kb/166/Q166174/
---

## Q166174: WD97: Styles Not Automatically Updated Attaching to Normal.dot

	Article: Q166174
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbtemplate winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Document styles are not automatically updated after you change the styles in an
	attached template.
	
	CAUSE
	=====
	
	This problem occurs when all of the following conditions are true:
	
	- You create a document that is based on a template other than your current
	  Normal template (Normal.dot).
	
	  For example, you create a new document that is based on the Professional
	  Report.dot template or the document you are working on was created using a
	  different normal.dot, as in the case when you upgrade from Word 95 to 97.
	
	  -and-
	
	- The Automatically Update Document Styles check box is selected.
	
	  -and-
	
	- You attach the document to the Normal template.
	
	NOTE: This problem does not occur if you attach the document to any template
	other than Normal.dot. This problem also does not occur if you attach a document
	that is based on Normal.dot to any other template.
	
	This problem occurs because Word retains the styles from the previous template
	and doesn't make the styles from the Normal.dot template available.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Copy the Style to the Document
	----------------------------------------
	
	To copy the style to the document, use the following steps:
	
	1. Open the document in Word.
	
	2. On the Tools menu, click "Templates and Add-ins."
	
	3. Click Organizer.
	
	4. Click the Styles tab.
	
	  The styles in your document are listed on one side of the dialog box and the
	  styles in Normal.dot (global template) are listed on the other side.
	
	  NOTE: If these two files are not open in the organizer, close the file on the
	  appropriate side, and then open the file that is not open.
	
	5. In the Normal.dot list, click the style you want to copy to your document,
	  and then click Copy.
	
	  You should receive the following message:
	
	  Do you wish to overwrite the existing style entry <stylename>?
	
	  where <stylename> is the name of the style you want to copy.
	
	6. Click Yes and click Close to close the Organizer.
	
	The style is copied to the document.
	
	Method 2: Apply Manual Formatting
	---------------------------------
	
	To manually apply formatting, use the following steps:
	
	1. Select the text that you want to change.
	
	2. On the Format menu, click Font. Modify the font, and then click OK.
	
	3. On the Format menu, click Paragraph. Modify the paragraph formatting, and
	  then click OK.
	
	Note: Repeat these steps for text that you want to change.
	
	Method 3: Change the Applied Style
	----------------------------------
	
	To change the style, use the following steps:
	
	1. On the Format menu, click Style.
	
	2. Click "All styles" in the list.
	
	3. In the Styles list, click the style you want to change, and then click
	  Modify.
	
	4. In the Modify Style dialog box, do the following:
	
	  a. Click Format and click Font. Modify the font, and then click OK.
	
	  b. Click Format and click Paragraph. Modify the paragraph formatting, and
	     then click OK.
	
	5. Click OK to close the Modify Style dialog box.
	
	  NOTE: If you click the Add To template check box, the changes you make are
	  applied to all documents you subsequently create. If you want the changes to
	  be applied to only the active document, leave this check box cleared.
	
	6. Click OK to close the Modify Style dialog box.
	
	7. Click Close to close the Style dialog box.
	
	The changes are applied to all text that is formatted with the style.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q109873 Envelope Settings Apply Only to Current Document
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbtemplate winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
