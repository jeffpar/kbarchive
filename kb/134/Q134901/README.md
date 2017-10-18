---
layout: page
title: "Q134901: WD97: How to Modify the Layout of an Address Book Entry"
permalink: kb/134/Q134901/
---

## Q134901: WD97: How to Modify the Layout of an Address Book Entry

	Article: Q134901
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbautotext word97 kblayoutkbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to modify the layout of an address that you insert
	when you use the Personal Address Book (PAB), Schedule+, or Microsoft Outlook
	Contact List.
	
	The address layout is determined by the AutoText entry "AddressLayout" This entry
	may contain any predefined address property names between the angle brackets
	(<>). Note that all of the following property names must be typed in
	uppercase letters, for example
	
	  {<PR_GIVEN_NAME>} {<PR_SURNAME><B6>
	  }{<PR_COMPANY_NAME><B6>
	  }{<PR_STREET_ADDRESS><B6>
	  }{<PR_LOCALITY>}, {<PR_STATE_OR_PROVINCE>
	  }{<PR_POSTAL_CODE><B6>}
	
	where <B6> indicates that you should press ENTER on your keyboard. Also, the brace
	characters ( { and } ) are typed from the keyboard and are not to be confused
	with field braces (CTRL+F9). When you use the braces with the address layout
	fields, if a field is blank when you import the address, Word automatically
	suppresses the blank line.
	
	NOTE: The "AddressLayout" format is limited to a maximum of 12 fields from a
	Personal Address Book (PAB), Schedule+, or Microsoft Outlook Contact list.
	
	MORE INFORMATION
	================
	
	To Create a New Format
	----------------------
	
	1. In a new Word document, type the predefined address property names (in
	  uppercase letters) in the format you want to set up, for example
	
	  {<PR_GIVEN_NAME>} {<PR_SURNAME><B6>
	  }{<PR_COMPANY_NAME><B6>
	  }{<PR_STREET_ADDRESS><B6>
	  }{<PR_LOCALITY>}, {<PR_STATE_OR_PROVINCE>
	  }{<PR_POSTAL_CODE><B6>}
	
	  where <B6> indicates that you should press ENTER on your keyboard. Also, the
	  brace characters ( { and } ) are typed from the keyboard and are not to be
	  confused with field braces (CTRL+F9). When you use the braces with the
	  address layout fields, if a field is blank when you import the address, Word
	  automatically suppresses the blank line.
	
	2. Select this text.
	
	3. On the Insert menu, point to AutoText and then click New.
	
	4. In the "Please name your AutoText entry" box, type "AddressLayout" (without
	  the quotation marks).
	
	  IMPORTANT NOTE: If you use a language-specific version of Microsoft Word, you
	  must use the AddressLayout word that is specific for your language. The
	  following are a few examples for some specific languages:
	
	  Language   AutoText Entry Name
	  ------------------------------
	
	  English    AddressLayout
	  Dutch      AdresIndeling
	  French     MiseEnPageAdresse
	  Italian    IndirizzoLayout
	  German     AdreBlayout
	  Danish     AdresseLayout
	
	5. Click OK.
	
	To Insert an Address Book Entry in Your Document
	------------------------------------------------
	
	1. Click the Insert Address button on the Standard toolbar.
	
	  NOTE: The Insert Address button does not appear by default on the Standard
	  toolbar. It does appear in the Envelopes, Labels, and Mail Merge dialog
	  boxes. It is also included in several wizards such as the Letter Wizard. To
	  add the button to a toolbar see the "How Add the Insert Address Button to the
	  Toolbar" section later in this article.
	
	2. Select a name from the list.
	
	3. Click OK.
	
	The address book entry should be inserted into your document in the format you
	defined for your AutoText entry. However, if you receive the following error
	message instead, modify the properties of the name you chose in step 2:
	
	  There are no address fields in this address book. Pick the desired address
	  book and try again.
	
	NOTE: The properties are set incorrectly if both the first and last names appear
	in the First box on the Business tab. (To access this option, first click the
	Insert Address button, select the name, and then click Properties in the Select
	Name dialog box.)
	
	The error message also occurs if you enter the property names for the AutoText
	entry in lowercase letters. To resolve this problem, change all the property
	names to uppercase letters.
	
	What Properties are Supported?
	------------------------------
	
	For additional information on which properties are supported, including which
	address books use which properties, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q141874 WD97: Some Contact List Fields Not Available to Word
	
	For additional information about address layout, please refer to the Microsoft
	Office 97 Resource Kit, ISBN: 1-57231-329-3, available from Microsoft Press.
	
	The Microsoft Office 97 Resource Kit is also available at the following Microsoft
	Web site:
	
	  http://www.microsoft.com/office/ork/default.htm
	
	How to Add the Insert Address Button to the Toolbar
	---------------------------------------------------
	
	To add the Insert Address button to a toolbar, follow these steps:
	
	1. On the View menu, point to Toolbars, and then click Customize.
	
	2. Click the Commands tab. Under Categories, click Insert.
	
	  The available built-in buttons for the selected category are displayed to the
	  right of the list, under Commands.
	
	3. Scroll through the list of categories and find Address Book.
	
	4. Drag the Address Book button to the location you want on a toolbar.
	
	NOTE: To see a short description of any built-in button's function while in the
	Customize dialog box, click the button, and then click Description.
	
	Additional query words: addresslayout address layout AutoText pab schedule all cap
	
	======================================================================
	Keywords          : kbdta word8 kbautotext word97 kblayout kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
