---
layout: page
title: "Q91702: PC DOS: Deleting Messages from Shared Folders"
permalink: /kb/091/Q91702/
---

## Q91702: PC DOS: Deleting Messages from Shared Folders

{% raw %}

	Article: Q91702
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can delete a Microsoft Mail for PC Networks message from a shared folder if
	you have been given DELETE privileges for that folder by the folder owner.
	
	There are three folder privileges: READ, WRITE, and DELETE. When you create a
	shared folder, Microsoft Mail assigns you READ and WRITE privileges by default.
	
	The person who creates a folder is that folder's owner. The owner of a shared
	folder can delete messages in that folder even though they have only the default
	READ and WRITE privileges. However, Microsoft Mail will not allow any other user
	to delete messages from that folder unless the folder owner has given them
	DELETE privileges.
	
	A shared folder owner can grant folder privileges to other users by following
	these steps:
	
	1. From the Options menu, choose Folders, then choose Modify.
	
	2. Select the desired folder.
	
	3. Using the TAB key, move to the Access Rights field. To add DELETE as a
	  privilege, highlight DELETE and press the SPACEBAR.
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
