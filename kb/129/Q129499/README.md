---
layout: page
title: "Q129499: PC Win DOS: Copying Messages from MMF to MS-DOS Client Folder"
permalink: /kb/129/Q129499/
---

## Q129499: PC Win DOS: Copying Messages from MMF to MS-DOS Client Folder

{% raw %}

	Article: Q129499
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a method for copying messages stored in a folder in
	version 3.2 of Microsoft Mail for Windows Mail Message File (MMF) to a folder
	accessible within the Microsoft Mail for PC Networks, MS-DOS workstation.
	
	MORE INFORMATION
	================
	
	During the Windows client operation, messages stored in the MMF are not
	accessible to the MS-DOS client. To copy messages stored in a folder within the
	MMF to a folder accessible to the MS-DOS client, use the following steps:
	
	1. From the Windows client, move any Inbox messages to a temporary folder (for
	  example, a folder named temp) that you do NOT want copied to the MS-DOS
	  client folder.
	
	2. Move any messages that you want copied to the MS-DOS client folder into the
	  Inbox.
	
	3. From the Mail menu, choose Options. Select Server. From within the Server
	  dialog box, select the Copy Inbox on Postoffice for Dialin Access check box.
	
	4. From the File menu, choose Exit and Sign Out.
	
	  The following dialog box may be displayed:
	
	  Your Inbox is not completely synchronized with the postoffice.
	  Do you want to synchronize it before quitting?
	
	  Select the Yes button.
	
	  The Windows client will then copy the mail messages stored in the MMF to the
	  postoffice. These messages should now be accessible in the Inbox of the
	  MS-DOS client.
	
	5. Run the MS-DOS client.
	
	  NOTE: The mail messages previously copied from a folder in the MMF to the MMFs
	  Inbox are now available in the MS-DOS client's Inbox.
	
	6. Create a new MS-DOS client folder using the Options, Folders, Create command
	  (or use and existing MS-DOS client folder). Move the messages from the MS-DOS
	  client's Inbox to the folder using the Storage, Save command.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
