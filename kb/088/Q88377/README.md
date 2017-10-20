---
layout: page
title: "Q88377: PC Win: Deleting Messages from Shared Folders"
permalink: /kb/088/Q88377/
---

## Q88377: PC Win: Deleting Messages from Shared Folders

{% raw %}

	Article: Q88377
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail for Windows, to successfully delete a message
	from a shared folder, DELETE privileges are required. If a user attempts to
	delete a message from a shared folder without having the DELETE privilege, the
	following error will occur:
	
	  The owner of this shared folder has not granted other users permission to
	  perform this action. Look at Folder Properties to see which actions are
	  permitted.
	
	RESOLUTION
	==========
	
	Folder privileges can only be granted by the folder owner. To modify folder
	privileges the owner must do the following:
	
	1. Select the desired folder.
	
	2. From the File menu, choose Folder Properties.
	
	3. Select the desired privileges and choose the OK button.
	
	MORE INFORMATION
	================
	
	There are three folder privileges: READ, WRITE, and DELETE. When a user creates
	a Shared Folder, READ and WRITE are the default privileges assigned. The user
	creating the folder is considered the owner. The folder owner can delete from
	any shared folder they create with only the default READ and WRITE privileges.
	However, for other users to be able to delete messages from shared folders, they
	must have the DELETE privilege.
	
	For more information about how to establish the folder owner, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q76522 PC Adm: How to Tell Who Owns a Group or Shared Folder
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
