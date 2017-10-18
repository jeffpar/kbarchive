---
layout: page
title: "Q97046: PC WRmt: Each Session Overwrites SESSION.LOG File"
permalink: kb/097/Q97046/
---

## Q97046: PC WRmt: Each Session Overwrites SESSION.LOG File

	Article: Q97046
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote, Windows Client, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail Remote version 3.2 for Windows, you can create a log file for
	each modem session to assist in troubleshooting. This file is called SESSION.LOG
	and is created in the <Windows_directory>\MSMAIL\MSRMT directory (by
	default, C:\WINDOWS\MSMAIL\MSRMT).
	
	Microsoft Mail overwrites this file each session. If you want to build a larger
	log file to troubleshoot patterns of modem trouble over a longer period of time,
	you must save the file under a different name after each session.
	
	Microsoft Mail does not provide an option to append information to the previous
	SESSION.LOG file.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : :3.2
	
	=============================================================================
	
