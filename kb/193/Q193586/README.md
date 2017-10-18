---
layout: page
title: "Q193586: PRB: Error &quot;Rights.Dat is already open&quot; When Running Ddupd.exe"
permalink: kb/193/Q193586/
---

## Q193586: PRB: Error &quot;Rights.Dat is already open&quot; When Running Ddupd.exe

	Article: Q193586
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): _IK kbddconv kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when running the Ddupd.exe utility to upgrade the
	database to the 6.0 format:
	
	  Rights.Dat is already open.
	
	CAUSE
	=====
	
	This happens because the SourceSafe Admin or one or more users are logged in and
	are using the database.
	
	RESOLUTION
	==========
	
	Before running the Ddupd.exe make sure that all the users are logged out of
	SourceSafe and that the SourceSafe Admin is closed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Log into SourceSafe as a valid user, or open the SourceSafe Admin.
	
	2. From the Win32 directory of the SourceSafe install and execute the following
	  command:
	
	        DDUPD <path to the data directory> [-undo] [-redo]
	
	  The following message displays:
	
	  File <path to data directory>\rights.dat is already open.
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Help; search on: "DDUPD"
	
	Additional query words: kbSSafe600 kbddconv kbCommandLine
	
	======================================================================
	Keywords          : _IK kbddconv kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
