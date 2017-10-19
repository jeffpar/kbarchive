---
layout: page
title: "Q166335: XADM: Error -1022 When Starting the Directory"
permalink: /kb/166/Q166335/
---

## Q166335: XADM: Error -1022 When Starting the Directory

	Article: Q166335
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Directory service (DS), you might receive
	the following error:
	
	  Error 2140. Internal Windows NT error.
	
	and you will find the following Event ID in the Windows NT Event Viewer
	Application log:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description:
	  The Microsoft Exchange Server database, EDB, could not be initialized and returned
	  error -1022. Unrecoverable error. The directory cannot continue.
	
	RESOLUTION
	==========
	
	Error -1022 corresponds to JET_errDiskIO. There are three steps you can take to
	resolve this problem:
	
	1. Run CHKDSK to verify that there are no problems on the hard disk drive.
	
	2. Check permissions on the EXCHSRVR\DSADATA directory. The Microsoft Exchange
	  Service Account must have Full access to this directory.
	
	3. Verify that you are not receiving virtual memory errors when booting the
	  computer. The following error may be displayed on startup.
	
	  Limited Virtual Memory
	  Your system is running without a properly sized paging file.
	  Please use the virtual memory option of the System applet in the
	  Control Panel to create a paging file, or to increase the initial
	  size of your paging file.
	
	For more information about resolving the virtual memory problem, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q140472 : PRB: Limited Virtual Memory Error When Starting Windows NT
	
	  Q130016 : Removing Everyone On Root Dir. Leaves Limited Virtual Memory
	
	  Q257758 : FIX: "Limited Virtual Memory" Error Message When You Start Your
	  Computer
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
