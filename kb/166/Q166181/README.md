---
layout: page
title: "Q166181: WD97: Can't Insert Page Numbers into WordMail Message"
permalink: /kb/166/Q166181/
---

## Q166181: WD97: Can't Insert Page Numbers into WordMail Message

{% raw %}

	Article: Q166181
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbprogramming kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Word as your email editor, Word does not allow you to insert page
	numbers into your email message. This article describes how to insert page
	numbers in an email message by using a Visual Basic for Applications macro.
	
	MORE INFORMATION
	================
	
	NOTE: The page numbers that you will insert into your email message will be
	visible only when you or the recipient is using WordMail and while you or the
	recipient is using page layout view. The page numbers will be printed when you
	or the recipient prints the email message.
	
	1. Start Word.
	
	2. On the Tools menu, point to Macro, and then click Record New Macro.
	
	3. In the Macro name box, type a name for the macro. For example, type
	  "InsertPageNumbers" (without the quotation marks).
	
	4. In the Store Macro In list, select "All Documents (Normal.dot)."
	
	5. Click OK.
	
	  The macro recorder starts and the Stop Recording toolbar appears.
	
	6. On the View menu, click Header And Footer. The insertion point appears in the
	  header. If you want the page numbers in the footer, click the "Switch Between
	  Header and Footer" button on the Header And Footer toolbar.
	
	7. Position the insertion point where you want to place the page number. For
	  example, press TAB one time if you want the page number to be centered, or
	  press TAB two times if you want the page number to be right-aligned.
	
	8. Type any text you want to appear before the page number, and then click the
	  Page Number button on the Header And Footer toolbar.
	
	9. Click the Close button on the Header And Footer toolbar.
	
	10. Click the Stop Recording button on the Stop Recording toolbar.
	
	  NOTE: The InsertPageNumbers macro is now stored in the Normal.dot template.
	  It will be available any time you create a document in Word. If you want the
	  macro to be available only to email documents, use the Organizer to move the
	  macro from the Normal.dot template to the E-mail.dot template.
	
	11. Start Microsoft Outlook and set Word as your email editor:
	  a. On the Tools menu, click Options.
	
	  b. On the E-mail tab, click to select the "Use Microsoft Word as the e-mail
	     editor" check box.
	
	  c. Click OK.
	
	12. Compose your email message.
	
	13. Insert the page numbers using the recorded macro:
	  a. Place the insertion point in the text area of your email message.
	
	  b. On the Tools menu, point to Macro, and then click Macros.
	
	  c. In the Macro list box, select the InsertPageNumbers macro, and then click
	     Run.
	
	Additional query words: 97 8.0 Page Numbers WordMail
	
	======================================================================
	Keywords          : kbmacro kbprogramming kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
