---
layout: page
title: "Q80224: FORMAT May Incorrectly Return ERRORLEVEL of Zero"
permalink: /kb/080/Q80224/
---

## Q80224: FORMAT May Incorrectly Return ERRORLEVEL of Zero

	Article: Q80224
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS FORMAT command may, under certain error conditions, return an
	ERRORLEVEL = 0 (zero), indicating successful completion, when in fact the format
	was unsuccessful.
	
	Microsoft has confirmed this to be a problem in MS-DOS version 5.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	When the FORMAT command is invoked with an invalid parameter in the command
	line, it may terminate with the appropriate error message, yet return an
	ERRORLEVEL of zero. This may produce undesired results in batch processing using
	the "IF ERRORLEVEL=" batch file command.
	
	For example, the command
	
	  format a: /a
	
	aborts with the error message "Invalid switch - /A", yet returns an ERRORLEVEL of
	0 for batch processing.
	
	Some other examples of FORMAT error conditions incorrectly returning an
	ERRORLEVEL of zero are as follows:
	
	- Cannot format an ASSIGNed or SUBSTed drive
	
	- Parameters not compatible with fixed disk
	
	- Parameter format not correct
	
	- Parameter value not allowed
	
	- Invalid drive specification
	
	- Required parameter missing
	
	- Too many parameters
	
	- Invalid Volume ID
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
