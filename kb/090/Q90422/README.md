---
layout: page
title: "Q90422: WFWG Err Msg: Application Has Violated System Integrity"
permalink: /kb/090/Q90422/
---

## Q90422: WFWG Err Msg: Application Has Violated System Integrity

{% raw %}

	Article: Q90422
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups allows approximately 30 seconds for the processing of a
	Microsoft LAN Manager Logon Script. If the Logon Script takes longer than 30
	seconds to process, you may receive the following error:
	
	  This Application has Violated System Integrity.
	
	WORKAROUND
	==========
	
	To resolve this problem, shorten the LAN Manager Logon Script so that it
	executes in the allotted 30-second limit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11.
	
	MORE INFORMATION
	================
	
	Microsoft Windows for Workgroups supports interconnectivity with Microsoft LAN
	Manager servers. Some Microsoft LAN Manager installations have the ability to
	process a Logon Script when you log on. This script is essentially a batch file
	that executes and allows you to restore network connections, synchronize the
	local system clock with the remote server, and so on.
	
	If the Logon Script is complex enough to exceed the 30-second time limit, or sits
	idle while expecting input, the above error message may result.
	
	If the LANMan Logon Script contains NET USE commands to restore network server or
	printer connections, it may be possible to shorten the script and eliminate the
	problem by having the Windows for Workgroups File Manager (or Print Manager)
	restore the connections instead.
	
	Additional query words: 3.10 3.11 inter connectivity inter-connectivity
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
