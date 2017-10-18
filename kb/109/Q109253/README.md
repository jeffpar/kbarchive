---
layout: page
title: "Q109253: CONN: Gateway Configuration Must Be Updated During Install"
permalink: kb/109/Q109253/
---

## Q109253: CONN: Gateway Configuration Must Be Updated During Install

	Article: Q109253
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install version 3.2 of the Microsoft Mail Connection for PC and
	AppleTalk Networks, you must choose the Update button on the Gateway
	Configuration screen even if you do not want to change any of the default
	configuration values.
	
	Choosing the Update button on the Microsoft Mail Connection Gateway Configuration
	screen causes the information in the MACGATE.INI file to be stored internally
	within the Microsoft Mail Data file.
	
	The Gateway Configuration screen must be updated during the initial installation
	of the gateway or after the gateway is reinstalled following a Mail Data file
	rebuild. If it has not, the Connection Name Utility (CNU) fails to run.
	
	Additional query words: 3.20 Gateway Configuration Update CNU
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
