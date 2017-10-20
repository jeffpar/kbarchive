---
layout: page
title: "Q260527: Generating Notifications for an MSCS Resource Problem"
permalink: /kb/260/Q260527/
---

## Q260527: Generating Notifications for an MSCS Resource Problem

{% raw %}

	Article: Q260527
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool w2000mscs kbClustering
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Microsoft Cluster Server resource stop working, there are no options for
	notifications, alerts, or event logs to be generated. By using a Generic
	Application resource, you can point to a batch file that performs a
	notification, such as a "net send" command or to logging an event.
	
	MORE INFORMATION
	================
	
	First, create the batch file to be used to perform the notification. In this
	example, a "net send" command is used. Or, you can use Logevent.exe from the
	Microsoft Windows NT 4.0 Resource Kit or the Microsoft Windows 2000 Resource Kit
	to log events. Create a file named Notify.bat with the following text:
	
	  REM -- Start of NOTIFY.BAT ---
	  @echo off
	  REM This batch files performs a NET SEND when starteds
	  REM In this case it sends an alert to user name of AdminUserName,
	  REM the group being monitored is Disk Group 1.
	  REM Type 'NET SEND /?' for more information on the NET SEND command.
	  REM The Computername environment variable is used to provide
	  REM information as to which node owns the resource.
	  START /B NET SEND AdminUserName "Disk Group 1 has been restarted on NODE:
	  %Computername%"
	
	  REM A Pause is added so that the General Application resource does
	  REM not go into a failed state in Cluster Administrator.
	
	  PAUSE
	  REM -- End of NOTIFY.BAT ---
	
	NOTE: If you want multiple users to get an notification, duplicate the START /B
	line, and then list another contact person.
	
	Next, create a Generic Application resource in the appropriate group:
	
	1. Right-click the approrpriate group, point to New, and then click Resource.
	
	2. Fill in the boxes, making sure to click Generic Application in the Resource
	  Type box, and to click the correct group. Click Next.
	
	3. Make sure both nodes are listed as possible owners, and then click Next.
	
	4. Define the appropriate dependencies. At a minimum, define the physical disk
	  on which the utility is located.
	
	5. In the Command Line box, type the full path and file name of the batch file
	  that you created. Type the full path in the Current Directory box (for
	  example, T:\). Determine whether the "Allow application to interact with
	  desktop" option is appropriate. For testing, you may want to enable this
	  option initially. Click Next.
	
	6. Skip the registry replication by clicking Finish.
	
	Next, test the batch file:
	
	1. Bring the resource you created online by right-clicking it in Cluster
	  Administrator. The node that owns the group has a command prompt window if
	  the "Allow application to interact with desktop" option is enabled, and a
	  message is sent to the name specified in the "net send" command.
	
	2. Right-click a monitored resource, and then click Initiate Failure. The node
	  that owns the resource restarts the resource and resources that depend on it,
	  resulting in another alert notification.
	
	3. Right-click the group, and then click Move Group. The group should move and
	  send a notification.
	
	If you have a critical resource that you want to be independently monitored,
	create a dependency on that specific resource to ensure notification.
	
	NOTE: You will be notified of every single problem, not just failovers. (By
	default, a resource must stop working three times before the group fails over to
	the other node.) You may see a large number of alerts with individual
	dependencies set.
	
	For more detailed information about what causes a resource to stop working, see
	the event logs and the following Microsoft Knowledge Base article for
	information about cluster logging:
	
	  Q168801 How to Enable Cluster Logging in Microsoft Cluster Server
	
	Additional query words: MSCS logevent notify
	
	======================================================================
	Keywords          : kbenv kbtool w2000mscs kbClustering 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
