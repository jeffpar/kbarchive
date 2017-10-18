---
layout: page
title: "Q129711: HOWTO: Clean Up the Visual FoxPro Environment"
permalink: kb/129/Q129711/
---

## Q129711: HOWTO: Clean Up the Visual FoxPro Environment

	Article: Q129711
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses a recommended series of commands to clean up the Visual
	FoxPro Environment when you are performing one of the following:
	
	- When closing down the application.
	
	- During transactions.
	
	- During buffered updates.
	
	MORE INFORMATION
	================
	
	A Visual FoxPro application needs to accomplish the following items in order to
	guarantee a clean Visual FoxPro environment:
	
	- Clean up during transactions.
	
	- Clean up during buffered updates.
	
	- Return Visual FoxPro to its state at startup.
	
	The major tasks that should be accomplished during the cleanup process are:
	
	- Close down all operations.
	
	- Remove all objects from memory.
	
	- Close all private data sessions and cursors.
	
	- Clear the compiled program buffer.
	
	- Make sure Visual FoxPro reads programs from disk, not buffer.
	
	Details on how to accomplish these steps are outlined below.
	
	How to Close Down All Operations and Return FoxPro to Its State at Startup
	--------------------------------------------------------------------------
	
	To close down all operations and return Visual FoxPro to its state at startup,
	issue the following commands, in order, in the Command window:
	
	    CLEAR ALL
	    CLOSE ALL
	    CLEAR PROGRAM
	
	The CLEAR ALL command removes all objects from memory which, in turn, closes all
	private data sessions and cursors. The CLOSE ALL command closes all databases,
	tables, and cursors in data session 1, which is the default Visual FoxPro data
	session. Then the CLEAR PROGRAM command clears the compiled program buffer of
	the most recently executed programs, and it forces Visual FoxPro to read the
	programs from disk, rather than from the program buffer.
	
	Special Consideration: Cleaning Up During Transactions
	------------------------------------------------------
	
	If transactions are in progress, use the END TRANSACTION command for each level
	of transaction before issuing the CLEAR ALL, CLOSE ALL, and CLEAR PROGRAM
	commands.
	
	Special Consideration: Cleaning Up During Buffered Updates
	----------------------------------------------------------
	
	If buffered updates are in progress, use either the TABLEUPDATE() or
	TABLEREVERT() functions for each cursor with buffered updates before issuing the
	CLEAR ALL, CLOSE ALL, and CLEAR PROGRAM commands.
	
	Additional query words: Cleanup Code
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
