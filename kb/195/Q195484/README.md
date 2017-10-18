---
layout: page
title: "Q195484: WD97: Schedule+ Contact List Not Sorted Alphabetically"
permalink: kb/195/Q195484/
---

## Q195484: WD97: Schedule+ Contact List Not Sorted Alphabetically

	Article: Q195484
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you use the Insert Address button or the Schedule+ contact list as a mail
	merge data source, the entries in the contact list are not sorted
	alphabetically.
	
	WORKAROUND
	==========
	
	To sort the Schedule+ contact list, use either of the following methods.
	
	NOTE: Before running these methods, you need to already have created entries in
	the Schedule+ contact list.
	
	Method 1: Use the Insert Address Button in Word
	-----------------------------------------------
	
	1. Start Microsoft Schedule+.
	
	2. In Schedule+, point to Export on the File menu, and then click Text.
	
	  This starts the Text Export Wizard.
	
	3. Click to select Contact List, and then click Next.
	
	4. Click to select the character to use between fields (comma is the default)
	  and click to select the character to use to surround each field (quotation
	  marks are the default). Click Next.
	
	5. In the next dialog box of the wizard, two questions appear. Use the following
	  defaults, and then click Next:
	
	      Do you want to export text          Select No.
	      containing carriage returns and     (No is the default).
	      line feeds as a single line?
	
	      Do you want to export the field     Select Yes.
	      names on the first line?            (Yes is the default).
	
	6. Click Add All to select all the fields from the contact list to export, and
	  then click Next.
	
	  NOTE: If you do not click Add All and only export certain fields, you may lose
	  some information when you import this file back into Schedule+.
	
	7. Use the file name suggested by Schedule+; the default should be
	  c:\<Windows>\Desktop\Export.csv. Click Finish. Schedule+ exports the
	  contact list as a text file.
	
	8. Start Word and open the exported file.
	
	9. Sort the Contact Entries.
	  a. On the Table menu, click Sort.
	
	  b. In the Sort Text dialog box, click Options. Under Separate Fields At,
	     click to select Commas, and then click OK.
	
	  c. In the Sort Text dialog box, click to select My List Has Header Row.
	
	  d. In the Sort By list, click to select the field to sort the text by.
	
	     For example, if you want to sort all the entries by the last name, click to
	     select Last Name.
	
	  e. Click OK to begin the sort.
	
	10. After the entries are sorted, save the file with the same name and extension
	  and then close the file.
	
	  NOTE: Save the file in the Text Only (*.txt) format. Do not save the file as
	  a Word Document.
	
	11. Switch to Schedule+. Click the Contacts tab. Select all of the Contact
	  entries and delete them. The existing contact list has to be deleted before
	  you can import the newly sorted contact list to Schedule+; you need to
	  delete the existing list to avoid creating duplicate entries.
	
	12. On the File menu, point to Import, and then click Text. This starts the Text
	  Import Wizard.
	
	13. Ensure that the exported file name appears in the File Name box. Click
	  Browse to locate the file if necessary, and then click Next.
	
	14. At the "Is the first line a list of field names?" prompt, click Yes (the
	  default is Yes), and then click Next.
	
	15. Click to select the character used between fields (comma is the default) and
	  click to select the character used to surround each field (quotation marks
	  are the default). Click Next.
	
	  NOTE: In this step, you must select the same characters that you selected in
	  step 4 when you exported the file.
	
	16. Click Contact List under "Select the type of data in the file," and then
	  click Next.
	
	17. Select a type for the fields. The wizard lists the fields from the first
	  line of the import file. To the right of each field is "IGNORE THIS FIELD."
	  Select the first "IGNORE THIS FIELD" and a drop- down list appears. In the
	  drop-down list, select the proper field name for this field. Repeat this
	  step for each of the fields listed, and then click Finish. Schedule+ now
	  imports the sorted file.
	
	18. Quit and restart Word and Schedule+ for these changes to take effect.
	
	Method 2: Use the Schedule+ Contact List as a Mail Merge Data Source
	--------------------------------------------------------------------
	
	To sort the contact list in a Word mail merge, follow these steps:
	
	1. Open or create your Word mail merge main document.
	
	2. On the Tools menu, click Mail Merge. Click Get Data, and then click Use
	  Address Book.
	
	3. In the Use Address Book dialog box, click to select Schedule+ Contact List,
	  and then click OK.
	
	4. Click Merge. In the Merge dialog box, click Query Options. Click the Sort
	  Records tab. Click to select the field that you want to sort the data source
	  by, and then click OK.
	
	5. Perform the rest of the merge as usual.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Outlook 97.
	
	
	MORE INFORMATION
	================
	
	Microsoft Outlook may not have been installed when you ran Setup for Microsoft
	Office 97 for Windows. The Setup program asks if you want to retain Schedule+ or
	to install Microsoft Outlook. If you retain Schedule+, Microsoft Outlook is not
	installed on your computer. You need to run Setup again to install Microsoft
	Outlook.
	
	You can use the contact list from Microsoft Schedule+ versions 7.0 and 7.0a with
	Microsoft Word 97 for Windows.
	
	You also can use the Microsoft Outlook 97 contact list with Microsoft Word 97 for
	Windows.
	
	Additional query words: 8.0 8.00 plus
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
