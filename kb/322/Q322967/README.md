---
layout: page
title: "Q322967: SMS: Client Software Distribution Component May Not Be Upgraded"
permalink: /kb/322/Q322967/
---

## Q322967: SMS: Client Software Distribution Component May Not Be Upgraded

{% raw %}

	Article: Q322967
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply a Systems Management Server (SMS) 2.0 service pack or a
	client-side software distribution hotfix, clients may not upgrade their software
	distribution client component. The symptoms of this problem may include:
	
	- The Software Distribution component in the SMS Control Panel tool shows a
	  status of "Repair Pending."
	
	- The client's Ccim32.log file in the %Windir%\MS\SMS\Logs folder contains the
	  following entries:
	
	  Component "Software Distribution" needs to be upgraded
	  OS Version has changed since the last install of component "Software
	  Distribution"
	  Component "Software Distribution" install/verify/upgrade last done at 08:42:31
	  November 21, 2001
	  Client core file version (from cliver.exe) is 2.00.1493.4006
	  Warning: Inbox manager token file found
	  (\\SERVER01\CAP_SO1\clicomp.box\SWDist\inboxlck.tok), waiting 10 seconds for
	  directory refresh to finish...
	  Warning: Directory still in use by inbox manager; skipping operations
	  Warning - could not find a site CAP with uplevel version of component Software
	  Distribution
	
	- The server's Inboxmgr.log file in the \SMS\Logs folder contains the following
	  entry:
	
	  Failed to copy X:\SMS\inboxes\clicomp.src\SWDist\i386\swdist32.exe to
	  X:\CAP_SO1\clicomp.box\SWDist\i386\swdist32.exe because of sharing violation.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	- Stop the SMS_INBOX_MANAGER component on the site server by using SMS Service
	  Manager.
	
	- Use Computer Management or Server Manager to close all open file connections
	  on \CAP_<xxx>\Clicomp.box\SWDist. Repeat this step for all client
	  access points (CAPs) that exhibit the issue.
	
	- Start the SMS_INBOX_MANAGER component on the site server. Verify that the
	  component copies the updated Swdist32.exe file. You can see this in the
	  Inboxmgr.log file:
	
	  Copying X:\SMS\inboxes\clicomp.src\SWDist\i386\swdist32.exe to
	  X:\CAP_S01\clicomp.box\SWDist\i386\swdist32.exe, OK
	
	Note that the Swdist32.exe file in the CAP_S01\Clicomp.box\SWDist\I386 folder on
	the CAP should have the same date, size, and version number as the Swdist32.exe
	file in the SMS\Inboxes\Clicomp.src\SWDist\I386 folder on the site server.
	
	MORE INFORMATION
	================
	
	For more information about deploying SMS service packs, including information
	about how to determine if client components are upgraded successfully, visit the
	following Microsoft Web site:
	
	  Deploying SMS Service Packs
	  (http://www.microsoft.com/smserver/techinfo/deployment/20/deploysms/servicepacks.asp)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
