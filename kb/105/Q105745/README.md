---
layout: page
title: "Q105745: WD97: Unable to See List of Merge Fields"
permalink: kb/105/Q105745/
---

## Q105745: WD97: Unable to See List of Merge Fields

	Article: Q105745
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbualink97 word97 kbmerge kbPrinting
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there are many fields in your data document, or if the fields have very long
	names, you may be unable to see the list of field names when you click the
	Insert Merge Field button in the main document. Instead, a long line will appear
	along the left side of the screen, or only the last few field names will appear.
	
	CAUSE
	=====
	
	Word is actually displaying the list of merge field names, but the list is moved
	off the left edge of the screen. The long vertical line that appears is actually
	the right edge of the box of names. This problem is less noticeable on video
	cards with higher resolutions.
	
	WORKAROUNDS
	-----------
	
	To work around this problem, use the method appropriate for the type of document
	you are creating.
	
	(All Types) Move the Insert Merge Field Button:
	
	Move the Insert Merge Field button to the right side of the Mail Merge toolbar.
	
	(All Types) Create a Macro to Display the List:
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	Create the following macro that opens the Insert Field dialog box and add the
	macro to the Mail Merge toolbar:
	
	     Sub InsertMergeField()
	        Application.Dialogs(wdDialogInsertMergeField).Show
	     End Sub
	
	Form Letters:
	
	With the insertion point where you want your first field, press ALT+SHIFT+F. This
	brings up another Insert Merge Field dialog box. Select the field you want and
	click OK.
	
	Envelopes:
	
	Use a smaller data document, one that contains only those fields you will
	actually merge. Or, follow these steps:
	
	1. In the Envelope Options box, select the options that correspond to your
	  envelope. Click OK.
	
	2. In the Envelope Address box, leave the Sample Envelope Address blank. Click
	  OK.
	
	3. Close the Mail Merge Helper.
	
	4. The insertion point is at the beginning of the return address. Press
	  CTRL+HOME to move the insertion point to the receiver's address location.
	
	5. With the insertion point where you want your first field, press ALT+SHIFT+F.
	  This brings up another Insert Merge Field dialog box. Select the field you
	  want and click OK.
	
	6. Type any punctuation you need and repeat step 5.
	
	Labels:
	
	Use a smaller data document, one that contains only those fields you will
	actually merge. Or, follow these steps:
	
	1. In the Label Options box, select the size and number of labels you will be
	  using. Click OK.
	
	2. In the Create Labels box, leave the Sample Label blank. Click OK.
	
	3. Close the Mail Merge Helper.
	
	4. You are now in the main document, which now contains a table. Place the
	  insertion point in the first cell of the table.
	
	  If you do not see the dotted lines that separate the rows and columns of the
	  table, choose Gridlines from the Table menu.
	
	5. Press Alt+Shift+F to bring up a different Insert Merge Field dialog. Select
	  the appropriate Mail Merge Field, click OK.
	
	6. Add any spaces, returns, or punctuation and then press ALT+Shift+F to insert
	  the next merge field.
	
	7. When you have finished laying out the first label, highlight the contents of
	  the first cell.
	
	8. On the Edit menu, click Copy.
	
	9. Place the insertion point in the next cell. Click the Insert Word Field
	  button and select Next Record. This inserts a field called "Next" that
	  signals to Word that it is to print the contents of the next record in this
	  cell.
	
	10. On the Edit menu, click Paste. The contents of the first cell have now been
	  pasted in this cell.
	
	11. Highlight the contents of this second cell.
	
	12. On the Edit menu, click Copy.
	
	13. Move the insertion point to the beginning of the next cell, and choose
	  Paste.
	
	  Repeat step 13 for each of the remaining labels. When you have filled each
	  label, you are ready to perform the mail merge.
	
	Additional query words: mergefield insertmergefield display show winword off to left view 8.0 word97
	
	======================================================================
	Keywords          : kbprint kbualink97 word97 kbmerge kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
