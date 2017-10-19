---
layout: page
title: "Q87159: Mac Wkst: Folder Tracking"
permalink: /kb/087/Q87159/
---

## Q87159: Mac Wkst: Folder Tracking

	Article: Q87159
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of Microsoft Mail for the Macintosh allows for local folder storage
	as well as server folder storage. The local folder information and contents are
	stored in a single data file using the user name as the title. This file is
	stored in the MS Mail Local Folder, which is kept within the Preferences
	folder.
	
	The local cache file, which is also kept in the Preferences folder, keeps track
	of the last open folder. The default open folder for offline use is the last
	open folder, if it is local. Then it will be the Outbox, if it exists, and if
	there is no Outbox, the default open folder will be the first alphabetical local
	folder. If the last open folder is the Outbox, and Mail is started online, then
	the open folder will be the Mailbox; Mail never defaults to the Outbox while
	offline.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
