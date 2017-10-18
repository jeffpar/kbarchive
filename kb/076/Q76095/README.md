---
layout: page
title: "Q76095: CONN: -N or /N Allows Use of Different .INI Filename"
permalink: kb/076/Q76095/
---

## Q76095: CONN: -N or /N Allows Use of Different .INI Filename

	Article: Q76095
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start MSGATE.EXE, Mail Connection, by default, always looks for the
	file M:MSGATE\INI\MSGATE.INI. You can use the -N or /N command-line parameter to
	specify a different, eight-character .INI filename (this example assumes that
	the current directory of drive M is the root of the Microsoft Mail for PC
	Networks postoffice):
	
	1. Change to the MSGATE\INI directory on the gateway postoffice.
	
	2. Copy the MSGATE.INI file to a new file called TEMP.INI.
	
	3. Start the MSGATE.EXE program with the following command line:
	
	  msgate -ntemp'
	
	  When the gateway starts, the following extra line appears:
	
	  Instance: TEMP
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn100
	Version           : :1.0
	
	=============================================================================
	
