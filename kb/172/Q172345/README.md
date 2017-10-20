---
layout: page
title: "Q172345: WD97: Inserted Word Document Object Loses Header/Footer"
permalink: /kb/172/Q172345/
---

## Q172345: WD97: Inserted Word Document Object Loses Header/Footer

{% raw %}

	Article: Q172345
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a document object created from a file (click Object on the
	Insert menu, and then click the Create From File tab), the header and footer of
	the document object are missing.
	
	NOTE: This problem occurs regardless of whether the Link To File or Float Over
	Text check boxes are selected or cleared.
	
	WORKAROUND
	==========
	
	Use the appropriate method for your situation.
	
	Method 1: Editing the Header and Footer
	---------------------------------------
	
	If you do not need to print the header and footer of the document object, follow
	these steps to edit the header and footer:
	
	1. Double-click the document object.
	
	2. On the View menu, click Header and Footer.
	
	3. Make the changes necessary to the header and footer, and then click Close on
	  the Header and Footer toolbar.
	
	4. On the File menu, click Close. When you are prompted to save your changes,
	  click Yes.
	
	Method 2: Pasting a Screen Shot of the Document Object
	------------------------------------------------------
	
	If you need to print the header and footer of the document object, follow these
	steps to insert an image of the document object:
	
	NOTE: This method causes your document object to not be linked. Any changes made
	to the original document will not be seen after you complete these steps.
	
	1. Double-click the document object. You should see the header and footer
	  contained in the document.
	
	2. On the View menu, click Zoom.
	
	3. Under Zoom To, click Whole Page, and then click OK.
	
	4. Press ALT+PRINT SCREEN. This places a snapshot of your screen on the Windows
	  clipboard.
	
	5. On the File menu, click Close.
	
	6. If the document object is not selected, click to select the document object.
	
	  NOTE: You will see squares around the object when it is selected.
	
	7. Delete the document object, and then click Paste on the Edit menu.
	
	8. Right-click the picture you just pasted in, and then click Show Picture
	  Toolbar on the shortcut menu.
	
	9. On the Picture toolbar, click Crop. Move the sides of the picture to show
	  only the wanted part of the picture.
	
	For more information about cropping, click the Office Assistant, type "How do I
	crop an image?" (without the quotation marks), click Search, click to view
	"Resize or crop a drawing object", and then click to view "Crop or trim portions
	of a picture."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	STATUS
	======
	
	This behavior is a design change in Word 97: only the body of the document
	object is shown.
	
	
	MORE INFORMATION
	================
	
	In Word 95, when you inserted a Word document object, the headers and footers
	were shown as part of the object.
	
	If you have installed Word 97 on the same computer as Word 95, Word 95 will no
	longer show the headers and footers of a Word document object.
	
	For additional information about problems with running multiple versions of Word
	on the same computer, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163154 WD: Problems Running Multiple Versions of Word on Same Computer
	
	Additional query words: 7.00 7.00a 8.00 nothing gone lost
	
	======================================================================
	Keywords          : winword word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
