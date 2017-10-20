---
layout: page
title: "Q173538: SMS: NetBIOS Reset Causes Windows 95 Remote Control To Fail"
permalink: /kb/173/Q173538/
---

## Q173538: SMS: NetBIOS Reset Causes Windows 95 Remote Control To Fail

{% raw %}

	Article: Q173538
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After establishing a remote control session with a Windows 95 client using NetBT
	(NetBIOS encapsulated in TCP/IP), the remote control session may terminate
	unexpectedly when an application is opened or closed.
	
	After the remote control session terminates, the Windows 95 client may lock up
	and receive a general protection (GP) fault. If the client stops responding
	(locks up), it may be necessary to turn off the system to restore
	functionality.
	
	Applications known to cause this problem:
	
	- Microsoft Exchange Client version 4.0
	
	- Microsoft ActiveMovie 3.0 (add-on for Microsoft Internet Explorer)
	
	- Other custom applications that display embedded AVI animation as a normal
	  part of the application's execution
	
	CAUSE
	=====
	
	This problem is caused by an abnormal reset of the NetBIOS session by the
	NetBIOS interface on the Windows 95 client.
	
	
	WORKAROUND
	==========
	
	To avoid the problem, you can perform remote control over IP sockets instead of
	NetBT. This will allow the remote control session to function normally.
	
	To test IP sockets with a single Windows 95 client, do the following:
	
	1. Ensure that the Remote Control Agent is not running.
	
	2. Open the Sms.ini file located in the root of drive C.
	
	3. Change the Default Protocol statement located in the [Sight] section from
	  "NetBIOS" to "IP".
	
	4. Save the Sms.ini file and start the Remote Control Agent.
	
	A remote control session with this client will now occur over IP sockets.
	
	NOTE: If the client in the preceding section runs the Systems Management Server
	logon script (Smsls.bat) or the Runsms.bat file, the setting in the Sms.ini file
	will revert to NetBIOS.
	
	To make all clients in this domain use IP sockets (except for Windows NT, they do
	this by default), you must make a registry change at the site server.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To make the registry change, use the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Sites\<Sitecode>
	\Domains\<Domain>
	
	3. Set the "Default RC Protocol" (REG_SZ) value to "IP".
	
	This forces all Windows 3.1, Windows for Workgroups, and Windows 95 clients that
	appear in this domain, to use IP sockets as the default remote control protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms GPF
	
	======================================================================
	Keywords          : kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
