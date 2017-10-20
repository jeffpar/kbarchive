---
layout: page
title: "Q148809: PC NTMMTA: Mail Service Manager Monitor Flashes &amp; Disappears"
permalink: /kb/148/Q148809/
---

## Q148809: PC NTMMTA: Mail Service Manager Monitor Flashes &amp; Disappears

{% raw %}

	Article: Q148809
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to monitor a service from the Microsoft Mail Service Manager, the
	Monitor.exe command box will flash and disappear.
	
	CAUSE
	=====
	
	There are several reasons you will see the above behavior:
	
	- The External.ini file settings for the service are incorrect.
	
	- The service is already being monitored, either from this computer or
	  remotely.
	
	- The service is not started.
	
	RESOLUTION
	==========
	
	To find out more specific information on why the monitor is failing, run
	Monitor.exe program from a command prompt.
	
	Notes:
	
	- Monitor.exe is installed by default in the \Winnt35 directory.
	
	- You may see one or more the following errors:
	
	  Warning: Unable to find specified instance INI section.
	  Error: Service is already being monitored. (231)
	  Error: Service instance not found. Service may not be running. (2)
	
	
	MORE INFORMATION
	================
	
	The following are the error messages and possible causes:
	
	- Warning: Unable to find specified instance INI section
	
	  The cause for this error is that the External.ini requires an Instance name.
	
	  For additional information on how to correct this, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q130396 Err Msg: Unable to Find Specified Instance INI.
	
	- Error: Service is already being monitored. (231)
	
	  You can only launch the monitor one time for each service instance. If you
	  receive this error, check the Task Manager (double-click the desktop) and see
	  if there are multiple listings for C:\Winnt35\monitor.exe.
	
	  If there are multiple listings, check each one to see if it is monitoring the
	  instance you are trying to monitor. If not, then there may be a remote
	  instance of monitor running for this specific instance.
	
	- Error: Service instance not found. Service may not be running. (2)
	
	  The Mail Multitasking MTA for Windows NT (NTMMTA) Service is initially run
	  either during startup of Windows NT or after startup by going into Control
	  Panel, Services and running the service.
	
	  If you try to monitor a service instance and receive this error, go into
	  Control Panel, Services and ensure that the service is running. If the status
	  states that is has been started, yet you still receive this error when run
	  the monitor, you will want to stop the service and restart it.
	
	  If the service has been stopped previously from the monitor window, it will
	  still show that it is started in Control Panel, Services until it has been
	  stopped there also.
	
	  For additional information on this specific issue, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q131824 Press ESC and Y to Exit Monitor Window.
	
	  For additional information on Monitor.exe command line settings, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q134668 Monitor Option Can Be Called from a Command Line
	
	Additional query words: 3.50 MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
