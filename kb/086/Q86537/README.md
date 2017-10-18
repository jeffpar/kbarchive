---
layout: page
title: "Q86537: PC Adm: How to Move Mail User from One Postoffice to Another"
permalink: kb/086/Q86537/
---

## Q86537: PC Adm: How to Move Mail User from One Postoffice to Another

	Article: Q86537
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the procedure to move a version 3.0 Microsoft Mail for PC
	Networks user from one postoffice to another. Follow the steps below, based on
	the type of user you are moving.
	
	User Runs MS-DOS and/or Macintosh Client Only
	---------------------------------------------
	
	1. Move all mail in the user's inbox that the user wants to retain into folders.
	
	2. Archive the folders using the MS-DOS client. This can be done by choosing
	  Options, Folders, Folders, Archive.
	
	3. If the user owns any shared or group folders, archive the folder, then delete
	  it. The user can then pass the archived folders over to another user on the
	  postoffice to own them.
	
	4. Delete the user from the postoffice.
	
	5. Add the user to the new postoffice.
	
	6. De-archive the folders using the MS-DOS client.
	
	7. Promptly re-export both address lists.
	
	User Runs Windows and/or PM Client Only
	---------------------------------------
	
	1. Move the Mail message file (MMF) to local storage. This can be done by
	  choosing Options from the Mail menu and selecting the Server button.
	
	2. Make a backup of the MMF. This can be done by choosing Backup from the Mail
	  menu.
	
	3. If the user owns any shared folders, they should be archived using the MS-DOS
	  client, and then deleted. The user then can pass the archived folders over to
	  another user on the postoffice to own them.
	
	4. Delete the user on the postoffice.
	
	5. Create the user on the new postoffice, using the same alias.
	
	6. Have the user run Mail on the new postoffice and move the MMF to local
	  storage. This can be done by choosing Options from the Mail menu and
	  selecting the Server button.
	
	7. Copy the backup MMF to the name and location of the new locally stored MMF.
	
	8. Promptly re-export both address lists.
	
	For Microsoft Schedule+ users, because a copy of the user's calendar file is kept
	on both the server and the user's local workstation, nothing need be done. The
	next time the user logs on to Schedule+, a copy of the local calendar file will
	be uploaded to the server.
	
	User Runs a Combination of Both MS-DOS/Macintosh and Windows/PM Clients
	-----------------------------------------------------------------------
	
	1. Using the MS-DOS client, move all mail in the inbox that you want to save
	  into folders.
	
	2. Archive the folders using the MS-DOS client. This can be done by choosing
	  Options, Folders, Folders, Archive.
	
	3. If the user owns any shared or group folders, the user should archive the
	  folder and then delete it. The user then can pass the archived folders to
	  another user on the postoffice to own them.
	
	4. Using the Windows or PM client, move the Mail message file (MMF) to local
	  storage. This can be done by choosing Options from the Mail menu and
	  selecting the Server button.
	
	5. Make a backup of the MMF. This can be done by choosing Backup from the Mail
	  menu.
	
	6. Delete the user on the postoffice.
	
	7. Create the user on the new postoffice, using the same alias.
	
	8. De-archive the folders using the MS-DOS client.
	
	9. Have the user run the Windows or PM client on the new postoffice and move the
	  MMF to local storage. This can be done by choosing Options from the Mail menu
	  and selecting the Server button.
	
	10. Copy the backup MMF to the name and location of the new locally stored MMF.
	
	11. Promptly re-export both address lists.
	
	For Microsoft Schedule+ users, because a copy of the user's calendar file is kept
	on both the server and the user's local workstation, nothing need be done. The
	next time the user logs on to Schedule+, a copy of the local calendar file will
	be uploaded to the server.
	
	Additional query words: 3.00 moving admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
