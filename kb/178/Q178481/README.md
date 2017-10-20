---
layout: page
title: "Q178481: WD97: Errors Accessing the Address Book Icon"
permalink: /kb/178/Q178481/
---

## Q178481: WD97: Errors Accessing the Address Book Icon

{% raw %}

	Article: Q178481
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): word97 kbwdinternetkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Address Book icon in Word, you may receive one or more of the
	following error messages:
	
	  Mapi32.dll is an invalid MAPI library.
	
	-or-
	
	  Login failed, unspecified error.
	
	-or-
	
	  Word was unable to open the data source.
	
	-or-
	
	  Word cannot open the document. Try one or more of the following:
	
	  - On the File menu, click Open to open the document.
	
	  - Make sure the document has a .doc extension. (Outlook Address Book)
	
	-or-
	
	  Logon failed. You must log on to Microsoft Exchange to access your address
	  book. Error code: "Unspecified error".
	
	-or-
	
	  WinWord caused an Invalid Page Fault in module Emsuix32.dll.
	
	-or-
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, the following error message appears:
	
	  WINWORD caused an invalid page fault in Schdmapi.dll at <address>.
	
	NOTE: The actual memory address may vary.
	
	You also may receive any of these error messages when you click the Address Book
	icon from any of the following:
	
	- The Envelopes or Labels tab.
	
	NOTE: To access the Envelopes tab or Labels tab, click Envelopes and Labels on
	the Tools menu.
	
	-or-
	
	- The Mail Merge Helper, when you click Outlook Address Book.
	
	NOTE: To select Outlook Address Book in the Mail Merge Helper, click Get Data,
	and then click Use Address Book.
	
	-or-
	
	- The Envelope Wizard, Fax Wizard, Letter Wizard, Mail Label Wizard, Memo
	  Wizard, or Pleading Wizard.
	
	NOTE: To run a wizard, click New on the File menu, and then click the Letters and
	Faxes tab, Memos tab, or Legal Pleadings tab.
	
	CAUSE
	=====
	
	You may have selected Outlook Express as your default e-mail program and made
	Outlook Express the default simple MAPI client.
	
	WORKAROUND
	==========
	
	Do not set Outlook Express as the default simple MAPI client. Outlook Express
	was designed for use with Microsoft Internet Explorer 4.x. While you can use
	Outlook Express to send e-mail from Word, the Outlook Express Address Book is
	not designed for use with Word.
	
	NOTE: To send e-mail from Word, point to Send To on the File menu, and then click
	Mail recipient.
	
	Clearing the Simple MAPI Client Check Box
	-----------------------------------------
	
	To clear the Simple MAPI client check box, follow these steps:
	
	1. In Outlook Express, on the Tools menu, click Options.
	
	2. On the General tab, click to clear the "Make Outlook Express my default
	  Simple MAPI client" check box.
	
	  NOTE: The "Make Outlook Express my default Simple MAPI client" check box is
	  not available unless the "Make Outlook Express my default e-mail program"
	  check box is selected. This check box is also not available for Outlook
	  Express 5.0.
	
	You may need to restart your computer, or reinstall Microsoft Office or Outlook
	after clearing the "Make Outlook Express my default Simple MAPI client" check
	box. After you restart your computer or reinstall Office or Outlook, your
	previous address book should again function correctly with Word.
	
	
	MORE INFORMATION
	================
	
	When you send a document from Word as an e-mail message, the e-mail program that
	is set as your default simple MAPI client is used to send the document.
	
	NOTE: To send your Word document as an e-mail message, point to Send To on the
	File menu and then click Mail Recipient.
	
	The following information explains the purpose and functionality of the options
	that are required to use Microsoft Outlook Express with Word.
	
	"Make Outlook Express my default e-mail program" Check Box
	----------------------------------------------------------
	
	Specifies whether to use Outlook Express whenever you click a link in a Web page
	to send an e-mail message or choose the mail command in your Web browser.
	
	"Make Outlook Express my default Simple MAPI client" Check Box
	--------------------------------------------------------------
	
	Specifies whether Outlook Express is used when you send documents from within
	other applications by using the Send command on the File menu. Selecting this
	check box disables both the Microsoft Exchange and Microsoft Outlook mail
	programs.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q178077 How to Set Outlook Express as Your Default Simple MAPI Client
	
	
	  
	
	  Q171043 OL97: Microsoft Fax Does Not Process Dialing Properties
	
	
	For more information about Outlook Express, please see the Outlook Express Readme
	file. To view the Readme file in Outlook Express, click Readme on the Help
	menu.
	
	
	Additional query words: read me ipf
	
	======================================================================
	Keywords          : word97 kbwdinternet kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
