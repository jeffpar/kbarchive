---
layout: page
title: "Q96527: Mac RSC: Remote Server Connection Timeout"
permalink: /kb/096/Q96527/
---

## Q96527: Mac RSC: Remote Server Connection Timeout

	Article: Q96527
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Server Connection application with version 3.1 of Microsoft Mail
	for AppleTalk Networks, the following error message may appear in the status
	box:
	
	  Time out value exceeded.
	
	CAUSE
	=====
	
	There are usually three reasons why this error message will be displayed:
	
	- The line quality between the two communicating servers is poor. Ensure you
	  are getting a good connection from your carrier.
	
	- The Allow Access To: option in the Remote Access Setup Control Panel is set
	  to Entire Network. Microsoft recommends that This Macintosh Only be selected.
	
	- The termination on either side of the network is poor.
	
	MORE INFORMATION
	================
	
	The server has a limited number of processes it can run at any given time. If a
	machine has access to the entire network when it dials in, the software will
	attempt to scan the remote network looking for other Microsoft Mail Servers to
	communicate with. This will take additional time, which can cause the timeout
	error to occur.
	
	
	Additional query words: 3.10 ARAP ARA
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
