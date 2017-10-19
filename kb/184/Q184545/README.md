---
layout: page
title: "Q184545: XADM: Error Using From: Field When Replying to Public Folder"
permalink: /kb/184/Q184545/
---

## Q184545: XADM: Error Using From: Field When Replying to Public Folder

	Article: Q184545
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reply to a message in a public folder using the From: field and enter
	the address of the public folder, the following error message may appear:
	
	  "The item could not be sent. You do not have the permission to send the
	  message on behalf of the specified user."
	
	CAUSE
	=====
	
	This occurs if the public folder is hidden from the global address list and you
	type the address manually.
	
	WORKAROUND
	==========
	
	To work around this problem, you can do one of the following:
	
	- Unhide the folder from the global address list.
	
	- Add the public folder to the personal address book.
	
	- Enter the Distinguished Name (DN) of the public folder.
	
	  The Distinguished Name is an address that is unique in the entire
	  organization. The following is an example of a DN:
	
	  /o=EXCHNG_ORG/ou=EXCHNG_SITE/cn=Container1/cn=Container2/cn=Alias
	
	To unhide a public folder from the global address list, follow these steps:
	
	1. Select the public folder. On the File menu, select Properties.
	
	2. Select the Advanced tab.
	
	3. Clear the "Hide from address book" check box.
	
	4. Click OK.
	
	This process may take a short while to replicate around. At that point, you can
	select the public folder address from the global address list or type the
	address manually.
	
	If you want to keep the public folder hidden, you can add it to the personal
	address book (PAB) using the following steps:
	
	1. In the client, select the public folder.
	
	2. On the File menu, select Properties.
	
	3. Depending on the rights on the folder, select either the Administration tab
	  or the Summary tab.
	
	4. Click the "Personal Address Book" button.
	
	5. Add the folder to the From: line using the PAB.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
