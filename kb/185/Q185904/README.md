---
layout: page
title: "Q185904: SMS: New Smstrace Allows Searching and Highlighting of Strings"
permalink: kb/185/Q185904/
---

## Q185904: SMS: New Smstrace Allows Searching and Highlighting of Strings

	Article: Q185904
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Systems Management Server allows you to trace the actions
	performed by the Systems Management Server services. When tracing is enabled,
	each service creates log entries for actions that it performs or errors that it
	receives in a log file.
	
	The Systems Management Server 1.2 CD and the Systems Management Server Resource
	Kit include a Tracer (Smstrace.exe) utility that parses these log files and
	presents them in a clearer, more user-friendly manner than plain text viewing.
	
	Tracer also allows interactive viewing of the Systems Management Server log files
	while the services are writing to them.
	
	Unfortunately, searching for keywords or strings is not possible.
	
	MORE INFORMATION
	================
	
	The Tracer utility has been updated with some news features. This file will be
	available starting with the June 1998 edition of the Microsoft TechNet CD.
	
	New Features
	------------
	
	Search for String (Entry Text Column)
	-------------------------------------
	
	Available on the Search menu.
	
	- Find string
	
	- Find Next string (F3)
	
	- Find Previous string (F4)
	
	Highlight and Action
	--------------------
	
	Available on the HighLight menu.
	
	HighLight:
	
	  Draws a black outline around a row containing the defined string. The last
	  outlined row is the current (selected) row.
	
	  This feature is useful to facilitate the reading of the Systems Management
	  Server Logs when looking for occurrences of a specific string. It's also
	  useful for real-time monitoring.
	
	- Only new, loaded lines are processed.
	- You can not remove the outline from outlined rows.
	- To stop the outline process, set the string to an unexpected value.
	
	Action:
	
	  This feature works with HighLight string.
	
	  Allows Smstrace to execute a command when the "HighLight" string is found.
	
	  The action can be Enabled or Disabled.
	
	IMPORTANT: Microsoft recommends that you use great caution when you define the
	string that triggers the enabled action, so that you can prevent large numbers
	of processes from starting up accidentally.
	
	Additional query words: prodsms smstrace
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
