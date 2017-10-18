---
layout: page
title: "Q140457: Writer/Artist: How to Remove Users"
permalink: kb/140/Q140457/
---

## Q140457: Writer/Artist: How to Remove Users

	Article: Q140457
	Product(s): Microsoft Home Kids Products
	Version(s): MACINTOSH:1.0,1.1; WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1 
	- Microsoft Creative Writer for the Macintosh, versions 1.0, 1.1 
	- Microsoft Fine Artist for the Macintosh, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Creative Writer or Fine Artist for Windows, and then enter a user
	name, that information is saved in the Mskids.ini file. In addition, folders are
	created for the users to store their work.
	
	To remove a person from the list of users, you must delete the folder and the
	reference to the folder in the Mskids.ini file.
	
	NOTE: Creative Writer and Fine Artist for the Macintosh do not use an Mskids.ini
	file.
	
	MORE INFORMATION
	================
	
	Windows
	-------
	
	1. Quit Creative Writer or Fine Artist.
	
	2. Locate the MSKids folder on the hard disk, and open it.
	
	3. Open the Users folder that you want to remove from the list.
	
	4. Click the folder, and then press DELETE.
	
	After you delete the folder, use the following steps to remove the user name from
	the Mskids.ini file:
	
	1. Open the folder in which Windows is installed.
	
	2. Locate the Mskids.ini file.
	
	3. Double-click the Mskids.ini file to open it for editing.
	
	4. Delete the line containing the user name in the [MSKIDS USERS] section.
	
	5. Save the changes to the Mskids.ini file, and then close the file.
	
	Macintosh
	---------
	
	1. Quit Creative Writer or Fine Artist.
	
	2. Locate the MSKids folder on the hard disk, and open it.
	
	3. Open the Users folder.
	
	4. Select the folder with the name you want to remove, drag it to the Trash, and
	  then empty the trash.
	
	Additional query words: kbhowto kids mskids artist maggie max writer how to user remove mczee
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbPTProdChange kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110Mac kbCreativeWriter100Mac kbFineArtist100 kbFineArtist110 kbFineArtist110Mac kbFineArtist100Mac
	Version           : MACINTOSH:1.0,1.1; WINDOWS:1.0,1.1
	
	=============================================================================
	
