---
layout: page
title: "Q131022: INFO: Required Network Rights for the SourceSafe Directories"
permalink: kb/131/Q131022/
---

## Q131022: INFO: Required Network Rights for the SourceSafe Directories

	Article: Q131022
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe311
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Improperly setting network rights for the SourceSafe directories may cause
	errors with the system.
	
	MORE INFORMATION
	================
	
	The following tables list the SourceSafe directories and the rights that need to
	be set for network access. Full access includes read, write, and destroy
	privileges.
	
	For SourceSafe 3.x
	------------------
	
	  SourceSafe for         Rights Required
	  Windows NT             for
	  Directory              Network Access
	  ---------------        ----------------
	
	  \SS\WINNT              Read
	
	  SourceSafe for         Rights Required
	  MS-DOS or Windows      for
	  Directory              Network Access
	  -----------------      --------------------------------------------
	
	  \SS                    Read
	  \SS\DATA               Full access or read-only for read-only users
	  \SS\ADMIN              None - But SourceSafe admins should have
	                         full access
	
	  \SS\TEMP               Full access
	  \SS\USERS\<USERNAME>   Full access
	  \SS\WINNT              None
	  \SS\MACROS             Read
	
	SourceSafe 4.0 Server Installation
	----------------------------------
	
	  SourceSafe for         Rights Required
	  32-bit Windows         for
	  Directory              Network Access
	  -----------------      --------------------------------------
	
	  \VSS\WIN32             None-But SourceSafe admins should have
	                         full access
	
	  SourceSafe for         Rights Required
	  16-bit Windows         for
	  Directory              Network Access
	  -----------------      --------------------------------------
	
	  \VSS\WIN               None-But SourceSafe admins should have
	                         full access
	
	  \VSS\DOS               None-But SourceSafe admins should have
	                         full access
	
	  SourceSafe for         Rights Required
	  MS-DOS or Windows      for
	  Directory              Network Access
	  ------------------     --------------------------------------------
	
	  \VSS                   Read
	  \VSS\DATA              Full access or read-only for read-only users
	  \VSS\TEMP              Full access
	  \VSS\USERS\<USERNAME>  Full access
	  \VSS\NETSETUP.X86      Read
	  \VSS\MACROS            Read
	
	SourceSafe 5.0 Server Installation
	----------------------------------
	
	  SourceSafe for         Rights Required
	  32-bit Windows         for
	  Directory              Network Access
	  -----------------      --------------------------------------
	
	  \VSS\WIN32             None-But SourceSafe admins should have
	                         full access
	
	  SourceSafe for         Rights Required
	  MS-DOS or Windows      for
	  Directory              Network Access
	  -----------------      --------------------------------------------
	
	  \VSS                   Read
	  \VSS\DATA              Full access or read-only for read-only users
	  \VSS\DATA\LOGGEDIN     Full access
	  \VSS\TEMP              Full access
	  \VSS\USERS\<USERNAME>  Full access
	  \VSS\NETSETUP          Read
	
	SourceSafe 6.0 Server Installation
	----------------------------------
	
	  SourceSafe for         Rights Required
	  32-bit Windows         for
	  Directory              Network Access
	  -----------------      --------------------------------------
	
	  \VSS\WIN32             None-But SourceSafe admins should have
	                         full access
	
	  SourceSafe for         Rights Required
	  MS-DOS or Windows      for
	  Directory              Network Access
	  -----------------      --------------------------------------------
	
	  \VSS                   Read
	  \VSS\DATA              Full access or read-only for read-only users
	  \VSS\DATA\LOGGEDIN     Full access
	  \VSS\DATA\LABELS       Full access
	  \VSS\TEMP              Full access
	  \VSS\USERS\<USERNAME>  Full access
	  \VSS\NETSETUP          Read
	
	NOTE: The immediately preceding set of permissions does not allow the user to run
	NetSetup. If you want to allow a given user to run NetSetup (for SourceSafe
	installation), make sure that you grant Execute permissions to that user in the
	\VSS directory.
	
	Although not recommended for performance reasons, if your SourceSafe Clients
	intend to run the SourceSafe executables directly from the Network (that is,
	they are not going to create a client installation on their local drives), then
	modify the table above with the following changes:
	
	  SourceSafe for         Rights Required
	  32-bit Windows         for
	  Directory              Network Access
	
	  ---------------        --------------------------------------
	
	  \VSS\WIN32             Read-But SourceSafe admins should have
	                         full access
	
	  SourceSafe for         Rights Required
	  16-bit Windows         for
	  Directory              Network Access
	  ----------------       --------------------------------------
	
	  \VSS\WIN               Read-But SourceSafe admins should have
	                         full access
	
	  \VSS\DOS               Read-But SourceSafe admins should have
	                         full access
	
	NOTE: In this scenario, all users will have access to the maintenance utilities
	(ANALYZE, DDCONV etc.) located in these directories. These may be moved to an
	alternate location if desired.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe311 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
