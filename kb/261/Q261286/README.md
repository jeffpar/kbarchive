---
layout: page
title: "Q261286: SMS: &quot;Could Not Connect to Registry Key&quot; Message in SQL Monitor"
permalink: /kb/261/Q261286/
---

## Q261286: SMS: &quot;Could Not Connect to Registry Key&quot; Message in SQL Monitor

{% raw %}

	Article: Q261286
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool kbConfig kbDatabase kbMMC kbServer kbsms200 kbAdvertisement k
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server (SMS) site server resides on a Windows
	2000-based computer, changes to the site such as site control changes, new
	packages and any component that needs access to the SQL database may operate
	slowly or may not be able to update properly. When this occurs, there are no
	status messages or Event Viewer updates to alert an administrator that this
	problem is being encountered.
	
	The Smsdbmon.log file may contain the following entry that indicates that the SQL
	Monitor process is unable to connect to the Registry:
	
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server SMSServer04,
	  sleeping 60 seconds. SMS_SQL_MONITOR 4/29/2000 11:51:03 PM
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server SMSServer04,
	  sleeping 60 seconds. SMS_SQL_MONITOR 4/29/2000 11:52:05 PM
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server SMSServer04,
	  sleeping 60 seconds.
	
	Also, the Smsexec.log file may contain the following entry:
	
	  Initializing the status message reporting system... SMS_EXECUTIVE 4/29/2000
	  11:50:49 PM 1756 (0x6DC)
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server SMSServer04,
	  sleeping 60 seconds. SMS_EXECUTIVE 4/29/2000 11:50:52 PM
	  ERROR: Could not connect to registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS on site server SMSServer04,
	  sleeping 60 seconds. SMS_EXECUTIVE 4/29/2000 11:51:54 PM
	
	Locally, if you log on to the SMS Site server with the SMS service account, you
	will be able to review the SMS key in the registry. However, if you are
	connecting to the registry of the Site Server from a remote computer, you may
	receive a "registry editor can not access registry" error message.
	
	CAUSE
	=====
	
	This issue can occur if the Remote Registry service has been set to Disabled. If
	the Remote Registry service has been set to Disabled, SMS processes may stop
	working. This can occur under the following conditions:
	
	- The Remote Registry service policy is set to "Define this Policy setting,"
	  and it is set to Disabled.
	
	- A domain controller is restarted.
	
	NOTE: On a Windows 2000-based server, check the Remote Registry service to verify
	that it is running. If it is not running, check the domain policy to determine
	if this policy has been implemented. To check the Remote Registry service
	policy:
	
	1. Start the Microsoft Management Console tool, and add the Default Domain
	  Policy snap-in if it is not already installed.
	
	2. Double-click the following items to open them:
	
	  Default Domain Policy
	  Windows Settings
	  Security Settings
	  System Services
	  Remote Registry Service
	
	If the Remote Registry service policy is set to "Define this Policy setting," and
	it is set to Disabled, when a domain controller is restarted the Remote Registry
	service will not start. Instead, the Remote Registry service is set to Disabled,
	and SMS processes may stop working.
	
	WORKAROUND
	==========
	
	To work around this issue, start the Remote Registry service manually to restore
	functionality. If there was a policy that had caused the service to become
	disabled, this policy should be modified to allow this service to start when the
	computer is restarted. Note that if you start the Remote Registry service
	manually, it should resolve the issue. However, the next time the computer is
	restarted, it would adhere to that policy, and this may cause the service to
	return to a disabled setting.
	
	Additional query words: prodsms GPO cannot
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool kbConfig kbDatabase kbMMC kbServer kbsms200 kbAdvertisement kbPackage kbsmsAdmin kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
