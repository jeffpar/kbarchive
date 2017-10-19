---
layout: page
title: "Q175847: How to Set Up Data Logging on a Remote Computer"
permalink: /kb/175/Q175847/
---

## Q175847: How to Set Up Data Logging on a Remote Computer

	Article: Q175847
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are specific instructions included with the Microsoft Windows NT Resource
	Kit to set up data logging on a remote computer. The instructions in this
	article are an update from the instructions included with the Windows NT
	Resource Kit. It is important that you follow these instructions and use the
	appropriate folders.
	
	MORE INFORMATION
	================
	
	To set up data logging on a remote computer, perform the following steps:
	
	1. Create a settings file by using the Windows NT Performance Monitor
	  (Perfmon.exe) on the local computer.
	
	   - Specify all objects you want to log and the alerts you want.
	
	   - Specify the log file name (*.LOG) and the logging interval by saving the
	     file to a local folder (this folder must also exist on the target system),
	     using the Log command on the Options menu. Do not start logging. (This
	     simply determines the name of the log file. The log file will be created
	     on the target computer when the monitor service is stopped).
	
	   - Save the settings file (*.PMW) into the target computer's
	     %SystemRoot%\System32 folder by using the Save Workspace command on the
	     File menu.
	
	2. Copy Datalog.exe into both the target and local computers'
	  %SystemRoot%\System32 folder.
	
	3. Ensure that there is a c:\Users\Default folder on the target computer.
	
	  NOTE: The target computer is the computer that you are monitoring; the source
	  is the computer that you are working from. The final log will be located on
	  the target computer.
	
	4. To install the Data Logging Service, type the following command at a command
	  prompt window in the target %SystemRoot%\System32 folder:
	
	  monitor \\computername setup
	
	  This command registers the service with the Service Manager. You only need to
	  run this command once for each computer. You must have the appropriate rights
	  to start a service on the target computer.
	
	5. To use your settings file, type:
	
	  monitor \\computername filename
	
	  NOTE: It is important to put the entire path for the file name.
	
	  For example: %SystemRoot%\System32\Filename.pmw
	
	6. To start logging events and alerts, immediately type the following command:
	
	  monitor \\computername start
	
	7. To stop logging, type the following command:
	
	  monitor \\computername stop
	
	8. To view the log file in Performance Monitor, the log file will be located in
	  the target computer's %SystemRoot%\Users\Default folder.
	
	  NOTE: You must stop the Monitor service before you can use the log file in
	  Performance Monitor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbhowto
	
	=============================================================================
	
