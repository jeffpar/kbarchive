---
layout: page
title: "Q273668: Event 1339 Messages Are Logged When You Use Host Security"
permalink: kb/273/Q273668/
---

## Q273668: Event 1339 Messages Are Logged When You Use Host Security

	Article: Q273668
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A system that is running the SNA Host Account Cache (User Credential Database)
	service that is included with Host Integration Server (HIS) 2000 may log the
	following event in the Application Event Log:
	
	  Event ID: 1339
	  Source: SNA Host Security
	  Description: The request database access is denied for the client account:
	  NTAUTHORITY\\SYSTEM
	
	NOTE: The event description may only contain two backslashes (\\) for the client
	account.
	
	In this case, the Event 1339 is benign and does not cause any problems with host
	security functionality.
	
	CAUSE
	=====
	
	The Windows Management Instrumentation (WinMgmt.exe) service causes the SNA
	Manage Agent (MngAgent.exe) service to send a UDI_GET_VALID_DOMS_NT request to
	the SNA Host Account Cache database under some circumstances.
	
	WinMgmt.exe runs under the local system account and this account cannot be
	authenticated by the Host Account Cache database. The failure to authenticate
	this account results in the Event 1339 being logged in the Application Event
	Log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	If HIS 2000 and the HIS 2000 clients are configured to use Active Directory, HIS
	2000 clients will use WMI calls to retrieve specific configuration information
	from HIS 2000 servers. For example, a client that is running a 3270 emulator
	will make a WMI call to determine what 3270 LUs are assigned to the user who is
	making the request.
	
	If host security is being used, these WMI calls may result in a
	UDI_GET_VALID_DOMS_NT call being sent to the Host Account Cache database by
	MngAgent.exe on the behalf of WinMgmt.exe.
	
	The following are two scenarios that appear to generate the Event 1339 messages:
	
	- Running the 3270 client.
	
	- Running the 5250 client and then on the Session menu, clicking Session
	  Configuration to select a remote APPC LU alias.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
