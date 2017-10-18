---
layout: page
title: "Q260392: Resource Explorer Takes a Long Time to Display Large Text File"
permalink: kb/260/Q260392/
---

## Q260392: Resource Explorer Takes a Long Time to Display Large Text File

	Article: Q260392
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Resource Explorer may seem to stop responding (hang) when you are trying to
	display a large collected text file. Resource Explorer takes approximately 12 to
	15 minutes to display a 1-MB text file. This time increases with the size of the
	file.
	
	CAUSE
	=====
	
	Trying to view a collected file in Resource Explorer causes numerous memory
	allocations by WMI. The larger the file you are viewing, the more memory is
	allocated, and the more time it takes to display the contents of the file.
	
	
	WORKAROUND
	==========
	
	Avoid using Resource Explorer from the Systems Management Server Administrator
	console to view the content of a large text file.
	
	Share a folder on the network and ask the user to copy the large file from his or
	her workstation to the shared folder for the System Management Server
	administrator to view by using Notepad.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
