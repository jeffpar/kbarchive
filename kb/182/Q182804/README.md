---
layout: page
title: "Q182804: XADM: Edbutil /d Fails with Error -1811"
permalink: kb/182/Q182804/
---

## Q182804: XADM: Edbutil /d Fails with Error -1811

	Article: Q182804
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Edbutil with the /d option, the following error message may
	appear:
	
	  Operation terminated with error -1811
	
	Additionally, you may see the following errors in the event log:
	
	  Event ID 63
	  Source Edb
	  Description:
	  Unable to write a shadowed header for file x:\exchsrvr\bin\temp.edb
	
	  Event ID 50
	  Source Edb
	  Description:
	  The database engine could not access the file called
	  x:\exchsrvr\bin\temp.edb
	
	NOTE: This has also been seen in Edbutil /mh.
	
	CAUSE
	=====
	
	This error can be caused by not having the proper permissions on the bin
	directory when the hard disk drive is formatted as NTFS.
	
	WORKAROUND
	==========
	
	To work around this problem, set the permissions on the bin directory to full
	control for the administrators group, or explicitly set permissions for the user
	needing to run this utility.
	
	MORE INFORMATION
	================
	
	The file permissions are set as follows:
	
	1. Go to the bin directory via Windows Explorer.
	
	2. Get Properties of the directory.
	
	3. Go to the Security tab and select Permissions.
	
	4. Click Add and select the administrators group or the person required to run
	  this utility.
	
	5. Change the Access type to full control, and click OK. You should now be able
	  to run this utility without getting the -1811 error.
	
	
	Additional query words: edbutil operation terminated; error -1811
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
