---
layout: page
title: "Q87161: Mac Wkst: How to Invoke Offline Operation"
permalink: /kb/087/Q87161/
---

## Q87161: Mac Wkst: How to Invoke Offline Operation

	Article: Q87161
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Offline operation can be invoked under two different conditions when using
	version 3.1 of Microsoft Mail for the Macintosh.
	
	If the chosen server is available, offline operation can be invoked by pressing
	the SHIFT key while selecting Microsoft Mail from the Apple Menu.
	
	If the chosen server is not available, a dialog box is presented to the user
	advising that Mail is unable to connect to a Mail server. Mail then asks if the
	user would like to work offline. The workstation software continues to look for
	a server on the network.
	
	NOTE: The offline preference must have been enabled and at least one mail session
	with the mail server must have occurred before offline operation can occur. This
	is necessary because the server must download resources such as the address list
	to the workstation in order to support offline operation. These resources are
	written to the MS Mail Cache file and therefore shared by all users who share
	the same machine. Given this fact, if offline operation is invoked, it must be
	by the same account that last had a successful login to a server.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
