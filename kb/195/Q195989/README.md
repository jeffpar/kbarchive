---
layout: page
title: "Q195989: WD97: How to Create Envelopes Using Mail Merge"
permalink: kb/195/Q195989/
---

## Q195989: WD97: How to Create Envelopes Using Mail Merge

	Article: Q195989
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Word, you can create envelopes using the mail merge feature. A mail merge
	involves merging a main document with a data source. A main document contains
	the text and other items that remain the same in each envelope. A data source
	contains the information that changes in each envelope, such as the name and
	address of each recipient.
	
	Merge fields, which you insert into the main document, instruct Word where to
	print information from the data source. When you perform the mail merge, Word
	replaces merge fields in the main document with information from the data
	source. Each row (or record) in the data source produces an individual envelope.
	
	MORE INFORMATION
	================
	
	The following procedure describes how to perform a mail merge to create
	envelopes.
	
	Step One: Open or Create the Main Document
	------------------------------------------
	
	Open a blank document to create a new envelope, or open an existing main
	document.
	
	1. Open the document in Word. On the Tools menu, click Mail Merge. The Mail
	  Merge Helper dialog box appears.
	
	2. Under "1. Main Document," click Create and then click Envelopes.
	
	3. Click Active Window. The active document becomes the Mail Merge main
	  document.
	
	Word returns to the Mail Merge Helper.
	
	Step Two: Open or Create the Data Source
	----------------------------------------
	
	The data source contains the information that can vary in each envelope You can
	open an existing data source created in Word, or you can create a new data
	source and fill in the addressee information.
	
	NOTE: The data source can also be created in another program such as Microsoft
	Excel or Microsoft Access, or you can use a personal address book created in
	Microsoft Exchange or Schedule+, or you can use an ASCII text file, or another
	delimited file.
	
	1. Under "2. Data Source," click Get Data.
	
	2. The options are to create a new data source, open an existing data source, or
	  Header Options. In Word 97, Use Address Book is also available.
	
	  Use the appropriate method for the type of data source you want to use.
	
	  Method 1: Create a New Data Source
	  ----------------------------------
	
	  Use this method if you haven't yet typed the names and addresses, and want to
	  do so in Word.
	
	  a. The Create Data Source dialog box appears with a list of field names
	     commonly used in form letters, mailing labels, and envelopes. You can
	     rename the fields and remove the fields you don't need. To add field
	     names, type the name in the Field Name box, and then click Add Field Name.
	     Click OK when you're done.
	
	     Word prompts you to save the data source.
	
	  b. Name the file and click OK.
	
	     Word displays a message with the options Edit Data Source and Edit Main
	     Document.
	
	  c. Click Edit Data Source.
	
	  d. The Data Form dialog box is displayed for you to enter your addressee
	     information. If there's no information for a particular field, leave the
	     box blank.
	
	     The set of information in each form makes up one data record.
	
	     After entering the information for a record, click Add New to move to the
	     next record. After adding all of your data, click OK.
	
	  e. Word displays a message box; click Set Up Main Document.
	
	  f. Skip to the "Step Three: Edit the Main Document" section later in this
	     article.
	
	  Method 2: Open an Existing Data Source
	  --------------------------------------
	
	  Use this method if the data source has already been created.
	
	  a. In the Mail Merge Helper dialog box, click Get Data.
	
	  b. Click Open Data Source.
	
	  c. From the list of files, select the data source you want to use, and then
	     click OK.
	
	     If the data source is not listed in the list of files, click the
	     appropriate drive and folder. Then select the appropriate option in the
	     List Files of Type box.
	
	     Word then displays a message to set up the main document.
	
	  d. Click Set Up Main Document.
	
	  e. Skip to the "Step Three: Edit the Main Document" section later in this
	     article.
	
	Method 3: Use Address Book
	--------------------------
	
	  a. In the Mail Merge Helper dialog box, click Get Data and select Use Address
	     Book.
	
	     The Use Address Book dialog box appears with the available address books
	     listed under Choose Address Book.
	
	  b. Select the Address Book you want to use as your data source.
	
	     Word may prompt you to confirm the data source if Confirm Conversions is
	     selected as an option.
	
	     If you use an address book or contact list from Schedule+, Word prompts you
	     to log on to Schedule+ and provide a password if necessary.
	
	     If you use an address book from Exchange, Word prompts you to log on to the
	     Exchange services.
	
	     Word displays a message to set up the main document.
	
	  c. Click Set Up Main Document.
	
	  d. Skip to the " Step Three: Edit the Main Document" section later in this
	     article.
	
	Step Three: Edit the Main Document
	----------------------------------
	
	1. Word displays the Envelope Options dialog box. On the Envelope Options tab,
	  select the size of the envelope and the font to be used for the delivery and
	  return address.
	
	2. The Printing Options tab should reveal the feed method detected by the
	  default printer driver. Click OK.
	
	3. Word then displays the Envelope Address dialog box. The insertion point will
	  be blinking in the box under Sample Envelope Address. This is where you
	  insert the merge fields to represent where on the envelope Word should print
	  the information from the data source.
	
	4. Click Insert Merge Field in the Envelope Address dialog box. Click the
	  appropriate merge field.
	
	  Make sure you type any spaces or punctuation you want between two merge fields
	  or after a merge field.
	
	5. When you have finished placing your merge fields, click OK. This returns you
	  to the Mail Merge Helper.
	
	Step Four: Perform the Merge
	----------------------------
	
	1. Under "3 Merge the Data with the Document," click Merge. Word displays the
	  Merge dialog box. (Choosing the Query option instead of Merge gives you the
	  option to select certain data records to participate in the merge or to sort
	  the records in the data source.)
	
	2. Under Merge To, click New Document to display the merged document on the
	  screen. This allows you to view the envelopes before printing them. (Select
	  Printer to send the envelopes directly to the printer.)
	
	3. With New Document selected in Merge To, click Merge.
	
	4. After the merged document appears on the screen, you can save this as a
	  separate document or you can send the merged document to the printer by
	  clicking Print on the File menu.
	
	Online Help Topics
	------------------
	
	For more information about mail merge, click Contents and Index on the Help menu.
	Click the Index tab, and type "Mail Merge" in the search window. The applicable
	topics will be listed for you to choose from. Select a topic and click Display.
	
	Or click the Office Assistant, type "mail merge," click Search, and then click to
	view the "Print or send a mail-merge document" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: mail merge envelope tools create helper secondary 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
