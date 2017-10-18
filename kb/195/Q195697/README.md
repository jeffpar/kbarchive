---
layout: page
title: "Q195697: XFOR: Upgrade to 5.5 SP1 Overwrites Notes Mapping Tables"
permalink: kb/195/Q195697/
---

## Q195697: XFOR: Upgrade to 5.5 SP1 Overwrites Notes Mapping Tables

	Article: Q195697
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When upgrading Exchange Server version 5.5 with the Microsoft Exchange Connector
	for Lotus Notes installed, any customization of mapping rules and tables will be
	overwritten with the default settings.
	
	CAUSE
	=====
	
	The upgrade process does not back up mapping rules for the Exchange Notes
	Connector.
	
	RESOLUTION
	==========
	
	Administrators will have to make a backup of the following two files before
	upgrading to Exchange Server 5.5 Service Pack 1:
	
	Directory Exchange Agent for Exchange
	-------------------------------------
	
	Location                              Filename
	--------                              --------
	Exchsrvr\Connect\Exchconn\Dxamex      amap.tbl
	                                     mapnotes.tbl
	
	Directory Exchange Agent for Notes
	----------------------------------
	
	Location                              Filename
	--------                              --------
	Exchsrvr\Connect\Exchconn\Dxanotes    amap.tbl
	                                     mapmex.tbl
	
	STATUS
	======
	
	This is a confirmed problem with Exchange Server 5.5 Service Pack 1.
	
	
	Additional query words: amap.tbl, upgrade, SP1, Lotus
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
