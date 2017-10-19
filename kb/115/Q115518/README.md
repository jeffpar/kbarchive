---
layout: page
title: "Q115518: FFAPI: Memory Usage for MS-DOS Get and Put Executable Files"
permalink: /kb/115/Q115518/
---

## Q115518: FFAPI: Memory Usage for MS-DOS Get and Put Executable Files

	Article: Q115518
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to FFAPI, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail File Format Application Programming Interface (FFAPI) runs in
	conventional memory. Since MS-DOS and network drivers also run in the same
	memory, sometimes you may not be able to load or run FFAPI.
	
	FFAPI loads the following files into memory:
	
	  GLB\NETWORK.GLB
	  XTN\*.XTN
	  GLB\GROUP.GLB
	  GLB\ACCESS2.GLB
	
	As more postoffice users are added, memory available to process messages
	decreases.
	
	MORE INFORMATION
	================
	
	Approximate memory usage breakdown:
	
	1. Locally defined users take 35 bytes each.
	
	2. Locally defined groups take 31 bytes each.
	
	3. Each local user defined as a remote call requesters take an additional 36
	  bytes each.
	
	4. Any gateway access component takes 90 bytes each.
	
	5. Directly defined and indirectly defined postoffices each take 100.5 bytes.
	
	6. Any of those defined postoffices that are connected by Modem or X.25 take an
	  additional 48.6 bytes.
	
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFFAPI300 kbMailGateFFAPI210
	Version           : :2.1,3.0
	
	=============================================================================
	
