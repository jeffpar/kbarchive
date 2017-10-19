---
layout: page
title: "Q249831: XADM: How to Delete Windows 2000 User Accounts Stored in LDF"
permalink: /kb/249/Q249831/
---

## Q249831: XADM: How to Delete Windows 2000 User Accounts Stored in LDF

	Article: Q249831
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up a new Microsoft Exchange Active Directory Connector (ADC)
	Connection Agreement, the default is to allow deletions to happen automatically
	across the agreement. It is also possible to supress the automatic deletions and
	have them placed into a LDF formatted file. You then have to manually use a
	utility to commit such deletions and remove the entries (user accounts) from the
	Microsoft Windows 2000 directory.
	
	You may want to choose to have deletions be placed in the LDF file to prevent the
	accidental deletion of user accounts when their mailboxes have been deleted or
	moved from one Exchange Server computer, this gives you another chance to review
	the delete actions before you commit them.
	
	Choosing the option to place deletions into an LDF formatted file for the Windows
	side and into a CSV formatted file for the Exchange side can be a good option
	when setting up a new Connection Agreement. Doing so allows you to monitor the
	deletions that the ADC would have made automatically and import them if you
	choose. Once the ADC is in place, and all your major configuration and user
	changes have been done you can set the ADC to replicate deletions automatically.
	
	MORE INFORMATION
	================
	
	The ADC writes individual LDF files for each Connection Agreement and places
	them in the Program Files\Msdac\Msadc\<Agreement Name>\Win2000.ldf file.
	Changes are appended to the same LDF files and not written to new files.
	
	To delete accounts that are no longer needed you must use the Windows
	2000-provided Bulk import and Export utility, Ldifde.exe, that is located in the
	Windows 2000 System32 folder. To use the command successfully, you must have the
	proper permissions to delete users from Windows 2000 Active Directory.
	
	The following example illustrates a simple import of the current domain. If you
	are logged on with proper credentials to the domain, and run the following
	command on a domain controller, all of the content of the specified LDF file
	will be imported to Active Directory, which commits all deletions.
	
	  "Ldifde -i -f win2000.ldf" (without the quotation marks)
	
	This example uses your current logged on credentials and specifies the import
	action and the import file that contains the deleted users.
	
	For additional information on how to use the Ldifde.exe command, please consult
	Windows 2000 Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
