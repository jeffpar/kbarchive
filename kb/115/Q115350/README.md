---
layout: page
title: "Q115350: X400: Config Doubles Backslashes in MTA Names During Upgrade"
permalink: /kb/115/Q115350/
---

## Q115350: X400: Config Doubles Backslashes in MTA Names During Upgrade

	Article: Q115350
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While you are upgrading, using the Config utility to update a manually created
	routing table wherein all MTA names with '_'s are escaped with '\'s, turns all
	the single '\'s into double '\'s. For example:
	
	  PO4\_MTA
	
	becomes:
	
	  PO4\\_MTA
	
	By design, this process follows the old Admin's behavior exactly: it writes
	things as they are to the .CFG files and requires that you escape MTA names in
	ROUTE.CFG. This also means that you can have MTA names with blanks in them, but
	the utility cannot differentiate blanks from '_'s.
	
	For example:
	
	  MTA_X
	
	is seen as:
	
	  MTA X
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
