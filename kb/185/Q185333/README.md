---
layout: page
title: "Q185333: SMS: Crystal Reports May Not Install on Large (GB) Drives"
permalink: kb/185/Q185333/
---

## Q185333: SMS: Crystal Reports May Not Install on Large (GB) Drives

	Article: Q185333
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Crystal Reports from the Microsoft Systems
	Management Server version 1.2 CD, you may receive an error message. The error
	indicates that there is insufficient free space for all the programs to install,
	and displays the amount of free disk space as a negative number.
	
	CAUSE
	=====
	
	If the free space available is greater than 2 GB, Crystal Reports Setup reports
	this as a negative value. There are instances, however, where drive sizes in
	excess of 4 GB may report a positive number. For more specific information,
	please see the Seagate Web page at http://www.seagate.com/.
	
	
	WORKAROUND
	==========
	
	For Crystal Reports to install correctly, you must make your hard disk report
	free space of 2 GB or less. Do either of the following:
	
	- Create temporary files to lower the available space to 2 GB or less.
	
	  -or-
	
	- Increase your swap file size to lower the available space to 2 GB or less.
	
	After you install Crystal Reports, remove the temporary files or decrease the
	swap file size to its original size, depending on the method you used.
	
	MORE INFORMATION
	================
	
	To increase the swap file on a Windows NT 4.0 platform, follow these steps.
	
	1. Open Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, and then click the Change button in the Virtual
	  Memory section.
	
	4. For the Minimum size, choose a large enough partition size to allow the
	  available space to be a positive number, so that Crystal Reports can install.
	
	NOTE: Return the swap file to its original size when you are done.
	
	
	Portions of this article were taken from the Seagate Software Web site. Crystal
	Reports is included on the Microsoft Systems Management Server CD, but is
	manufactured by Seagate Software, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodsms Crystal Reports Free Space CRW
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
