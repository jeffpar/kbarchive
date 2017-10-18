---
layout: page
title: "Q118561: GTWY: EXTERNAL.EXE Doesn't Pick Up Mail from Outgoing Gateway"
permalink: kb/118/Q118561/
---

## Q118561: GTWY: EXTERNAL.EXE Doesn't Pick Up Mail from Outgoing Gateway

	Article: Q118561
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	EXTERNAL.EXE does not pick up mail from a particular outgoing gateway or
	indirect mail queue set up to be indirect through a secondary post office.
	
	CAUSE
	=====
	
	There are two possible causes of this problem:
	
	1. External has not been restarted since changes were made to the post office.
	
	2. The "indirect network," "post office" or "MBG" sections in the NETWORK.GLB
	  file contain inproper information. (It has to have been inserted manually.)
	
	RESOLUTION
	==========
	
	1. Restart External.
	
	2. Check the values in the NETWORK.GLB file and the associated XTN for the
	  Indirect NET/PO/MBG value to ensure all are correct. The NETWORK.GLB format
	  is:
	
	     Gateway/network name
	     MBG/XTN pointer
	     Optional MBG pointer making above XTN pointer(SNADS/PROFS)
	     Indirect
	         Network name
	         Post office name
	         MBG value
	
	The MBG value and name must match the NETWORK entry values for the indirect
	network definition as well as the post office and MBG values from the associated
	XTN file.
	
	Additional query words: po postoffice
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0b,3.2
	
	=============================================================================
	
