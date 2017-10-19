---
layout: page
title: "Q198716: SMS: Server Side Remote Control Components Maintain SMS Security"
permalink: /kb/198/Q198716/
---

## Q198716: SMS: Server Side Remote Control Components Maintain SMS Security

	Article: Q198716
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The components required by the server to run Systems Management Server (SMS)
	Remote Control are stored in the <local root>\SMS\BIN\<platform>
	directory. The required files are:
	
	REMOTE.EXE
	MULTPROT.DLL
	LDFTRANS.DLL
	LDWMNT.DLL
	
	These files are installed during the Systems Management Server Administrator
	Snap-In install (this happens automatically on site servers).
	
	Remote.exe, although usually run from within the Microsoft Management Console
	(MMC) Systems Management Server Administrator Snap-In, it can also be run from a
	command line. The MMC must be present on that machine because the Remote Tools
	relies on Windows Management (WMI) to access the Systems Management Server
	database in SQL. WMI is used to call the database to confirm the client's valid
	network address or NetBIOS name which prevents it from being used as a stand
	alone tool, thus preserving the Systems Management Server Security model.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
