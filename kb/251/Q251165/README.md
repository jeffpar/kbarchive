---
layout: page
title: "Q251165: XCLN: Adding Contacts to Secondary Contacts Folder in Outlook"
permalink: /kb/251/Q251165/
---

## Q251165: XCLN: Adding Contacts to Secondary Contacts Folder in Outlook

{% raw %}

	Article: Q251165
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Outlook 2000 allows you to create a secondary contacts folder in a mailbox. You
	can configure this contacts folder to be used as an e-mail Address Book, and
	then configure Outlook to add new contacts to this secondary contacts folder by
	default.
	
	MORE INFORMATION
	================
	
	Outlook creates a default Contacts folder during installation. For the purposes
	of this article, call this folder the primary Contacts folder. You can create
	additional contacts folders. You can use these additional contacts folders (for
	the purposes of this article, call these folders secondary contacts folders) to
	store specific contact information.
	
	Creating a New Contact
	----------------------
	
	The following are three methods you can use to add a new contact:
	
	- In the Inbox, open a received e-mail message, and in either the From, To, or
	  Cc box, right-click one of the addresses, and then click "Add to Contacts".
	
	- Create a contact by clicking New Contact on the File menu (or pressing
	  CTRL+SHIFT+C).
	
	- On the Tools menu, click Address Book (or press CTRL+SHIFT+B). On the File
	  menu, click New Entry, click New Contact, and then click OK.
	
	Changing the Default Personal Address Location
	----------------------------------------------
	
	You can configure Outlook so that when you create a new contact, that contact is
	added to a contacts folder that you specify, which can be the primary Contacts
	folder or one of the secondary contacts folders.
	
	To specify a default contacts folder for new contacts, on the Tools menu, click
	Services, click Addressing, and then in the "Keep Personal Addresses in" list,
	click the contacts folder that you want to be the default location for new
	contacts.
	
	NOTE: There may be several secondary contacts folders, but they are only visible
	in the "Keep Personal Addresses in" list if they are configured to be displayed
	as an e-mail Address Book. To configure a secondary contact folder to be
	displayed as an e-mail Address Book, right-click the secondary contacts folder,
	click Properties, click the Outlook Address Book tab, click to select the "Show
	this folder as an e-mail Address Book" check box, and then click OK.
	
	How New Contact Creation Method Affects the Folder to Which a New Contact is Added
	----------------------------------------------------------------------------------
	
	When a new contact item is added by right-clicking one of the addresses in either
	the From, To, or Cc box of a received message, that contact is always added to
	the primary Contacts folder, irrespective of the default personal address
	location setting.
	
	When a new contact is added by clicking New Contact on the File menu (or pressing
	CTRL+SHIFT+C), the new contact location varies depending on which of the
	following conditions existed during the creation of the contact:
	
	- If any folder other than the secondary contacts folder that is the default
	  personal address location is selected when the new contact is created, then
	  the new contact is created in the primary Contacts folder.
	
	- If the secondary contacts folder that is the default personal address
	  location is selected when the new contact is created, then the new contact is
	  created in that secondary contacts folder.
	
	If a new contact is added by clicking Address Book on the Tools menu (or pressing
	CTRL+SHIFT+B), clicking New Entry on the File menu, and then clicking New
	Contact, the new contact is added to the contacts folder that you designated as
	the default personal address location.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
