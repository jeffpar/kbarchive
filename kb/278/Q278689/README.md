---
layout: page
title: "Q278689: XADM:  How to Manually Create a User.dmp File with Dr.Watson"
permalink: /kb/278/Q278689/
---

## Q278689: XADM:  How to Manually Create a User.dmp File with Dr.Watson

	Article: Q278689
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Microsoft Windows default troubleshooting
	feature, Dr. Watson, to create a User.dmp file.
	
	MORE INFORMATION
	================
	
	Dr.Watson is the Microsoft Windows NT and Windows 2000 just-in-time default
	troubleshooting feature. If you configure Dr.Watson as the default
	troubleshooting feature, the feature is activated when a program such as the
	Microsoft Exchange information store experiences an unhandled exception. This
	behavior results in an access violation, and the program quits. Additionally,
	you can manually activate Dr. Watson to quit a program and create a User.dmp
	file and a Drwtsn32.log file. You can also use this feature to determine whether
	Dr.Watson can successfully create a User.dmp file on the local computer.
	
	The default configuration for Dr.Watson can vary and it depends on the Windows
	platform. To view the default configuration, click Start, click Run, and then
	type "drwtsn32" (without the quotation marks). The following information reports
	the differences between Windows NT and Windows 2000.
	
	NOTE: Options that are not mentioned are the same for both platforms.
	
	For Windows NT 4.0:
	
	- The log file (Drwtsn32.log) path is <Windir> (Winnt).
	
	- The crash dump (User.dmp) path is <Windir>\user.dmp.
	
	- The Visual Notification option is enabled.
	
	For Windows 2000:
	
	- The log file (Drwtsn32.log) path is C:\Documents and Settings\All
	  Users\Documents\DrWatson.
	
	- The crash dump (User.dmp) path is C:\Documents and Settings\All
	  Users\Documents\DrWatson\User.dmp.
	
	- The Visual Notification option is not enabled.
	
	To manually activate Dr.Watson on either platform, follow these steps:
	
	1. Determine the Process Identification Number for the program that you want to
	  quit. To do this, start Task Manager, and then click the Processes tab. In
	  the Image Name column, locate the program, and then note the Process
	  Identification Number.
	
	2. Quit Task Manager.
	
	3. Click Start, click Run, and then type "drwtsn32 -p <PID Number>"
	  (without the quotation marks).
	
	  where <PID Number> is the Process Identification Number determined in
	  step one.
	
	4. For Windows NT 4.0:
	
	  In the Dr.Watson dialog box that is displayed, click OK. The Drwtsn32.log and
	  User.dmp file can be found in the location that is noted at the beginning of
	  this section.
	
	  For Windows 2000:
	
	  You do not receive notification because the Visual Notification option is not
	  enabled by default. The Drwtsn32.log and User.dmp file can be found in the
	  location that is noted at the beginning of this section.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
