---
layout: page
title: "Q161310: SMS: PCM Is Unable to Connect to NetWare Distribution Server"
permalink: /kb/161/Q161310/
---

## Q161310: SMS: PCM Is Unable to Connect to NetWare Distribution Server

	Article: Q161310
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) is running on a NetWare client, and it
	attempts to launch a package that has been distributed to more than 10 NetWare
	servers, PCM may not be able to find the package. This can occur even if the
	current logon server contains a copy of the package.
	
	An error dialog box is displayed that shows a list of 10 servers that were
	searched for this package, one of which is the current NetWare logon server.
	Examining the displayed server paths shows that the package source path for the
	current logon server is incorrect. The path may show as "\\<logon
	server>\<volume>\pcmpkg.src\<pkg id>," when the path should have
	been "\\<logon server>\<volume>\SMS\logon.srv\pcmpkg.src\<pkg
	id>."
	
	CAUSE
	=====
	
	This problem may occur if the current user does not have access rights to the 10
	distribution servers that are currently listed in the package server list.
	
	When PCM attempts to find a distribution server, it attempts to find the package
	in the following sequence:
	
	1. Check the distribution server list for the package, to see if the current
	  logon server exists in the list. If it does exist, then use that server as
	  the distribution server.
	
	2. Check the server names for each currently connected drive letter. If any of
	  the server names for the currently connected drives match a server in the
	  package distribution list, then use that server as the distribution server.
	
	3. Check the current logon server for the package, using the explicit path to
	  the package share. This is to ensure that the current logon server does
	  actually contain the package, even if it is not in the list of 10 package
	  servers.
	
	4. If steps 1-3 fail, randomly pick a server from the package distribution list,
	  and connect to that server. If the connection fails for any reason, randomly
	  pick another server from the package server list until either a server is
	  connected, or the list is exhausted.
	
	In step three, when PCM tests for the package on the current logon server, the
	tested package path is incorrect for a NetWare server. The path is correct for
	all other supported server types.
	
	WORKAROUND
	==========
	
	To work around this problem, assign access rights to the user for one of the
	distribution servers in the package list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	Additional query words: prodsms 1.20
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
