---
layout: page
title: "Q213317: SMS: Batch programs w/ UNC Working Directory Not Executing"
permalink: kb/213/Q213317/
---

## Q213317: SMS: Batch programs w/ UNC Working Directory Not Executing

	Article: Q213317
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbPackage kbSoftwareDist
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Batch programs, in Systems Management Server (SMS), may not execute properly
	when the following are true:
	
	- The 'Start in' directory of the program is a universal naming convention
	  (UNC) path.
	
	- The drive mode is set to 'Run with UNC name'.
	
	This occurs more often with 16-bit operating systems because they cannot use a
	UNC path as their current working directory. 32-bit operating systems default to
	%windir% as the current working directory.
	
	To ensure proper execution of a batch program whose 'Start in' directory is a UNC
	path, set the Drive mode to require a drive letter or a specific drive letter.
	
	Additional query words: prodsms batch UNC
	
	======================================================================
	Keywords          : kbsms200 kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
