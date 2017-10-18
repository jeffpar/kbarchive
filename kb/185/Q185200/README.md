---
layout: page
title: "Q185200: How to Share a Common List of Fax Numbers in Exchange"
permalink: kb/185/Q185200/
---

## Q185200: How to Share a Common List of Fax Numbers in Exchange

	Article: Q185200
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5,5.0,5.5
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to share a common fax address list using Microsoft
	Exchange Server. Frequently, Small Business Server administrators need this
	functionality so that users do not have to maintain a fax address list in the
	personal address book on the client computer.
	
	MORE INFORMATION
	================
	
	Using public folders, you can share a contact list on the Exchange Server
	computer for all clients to use the same fax address list.
	
	NOTE: For this to work, the Exchange Server administrator must either create or
	give the users permissions to create a public folder on the Exchange Server.
	
	1. On a client, add the Outlook Address Book to the Mail profile:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Mail and Fax.
	
	  b. If Outlook Address Book does not appear in the profile, click Add, select
	     Outlook Address Book, and then click OK.
	
	  c. Quit Outlook if it is running, and then start Outlook.
	
	2. Create a public folder:
	
	  a. If the Folder list is not displayed, on the View menu, click Folder List.
	
	  b. Double-click Public Folders, and then navigate to the location where you
	     want to create the new public folder. For example, select All Public
	     Folders.
	
	  c. On the File menu, point to New, and then click Folder.
	
	  d. Under Name, enter a name for the folder. For example, type Public Fax
	     Address List.
	
	  e. Under Folder contains, click Contact Items.
	
	  f. If you want to, in the Description box, type a description of the folder.
	
	  g. Click OK.
	
	3. Add fax addresses to the contact list:
	
	  a. Select the newly created public folder.
	
	  b. On the File menu, point to New, and then click Contact.
	
	  c. In the Full Name box, type a name for the contact.
	
	  d. Enter the information you want to include for the contact; specifically,
	     the Fax number should be put into the "Business Fax" field.
	
	  e. Click Save and Close.
	
	4. For each client, set up the public folder to display in the Address Book
	  dialog box:
	
	  a. Right-click the newly created public folder, and then click Properties.
	
	  b. Click the Outlook Address Book tab.
	
	  c. Select Show this folder as an e-mail Address Book.
	
	  d. In the Name of Address Book list box, type the name you want to appear in
	     the "Show Names from the" list box in the Address Book dialog box.
	
	  e. Click OK.
	
	Now when you send a fax using the Fax Sent utility or Outlook, your public folder
	with the fax addresses will be available in the "Show Names from the" drop down
	list box.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
