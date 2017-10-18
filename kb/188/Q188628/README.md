---
layout: page
title: "Q188628: XADM: Exporting and Importing Permissions on Objects"
permalink: kb/188/Q188628/
---

## Q188628: XADM: Exporting and Importing Permissions on Objects

	Article: Q188628
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators may want to import and export information from the Permissions
	page of Exchange mailboxes, distribution lists, and custom recipients.
	
	This can be accomplished by constructing an export/import .CSV header file that
	contains the Obj-Admins, Obj-Perm-Admins, and Obj-Users fields.
	
	NOTE: The information in this article also applies to manipulating permissions
	for Custom Recipients and Distribution Lists.
	
	MORE INFORMATION
	================
	
	Each Exchange mailbox has a "Primary Windows NT Account" entry that gives a
	Windows NT user permission to access the mailbox. You can configure additional
	Windows NT permissions on a mailbox and thus allow multiple Windows NT accounts
	to have access to a single Exchange object.
	
	NOTE: You can also allow multiple Windows NT account access by assigning a
	Windows NT group as the "Primary Windows NT Account".
	
	Additional Windows NT account permissions may be configured on the Permissions
	property page for an object.
	
	By default, the Permissions page is not displayed in Exchange Administrator for
	most objects. To display it for all objects, from the Tools menu, select
	Options. Click the Permissions tab, and then select "Show Permissions page for
	all objects".
	
	Obj-Admins, Obj-Perm-Admins and Obj-Users are "pseudo-attributes" created for the
	purpose of bulk import and export of additional Permissions.
	
	Obj-Admins corresponds to the Windows NT accounts that have Administrator access
	to the object. Obj-Perm-Admins corresponds to Permissions Admin, and Obj-User to
	User permissions.
	
	The following is an example of a default export CSV header with the Permissions
	pseudo-attribute fields added to it:
	
	  Obj-Class,First Name,Last name,Display Name,Alias Name,Directory
	  Name,Primary Windows NT Account,Home-Server,E-mail address,E-mail
	  Addresses,Members,Obj-Container,Hide from AB,Obj-Admins,Obj-Perm-
	  Admins,Obj-Users
	
	The above header may be copied and used in a .CSV file. To do this:
	
	1. Open Notepad or another plain text editor and paste the header into it. The
	  header should be the first and only line in the file and is intended to be a
	  single long line terminated with a carriage return.
	
	2. Save the file as <filename>.CSV and exit Notepad.
	
	3. In Exchange Administrator, select Tools.Directory Export, and export to the
	  file you just created.
	
	Additional Notes
	----------------
	
	- Windows NT account information should be entered in the .CSV file in this
	  format:
	
	  domain-name\user-name%domain-name>\user-name2 . . .
	
	  (A percentage sign separates multiple Windows NT accounts granted the same
	  permissions.)
	
	- You can delete all the Windows NT Accounts assigned Permissions Admin, Admin,
	  or User rights on the object by inserting ~DEL into the appropriate field of
	  an import file. This does not delete the permissions of the Primary Windows
	  NT Account for a mailbox or the permissions of the Owner for a distribution
	  list.
	
	- If you enter an invalid Windows NT account in an import file, it is ignored.
	  You cannot add permissions for Windows NT accounts that do not exist or that
	  cannot be currently validated by a Windows NT domain controller.
	
	- Custom and Send As permissions cannot be exported, imported, or deleted
	  through bulk import. They are invisible to the export/import process. If you
	  inadvertently import the same Windows NT account under two or more
	  permissions headings, the permissions granted to the account will be additive
	  and will cause the account to show Custom permissions. For example, if you
	  import the same account in both the Obj-Admins and Obj- Users fields, the
	  account will have both administrative and mailbox read/send permissions.
	  After this happens, you can no longer affect the account through
	  import/export but must manage the account through the Exchange Administrator
	  interface.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
