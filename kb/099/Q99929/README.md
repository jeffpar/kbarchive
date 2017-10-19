---
layout: page
title: "Q99929: PC WRmt: Connection Time-Outs"
permalink: /kb/099/Q99929/
---

## Q99929: PC WRmt: Connection Time-Outs

	Article: Q99929
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you have many headers in your mailbox, the connection between version 3.2 of
	Microsoft Mail Remote for Windows and your postoffice may time out while
	EXTERNAL.EXE (running at the office from Microsoft Mail for PC Networks)
	prepares to transmit the headers list.
	
	To increase the time-out limit for Mail Remote for Windows, first confirm that
	Mail Remote is the current driver.
	
	Then increase the value for ConnectTimeOut in the [SFSREMOTE] section of your
	MSMAIL.INI file, located in the WINDOWS directory.
	
	This value can be between 60 (the default value) and 999, and represents the
	number of seconds Mail Remote for Windows will wait before reporting a time-out
	error.
	
	Contact your mail administrator if problems continue; they might need to adjust a
	command-line parameter for EXTERNAL.EXE running on your postoffice, setting a -e
	value to match the number you set for ConnectTimeOut.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
