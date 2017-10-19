---
layout: page
title: "Q189209: Off 97 Starts Here Setup Error With More Than 2 GB Free Space"
permalink: /kb/189/Q189209/
---

## Q189209: Off 97 Starts Here Setup Error With More Than 2 GB Free Space

	Article: Q189209
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 28-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Office 97 Starts Here ISBN 1-57231-303-X 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install "Microsoft Office 97 Starts Here", you may receive
	an error message advising you that you do not have the required 16.9 megabytes
	(MB) free space on your drive necessary to install the product. However, you may
	have over 2 gigabytes (GB) free space on your hard drive.
	
	CAUSE
	=====
	
	This error is caused by a problem in the Setup program. The Setup program does
	not recognize free space correctly on drives with over 2 GB of free space.
	
	WORKAROUND
	==========
	
	Install "Microsoft Office 97 Starts Here" to a volume with less than 2 GB of
	free space. To do this:
	
	- Install the program to a different volume on your hard drive.
	
	- Fill up as much free space as needed to bring the total free space to less
	  than 2 GB.
	
	As a last resort, you can use the FDISK utility to repartition your hard drive.
	This utility will allow you to create a volume on your hard drive that is less
	than 2 GB. Please see your operating system help files or printed documentation
	for further information on the FDISK utility.
	
	WARNING: Using FDISK on a drive with existing data will PERMANENTLY ERASE all
	data currently on your hard drive. Do not attempt this procedure without first
	making a full backup of all your data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Microsoft Office 97 Starts
	Here."
	
	Additional query words: ms_press off97 off97sh 1-57231-303-X
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
