---
layout: page
title: "Q130317: PC Mac: Cannot Access New Messages on Windows NT 3.5 Server"
permalink: kb/130/Q130317/
---

## Q130317: PC Mac: Cannot Access New Messages on Windows NT 3.5 Server

	Article: Q130317
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Mail for PC Networks, Macintosh workstation to
	connect to a version 3.2 Microsoft Mail for PC Networks postoffice installed on
	Microsoft Windows NT Server version 3.5, you may receive the following error
	message when you attempt to read new messages:
	
	  Error reading mail. Possibly previously deleted.
	
	This error typically indicates one of the following:
	
	- The MAI file is not accessible.
	
	- The file may be missing.
	
	- The user does not have adequate permissions to view the file.
	
	If the Windows NT 3.5 server is restarted, the messages already sent will then be
	accessible to the Macintosh clients. However, no new messages will be available.
	
	CAUSE
	=====
	
	
	After you install Services for Macintosh (SFM) on a computer running Windows NT
	Server version 3.5, you can encounter file permission problems on the Macintosh
	volume. For example, file permissions are not applied to files dynamically on
	the Macintosh volume. As a result, Macintosh clients cannot view the files. The
	problem occurs with the volume being rooted at the root of the drive.
	
	WORKAROUND
	==========
	
	You can create the Macintosh volume on the NT Server in a subdirectory off of
	the root directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem is corrected in the latest U.S. Service Pack for Windows NT version 3.5.
	
	Additional query words: 3.20 mac
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
