---
layout: page
title: "Q196042: WD97: Can't Insert Address with Netscape Communicator Installed"
permalink: /kb/196/Q196042/
---

## Q196042: WD97: Can't Insert Address with Netscape Communicator Installed

	Article: Q196042
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbemail kbenvelope word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have Netscape Communicator 4.5 installed and you try to use your
	Outlook Contact list in Word, one of the following problems may occur:
	
	- If you click the Insert Address icon in Word, your address book is not
	  opened, and the following error message appears:
	
	  Logon failed. You must log on to Microsoft Exchange to access your address
	  book. Error code: "Unspecified error".
	
	  NOTE: The Insert Address icon can be accessed in the Envelope Wizard, the
	  Letter Wizard, or when you click Envelopes and Labels on the Tools menu.
	
	  -or-
	
	- If you try to use the address book in a Word mail merge, the following error
	  message appears:
	
	  Word was unable to open the data source.
	
	  When you click OK, the following error message may appear:
	
	  Word cannot open the document.
	  Try one or more of the following:
	  * On the File menu, click Open to open the document.
	  * Make sure the document has a .DOC extension.
	  (OUTLOOK ADDRESS BOOK)
	
	  NOTE: The "Use Address Book" option can be accessed when you click Get Data in
	  the Mail Merge Helper or in the Envelope Wizard.
	
	CAUSE
	=====
	
	The "Use Netscape Messenger from MAPI-based applications" option is selected in
	Netscape Communicator.
	
	RESOLUTION
	==========
	
	Use the following steps to deselect Netscape Messenger as the default mail
	application:
	
	1. Quit Microsoft Word and all other Windows applications.
	
	2. Start Netscape Communicator (Netscape Navigator).
	
	3. On the Edit menu, click Preferences.
	
	4. Under Category, select Mail & Newsgroups.
	
	5. Click to clear the "Use Netscape Messenger from MAPI-based applications"
	  option, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbemail kbenvelope word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
