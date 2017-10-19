---
layout: page
title: "Q263419: Software Inventory on Encrypted Vol Degrades Performance"
permalink: /kb/263/Q263419/
---

## Q263419: Software Inventory on Encrypted Vol Degrades Performance

	Article: Q263419
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200preSP3
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a disk volume or folder is encrypted and contains a substantial amount of
	data, disk I/O may be excessive while the Software Inventory process reads the
	file information.
	
	
	While the Software Inventory process is running, the disk subsystem is very busy,
	which may cause other application tasks to be delayed. On a workstation with
	large amounts of encrypted data, the computer will appear sluggish or
	unresponsive to the user for an extended period of time. On a server with large
	volumes of data, this behavior could result in noticeable performance
	degradation.
	
	CAUSE
	=====
	
	The Software Inventory process reads header information from each file that is
	inventoried. When files are encrypted, the header information in the file is
	also encrypted. In order for Software Inventory to obtain header information
	from a file, the file must be decrypted.
	
	WORKAROUND
	==========
	
	Disable the Software Inventory Client Agent for the site containing the
	encrypted data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The ability to selectively exclude disk volumes or folders from Software
	Inventory is proposed for future versions of Systems Management Server (SMS).
	
	Additional query words: prodsms kbreadme
	
	======================================================================
	Keywords          : kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
