---
layout: page
title: "Q100035: Mac Srv: Name of Mail Server Does Not Appear in Chooser"
permalink: /kb/100/Q100035/
---

## Q100035: Mac Srv: Name of Mail Server Does Not Appear in Chooser

	Article: Q100035
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an AppleTalk network with more than one AppleTalk zone, the Mail server may
	be visible in the Chooser on some workstations, but not on others.
	
	CAUSE
	=====
	
	There may be a problem on the AppleTalk network or there may be a problem with
	the workstation itself. The names shown by the Chooser are found by the Chooser
	software, not Mail software.
	
	RESOLUTION
	==========
	
	Check the network router or bridge, INITs (extensions), network card, System,
	and so forth.
	
	From the server machine, check if you can see the name of the server in the
	Chooser. If you can see the name on the server machine itself, the server is
	operating correctly.
	
	Names of Mail servers, AppleShare servers, network printers and other network
	devices are stored by each router on the network. Programs can query the
	network/router to gain information about the status of the network.
	
	Additional query words: 2.00 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200
	Version           : WINDOWS:2.0,3.0,3.1
	
	=============================================================================
	
