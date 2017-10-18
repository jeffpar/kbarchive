---
layout: page
title: "Q99277: PC Win: Err Msg: Your Message File Could Not Be Opened..."
permalink: kb/099/Q99277/
---

## Q99277: PC Win: Err Msg: Your Message File Could Not Be Opened...

	Article: Q99277
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If SHARE.EXE is not running with version 3.0 of Microsoft Mail for Windows, the
	following error message may occur during the client installation or upon loading
	the client:
	
	  Your message file could not be opened. To access your message file in its
	  current location, mail requires that the MS-DOS utility SHARE.EXE be run
	  before Windows is started.
	
	This error message may also be received even though SHARE may be currently
	running on the workstation. This may be due to the network server not running
	SHARE or an equivalent file locking scheme.
	
	CAUSE
	=====
	
	By default, most networks account for file locking internally, thus alleviating
	the need to run Share on the network server. However, some networks such as
	Windows for Workgroups, LANtastic and NetWare Lite may not load SHARE or an
	equivalent file locking scheme automatically.
	
	RESOLUTION
	==========
	
	To solve this problem, verify that SHARE is indeed running on the server where
	the postoffice is located. If SHARE is not loaded on the server, it must be
	loaded and the workstation must be completely restarted for it to recognize the
	server change.
	
	MORE INFORMATION
	================
	
	SHARE.EXE is always required when version 3.0 Mail for Windows is used. The 3.0b
	Windows client does not require SHARE if the user's .MMF file is located on the
	server.
	
	Additional query words: 3.00 3.00b wfw setup install errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
