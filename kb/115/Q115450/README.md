---
layout: page
title: "Q115450: X400: Invalid MAPTBL.OUT Characters Cause Warning on Access"
permalink: kb/115/Q115450/
---

## Q115450: X400: Invalid MAPTBL.OUT Characters Cause Warning on Access

	Article: Q115450
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a MAPTBL.OUT file that contains invalid character(s), then run the
	Config utility on the postoffice and select the Customized Mapping box, a
	warning message (Invalid character in mapping data) and the MSM: address
	(presumably of the record that contains the invalid character) are displayed.
	
	The error message reads (for example):
	
	  Invalid character X in mapping data: c=ca;a=telXcom.canada...
	
	and the utility deletes any invalid characters.
	
	Config reads and displays MAPTBL.OUT information verbatim. Only when you access
	an address in the file or attempt to add a new one does the utility insist on
	correct characters.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
