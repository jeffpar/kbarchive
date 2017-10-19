---
layout: page
title: "Q256231: WD97: Printing Label Ignores Direct Formatting"
permalink: /kb/256/Q256231/
---

## Q256231: WD97: Printing Label Ignores Direct Formatting

	Article: Q256231
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new document from your custom label template, when you print
	labels using the "Envelopes and Labels" command (on the Tools menu, click
	"Envelopes and Labels"), the label address may be printed with different
	formatting than what you specified in your label template.
	
	
	CAUSE
	=====
	
	Word displays the text in the Address box on the Label tab by using the Word
	default font. If you click Print, the label is printed using the Normal style in
	the Normal.dot template. If you click New Document, Word opens a new document
	based on the Normal.dot template, and the labels take on the Normal style of the
	Normal.dot template.
	
	If you paste formatted text onto the Label tab, the formatted text appears with
	the default font in Word, and it is printed with the formatting for the Normal
	style of your Normal.dot template.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods.
	
	Method 1: Add Labels to New Document
	------------------------------------
	
	On the Labels tab of the "Envelopes and Labels" dialog box, click New Document to
	add the labels to a new document. Then format the labels as you want and print
	the labels.
	
	Method 2: Format the Text in the Address Box
	--------------------------------------------
	
	Select the text in the Address box on the Labels tab, and then right-click the
	selected text. Click either Font or Paragraph from the shortcut menu that
	appears, and modify the text to the correct format that you want. Then, on the
	File menu, click Print to print your labels.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Microsoft Word makes extensive use of a new technology called Rich Text Edit
	(RTE) dialog boxes. RTE dialog boxes allow you to select multiple formatting
	options and to see the results of the formatting in the dialog box. RTE dialog
	boxes also allow the use of shortcut keys and menus to change the format of the
	text in the dialog boxes.
	
	Additional query words: incorrect wrong richedit
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
