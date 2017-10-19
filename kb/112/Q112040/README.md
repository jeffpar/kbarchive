---
layout: page
title: "Q112040: X400: How to Perform an X.25 Eicon Trace"
permalink: /kb/112/Q112040/
---

## Q112040: X400: How to Perform an X.25 Eicon Trace

	Article: Q112040
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A trace of the X.25 layer may be useful for troubleshooting purposes with the
	Mail Gateway to X.400. An X.25 trace provides connection information not
	reflected in the X.400 gateway log file.
	
	To obtain the trace, follow these steps:
	
	1. Start the Eicon software.
	
	2. Start the Eicon trace utility by typing:
	
	  " ectrace start size 10240 x25" (without the quotation marks)
	
	3. Start the Mail gateway to X.400.
	
	4. Recreate the error condition.
	
	5. Stop the gateway.
	
	6. Stop the Eicon trace and save the trace information in a file:
	
	  ectrace read x25 4/E > filename.txt
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
