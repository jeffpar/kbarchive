---
layout: page
title: "Q111950: PROFS: Using the CMS TAG FILE Command"
permalink: kb/111/Q111950/
---

## Q111950: PROFS: Using the CMS TAG FILE Command

	Article: Q111950
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
	
	The tag in CMS is the location where the destination USER and NODE information
	are held. By using the TAG FILE command, this information can be inserted into
	an empty tag. (Tag information is the Destination information associated with a
	particular CMS message or file, for example, destination USER and NODE).
	
	Usually this process is used when testing the response of Host Access for mail
	addressed to a particular NODE or USER. The command line is:
	
	  TAG FILE rdr_number NEW_NODE NEW_USER
	
	where NEW_NODE and NEW_USER are the respective Node and User information the Tag
	the file with.
	
	NOTE: The rdr_number is obtained by typing Q RDR ALL at the CMS prompt.
	
	
	Additional query words: 3.20 3.30 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.2,3.3,3.4
	
	=============================================================================
	
