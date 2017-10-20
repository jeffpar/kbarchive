---
layout: page
title: "Q260729: HOW TO: Enable Schannel Logging"
permalink: /kb/260/Q260729/
---

## Q260729: HOW TO: Enable Schannel Logging

{% raw %}

	Article: Q260729
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbHOWTOmaster
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Enable Logging
	   - Logging Options
	
	SUMMARY
	=======
	
	When you enable Schannel event logging on a computer that is running Microsoft
	Windows NT Server 4.0, Microsoft Windows 2000 Server, or Microsoft Windows XP
	Professional, detailed information from Schannel events can be written to the
	Event Viewer logs. This article describes how to enable and configure Schannel
	event logging.
	
	--------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: This registry key is present already in Windows 2000 and XP Professional.
	
	1. Start Registry Editor. To do this, click Start, click Run, type regedt32, and
	  then click OK.
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\SecurityProviders\SCHANNEL
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: EventLogging
	  Data Type: REG_DWORD
	
	  NOTE: After you add this property, you must give it a value. See the table in
	  the Logging Options section to obtain the appropriate value for the type of
	  events that you want to log.
	
	4. Exit Registry Editor.
	
	5. Click Start, click Shut Down, click to select Restart, and then click OK to
	  restart the computer. (Logging does not take effect until after you restart
	  the computer).
	
	---------------
	
	The default value for Schannel event logging is 0x0000 in Windows NT Server 4.0,
	which means that no Schannel events are logged. In Windows 2000 Server and
	Windows XP Professional, this value is set to 0x0001, which means that error
	messages are logged. Additionally, you can log multiple events by specifying the
	hexadecimal value that equates to the logging options that you want. For
	example, to log error messages (0x0001) and warnings (0x0002), set the value to
	0x0003.
	
	  
	  +-----------------------------------------------+
	  | Value  | Description                          | 
	  +-----------------------------------------------+
	  | 0x0000 | Do not log                           | 
	  +-----------------------------------------------+
	  | 0x0001 | Log error messages                   | 
	  +-----------------------------------------------+
	  | 0x0002 | Log warnings                         | 
	  +-----------------------------------------------+
	  | 0x0004 | Log informational and success events | 
	  +-----------------------------------------------+
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
