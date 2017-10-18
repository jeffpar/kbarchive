---
layout: page
title: "Q98962: Mac LDF: Mail Tools Err Msg: File Unrecognizable"
permalink: kb/098/Q98962/
---

## Q98962: Mac LDF: Mail Tools Err Msg: File Unrecognizable

	Article: Q98962
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When rebuilding a local data file with version 3.1 of Microsoft Mail for
	AppleTalk Networks, the Mail Tools application may return the following error
	message:
	
	  File Unrecognizable
	
	It is possible the error is reported incorrectly, and the local data file is
	still capable of being rebuilt.
	
	CAUSE
	=====
	
	The Mail Tools local mail rebuild routine does not recover messages for which no
	parent folder exists. In other words, if all the messages are in a folder called
	Local Folder, but the information about the existence of Local Folder is
	corrupt, then Mail Tools will not attempt to recover the messages, because it
	does not know where they belong. Likewise, if the corruption occurs in the local
	data file's header, Mail Tools will return the "File Unrecognizable" error
	message.
	
	RESOLUTION
	==========
	
	Upgrade to version 3.1a of Microsoft Mail for AppleTalk Networks, and run the
	Mail Tools from that version. For information about how to obtain the upgrade,
	please call Microsoft Sales at (800) 227-4679.
	
	
	Additional query words: 3.10 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
