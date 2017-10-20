---
layout: page
title: "Q287626: License Metering Client Tries to Log On to Server Multiple Times"
permalink: /kb/287/Q287626/
---

## Q287626: License Metering Client Tries to Log On to Server Multiple Times

{% raw %}

	Article: Q287626
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbsmsMeter kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a client account is locked out, multiple logon failures in the Microsoft
	Windows NT Security Event log are registered on license metering servers.
	
	CAUSE
	=====
	
	The license metering client uses the currently logged on user account to
	authenticate and connect to the license metering server to copy log files. If
	that user's account is disabled, locked out, or otherwise invalid, the license
	metering client attempts hundreds of logon attempts on the license metering
	server, and this creates very large security log files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The retry algorithm can be changed (through the addition of two registry keys) to
	specify the number of retries and the time limit between retries. You would need
	to make this setting on each of the client computers, and you could do so by
	using an SMS Installer script. To manually add these registry keys, use the
	following steps on each client:
	
	1. Use Registry Editor (Regedt32.exe) to locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\License
	  Metering\Properties
	
	2. Add the number of times to retry a logon by adding the following new value to
	  the preceding registry key:
	
	  Value name: PipeRetries
	  Data type: REG_DWORD
	  Data: Type the number of times to retry.
	
	3. Add the time between retries (in milliseconds) by adding the following new
	  value to the preceding registry key:
	
	  Value name: PipeRetryInterval
	  Data type: REG_DWORD
	  Data: Type the time between retries in milliseconds.
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	If you view the License Metering Client log, you may see repeated entries that
	are similar to the following entries:
	
	  Requesting use of: "CLOCK.EXE" ("CLOCK.EXE"), version: "4.00"
	  FAILED - Severity:0 Error:2 Failed to connect to the pipe-service on \\HANSR1.
	  Check the service is running.
	  +ON +: Forcing gbConnectedOK = FALSE on failed fnTaskStarted.
	  fnCheckTasksStatus FAILED
	  +ON +: Forcing gbConnectedOK = FALSE on failed fnCheckTasksStatus.
	  WARNING: No user or lost contact with DB, attempting to re-connect ...
	  Freeing (and re-requesting) all workstation tasks ...
	  Attempting disconnect from DB first ...
	  Could not attempt to disconnect from DB due to lost connection.
	  Could not attempt to de-initialize due to lost connection.
	  OK
	  +ON +: Connecting (0/5). Verifying connection to server DB path ...
	  +ON +: Server path = "\\workstation name\LICMTR" (-1) ...
	  +ON +: IsFileReachable(): Doing a CreateFile(\\workstation
	  name\LICMTR\dbup.ini)
	  +ON +: IsFileReachable(): Done.
	  +ON +: Server is unreachable.
	  +ON +: Forcing gbConnectedOK = FALSE on failed IsFileReachable().
	  +ON +: Will try again in 60 secs.
	  +ON +: TestStayOnline FAILED. Will retry 4 more times out of 5.
	
	If you view the Windows NT Event log, events that are similar to the following
	events may be logged:
	
	  Event ID: 681
	  Source: Security
	  Category: Account Logon
	  Type: Failure
	  User: NT AUTHORITY\SYSTEM
	  Description:
	
	  The logon to account: account name
	  by: MICROSOFT_AUTHENTICATION_PACKAGE_V1_0
	  from workstation: \\workstation name
	  failed. The error code was: 3221225586
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbsmsMeter kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
