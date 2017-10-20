---
layout: page
title: "Q214448: SMS: Job Status Stays at None for Run Command on Workstation Job"
permalink: /kb/214/Q214448/
---

## Q214448: SMS: Job Status Stays at None for Run Command on Workstation Job

{% raw %}

	Article: Q214448
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbPCM kbPackage kbSoftwareDist
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending a Run command on a workstation job to workstations utilizing the
	Package Command Manager (PCM) as a service, one or more of the following
	symptoms may appear:
	
	- In job details the workstation status remains as None.
	
	- Run command on workstation jobs scheduled to run at a specific time fail to
	  execute as expected even though the PCM Service or PCM Application is running
	  and the client time is correct.
	
	- The workstation command line is executed and the process is viewable in Task
	  Manager, but the process never completes.
	
	- At the workstation, PCM appears to have executed the command line, but the
	  process appears in Task Manager and apparently never completes.
	
	- A message box titled Package Command Manager Service appears on the SMS
	  client user's desktop at an interval corresponding to the PCM refresh time,
	  which contains the following text:
	
	  "A package is currently being installed in the background. This is routine,
	  however please wait until it has completed before starting any new packages."
	
	CAUSE
	=====
	
	This problem occurs when PCM spawns a process that never exits. After PCM spawns
	a new process to install software, it polls to see if that process is still
	running continually until it detects that the process is no longer executing,
	then PCM reports status using a mif file back to the site.
	
	NOTE: This behavior can be changed if Service Pack 4 is installed. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q175652 SMS: PCM May Not Change the Status of Executed Package Commands
	
	Until the process completes the status will not be reported and PCM will not
	attempt to launch any other installations even if the scheduled time elapses.
	
	Most often, this is seen when an application is sent to PCM as a service and for
	whatever reason the application is waiting for user input. Since PCM as a
	service does not permit interaction with the desktop, users are unable to
	respond to the input for which the application is waiting. For example, an
	installation program may prompt the user to restart the computer or report an
	error through a dialog box and be waiting for the user to close the dialog
	before continuing any further. This problem can be verified by looking at the
	PCM Service log file. If the problem exists, "Job is still running..." is
	continually logged because the spawned process has not yet ended.
	
	WORKAROUND
	==========
	
	Any command lines sent to PCM as a Service must be completely silent or this
	problem may occur. Please see the following article in the Microsoft Knowledge
	Base for other considerations when using PCM as a Service:
	
	  Q166765 SMS: Deploying Packages Successfully with the PCM Service
	
	Test application installations manually to verify there is no interaction
	required. Also, check with the software manufacturer to see if the installation
	is adaptive and may actually require interaction on some systems and not others.
	
	MORE INFORMATION
	================
	
	This problem can often be identified by examining the logs for the PCM
	Application or PCM Service. Following is an excerpt from a normal log of PCM as
	a Service launching a workstation command line:
	
	...
	Executing command line: F:\C1200008\nothing.EXE /S	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	No execution error detected.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	The process handle is #124	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	Ending LaunchScript..................	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	Package executed.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	Monitoring the job.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:44 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:45 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:47 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:50 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:52 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:55 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:49:57 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:00 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:02 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:05 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:07 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:10 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:12 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:15 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:17 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:20 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:22 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:25 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:27 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:30 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:32 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:35 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:37 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:40 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:42 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:45 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:47 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:50 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:52 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:55 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:50:57 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:00 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:02 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:05 PM	6E	
	Job still running............	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:07 PM	6E	
	Job completed.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:10 PM	6E	
	No SyncSysExit in effect, report status after completion.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:10 PM	6E	
	Reporting job status.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:10 PM	6E	
	Beginning ReportOnProcess...........	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:10 PM	6E	
	No error was detected while attempting to run the job.	SMS_PACKAGE_COMMAND_MANAGER_NT	1/12/99 4:51:10 PM	6E	
	...
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q173073 SMS: Package Is Currently Being Installed in the Background
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbPCM kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
