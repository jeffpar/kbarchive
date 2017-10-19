---
layout: page
title: "Q239043: IIS: &quot;Unable to Enumerate Files and Directories&quot;"
permalink: /kb/239/Q239043/
---

## Q239043: IIS: &quot;Unable to Enumerate Files and Directories&quot;

	Article: Q239043
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbIIS kbiis500
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Internet Services Manager you may receive the following error
	message:
	
	  "Unable to enumerate files and directories because the following error
	  occurred: The system cannot find the path specified"
	
	CAUSE
	=====
	
	This problem can occur when the directory specified for the home directory of a
	site (for example, the default Web site) is inaccessible because it has been
	deleted, moved, or SYSTEM does not have access to the resources.
	
	RESOLUTION
	==========
	
	To correct this error, perform the following steps:
	
	1. Check the "Home Directory" for the site (under the home directory tab in the
	  sites properties) to make sure that it is pointing to a valid location.
	
	2. Check to ensure that the directory still exists and has not been moved.
	
	3. Check to ensure that the SYSTEM has permissions on the directory specified in
	  the home directory box. Often, moving the content to another drive will cause
	  this problem. SYSTEM is not automatically added to partitions other than the
	  system drive.
	
	STATUS
	======
	
	This is a known issue when using Internet Information Services 5.0.
	
	MORE INFORMATION
	================
	
	For more information on setting directory permissions, see the Windows 2000
	Resource Kit as well as the Internet Information Services documentation.
	
	Additional query words: iis inaccesible home directory MMC ISM
	
	======================================================================
	Keywords          : kbIIS kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
