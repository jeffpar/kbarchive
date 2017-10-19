---
layout: page
title: "Q182593: SMS Err: &quot;Unable to Initialize NetBIOS Protocol&quot; on Win95 Client"
permalink: /kb/182/Q182593/
---

## Q182593: SMS Err: &quot;Unable to Initialize NetBIOS Protocol&quot; on Win95 Client

	Article: Q182593
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot kbsmsUtil smsremtshoot smsutil kbRemoteProg
	Last Modified: 31-JUL-2001
	
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
	
	When starting the Remote Control Agent (Wuser.exe), a Windows 95 client may
	receive the following error message:
	
	  Unable to initialize NetBIOS protocol.
	
	WORKAROUND
	==========
	
	To work around this problem, try the following (each option is described in more
	detail in the MORE INFORMATION section of this article):
	
	- Make sure a default protocol is selected.
	
	- Reinstall the client protocol.
	
	- If the client is coming in over RAS, remove TCP/IP or IPX.
	
	- If the Windows 95 client is using RAS (Dial-Up Adapter), obtain an updated
	  Rasapi32.dll file.
	
	- If the client computer running Windows 95 is being validated by a Novell
	  NetWare server, modify the registry.
	
	MORE INFORMATION
	================
	
	Ensuring That a Default Protocol Is Selected
	--------------------------------------------
	
	From the client computer running Windows 95, perform the following steps:
	
	1. In Control Panel, double-click Network.
	
	2. On the Configuration tab, select the protocol from the list of installed
	  network components (for example, select TCP/IP) and then click Properties.
	
	3. On the Advanced tab, select the "Set this protocol to be the default
	  protocol" check box and then click OK to close all dialog boxes.
	
	4. Restart the client computer.
	
	Reinstalling the Client Protocol
	--------------------------------
	
	Only the IPX/SPX protocol does not have a NetBIOS interface by default. If
	NetBEUI or TCP/IP is installed, the NetBIOS interface should be installed
	correctly. If the client computer is receiving the error message described
	above, reinstall NetBEUI and/or TCP/IP.
	
	Removing TCP/IP or IPX
	----------------------
	
	On client computers coming in over RAS, the Remote Control Agent will load
	correctly the first time. However, after closing the Remote Control Agent and
	remaining in the same RAS session, if the user at the client computer running
	Windows 95 attempts to reload the Remote Control Agent again, it fails,
	displaying the "Unable to initialize NetBIOS protocol" error message.
	
	This failure will continue until the client computer running Windows 95 is
	restarted. This behavior occurs on client computers with TCP/IP and IPX loaded,
	with NetBIOS enabled over IPX.
	
	In this case, the problem is that Remote Control is not supported over RAS.
	However, if either TCP/IP or IPX is removed, you may be able to prevent the
	error message from occurring, without having to restart the computer.
	
	Obtaining an Updated Rasapi32.dll File
	--------------------------------------
	
	Windows 95 RAS clients should obtain the updated Rasapi32.dll file. The problem
	in this case is that the TCP/IP protocol (specifically, Vnbt.386) does not
	completely bind to the redirector (Vredir). For more information on the updated
	Rasapi32.dll file and how to obtain it, see the following article in the
	Microsoft Knowledge Base:
	
	  Q154434 Err Msg: No Domain Controller Was Available to Validate...
	
	Modifying the Registry If the Client Is Being Validated by a NetWare Server
	---------------------------------------------------------------------------
	
	If the client computers running Windows 95 are being validated by NetWare
	servers, the Domain.ini file will be configured to use IPX for the Remote
	Control protocol. In this case, you should modify the registry of the Systems
	Management Server site server. To do this, perform the steps below.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start RegEdt32.exe.
	
	2. Navigate to the following key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\SMS\SITES\<Site_code>\DOMAINS
	     \<Domain_name>\Default RC Protocol
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Set the Default RC Protocol to one of the following:
	
	   - IP
	   - IPX
	   - NetBIOS
	
	  Use IP to set TCP/IP as the default Remote Control protocol.
	
	  NOTE: If you set the Default RC Protocol to NetBIOS, it will default to LANA0.
	  To specify a different LANA number, proceed to step 4 below.
	
	4. You can also specify a default LANA number by changing the following registry
	  key (you can set this value to any integer from 0 to 9, inclusive):
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\SMS\SITES\<Site_code>\DOMAINS
	     \<Domain_name>\RC Lana Number
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Additional query words: prodsms reboot rebooted Novel
	
	======================================================================
	Keywords          : kbtshoot kbsmsUtil smsremtshoot smsutil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
