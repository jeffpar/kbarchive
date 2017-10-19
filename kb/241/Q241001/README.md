---
layout: page
title: "Q241001: SMS: Troubleshooting Server, Component, and Hierarchy Issues"
permalink: /kb/241/Q241001/
---

## Q241001: SMS: Troubleshooting Server, Component, and Hierarchy Issues

	Article: Q241001
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you experience a server, component, or hierarchy problem with Systems
	Management Server (SMS) 2.0, you can use several tools to help isolate and
	diagnose the cause of the problem. These tools include:
	
	- Built-in SMS Status System
	
	- Built-in Status Message Queries
	
	- Troubleshooting Tips and System Flow Diagrams
	
	- Windows NT Application and System Event Logs
	
	- Microsoft Knowledge Base Articles
	
	- Sophisticated Logging Capabilities
	
	This article describes how to most effectively use these tools for SMS
	troubleshooting.
	
	MORE INFORMATION
	================
	
	Built-in Status System
	----------------------
	
	SMS 2.0 uses a sophisticated status system to track Component Status and Site
	System Status, as well as Advertisement Status and Package Status. Status
	information is displayed in the System Status node of the SMS Administrator
	console and should be the first stop when you troubleshoot any SMS problem or
	monitor the general health of the site and hierarchy.
	
	Component Status:
	
	Critical, Warning, and Informational status messages are generated regularly by
	every component. If you experience a problem and do not know where to begin
	troubleshooting, look at the Component Status under the Site Status node. If you
	see a lot of critical error messages or warning messages, you can establish a
	baseline by resetting the status counters. To do this, right-click the
	components with the error and warning messages, and then click "Reset Counts,
	All". When you refresh the Site Status, all the components turn green (no
	errors). When you reset the counters, the status messages are not deleted. You
	are still able to see previous messages in the Status Message Viewer tool. If a
	component continues to experience a problem, it continues to generate status
	messages and the Component Status is updated.
	
	To view messages that a specific component generated, right-click the component,
	and then click "Show Messages, All". This starts the Status Message Viewer tool.
	After the messages are loaded into the tool, you can sort columns by clicking
	the column heading. If you place your mouse pointer over the message
	description, the full description of the message (including possible causes of
	the error message and additional troubleshooting information) is displayed.
	
	NOTE: All components and their functions are listed in Appendix C, "SMS Component
	Definitions," of the Microsoft Systems Management Server 2.0 Administrator's
	Guide (both online and hard copy).
	
	Site System Status:
	
	The Site System Status node displays all the site systems for the site (for
	example, Client Access Points (CAPs), distribution points, SQL Server, site
	server, logon points, and component servers). The information displayed in this
	node is collected and updated by the Site Status Summarizer Component on a
	maintenance cycle of 24 hours.
	
	Package and Advertisement Status:
	
	Package Status allows you to monitor when a package has reached the target
	distribution points. All packages must arrive at a distribution point before
	they are accessible to clients. If Package Status shows a package as "retrying,"
	check the Component Status to see which component did not work.
	
	Advertisement Status summarizes the total number of clients that have received or
	run an advertisement, or that did not run an advertisement. If Advertisement
	Status shows one or more error messages, please refer to "Built-in Status
	Message Queries" section of this article.
	
	Detailed information on the SMS Status System is described in Chapter 20,
	"Understanding the SMS Status System," of the Microsoft Systems Management
	Server 2.0 Administrator's Guide (both online and hard copy).
	
	When you need to work with Microsoft Technical support on a site or site
	hierarchy problem, Microsoft recommends that you have a status message export
	file ready for the support professional to analyze. For additional information
	about how to export a status message file, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q232183 How to Export SMS 2.0 Status Messages for Analysis
	
	Built-in Status Message Queries
	-------------------------------
	
	SMS provides the most commonly required troubleshooting and site maintenance
	status message queries. These queries are located under the System Status,
	Status Message Queries node in the SMS Administrator console. You can use these
	queries to locate clients that experienced error messages with installation or a
	specific advertisement, as well as to monitor usage, security, or other problems
	for a specific site in the hierarchy.
	
	Troubleshooting Tips and System Flow Diagrams
	---------------------------------------------
	
	Information about process and component flows to help isolate where a problem is
	occurring is provided in Appendix D, "System Flows," of the Microsoft Systems
	Management Server 2.0 Administrator's Guide (both online and hard copy). These
	flows are updated (along with additional flows and troubleshooting information)
	in the Microsoft BackOffice 4.5 Resource Kit. All flows contain file and folder
	names and locations, registry dependencies, SQL trigger information and thread
	component information. Flow diagrams and troubleshooting tips are provided for
	almost every aspect of site-to-site communications and client-to-site
	communications.
	
	Windows NT Application and System Event Logs
	--------------------------------------------
	
	Windows NT Event Viewer often contains valuable information that is critical to
	the troubleshooting process. When a site or a site system is experiencing a
	problem, always check both the Application and System event logs to determine if
	the problem is caused by temporary network problems, device drivers, or
	third-party software.
	
	Microsoft Knowledge Base Articles
	---------------------------------
	
	When an error message or an event is generated, always note the exact error
	message. Use the exact error or event number when you search for the issue in
	the Microsoft Knowledge Base. The Knowledge Base is included with a Microsoft
	TechNet subscription and is also available on the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/support/default.htm
	
	The following Microsoft Knowledge Base article contains a keyword list for
	searching SMS articles:
	
	  Q199435 SMS: Keywords List for Searching
	
	Sophisticated Logging Capabilities
	----------------------------------
	
	After you use the SMS Status System to isolate the component that is experiencing
	the problem, you can enable one or more levels of component logging. Logging for
	all server components (with the exception of the SMS Site Provider) is disabled
	by default in SMS 2.0 for performance reasons. If logging is enabled for all
	components, you may experience as much as a 15 percent performance degradation
	at the site server. Logging is very disk I/O intensive. If you want to enable
	logging, consider placing the log files on a different physical disk on the site
	server than on the disk that holds the SMS directory structure.
	
	Each log has a maximum log file size. When that log size is reached, SMS renames
	the log file in the same directory with the extension .lo_.
	
	Enabling Logging:
	
	You can enable logging using either of the following methods.
	
	Method 1: Use Service Manager in the Tools node of the Administrator Console
	
	1. To start Service Manager, right-click Service Manager in the Administrator
	  console, and then click Start.
	
	2. Expand the nodes in the left pane to drill down to the appropriate server or
	  component. In the right pane, right-click the component, and then click
	  Logging.
	
	3. When you are prompted to enable logging, set the file location and the name
	  of the file.
	
	NOTE: When you troubleshoot a process, you can highlight multiple components and
	enable/disable logging for all components at once. You can also specify that all
	components log to a single file to make process troubleshooting simpler.
	Method 2: Edit the Registry for the Site or Component Server on Which You Want to
	Enable Logging
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Component key under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Sms\Tracing
	
	3. Set the Enabled value to 1 to turn on logging; set the Enabled value to 0 to
	  turn off logging.
	
	4. Quit Registry Editor.
	
	Trace Levels in Logging
	-----------------------
	
	The information provided in the component logs is detailed enough to isolate the
	vast majority of problems. When you narrow down the problem to a specific action
	on which a component is not working, SMS provides two additional trace levels to
	the default log files:
	
	- SQL Tracing
	
	- Network Abstraction Layer (NAL) Logging
	
	SQL Tracing:
	
	You can use SQL Tracing when the component is interacting with SQL, and an error
	message is occurring but the SQL Error Log and the Component Log do not indicate
	where in SQL the problem is actually happening.
	
	To enable SQL Tracing:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Sqlenabled value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Sms\Tracing
	
	3. Set the Sqlenabled value to 1 to turn on SQL tracing; set the Sqlenabled
	  value to 0 to turn off SQL tracing.
	
	4. Quit Registry Editor.
	
	5. To initiate SQL logging, first you should stop and then restart the service
	  that contains the thread(s) where SQL related action is being monitored.
	
	Network Abstraction Layer (NAL) Logging:
	
	NAL logging provides detailed information about how the component is attempting
	to connect to a network resource. To enable NAL logging, open the
	Turn_on_nal_logging.reg file on the site or component server that is
	experiencing the problem. To disable NAL logging, open the
	Turn_off_nal_logging.reg file on the site or component server. Both of these
	.reg files are located on the SMS CD-ROM in the
	Support\Reskit\<Platform>\Diagnose folder.
	
	Keep in mind that enabling these two additional types of tracing further affects
	performance and makes the log files exceptionally hard to read.
	
	The system flows in Appendix D of the Microsoft Systems Management Server 2.0
	Administrator's Guide and the Microsoft BackOffice 4.5 Resource Kit list all the
	default log file names and components in the introduction of each flow.
	
	Primary and secondary site Setup creates logs by default. Setup creates
	C:\Smssetup.log. Windows Based Enterprise Management (WBEM) or Windows
	Management Instrumentation (WMI) Setup logs are in the Windows folder under
	System32\Wbem\Logs. Secondary sites may also have a Bootstrap.log file on the
	root of the SMS target installation drive.
	
	Log files always indicate when a component generated a status message and what
	that message was. A convenient way to look up a status message without having to
	query for it through the Administrator console is to use the tables in Chapter
	26, "Status Messages," of the Microsoft BackOffice 4.5 Resource Kit to look up
	the message by ID number.
	
	You can read, search, and view log files in real time, using the Smstrace tool.
	You can install this tool on any Microsoft Windows NT-based computer from the
	Support\Reskit\x86.bin\Smstrace folder on the SMS CD-ROM.
	
	Additional query words: prodsms kbhowto fail failed fails failure
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
