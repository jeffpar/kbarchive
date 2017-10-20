---
layout: page
title: "Q165786: SMS: Program Group Control Stops Responding on Win16 Clients"
permalink: /kb/165/Q165786/
---

## Q165786: SMS: Program Group Control Stops Responding on Win16 Clients

{% raw %}

	Article: Q165786
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program Group Control (PGC) stops responding on client computers running Windows
	or Windows for Workgroups, and displays the following message:
	
	  Program Group Control
	  Please wait for configuration to complete
	  Checking current Configuration
	
	The client does not recover until the user stops Appctl16.exe by depressing
	CTRL+ALT+DEL and ending the task.
	
	CAUSE
	=====
	
	Program Group Control is incorrectly returning to query User-Group membership
	from the domain under which the computer was last verified by a Systems
	Management Server logon script, rather than querying the domain under which the
	user is currently logged on. The following are two examples of how this
	situation may occur:
	
	- Logging into a domain without any Systems Management Server logon servers
	  from a Systems Management Server client that had previously been inventoried
	  into a Systems Management Server domain through the use of logon scripts (for
	  example, running Smsls.bat from the logon script).
	
	- Logging into a Systems Management Server domain without running a logon
	  script from a Systems Management Server client that had previously been
	  inventoried into a different Systems Management Server domain through the use
	  of logon scripts (for example, running Smsls.bat from the logon script.
	
	The net effect of not running a Systems Management Server logon script is that
	Setls16.exe does not run, and consequently does not update the ValidatingServer=
	entry in the [SMSLSIni] section of the Sms.ini file with the current logon
	server. As a result, Program Group Control continually uses the old
	ValidatingServer= entry to determine which domain controller to query for
	User-Group membership.
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the entry for the server listed in the
	ValidatingServer section of the Sms.ini file. When this entry is left blank,
	Appctl16.exe determines the actual current logon server and proceeds to only
	query this server for User-Group membership.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
