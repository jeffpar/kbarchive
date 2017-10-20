---
layout: page
title: "Q251244: WD97: Cannot Change Outlook Contacts Folder for Labels/Envelopes"
permalink: /kb/251/Q251244/
---

## Q251244: WD97: Cannot Change Outlook Contacts Folder for Labels/Envelopes

{% raw %}

	Article: Q251244
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do a mail merge for labels with an Outlook Address book as the data
	source, you can select a specific address book only once in every session. You
	cannot change either the address book that serves as the data source or the
	current mail merge document, nor can you select another address book as the data
	source for another mail merge document that you edit in the same session.
	
	CAUSE
	=====
	
	This issue occurs when the mail merge document type is either Mailing Labels or
	Envelopes. The "Mail Merge from Contacts Folder" dialog box is then displayed
	only once in every Word session. This dialog box lets you select a specific
	Outlook Contacts folder to use as the data source for the mail merge document.
	In order to use a different Outlook Contacts folder, you must quit and restart
	Word.
	
	RESOLUTION
	==========
	
	
	
	
	Use one of the following methods to work around the problem.
	
	Method 1: Restart Word:
	
	After you restart Word, the "Mail Merge from Contacts Folder" dialog box appears
	again.
	
	Method 2: Try to Edit the Address Book in Word:
	
	1. On the Mail Merge toolbar, click Edit Data Source.
	
	2. Click View Source. This causes Word to open the data source.
	
	3. Close the data source again. This brings up the "Mail Merge from Contacts
	  Folder" dialog box.
	
	4. Select the new data source, and then click OK.
	
	This action can also be performed by a macro similar to the following:
	
	  Sub ShowAddressBookDlg()
	      ActiveDocument.MailMerge.EditDataSource
	      ActiveWindow.Close
	  End Sub
	
	Method 3: Use a Different Document Type:
	
	You can avoid the problem by not using Mailing Labels or Envelopes.
	
	1. First set up the document as a Mailing Label or Envelope mail merge document.
	
	2. On the Tools menu, click Mail Merge.
	
	3. Click Create and then click Restore to Normal Word Document. This preserves
	  the layout but removes the mail merge information.
	
	4. Save the document.
	
	5. Quit and restart Word.
	
	6. On the Tools menu, click Mail Merge.
	
	7. Click Create and then click Form Letters. Now the document is set up as a
	  Form Letters type mail merge document.
	
	8. Click Get Data and then click Use Address Book.
	
	9. Click the Contacts folder that you want to use, and then click OK. Click
	  Close to close the mail merge dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create two Contacts folders in Outlook with some addresses in each.
	
	2. Right-click each Contacts folder, and then click Properties. Switch to the
	  Outlook Address Book tab, and select the "Show this folder as an e-mail
	  address book" check box.
	
	3. In Word, create a new document.
	
	4. On the Tools menu, click Mail Merge.
	
	5. In the Mail Merge dialog box, click Create and then click Mailing Labels.
	
	6. Click Active Window when prompted for which file to use.
	
	7. Click Get Data, and then click Use Address Book.
	
	8. In the Use Address Book dialog box, click Outlook Address Book and then click
	  OK.
	
	9. In the Confirm Conversions dialog box, "Outlook Address Book via converter"
	  appears. Click OK to confirm.
	
	10. In the "Mail Merge from Contacts Folder" dialog box, click one of the
	  address book folders set up in steps 1 and 2.
	
	11. In the next message box, click Set Up Main Document.
	
	12. Select a label type in the Labels dialog box.
	
	13. Insert some merge fields into the sample label, and then click OK.
	
	14. Close the document.
	
	15. Repeat steps 3-7.
	
	  Result: The new mail merge document does not display the "Mail Merge from
	  Contacts Folder" dialog box that lets you select a contacts folder.
	
	Additional query words: wd97 word97 mailmerge envelopes labels datasource contacts
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
