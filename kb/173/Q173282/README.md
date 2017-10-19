---
layout: page
title: "Q173282: SMS: 'Stack Fault' Error Occurs with PCM Service"
permalink: /kb/173/Q173282/
---

## Q173282: SMS: 'Stack Fault' Error Occurs with PCM Service

	Article: Q173282
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kberrmsg kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Package Command Manager (PCM) service to install an application
	on a Windows NT Server version 4.0 system, an error may occur and you may
	receive the following message:
	
	  Application Error caused a stack fault in module UNKNOWN at address
	  00c7:4394f Will Close.
	
	CAUSE
	=====
	
	The error occurs because of a problem with the Windows on Windows (WOW)
	subsystem of Windows NT Server version 4.0. For additional information about
	this problem, please see the following article in the Microsoft Knowledge Base:
	
	  Q156735 WOW Applications Stack Fault When Launched by a Service
	
	WORKAROUND
	==========
	
	If you receive this error when you run an SMS Installer executable on the
	Windows NT Server system, you can avoid this problem by recompiling the SMS
	Installer application with the "Destination Platforms" setting configured for
	"True Win32".
	
	1. From the Installation Expert view, select Advanced Configuration, and then
	  double-click the Global option.
	
	  Or from the Script Editor view, click Edit, and then Installation Properties.
	
	2. Select the Global tab (if it isn't selected), and change the "Destination
	  Platforms" setting at the bottom of the window to "Windows 95 and NT (True
	  Win32)".
	
	3. Recompile the SMS Installer executable.
	
	Additional query words: smsinst pcm package gpf
	
	======================================================================
	Keywords          : kberrmsg kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
