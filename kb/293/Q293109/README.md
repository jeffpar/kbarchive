---
layout: page
title: "Q293109: Saving Archived E-mails Before Deleting MSN Explorer User Accoun"
permalink: /kb/293/Q293109/
---

## Q293109: Saving Archived E-mails Before Deleting MSN Explorer User Accoun

	Article: Q293109
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): kbhowto kbPubTypeMSN
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 6.0, 6.1 
	- MSN version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You remove MSN Explorer User account(s) from your machine and cannot find
	archived e-mails (locally stored e-mails).
	
	CAUSE
	=====
	
	Going through the user removal procedure in MSN Explorer will remove User
	account(s) and all locally stored (archived) e-mails messages completely.
	
	RESOLUTION
	==========
	
	Before finding the .dbx file, you first must enable the option to view hidden
	files on your system.
	
	To view hidden files
	
	1. Click Start, click Search, and then click Find Files or Folders.
	
	2. Click Tools, and then click Folder Options.
	
	3. Click the View tab and make sure Show Hidden Files and Folders is selected.
	
	4. Clear the boxes next to Hide file extensions for known file types and Hide
	  protected operating system files.
	
	5. In the box labeled Search for the files or folder named type: hotmail.ini; in
	  the box labeled Containing Text type: your e-mail address.
	  Note: WinXP customers must also go to Advanced Options and select Search
	  hidden files and folders.
	
	6. Click the Search Now button.
	
	7. Right click the hotmail.ini file in the search window and select Open
	  Containing Folder.
	  Your .dbx file Archived Mail.dbx is in that folder.
	
	8. Right-click the Archived Mail.dbx file, and then click Copy.
	
	9. Paste the file in a folder where you can find it later, and then rename the
	  Archived Mail.dbx file after you paste it in the folder (rename Archived
	  Mail.dbx to Archived Mail.old)
	
	10. Sign in to MSN Explorer and remove the MSN Account(s).
	
	11. Restore MSN Account(s) by going through the Add User process.
	
	12. Close MSN Explorer.
	
	13. Rename the Archived Mail.dbx files (rename Archived Mail.old to Archived
	  Mail.dbx), and then paste the file in the local storage folder within the
	  hotmail.ini folder. (Following the above step to find the hotmail.ini file
	  where the Archived Mail.dbx resides
	
	14. Start MSN Explorer
	
	Please note: This will only copy back the archived mail you have since the last
	time you saved them.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu MSN Explorer
	
	======================================================================
	Keywords          : kbhowto kbPubTypeMSN 
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN700
	Version           : :6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	
