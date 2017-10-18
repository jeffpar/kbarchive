---
layout: page
title: "Q185058: How to Send Faxes Using SBS Fax Client Software"
permalink: kb/185/Q185058/
---

## Q185058: How to Send Faxes Using SBS Fax Client Software

	Article: Q185058
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes methods for sending faxes from Windows 95 and Windows NT
	clients to a Small Business Server (SBS) computer using the Microsoft Fax Client
	software included with SBS.
	
	MORE INFORMATION
	================
	
	Faxing from Microsoft Outlook
	-----------------------------
	
	Method 1:
	
	1. On the File menu, point to New, and then click Mail Message.
	
	2. Click To.
	
	3. If the fax recipient already exists in the Personal Address Book, click the
	  recipient, click To->, and then click OK.
	
	  -or-
	
	  If you are creating new recipients, click New, and then do the following:
	
	  a. To save the fax number to use again, click Fax Address in the Entry Type
	     box, click Personal Address Book in the In The box, and then click OK.
	
	NOTE: For this method, you must have Fax Address Book and Personal Address Book
	installed for your profile in the Mail and Fax Application in Control Panel. The
	alternative is to use Contacts in Method 2 below.
	
	  b. To create a fax number to use one time, click Fax Address in the Entry
	     Type box, click In This Message Only, and then click OK.
	
	  c. If the fax number is needed only one time, you can also use Method 3.
	
	  d. Enter at least the fax recipient name and fax number, and then click OK.
	
	  e. If you want to send one fax to multiple recipients, repeat steps 2, 3a,
	     and 3b for each recipient.
	
	  f. If you want to use a distribution list to send a fax, do the following:
	
	NOTE: You must complete steps 3a, 3b, and 3c first.
	
	     1. In a new message, click TO, and then click New.
	
	     2. Click Personal Distribution List (PDL) in the Entry Type box, and then
	        click OK.
	
	     3. Type a name for the PDL, and then click Add/Remove Members.
	
	     4. Select the fax addresses from the Personal Address Book, click OK, and
	        then click OK again.
	
	4. Complete the mail message with subject, notes, and attachments, if desired,
	  and then click Send.
	
	Method 2:
	
	NOTE: Outlook Address Book must be in your profile to use information from the
	Contacts folder for addressing faxes.
	
	1. In your Personal folder, click Contacts.
	
	2. On the File menu, point to New, and then click Contact.
	
	3. Enter at least the Fax Recipient name and Business fax (or Home fax) number,
	  and then click Save and Close.
	
	4. On the File menu, point to New, and then click Mail Message.
	
	5. Click To.
	
	6. In the Show Names From The box, click Contacts under Outlook Address Book.
	
	7. Click the recipient, click To->, and then click OK.
	
	8. Complete the mail message with subject, notes, and attachments, if desired,
	  and then click Send.
	
	Method 3:
	
	1. On the File menu, point to New, and then click Mail Message.
	
	2. On the To line, type "[fax:recipient@n,xxx-xxx-xxxx]" (without the quotation
	  marks),where "recipient" is the recipient name (optional), n is the number
	  required for an outside line (if needed)and "xxx-xxx-xxxx" is the fax number
	  (dashes are optional). If multiple recipients are needed, use a semi-colon
	  (;) between each fax number. For example:
	
	  [fax:recipient@n,xxx-xxx-xxxx];[fax:recipient@n,xxx-xxx-xxxx]
	
	  If the optional information is omitted, the correct fax format would then look
	  as follows:
	
	  [fax:xxxxxxxxxx];[fax:xxxxxxxxxx]
	
	3. Complete the mail message with subject, notes, and attachments, if desired,
	  and then click Send.
	
	NOTE: For the above three methods, the Compose New Fax Utility does not appear
	unless an attachment is added. See the Fax Send Utility section below for more
	information on using this utility. If only the To: and Subject: fields are
	populated (no notes, text or attachments are included) no fax will be sent.
	
	Faxing from Applications
	------------------------
	
	Method 1:
	
	1. From within an application (for example, Microsoft Excel), create or open the
	  file you want to fax.
	
	2. On the File menu, click Print.
	
	3. In the Name box, click Fax, and then click OK.
	
	NOTE: Compose New Fax utility appears. See the Fax Send Utility section below for
	more information on using this utility.
	
	Method 2 - Mail Merge in Microsoft Word:
	
	Microsoft Word allows you to perform a mail merge to a fax number. Outlook or
	Messaging must be installed before Merge To Electronic Mail is available in
	Word.
	
	NOTE: Merge To Fax is only an option when using Windows 95 Microsoft Fax; the
	option is not available in Word with the SBS fax client.
	
	To merge to electronic mail, perform the following steps:
	
	1. In Word, create or open the main document to fax.
	
	2. On the Tools menu, click Mail Merge.
	
	3. For Step 1, click Create, click the main document you want to create, and
	  then click Active Window.
	
	4. For Step 2, click Get Data, click the appropriate data source, and then click
	  Create or Open Data Source.
	
	  NOTE: In the data source (whether it is a Word document, Access database,
	  Excel spreadsheet, and so on), the Fax field must be formatted as follows:
	
	  [fax:recipient@n,xxx-xxx-xxxx]
	
	  Where "recipient" is the recipient name (optional), n is the number required
	  for an outside line (if needed)and "xxx-xxx-xxxx" is the fax number (dashes
	  are optional).
	
	  If the optional information is omitted, the correct Fax field format would
	  look as follows:
	
	  [fax:xxxxxxxxxx]
	
	5. For Step 3, click Merge, and then click Merge to Electronic Mail.
	
	6. Click Setup and then click the Fax field. Do not click "Send document as an
	  attachment" because this is a fax and Word is already open. This is normally
	  used for e-mail messages.
	
	NOTE: The Compose New Fax Utility does not appear.
	
	In applications such as Excel and Word, there is also an option to Send To Fax
	Recipient. According to the SBS Readme.wri file, do not use the Fax option off
	of the Send To command on the File menu.
	
	Fax Send Utility
	----------------
	
	1. Click Start, point to Programs, point to Microsoft Fax Server Client, and
	  then click Fax Send Utility.
	
	2. In the To field, type the name of the recipient, or select it from the
	  Address Book.
	
	3. Click Add and repeat step 2 to send the same fax to multiple recipients.
	
	4. If the properties for your dialing location require dialing access numbers or
	  calling card numbers, and some recipient numbers do not require these
	  numbers, select the Dial As Entered box when typing their number.
	
	5. Click Next.
	
	6. Select the cover page to use. All available cover pages on the client and
	  server are listed.
	
	7. Select the time to send the fax and enter the billing code if required by
	  your administrator.
	
	8. Type a Subject and the body of the fax. This is the only text that will be
	  faxed. Attachments cannot be added by this method.
	
	NOTE: The Microsoft Fax component in Windows 95 does have the capability to
	attach documents using the fax utility. SBS Fax Server Client Utility does not.
	
	For information about how to use a shared list of fax addresses using Exchange
	Server, please see the following Microsoft Knowledge Base article:
	
	  ARTICLE ID: Q185200
	  TITLE : SBS: How to Share a Common List of Fax Numbers in Exchange
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a
	Version           : :4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	
