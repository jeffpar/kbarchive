---
layout: page
title: "Q214783: Iissync.exe Fails with Error Code 64"
permalink: /kb/214/Q214783/
---

## Q214783: Iissync.exe Fails with Error Code 64

{% raw %}

	Article: Q214783
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you replicate settings from one server to another (or a group of servers)
	using Iissync.exe, you may receive the following error message:
	
	  Error replicating to target computername: The specified network name is no
	  longer available.
	  Error code 64 (00000040)
	  At least one target computer was not replicated successfully.
	
	CAUSE
	=====
	
	This error message is usually caused when Iissync.exe runs more than once in a
	short period of time. There is a small delay (typically about five seconds or
	so) in which the Iissync process does not complete any request successfully.
	
	RESOLUTION
	==========
	
	If you need to run the Iissync.exe utility more than once, wait for a small
	period of time (about five to 30 seconds) before running the utility again.
	
	Note: If you are replicating settings to multiple servers, you do not need to run
	Iissync.exe more than once. You can replicate settings to all of the servers
	simultaneously. You can do this by following these steps:
	
	1. Open a command prompt (Cmd.exe).
	
	2. Navigate to the %SystemRoot%/System32/Inetsrv directory.
	
	3. Type "iissync server1 server2 server3" (without the quotation marks). Each
	  server that you replicate to should be separated by spaces.
	
	4. Press the Enter key.
	
	This should replicate all of the settings to all of the servers you specified.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
