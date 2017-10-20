---
layout: page
title: "Q264697: SMSINST: Create Service Script Action Doesn't Grant Nec. Right"
permalink: /kb/264/Q264697/
---

## Q264697: SMSINST: Create Service Script Action Doesn't Grant Nec. Right

{% raw %}

	Article: Q264697
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 smsinst
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using the script action, Create Service, in SMS Installer to install a
	service to run under a specific user account, the service is unable to start,
	and the following two errors are generated in the application event log:
	
	  Event ID: 7013
	  Source: Service Control Manager
	  Description: Logon attempt with current password failed with the following
	  error:
	  Logon failure: the user has not been granted the requested logon type at this
	  computer.
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: The ServiceName service failed to start due to the following
	  error:
	  The service did not start due to a logon failure.
	
	CAUSE
	=====
	
	The user account specified in the Login Username box for the Create Service
	script action does not have the "Log on as a service" right.
	
	WORKAROUND
	==========
	
	To grant the "Log on as a service" right to the account being used to start the
	service, follow the appropriate method:
	
	Windows NT 4.0
	--------------
	
	Open User Manager. On the Polices menu, click User Rights, click to select the
	Show Advanced User Rights check box, and then grant the service account in
	question the "Log on as a service" right.
	
	Windows 2000
	------------
	
	Use the steps provided in the "How to Configure User Rights" section of the
	following article in the Microsoft Knowledge Base:
	
	  Q259733 How to Troubleshoot Service Startup Permissions
	
	MORE INFORMATION
	================
	
	You can automate the task of granting the service account the "Log on as a
	service" right by using the Microsoft Windows NT Resource Kit Utility
	Ntrights.exe in combination with the SMS Installer Execute Program script
	action. Use this utility to assign the service account the following right:
	
	  SeServiceLogonRight
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
