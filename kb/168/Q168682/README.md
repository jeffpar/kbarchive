---
layout: page
title: "Q168682: SMS: Usage of Sendcode.exe and Its Service Codes"
permalink: /kb/168/Q168682/
---

## Q168682: SMS: Usage of Sendcode.exe and Its Service Codes

{% raw %}

	Article: Q168682
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtool kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents the usage of Sendcode.exe, available on the Microsoft
	Systems Management Server 1.2 CD in the Support\Debug\<platform>
	directory. This tool is provided to assist in diagnosing Systems Management
	Server service problems.
	
	MORE INFORMATION
	================
	
	You can trigger the Systems Management Server site services to do a specific
	task by sending a service control code using the Sendcode.exe utility program.
	The syntax of the command is:
	
	     sendcode sms_service_name <svcode>
	
	For example, to trigger a normal watchdog cycle in SMS_SITE_CONFIG_MANAGER, run:
	
	     sendcode SMS_SITE_CONFIG_MANAGER 192
	
	The following service codes are accepted:
	
	     128 - Starts memory allocation tracking.
	     129 - Stops memory allocation tracking.
	     130 - Dumps all the memory allocation data to the Alerter.mem,
	           Appmgr.mem, Hman.mem, Scmanmem.log, Sched.mem, and Smsexec.mem
	           files in the root directory.
	     132 - Toggles the net pause support on and off.
	     192 - Initiates a normal watchdog cycle (verifies the current
	           installation, checks for new Systems Management Server logon
	           servers, restarts any stopped components, and so on).
	     193 - Initiates a watchdog cycle and writes a status (.ct2) file.
	     194 - Initiates a watchdog cycle but treats it as an upgrade. To be
	           most effective, shut down and restart the computer before issuing
	           this command.
	     195 - Initiates a watchdog cycle and writes a user group MIF file.
	     196 - Initiates a watchdog cycle and modifies logon scripts only if the
	           Automatically Configure Workstation Logon Scripts and Use All
	           Detected Servers options are enabled.
	
	
	The following table shows which Systems Management Server services support which
	codes:
	
	Code          Services that support the code
	--------------------------------------------
	
	128-130       SMS_EXECUTIVE, SMS_HIERARCHY_MANAGER, SMS_SITE_CONFIG_MANAGER
	132           all Systems Management Server site services
	192-196       SMS_SITE_CONFIG_MANAGER
	
	
	Additional query words: prodsms utility
	
	======================================================================
	Keywords          : kbtool kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
