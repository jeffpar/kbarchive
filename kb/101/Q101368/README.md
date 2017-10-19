---
layout: page
title: "Q101368: PC Win DOS: Windows and MS-DOS Client Folders"
permalink: /kb/101/Q101368/
---

## Q101368: PC Win DOS: Windows and MS-DOS Client Folders

	Article: Q101368
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	Versions 3.0 and 3.2 of Microsoft Mail for Windows and Microsoft Mail
	for PC Networks, MS-DOS workstation, implement private folder storage
	in different ways. The Windows client stores private folders in the
	Mail message file (.MMF) and the MS-DOS client stores folders in the
	.FLD files within the postoffice database structure.
	
	It is best for users who use both the MS-DOS and Windows clients to
	use private folders in only one of the clients. However, a workaround
	exists if private folder access is required from both clients.
	
	
	The following are the steps to the workaround:
	
	NOTE: A side effect of this workaround is that the group will now
	appear in the postoffice address list as well as the global address
	list on the postoffice where the group resides. Use this workaround
	with discretion.
	
	
	1. Sign on to the Administrator program as Admin and select Local-Admin, Modify
	  to grant group folder privileges to the user who requires private folder
	  access from both clients.
	
	2. Select Local-Admin, Group, Create to create a global group specifying the
	  sole member of the group as the user who requires private folder access from
	  both clients.
	
	  NOTE: DO NOT include the group in directory synchronization.
	
	3. Sign on to the MS-DOS client as that user. Select Options, Folders, Create to
	  create a group folder for that group. Make sure you specify the folder mode
	  to Group.
	
	  NOTE: Group folders can only be created in the MS-DOS client.
	
	Because the individual is the only person who has access to the group
	folder, the folder now behaves like a private folder. The
	administrator must be careful not to assign additional members who
	also have group folder privileges to the group.
	
	The group folder is stored in a .FLD file that can only be accessed by
	the Windows client when it is connected to the postoffice. This folder
	is not accessible when working offline.
	
	In the Windows client, all group folders appear in the shared folder
	panel. The group folder will NOT appear in the private folder panel.
	
	NOTE: Group folder access was not available in the Windows client in
	versions earlier than 3.0b.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
