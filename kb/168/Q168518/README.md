---
layout: page
title: "Q168518: SMS: Troubleshooting SMS Windows NT Client Services Installation"
permalink: /kb/168/Q168518/
---

## Q168518: SMS: Troubleshooting SMS Windows NT Client Services Installation

{% raw %}

	Article: Q168518
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsetup kbConfig smssetup smsconfigkbfaq
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Systems Management Server 1.2 client on a computer running
	Windows NT, Systems Management Server does not configure the following as
	Microsoft Windows NT services on the client:
	
	- Systems Management Server Remote Control Agent
	
	- Systems Management Server Inventory Agent
	
	- SNMP Event to Trap Translator
	
	CAUSE
	=====
	
	If you are running into this problem, the following are some things to Check to
	help you troubleshoot and resolve the issue.
	
	There Is No Admin$ Share
	------------------------
	
	The Client Configuration Manager service on the Systems Management Server site
	server computer connects to the Admin$ share of a client computer running
	Windows NT to install the Systems Management Server Remote Control Agent and
	Client Inventory Agent services. If this share is not available, these services
	will not be installed and the Client Configuration Manager will log the
	following error in the Clicfg.log file:
	
	  ERROR: The SMS service account does not have administrative rights on machine
	  "<client computer running Windows NT>" for request "YAP00001".
	
	If this is the problem, add the share back, then move the .ccr file from the
	Logon.srv\Ccr.box\Retry directory to the Logon.srv\Ccr.box directory. Doing this
	forces the Client Configuration Manager service to try processing the .ccr file
	again.
	
	For additional information about SMS policies, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q158292 SMS: Using Policies May Cause SMS Setup to Fail
	
	  Q156365 Hidden Shares Are No Longer Available After Using System Policy
	
	Administrator Privileges
	------------------------
	
	The Systems Management Server Client Configuration Manager service on the Systems
	Management Server site server installs the client services for Win32 computers.
	Ensure that the Windows NT Server account used by the Systems Management Server
	services has Administrator privileges on the Windows NT client computer.
	
	Under normal circumstances, this will not be a problem. When a Windows NT system
	joins a domain, the Domain Admins group for the domain is added to the local
	Administrators group of the Windows NT system. If the Windows NT system is a
	member of a domain that does not contain the Systems Management Server service
	account, this could be the cause of the problem. In this situation, the best
	solution is to create a duplicate of the Systems Management Server service
	account in the domain and make it a member of the Domain Admins group.
	
	If the Windows NT system is a member of a workgroup, a local account must be
	created on the workstation with the same name and password as the Systems
	Management Server service account, and it must be a member of the local
	Administrators group.
	
	After the account problems are resolved, synchronize the domain and move the .ccr
	file from the Logon.srv\Ccr.box\retry directory to the Logon.srv\Ccr.box
	directory. Doing this forces the Client Configuration Manager service to try
	processing the .ccr file again.
	
	Permissions
	-----------
	
	Check the permissions set on the following registry keys on the Systems
	Management Server client computer:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client Services
	
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services
	
	Client Configuration manager tries to add registry entries under these keys.
	
	If the permissions are improperly set, fix the permissions problem, and then move
	the .ccr file from the Logon.srv\Ccr.box\retry directory to the
	Logon.srv\Ccr.box directory. Doing this forces the Client Configuration Manager
	service to try processing the .ccr file again.
	
	NetBIOS Name Resolution
	-----------------------
	
	Client Configuration Manager uses the machine name to attempt a remote connection
	to the target workstation to install the appropriate client side services. If
	there is a problem with name resolution for this client, there will be error 53
	occurences in the clicfg.log on the logon server. After solving name resolution
	problem(s), move the .ccr file from the Logon.srv\Ccr.box\retry directory to the
	Logon.srv\Ccr.box directory. Doing this forces the Client Configuration Manager
	service to try processing the .ccr file again.
	
	Wait in Case of Pending .Ccr Files
	----------------------------------
	
	If you have many new 32-bit Systems Management Server clients whose logon script
	was recently modified to install Systems Management Server, you may see a delay
	as the Client Configuration Manager must process all the .ccr files in the
	Logon.srv\Ccr.box directory. Check this directory to see if there are many
	pending .ccr files waiting to be processed by the Client Configuration Manager
	service.
	
	Wait for All the Files to Be Copied Before Restarting the Client
	----------------------------------------------------------------
	
	A fairly common mistake when installing the Systems Management Server Client
	services is clicking too soon on the "Restart the machine..." dialog box before
	the files are completely installed on the client. You may have restarted the
	computer as soon as you saw this dialog box, and not waited for the files to be
	completely copied, or for the percentage counter to go all the way up to 100
	percent.
	
	Use Windows NT 3.51 or Later
	----------------------------
	
	The Remote Control Agent service requires Windows NT version 3.51 or later. If
	the computer is running an earlier version of the Windows NT operating system,
	the Systems Management Server Client Setup will not install this component.
	
	Other Troubleshooting Tips
	--------------------------
	
	- Try moving the .ccr file from the Logon.srv\Ccr.box\Retry directory to the
	  Logon.srv\Ccr.box directory. Doing this forces the Client Configuration
	  Manager service to try processing the .ccr file again. If you have many .ccr
	  files in the Logon.srv\Ccr.box\Retry directory, try restarting the Client
	  Configuration Manager service on the Systems Management Server site server,
	  and it will try to process all the .ccr files in this directory.
	
	- Enable the SNMP registry key. If SNMP is installed after the Systems
	  Management Server client services are installed, you may need to manually set
	  the TranslatorEnabled value in the
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SNMP_EVENTS\EventLog registry key. This
	  value is created by SNMP Setup, and is set to Yes by the CliNT program the
	  next time the user logs on or runs the Runsms.bat file. Ensure that this
	  value is set to Yes so that the event to SNMP trap translation will occur.
	
	- Check the Clicfg.log file on the client's Systems Management Server logon
	  server for any errors.
	
	MORE INFORMATION
	================
	
	How Systems Management Server Client Services Are Installed
	-----------------------------------------------------------
	
	If any components need to be installed, upgraded or removed, Systems Management
	Server Client Setup creates a client configuration request file named
	<Sms_id>.ccr, where <Sms_id> is the Systems Management Server Unique
	ID for the computer requesting a configuration change. This file is located on
	the current Systems Management Server logon server, in the Logon.srv\Ccr.box
	directory.
	
	If the Systems Management Server logon server is a server running LAN Manager or
	LAN Server, the Maintenance Manager periodically collects the .ccr files from
	the Logon.srv\Ccr.box directory of the Systems Management Server logon server,
	and moves them to the Logon.srv\Ccr.box directory of the site server.
	
	The Client Configuration Manager is available only on Systems Management Server
	logon servers and site servers running Windows NT Server. This means that the
	Maintenance Manager must move the .ccr files on servers running LAN Manager and
	LAN Server to the site server for processing.
	
	At the Systems Management Server logon server (or the site server if you are
	using LAN Manager or LAN Server), the Client Configuration Manager has a CCR
	processing thread that waits for and processes .ccr files in the
	Logon.srv\Ccr.box directory.
	
	The CCR processing thread reads the .ccr file, connects to the target client
	computer's registry, checks whether it has access rights to the computer and its
	registry (that is, whether the Systems Management Server service account has
	access). It reads the registry and performs the required change to install,
	configure, or remove the Systems Management Server client services. It modifies
	the appropriate values in the Client Services key to reflect the new
	configuration.
	
	If the CCR processing thread completes the configuration requested by a .ccr
	file, it deletes the .ccr file. If it cannot complete the configuration
	requested by a .ccr file, it performs one of the following actions:
	
	- If a .ccr file for the same target computer already exists in the
	  Logon.srv\Ccr.box\Retry directory, the thread updates the .ccr file in the
	  Retry directory with the values for the .ccr file in the Ccr.box directory.
	  After updating the .ccr file in the Retry directory, the thread deletes the
	  .ccr file in the Ccr.box directory
	
	- If a .ccr file for the same target computer does not exist in the Retry
	  directory, the thread moves the .ccr file to that directory.
	
	If a configuration change performed by Client Configuration Manager requires the
	client computer to be restarted, the Client Monitor program running on the
	client displays a message stating that a restart is required to finish the
	configuration of the Systems Management Server client components. The user can
	choose to restart or not restart.
	
	Additional query words: prodsms CCM sms
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsetup kbConfig smssetup smsconfig kbfaq
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
