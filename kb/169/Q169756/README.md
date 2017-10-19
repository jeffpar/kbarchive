---
layout: page
title: "Q169756: XFOR: Using the LinkAge Log Browser for Troubleshooting"
permalink: /kb/169/Q169756/
---

## Q169756: XFOR: Using the LinkAge Log Browser for Troubleshooting

	Article: Q169756
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each process running under the LinkAge Controller generates messages that the
	controller consolidates into a log file. The name, location, and size of the log
	file are specified in the LinkAge configuration file (Linkage.ini).
	
	The Log Browser provides a way of viewing the log files produced by the LinkAge
	Controller. Use the Log Browser to monitor message traffic and status, as well
	as to assist in problem determination and error handling.
	
	To start the Log Browser, double-click on the Log Browser entry in the LinkAge
	Overview window. The Log Browser window displays the information about each
	message, including the following:
	
	- the level of severity
	
	- the date and time the log message was generated
	
	- the process name that generated the message
	
	- the identifier of the message from the LinkAge message file
	
	- the log message text
	
	- the name of the module that generated the message
	
	- the line number in the source code of that module
	
	- a unique identifier for the individual message
	
	When you are investigating problems, increase the level of message detail by
	using the Set Message Level option on the Options menu. You may also need to use
	the Display From option under the View menu to display messages written to the
	log file during a particular date and time.
	
	For complete information about using the Log Browser, refer to online Help.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
