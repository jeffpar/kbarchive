---
layout: page
title: "Q85605: FAX: How to Troubleshoot the Gateway"
permalink: /kb/085/Q85605/
---

## Q85605: FAX: How to Troubleshoot the Gateway

	Article: Q85605
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article briefly describes the steps to follow when troubleshooting problems
	with the Microsoft Mail Gateway to Fax.
	
	MORE INFORMATION
	================
	
	Information Required
	--------------------
	
	To track or report a problem, you need to know:
	
	- Gateway version
	
	- Model and version of board being used
	
	- Error messages
	
	Isolating the Problem
	---------------------
	
	- Try sending a fax using the fax board software. If it doesn't work, the
	  problem lies with the board. Check the board's configuration.
	
	- If you can send faxes with the fax board software, but not while running the
	  gateway, find out what error message is being displayed.
	
	- If no error message is displayed and the fax is never sent, the problem could
	  lie with the actual mailbag being used for fax mail. Check the MBG directory
	  for file access problems, and check for any other mail-related problems.
	
	A full description of all error messages is in the "Microsoft Mail Gateway to Fax
	Administrator's Guide."
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  " Fax and Gateway and error and pcmail " (without the quotation marks)
	
	Restarting the Gateway
	----------------------
	
	To restart the gateway:
	
	1. Shut down the gateway.
	
	2. Return all items from the fax queue.
	
	3. Delete all items from the fax board queue, using the fax board software.
	
	4. For the Gammalink board only, compress the queue file by running
	  GFQRESET.EXE.
	
	5. From the Admin program, compress the RRS.FAX file.
	
	6. Restart the gateway.
	
	7. Send a fax.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to Fax Administrator's Guide"
	
	
	Additional query words: 3.00 2.1a pcmail errors
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
