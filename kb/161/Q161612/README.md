---
layout: page
title: "Q161612: WD97: Letter Wizard Replaces Merge Field with AutoTextList"
permalink: /kb/161/Q161612/
---

## Q161612: WD97: Letter Wizard Replaces Merge Field with AutoTextList

	Article: Q161612
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbtemplate word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a mail merge main document and you answer yes when the Office
	Assistant asks you if you want help writing your letter, the merge field is
	replaced with an AutoTextList field. When you perform the merge, the
	AutoTextList field is replaced with the field name enclosed in chevrons
	(<<>>). For example, if your document contains the following,
	
	  Dear {MergeField FirstName},
	
	and you select the option to get help writing your letter, the content changes to
	this:
	
	  {AutoTextList}
	
	CAUSE
	=====
	
	The Letter Wizard replaces the {MergeField FirstName} field with the
	{AutoTextList} field.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1: Replace the {AutoTextList} field after closing the Letter Wizard
	--------------------------------------------------------------------------
	
	1. Complete the letter with the help of the Office Assistant. (See the "More
	  Information" section below.)
	
	2. On the Tools menu, click Options, and then click the View tab.
	
	3. Click to select the Field Codes check box, and then click OK.
	
	4. Delete the {AutoTextList} field.
	
	5. Type your salutation, and then reinsert the {MergeField FirstName} field.
	
	NOTE: To turn the field code off, click Options on the Tools menu, and then on
	the View tab, click to clear the Field Codes check box.
	
	Method 2: Create the main document before attaching the data source
	-------------------------------------------------------------------
	
	1. On the File menu, click New, and then click the Letters and Faxes tab.
	
	2. Select the Letter Wizard, and then click OK.
	
	3. The Office Assistant will prompt you to select an option. Click "Send letters
	  to a mailing list."
	
	  The Mail Merge Helper appears.
	
	4. Click Get Data, click Open Data Source, select the document that contains
	  your data, and then click Open.
	
	5. Click Edit Main Document.
	
	6. Select the {AutoTextList} field, and then press DELETE.
	
	7. Click the Insert Merge Field button on the Mail Merge toolbar, and then click
	  the merge field you want to use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Do the following to use the Office Assistant to help you write your letter.
	
	1. Start a new Word document.
	
	2. On the Tools menu, click Mail Merge.
	
	3. In the Mail Merge Helper, click Create, and then click Form Letters.
	
	4. Click New Main Document.
	
	5. Click Get Data, click Open Data Source, select the file that contains your
	  data, and then click Open.
	
	6. Click Edit Main Document.
	
	7. Type the salutation. For example, type "Dear" (without the quotation marks).
	  Press the SPACEBAR.
	
	8. Click the Insert Merge Field button on the Mail Merge toolbar, select the
	  merge field you want to insert, type a comma, and then press ENTER.
	
	  The Office Assistant appears.
	
	9. Click "Get help writing the letter" to run the Letter Wizard.
	
	Additional query words: print merge merging replaces replaced removed missing gone disappeared
	
	======================================================================
	Keywords          : kbualink97 kbtemplate word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
