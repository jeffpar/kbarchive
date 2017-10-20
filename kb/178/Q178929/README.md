---
layout: page
title: "Q178929: XADM: How to Use the Event Log Tools in BORK Part Two"
permalink: /kb/178/Q178929/
---

## Q178929: XADM: How to Use the Event Log Tools in BORK Part Two

{% raw %}

	Article: Q178929
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information is designed to assist you in using the Event Log utilities
	located in the Microsoft BackOffice Resource Kit Part Two. The utilities are
	used to monitor specific events from Microsoft Exchange Server computers. The
	two executables discussed are Elf.exe and Evtscan.exe.
	
	MORE INFORMATION
	================
	
	From the Exchange\<operating system\platform>\EventLog directory on the
	Microsoft BackOffice Resource Kit Part Two CD-ROM, copy the files into a
	directory on a computer that is running the services you want to monitor. The
	files can be installed in several locations, including but not limited to the
	root of the drive that contains Exchange, in Exchsrvr\Bin, or in the same
	location as the BackOffice Resource Kit.
	
	Use the Event Log Filter tool (Elf.exe) to specify the servers and events that
	you want to monitor. After you specify what you want to monitor, the tool writes
	the results to a text file. For the message IDs, make sure to point the Event
	Log Filter installed on version 5.0 to 5.0 servers, and point Event Log Filters
	installed on 4.0 to 4.0 servers. You can then monitor events on servers or
	filter events saved in .Evt files by using the Windows NT Server Event Viewer.
	
	NOTE: You can save an event log filter by using the Configuration Add and Remove
	buttons.
	
	To Specify the Servers and Events You Want to Monitor
	-----------------------------------------------------
	
	Do the following:
	
	1. Run Elf.exe.
	
	2. Choose Add and Remove to specify the servers and .Evt files you want to
	  monitor.
	
	3. Specify the name of the output text file.
	
	4. Specify how far back you want to check events.
	
	5. Select the services you want to monitor. Choose Advanced to specify
	  individual event IDs to ignore for a service.
	
	6. Specify the entry types you want to monitor.
	
	7. Select the Unattended box if you want to skip over errors and continue.
	
	8. Select Go to start the filter.
	
	NOTE: The output text file created is in the same format as the Windows NT Server
	Event Viewer, except that it monitors more than one server and it adds the text
	description for events.
	
	To Monitor for Specific Events
	------------------------------
	
	You can use the Event Log Scan tool (Evtscan.exe) to monitor servers for specific
	events. When a specified event is detected, the Event Log Scan tool can be
	configured to do the following:
	
	1. Start an application or specify any other command-line directives.
	
	2. Send a message by using a selected profile and password.
	
	3. Send a network pop-up message to specific computers.
	
	4. Restart or stop the service.
	
	To Run the Event Log Scan Tool
	------------------------------
	
	Do the following:
	
	1. Create a configuration file with a .Cfg extension specifying the events and
	  actions required. The format is as follows:
	
	  EventID;Source;Action;Alert list;Mail list;Command line;Comment string;
	
	  The following is a list of each configuration entry and a description for the
	  type of event:
	
	  Configuration Entry: Description
	  --------------------------------
	
	  Event ID: The numerical event ID (see the Windows NT Event Viewer).
	
	  Source: The source name for the service to monitor.
	
	  Action: The action to take; can be Restart or Stop.
	
	  Alert list: A comma-separated list of computers to send network pop-up
	  messages to when the event is detected.
	
	  Mail list: A comma-separated list of e-mail aliases to notify when the event
	  is detected.
	
	  Command line: Command line with parameters (can be up to 256 characters in
	  length).
	
	  Comment string: A comment that is included in the alert pop-up message and
	  e-mail message when the event occurs.
	
	2. Run Evtscan.exe by using the following command-line format:
	
	     Evtscan -f <config_file> -u <profile_name> [-p <password>]
	     [-t <delay_in_seconds>] server_list
	
	  where config_file is the name of the configuration file created in step 1;
	  delay_in_seconds is the time the tool waits between scans (for example,
	  typing -t 15 sets the tool to scan for events every 15 seconds); profile is
	  the name of the Exchange profile to be used; password is the password for the
	  profile; and server_list is a comma- separated list of the servers to monitor
	  for the events.
	
	  Here is an example of typical syntax usage for the Event Log Scan tool:
	
	     Evtscan -f test.cfg -u scan -t 15 server1,server2,server3
	     A single space is used to separate the each parameter.
	
	3. Leave Evtscan running on your computer desktop. You may want to minimize the
	  command prompt window.
	
	NOTE: To have Event Scan alert you through e-mail, you must install it on a
	computer that has MAPI installed (for example, a Microsoft Exchange Server
	computer or a Microsoft Exchange Client computer).
	
	To Use Microsoft Access to View the Details of Your Logs
	--------------------------------------------------------
	
	If you have Microsoft Access installed, you can use the Microsoft Access Elf.mdb
	file to provide common summaries of the events. Do the following:
	
	1. Start Microsoft Access.
	
	2. Open Elf.mdb.
	
	3. Select Open Event Log and specify the full path to the output file created
	  with the Event Log Filter.
	
	4. Select View Details.
	
	  The top half of the view window shows the count of each event ID found. Click
	  an event to see individual occurrences in the bottom half of the window. Note
	  that the Elf.mdb database will grow with use. You need to compact this
	  database manually by using the Tools.Database Utilities.Compact Database
	  option in Microsoft Access.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
