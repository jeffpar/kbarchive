---
layout: page
title: "Q191353: SMS: SMS SQL View Generator Not Completely Silent in Unattended"
permalink: /kb/191/Q191353/
---

## Q191353: SMS: SMS SQL View Generator Not Completely Silent in Unattended

{% raw %}

	Article: Q191353
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the SMS SQL View Generator (Smsview.exe), you can create database views on
	the Systems Management Server database. The SMS SQL View Generator creates views
	for all personal computer groups that exist in the database at the time it is
	run.
	
	The Systems Management Server Books Online describes that utility as follows:
	
	  From the SMS\SITE.SRV\platform directory, you can run the SMS SQL
	  View Generator from the command line using the following syntax:
	
	     smsview <options>
	
	Options are any of the following:
	
	     /s:<servername>
	        Specifies the name of the computer running the instance of SQL
	        Server containing the database.
	
	     /l:<loginname>
	        Specifies a login ID on SQL Server that has database owner (dbo)
	        permissions on the database.
	
	     /p:<password>
	        Specifies the password for the login ID you specified with the
	        /l:<loginname> option.
	
	     /d:<database>
	        Specifies the name of the site database.
	
	For example:
	
	  smsview /s:smsdbsrv /l:smsdbo /p:alpha /d:sms
	
	The command line allows you to use the SMS SQL View Generator in a batch file or
	other scheduled process. No messages are displayed on the console. When the SMS
	SQL View Generator is run as a command, success or failure of the command is
	logged to the application log of the Windows NT event log. If the SMS SQL View
	Generator fails, the event provides a brief explanation of the cause (for
	example, if one of the command line arguments is invalid). All SMS SQL View
	Generator events have a source of SMS View.
	
	Note that the documentation states:
	
	  No messages are displayed on the console.
	
	However, when the SMSVIEW executable is run from a command line, a dialog box is
	displayed stating that the Views were successfully created.
	
	The documentation also states:
	
	  When the SMS SQL View Generator is run as a command, success or failure
	  of the command is logged to the application log of the Windows NT event
	  log. If the SMS SQL View Generator fails, the event provides a brief
	  explanation of the cause (for example, if one of the command line
	  arguments is invalid). All SMS SQL View Generator events have a source
	  of SMS View.
	
	This is also incorrect. It does not log any information in the Windows NT event
	log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. For additional information about related issues, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192439 SMS: Command Line Smsview.exe Leaves Open Window in Background
	
	SMS: Command Line Smsview.exe Leaves Open Window in Background
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
