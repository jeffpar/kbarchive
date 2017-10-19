---
layout: page
title: "Q258775: XADM: How to Create and Manage a Contacts Public Folder"
permalink: /kb/258/Q258775/
---

## Q258775: XADM: How to Create and Manage a Contacts Public Folder

	Article: Q258775
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides the steps that are required to create a public Contacts
	folder and enable Microsoft Outlook Address Book name resolution for that
	folder, and information about the permissions that are necessary for Outlook to
	resolve the name.
	
	MORE INFORMATION
	================
	
	Creating the Public Contacts Folder
	-----------------------------------
	
	1. From Outlook:
	
	  a. On the File menu, click New, and then click Folder.
	
	  b. Give the folder a name.
	
	  c. In the Folder Contains box, select Contact Items.
	
	  d. You can place the folder anywhere in the public folder hierarchy.
	
	  e. Click OK to create the Contacts folder.
	
	2. After you create the folder, each Outlook client must enable the folder as an
	  e-mail Address Book. Verify that the Outlook Address Book service is
	  installed and if it is not, install the Outlook Address Book service:
	
	  a. On the Tools menu, click Services.
	
	  b. Confirm that the Outlook Address Book service is in the list of available
	     information services.
	
	  c. If it is not, click Add.
	
	  d. In the "Add Service to Profile" dialog box, click Outlook Address Book in
	     the list of available services.
	
	  e. Click OK.
	
	  NOTE: If Outlook Address Book is not in the list of services that are
	  available to add, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q173072 OL97: Outlook Address Book Service Is Not an Available Service
	
	3. To mark the Contacts folder for use with the Address Book:
	
	  a. Select the Contacts folder that you created.
	
	  b. On the File menu, point to Folders, and then click Properties for
	     <your_folder_name>.
	
	  c. In the Properties dialog box, click the Outlook Address Book tab.
	
	  d. Click to select the "Show this folder as an e-mail address book" check box
	     and type an appropriate name for the address book.
	
	  e. Click OK to apply the settings.
	
	Enable Name Resolution
	----------------------
	
	To enable name resolution for Outlook:
	
	1. On the Tools menu, click Services.
	
	2. In the Services dialog box, click the Addressing tab.
	
	3. To populate the "When sending mail, check names using these address lists in
	  the following order" box (the search box), click Add. The Add Address List
	  dialog box is displayed.
	
	4. Scroll through the available Address Books until you find the newly created
	  container, and then click it.
	
	5. Click Add.
	
	6. Click Close to close the Add Address List dialog box.
	
	7. Click OK to close the Services dialog box.
	
	Permissions
	-----------
	
	You can manage the permissions for the contacts public folder from the client or
	from the Exchange Server Administrator program. The permissions for a contact
	items public folder work the same as permissions for other public folders. Take
	care when you assign permissions for this public folder.
	
	Users must have the Read right (Reviewer role) to include the contacts folder as
	an Address Book.
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Role               | Rights                                                                                                                                                                            | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Owner              | Grants all permissions in the folder.                                                                                                                                             | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Publishing Editor  | Grants permission to create items, read items, edit and delete any item, and create subfolders.                                                                                   | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Editor             | Grants permission to create items, read items, and edit and delete any item.                                                                                                      | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Author             | Grants permission to create items, read items, and edit and delete their own items.                                                                                               | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Publishing Author  | Grants permission to create items, read items, edit and delete their own items, and create subfolders.                                                                            | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Non-Editing Author | Grants permission to create items, read items, and delete their own items.                                                                                                        | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Reviewer           | Grants permission to read items.                                                                                                                                                  | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Contributor        | Grants permission to create items.                                                                                                                                                | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| None               | Grants no permissions in the folder. Use this as the default permission when you want to limit the audience of the folder to the users you specifically add to the Name/Role box. | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
