---
layout: page
title: "Q251019: How to Schedule VIACompact to Run on a Routine Basis"
permalink: /kb/251/Q251019/
---

## Q251019: How to Schedule VIACompact to Run on a Routine Basis

{% raw %}

	Article: Q251019
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For large Microsoft Metadirectory Services (MMS) server databases, it may be
	necessary to compact the database at a predetermined interval. You can do this
	by using scripts and one of the scheduling services included with Microsoft
	Windows 2000 or Microsoft Windows NT. This article describes the various
	utilities you can use to schedule the VIACompact utility.
	
	To start VIACompact by using the Microsoft Windows NT scheduling service, you
	must do the following:
	
	- Create a batch file with the command-line options that you want to run.
	
	- Configure the Scheduler service to run at certain intervals.
	
	MORE INFORMATION
	================
	
	Step 1: Writing a Script to Run VIACompact
	------------------------------------------
	
	NOTE: Wait approximately 1 minute between the net stop zoomit server command and
	the call to VIACompact. This delay allows all resources consumed by MMS to
	become fully released before VIACompact begins operation. If you do not wait
	between these two operations, the X500.db file may become corrupted.
	
	1. Start Notepad and type the following information:
	
	MMS 2.1
	
	  net stop "zoomit server" c:\program files\resource kit\sleep 90
	  c:\zoomserv\bin\viacompact.exe -unattended -start c:\program files\resource
	  kit\sleep 90 net start "zoomit server"
	
	MMS 2.2
	
	  net stop "MMS server" c:\program files\resource kit\sleep 90
	  c:\zoomserv\bin\viacompact.exe -unattended -start c:\program files\resource
	  kit\sleep 90 net start "MMS server"
	
	2. Save the file as Viacompact.cmd to C:\.
	
	NOTE: You can also use a more advanced scripting language such as Microsoft
	Visual Basic Scripting Edition.
	NOTE: The Sleep utility is available for Windows 2000 and is in the Windows 2000
	Resource Kit.
	
	Adding the Sleep statement allows the script to wait approximately 90 seconds
	between the net stop command and the call to VIACompact. This delay allows all
	resources consumed by MMS to become fully released before VIACompact begins
	operation. If you do not wait between these two operations the viacompact
	utility may not run correctly.
	
	The second sleep statement is not necessary, but can be used as an added buffer
	between when the ViaCompact completes and when the zoomit service is started.
	
	NOTE: You can also use a more advanced scripting language such as Microsoft
	Visual Basic Scripting Edition.
	
	Step 2: Using the Scheduling Service
	------------------------------------
	
	The scheduling services available per operating system include:
	
	Window NT 4.0 Server:
	
	- AT command-line scheduler
	
	- WinAT scheduler from the Windows NT 4.0 Resource Kit
	
	Windows 2000 Server:
	
	- Task Scheduler
	
	- AT
	
	Using Task Scheduler in Windows NT 4.0 and Internet Explorer 4.0 or Later
	-------------------------------------------------------------------------
	
	1. In the Winnt\Tasks folder in Windows NT Explorer, double-click Add Scheduled
	  Task.
	
	2. Click Next.
	
	3. Click Browse.
	
	4. In the "Select Program to Schedule" dialog box, go to C:\.
	
	5. Click Viacompact.cmd, and then click Open.
	
	6. Click "One time only", and then click Next.
	
	7. Change the start time to about two minutes ahead of the current time; leave
	  the start date set to the current date.
	
	8. Click Next. You see the screen for the user account that the task will use.
	  Type the user name and password that you are currently logged on with.
	
	9. Click Finish.
	
	10. When the time expires, the Zoomit Server service stops and VIACompact runs.
	
	Using WinAT from the Resource Kit
	---------------------------------
	
	1. On the File menu, click New to display the Add Command dialog box.
	
	2. Type "c:\viacompact.cmd" (without the quotation marks) in the Command box.
	
	3. Click Today, Tomorrow, Every, or Next.
	
	4. In the Days and Time boxes, click the days and time the command is to run.
	
	5. Click OK.
	
	Using Scheduled Task for Windows 2000
	-------------------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Scheduled Tasks.
	
	2. Double click Add Scheduled Tasks.
	
	3. Click Next
	
	4. Click Browse, and then locate the batch file that you created earlier in this
	  article (Viacompact.cmd).
	
	5. Keep the default name that matches your program name.
	
	6. Select the interval you want. For testing purposes click, One Time Only.
	
	7. Click Next
	
	8. Change the start time to about two minutes ahead of the current time; leave
	  the start date set to the current date.
	
	9. Click Next. You see the screen for the user account that the task will use.
	  Type the user name and password that you are currently logged on as.
	
	10. Click Next
	
	11. Click Finish
	
	12. When the time expires, the Zoomit Server service stops and VIACompact runs.
	
	Using the AT Command-Line Scheduler in Windows NT and Windows 2000
	------------------------------------------------------------------
	
	Windows NT 3.5, 3.51, 4.0:
	
	1. Double-click Control Panel in the Main program group.
	
	2. Double-click Services.
	
	3. Double-click Schedule Service.
	
	4. In the Log On As box, click This Account.
	
	5. Add a user account that has administrative rights to the system.
	
	6. Type the account password and confirm the password.
	
	7. Click OK.
	
	Windows 2000:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Scheduled Tasks.
	
	2. Click Advanced, and then click AT Service Account.
	
	3. In the AT Service Account Configuration box, click This Account.
	
	4. Add a user account that has administrative rights to the system.
	
	5. Type the account password and confirm the password.
	
	6. Click OK.
	
	To schedule the program to run, type the following line at a command prompt:
	
	  at 4:30pm /interactive "c:\mytest.bat"
	
	NOTE: "4:30pm" is an example. Use a time about two minutes ahead of the current
	time for this test. When the time expires, the Zoomit service stops and the
	VIACompact utility runs.
	
	Additional query words: Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
