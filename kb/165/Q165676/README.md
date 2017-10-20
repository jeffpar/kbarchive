---
layout: page
title: "Q165676: WD97: Missing Menu Items When WordMail Document Opened in Word"
permalink: /kb/165/Q165676/
---

## Q165676: WD97: Missing Menu Items When WordMail Document Opened in Word

{% raw %}

	Article: Q165676
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a document that has been saved from a WordMail message in either
	Word Document Format (*.doc) or RTF Text Format (*.rtf), menu items are missing
	and the Print Preview button is missing from the Standard toolbar.
	
	CAUSE
	=====
	
	The document is attached to the Email.dot template or to another template with
	customized menus or toolbars.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to attach a Word template,
	for example Normal.dot, to the document:
	
	1. Open the document in Word 97.
	
	2. On the Tools menu, click Templates And Add-Ins.
	
	3. Click the Attach button. Change to the correct folder, click Normal.dot, and
	  then click OK.
	
	NOTE: You can use the Organizer to copy styles from the Email.dot to your
	Normal.dot, if desired. To open the Organizer, click Styles on the Format menu
	and then click the Organizer button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	WordMail messages are based on the template specified by the Template setting on
	the E-mail tab in Outlook. To locate the E-mail tab, on the Tools menu, click
	Options. The default WordMail template is Email.dot.
	
	In Email.dot, the Print Preview button is missing from the Standard toolbar.
	
	The following table lists the menu items that are missing from the Email.dot
	template.
	
	  Menu           Menu item
	  -------------------------------
	
	  File           Versions
	                 Print Preview
	
	  View           Master Document
	                 Header and Footer
	                 Full Screen
	
	  Insert         Page Numbers
	
	  Tools          Protect Document
	                 Mail Merge
	                 Envelopes and Labels
	                 Letter Wizard
	
	The following items are added to the Tools menu in the Email.dot template:
	
	  Tools          AutoSignature
	                 Check Names
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
