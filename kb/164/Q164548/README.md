---
layout: page
title: "Q164548: WD97: NumPages Field Not Updated When You Open File"
permalink: /kb/164/Q164548/
---

## Q164548: WD97: NumPages Field Not Updated When You Open File

	Article: Q164548
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kbfield word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a document in Word 97, the NUMPAGES (total number of pages) field
	in the header or footer shows an incorrect number of pages.
	
	For example, your PAGE and NUMPAGES fields may show the following:
	
	  Page 3 of 1
	
	NOTE: This behavior is different from Word 7.0.
	
	WORKAROUND
	==========
	
	To update the NUMPAGES field, use any of the following methods.
	
	NOTE: You may need to repeat any of the following methods to update the NUMPAGES
	field whenever you reopen your document or you add additional pages.
	
	Method 1: Switch to Print Preview
	---------------------------------
	
	Switching to print preview automatically updates all fields in the document. Use
	the following steps:
	
	1. On the File menu, click Print Preview.
	
	2. On the Print Preview toolbar, click Close.
	
	Method 2: Switch the View
	-------------------------
	
	Switching the view of a document from page layout to normal view or vice versa
	updates the NUMPAGES field.
	
	Method 3: Print the Document
	----------------------------
	
	Printing your document forces Word to update the fields in the header and footer.
	This updates and prints the NUMPAGES field correctly.
	
	Method 4: Manually Update the NUMPAGES Field
	--------------------------------------------
	
	To manually update the NUMPAGES field, follow these steps:
	
	1. On the View menu, click Header And Footer.
	
	2. Select your page numbering and press F9. Your selection can include both the
	  Page and NUMPAGES fields.
	
	  NOTE: If you do not see the page numbering but see the following message
	
	  Page {PAGE} of {NUMPAGES}
	
	  you have the field codes displayed. To switch the field codes off and see the
	  results of the fields, press ALT+F9.
	
	Method 5: Turn Off Allow Background Saves
	-----------------------------------------
	
	The Allow Background Saves option saves documents in the background, so you can
	continue working in Word while you save a document. A pulsing disk icon appears
	in the status bar when Word is saving in the background. If you turn off the
	Allow Background Saves option, you cannot continue working in your document
	until the save operation is completed.
	
	To turn off Allow Background Saves, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the Save tab, clear the Allow Background Saves check box and then click
	  OK.
	
	3. Make a change in your document or change views. For example: add, delete, or
	  change some text in your document or change to normal or page layout view.
	
	4. On the File menu, click Save and save the changes to your document.
	
	Method 6: Use a Macro to Update the Field
	-----------------------------------------
	
	1. Press ALT+F11 to start the Visual Basic Editor.
	
	2. Paste the following code in a module:
	
	  Sub UpdatePageNum()
	
	      If ActiveWindow.View.SplitSpecial = wdPaneNone Then
	          ActiveWindow.ActivePane.View.Type = wdPageView
	      Else
	          ActiveWindow.View.Type = wdPageView
	      End If
	      If ActiveWindow.View.SplitSpecial = wdPaneNone Then
	          ActiveWindow.ActivePane.View.Type = wdNormalView
	      Else
	          ActiveWindow.View.Type = wdNormalView
	      End If
	      If ActiveWindow.View.SplitSpecial = wdPaneNone Then
	          ActiveWindow.ActivePane.View.Type = wdPageView
	      Else
	          ActiveWindow.View.Type = wdPageView
	      End If
	  End Sub
	
	3. On the File menu, click Close and Return to Microsoft Word.
	
	4. On the Tools menu, point to Macro and then click Macros.
	
	5. Run the UpdatePageNum macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta kbfield word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
