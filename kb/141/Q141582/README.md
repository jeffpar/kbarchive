---
layout: page
title: "Q141582: CONN: Not Select MACGATE Directory with Gateway, Configuration"
permalink: kb/141/Q141582/
---

## Q141582: CONN: Not Select MACGATE Directory with Gateway, Configuration

	Article: Q141582
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
	
	The Microsoft Mail Connection Gateway requires the existence of all sub-
	directories created during the installation in order to successfully locate the
	Connections Store using the Gateway Configuration.
	
	MORE INFORMATION
	================
	
	During installation, the Macintosh portion of the Gateway Connection installer
	will create the following directory structure:
	
	       \Maildata
	        |
	  |Macgate
	         |ini
	         |badmail
	       |misc
	          |store
	         |mactopc
	       |pctomac
	
	If one of the ini, badmail, or store levels (sub-directories) is missing, you
	will not be able to Locate the Connection Store using the Gateway
	Configuration.
	
	Once the MACGATE folder is selected, it will accept that location and stop
	looking. However, if one of the sub-directories is missing, it will allow you to
	continue to browse through the all of the sub-directories under the MACGATE
	level.
	
	If this occurs, recreate the missing sub-directory and reselect SET in the
	Gateway Configuration to try to relocate the store.
	
	For more information on the directories created during the Mail Connection 3.2
	installation, refer to page 9 in the Microsoft Mail Connection version 3.2 for
	PC and AppleTalk Networks "Administrator's Guide."
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
