---
layout: page
title: "Q207416: SMS: Distribution Manager Does Not Process a New Package"
permalink: /kb/207/Q207416/
---

## Q207416: SMS: Distribution Manager Does Not Process a New Package

	Article: Q207416
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbPackage kbSoftwareDist
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Distribution Manager may not process the
	source files for a Software Distribution package as expected; in this scenario,
	the Distmgr.log file may log the following error:
	
	  Error 32: The process cannot access the file because it is being used by
	  another process.
	
	CAUSE
	=====
	
	This behavior can occur if the directory chosen for the source is frequently
	used by the system or other applications -- for example, the TEMP directory. If
	the source directory is being used by another program or process, the source
	files for the package may become locked, thereby preventing the Distribution
	Manager from gaining access to the file.
	
	This behavior can also occur if a file window (using My Computer) or Microsoft
	Windows Explorer is currently viewing the directory.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the source directory is not in use when
	you create the package. Also, create a separate source and ensure that all
	source files for the new package are copied to that directory. SMS considers all
	files and sub-folders within this location to be source files for the package.
	
	MORE INFORMATION
	================
	
	Log entries in the Distmgr.log and status messages in the Distribution Manager
	component status node of the Administrator console indicate the number of
	retries already attempted and the latest status of the operation. Distribution
	Manager retries the operation if it triggers an error 32.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
