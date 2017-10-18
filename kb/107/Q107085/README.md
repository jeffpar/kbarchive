---
layout: page
title: "Q107085: PROFS: Using CMS Peek Command to Troubleshoot"
permalink: kb/107/Q107085/
---

## Q107085: PROFS: Using CMS Peek Command to Troubleshoot

	Article: Q107085
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.3,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.2, 3.3, 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting with Microsoft Mail Gateway to PROFS and OfficeVision you
	can halt the virtual machine (which makes up the host components) and examine it
	for unprocessed reader files that may hold a clue to the problem. Here is how to
	use the PEEK command to examine these files for format integrity:
	
	1. List the reader by typing:
	
	  " Q RDR ALL" (without the quotation marks)
	
	  This lists the items in the reader and the associated file number given each
	  file and print job routed through the VM.
	
	2. Use the file number and the PEEK command to view the file:
	
	  PEEK file ###
	
	
	Additional query words: host reader looping $$special$$ 3.20 3.2 3.30 3.3 3.40 3.4
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.2,3.3,3.4
	
	=============================================================================
	
