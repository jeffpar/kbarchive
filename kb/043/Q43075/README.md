---
layout: page
title: "Q43075: Using Batch Files with the FOR Batch Command"
permalink: kb/043/Q43075/
---

## Q43075: Using Batch Files with the FOR Batch Command

	Article: Q43075
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a batch file is used as the command in a FOR batch command, the FOR batch
	command only calls the batch file once. The following interactive example
	executes ONE.BAT for item "a", then stops:
	
	   FOR %i IN (a b c d) DO one %i
	
	In a batch file, use two percent examples. The change in the example above is as
	follows:
	
	   FOR %%i IN (a b c d) DO one %%i
	
	MORE INFORMATION
	================
	
	In Microsoft the MS-DOS packaged product, the CALL command can be used to
	repeatedly execute the batch file with the FOR batch command. The above
	interactive example is changed to the following:
	
	   FOR %i IN (a b c d) DO CALL one %i
	
	This example executes ONE.BAT for each item in the list.
	
	In releases of MS-DOS earlier than version 3.30, this can be done by spawning
	COMMAND.COM with the /C switch and letting it execute the batch file. The above
	interactive example is changed to the following:
	
	   FOR %i IN (a b c d) DO COMMAND /C ONE %i
	
	Additional query words: 6.22 3.x 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch
	Version           : MS-DOS:
	
	=============================================================================
	
