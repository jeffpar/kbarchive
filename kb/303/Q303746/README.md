---
layout: page
title: "Q303746: Event Error: Target Folder Permissions Deny Access to XML Files"
permalink: kb/303/Q303746/
---

## Q303746: Event Error: Target Folder Permissions Deny Access to XML Files

	Article: Q303746
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to write Passport Network Map XML files, such as Partner.xml,
	to the server hard disk, you may see the following error message in the Event
	Log:
	
	  Access Denied: Could not write to disk.
	
	CAUSE
	=====
	
	The permissions for the target folder are set incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this problem, set the permissions on the following folders to allow
	the Everyone group full control:
	
	On Windows NT 4.0 or 2000:
	
	  Winnt\System32\MicrosoftPassport
	
	On Windows XP:
	
	  Windows\System32\MicrosoftPassport
	
	MORE INFORMATION
	================
	
	When the XML files are fetched from the Nexus, they are not written to the disk
	if Windows 2000 does not allow the Everyone group access to the System32 folder
	and the person who is logged on is not an administrator.
	
	If XML files are placed in the System32 folder as a workaround because the server
	cannot communicate with the Nexus, Passport fails to load the XML files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.3,1.4,1.99,2.0
	Issue type        : kbprb
	
	=============================================================================
	
