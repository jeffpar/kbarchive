---
layout: page
title: "Q129266: DUMPEL.EXE Can Interpret Event Log Hex Data"
permalink: /kb/129/Q129266/
---

## Q129266: DUMPEL.EXE Can Interpret Event Log Hex Data

{% raw %}

	Article: Q129266
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an event log entry refers to hex data for more information, try using Dump
	Event Log (included in the Windows NT 3.5 Resource Kit). In many cases, Dump
	Event Log (DUMPEL.EXE) will interpret the hex data and convert it to a more
	readable form. For example, running "DUMPEL -l system -m dhcpserver -s myserver"
	(without the quotation marks), displays:
	
	  4/11/95 4:58:39 AM  1   0   1016    N/A DhcpServer  REDIPSRVP2  %%20013
	
	The %%20013 valuse is the hex data interpreted by DUMPEL.EXE. The 1016 error
	above referred to hex data 0x2d4e. Swapping the bytes and converting to decimal
	yields 20013 as above.
	
	MORE INFORMATION
	================
	
	Dump Event Log is a command-line utility that can be used to dump an event log
	for a local or remote system into a tab-separated text file. This utility can
	also be used to filter for certain event types and to filter out certain event
	types.
	
	To use Dump Event Log, type dumpel with the appropriate switches at the command
	prompt:
	
	  dumpel [-s server] [-f file] [-l log [-m source] [e n1 n2 n3...] [-r]
	         [-t]
	
	-s server
	---------
	
	Specifies the server that contains the event log you want to dump. Leading
	backslashes on the server name are optional.
	
	-f file
	-------
	
	Specifies the filename for the output file. The default is STDOUT.
	
	-l log
	------
	
	Specifies which log (system, application, security) to dump. If an invalid
	logname is specified, the application log is dumped.
	
	-m source
	---------
	
	Specifies in which source (such as Rdr, Serial, ...) to dump records. Only one
	source can be supplied. If this switch is not used, all events are dumped. If a
	source is used that is not registered in the Registry, the application log will
	be searched for records of this type.
	
	-e n1 n2 n3 ...
	---------------
	
	Filters for event ID nn (up to 10 can be specified). If the -r switch is not
	used, only records of these types are dumped; if -r is used, all records except
	records of these types are dumped. If this switch is not used, all events from
	the specified sourcename are selected. You cannot use this switch without the -m
	switch.
	
	-r
	--
	
	Specifies whether to filter for specific sources or records, or to filter them
	out.
	
	-t
	--
	
	If this is specified, individual strings are separated by tabs. If not, they are
	specified by spaces.
	
	Additional query words: prodnt event viewer
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
