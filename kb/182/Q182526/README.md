---
layout: page
title: "Q182526: DMOD Times Out If Client Doesn't Quickly Log on to WinNT Domain"
permalink: /kb/182/Q182526/
---

## Q182526: DMOD Times Out If Client Doesn't Quickly Log on to WinNT Domain

	Article: Q182526
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Remote Windows 95 clients who dial into the network to gain access to SNA Server
	(that is, via an IBM 8235) may get an error message saying
	
	  SnaBase not started
	
	when using the SNA 3270 or 5250 Applet, as well as third-party emulators. The
	error only occurs if the user does not log on to the Windows NT domain, when
	prompted for credentials, before the DMOD times out (default timeout is 60
	seconds).
	
	CAUSE
	=====
	
	When the 3270 or 5250 application is invoked on the client, SnaBase waits for
	the connection to SNA Server to activate. The DMOD (Snakrnl.dll) has a timeout
	value of 60 seconds by default. If SnaBase does not obtain a connection with SNA
	Server within 60 seconds, the DMOD times out, and the user receives an error
	message saying SnaBase was not started. The timeout was implemented to keep the
	application from waiting indefinitely for the connection between SnaBase and SNA
	Server to activate.
	
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To work around this problem, the following registry key can be modified (only on
	Windows 95 clients) to increase the time the DMOD waits for SnaBase to start:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\SNABase\Parameters
	Value=StartTimeOut REG_DWORD: (time in seconds)
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
