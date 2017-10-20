---
layout: page
title: "Q293094: Negative Numbers In MSN Explorer E-mail Folders"
permalink: /kb/293/Q293094/
---

## Q293094: Negative Numbers In MSN Explorer E-mail Folders

{% raw %}

	Article: Q293094
	Product(s): The Microsoft Network
	Version(s): 6.0,6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 6.0, 6.1 
	- The Microsoft Network Version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Show Folders while using e-mail in MSN Explorer, you may see a
	negative number beside one or more of the e-mail folders (for example, the
	Outbox folder).
	
	CAUSE
	=====
	
	Corrupted e-mail folders on your computer may cause this issue. E-mail may be
	lost because of this corruption.
	
	RESOLUTION
	==========
	
	RESOLUTION WARNING: The following steps will likely save your e-mail and repair
	the damage. However, your e-mail from locally stored folders (the folders on
	your computer) may be lost.
	
	To create the new folder in MSN Explorer
	
	1. At the MSN Home page, click the E-mail icon.
	
	2. Click Organize Folders.
	
	3. Click the New Folder button, and then create a new e-mail folder.
	
	4. Now click Archived Mail and select each e-mail that you want to keep.
	
	5. Click the Put in Folder button and select the new folder you just created.
	
	6. Quit MSN Explorer
	
	To locate the folders.dbx file, you must first adjust your computer's settings so
	you can view hidden files.
	Note: By following this procedure, you will delete any e-mail that you have saved
	to local folders (archived e-mail). Be sure that you don't need any locally
	stored e-mail before proceeding.
	
	To view hidden files
	
	1. Right-click Start, and then click Explore.
	
	2. Click Tools, and then click Folder Options.
	
	3. Click the View tab, and then under Advanced Settings click Show all files and
	  then click OK.
	
	4. Close Windows Explorer.
	
	To find and rename the 'folders.dbx' file
	
	1. Click Start, point to Search, and then click For Files or Folders.
	
	2. In the Search for files or folders named: box, type in hotmail.ini, and in
	  the Containing Text box, type your e-mail address.
	
	3. Under Look in: select Local Harddrives (C:), and then click Find.
	
	4. Select the first file in the Name list, click File on the main menu, and then
	  click Open Containing Folder.
	  A new window should opens displaying all files in the folder.
	
	5. Right-click the file named folders.dbx.
	
	6. Rename the file "folders.dbx.old" (without the quotes).
	
	7. Click x in the upper-right corner to close the folder. Note: you may have to
	  repeat steps 4 through 6 if more than one hotmail.ini file appears.
	  This can happen if you have uninstalled MSN Explorer or if the you have
	  deleted and added a user tile in MSN Explorer .
	
	8. Sign in to MSN Explorer and click the E-mail button.
	  MSN Explorer will re-synchronize all of your folders with the folders that are
	  stored on the MSN Explorer server.
	
	To place the e-mails from the temporary folder you created back into the Archived
	Mail Folder
	
	1. Start MSN Explorer and sign on.
	
	2. Once on the Home page, click the E-mail icon.
	
	3. Click Organize Folders.
	
	4. Click the temporary folder to which you moved all your archived to, and then
	  select all e-mails that you wish to move to the Archived Mail folder.
	
	5. Click the Put in Folder button and select Archived Mail.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN600 kbMSN610 kbMSN700
	Version           : :6.0,6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
