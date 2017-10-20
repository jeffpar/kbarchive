---
layout: page
title: "Q165574: SMS: &quot;The SNMP Agent...Is Either Not Installed or Not Running&quot;"
permalink: /kb/165/Q165574/
---

## Q165574: SMS: &quot;The SNMP Agent...Is Either Not Installed or Not Running&quot;

{% raw %}

	Article: Q165574
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSNMP smssnmp
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the event to trap translator, you may receive the following error
	message, even if the SNMP service(s) is started:
	
	  The SNMP agent on this machine is either not installed or not running. The
	  configuration of the event to trap translator can be viewed and modified.
	
	If you attempt to run the event to trap translator before installing SNMP, the
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNMP_EVENTS registry key is built, but the
	TranslatorEnabled subkey is set to No. This field is not modified when you
	install and start SNMP, which causes the error.
	
	MORE INFORMATION
	================
	
	To correct this error, use either of the following methods. If the first method
	does not work, try the second method.
	
	- Using Registry Editor, change the value of the following registry value to
	  Yes:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNMP_EVENTS\EventLog\TranslatorEnabled
	
	-or-
	
	- Verify that the SNMP service is installed and started. Remove the SNMP_EVENTS
	  key, and run Runsms or Smsls, and the Event to Trap translator again. The
	  registry key will be rebuilt with the correct information.
	
	If you use the second method, you must:
	
	1. Delete the key.
	
	2. Run Smsls.bat or Runsms.bat again.
	
	3. Run the SMS Administrator Event to Trap translator for that client.
	
	4. Verify that the translatorEnabled subkey is set to Yes.
	
	5. Generate an event (use Smsgenie, a Microsoft BackOffice Resource Kit utility)
	  to test.
	
	NOTE: The user who is attempting to change the configuration of the Event to trap
	translator must have permissions to the remote registry to do so.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbSNMP smssnmp 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
