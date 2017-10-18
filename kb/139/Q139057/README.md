---
layout: page
title: "Q139057: NET STOP WINS Fails to Stop WINS Service"
permalink: kb/139/Q139057/
---

## Q139057: NET STOP WINS Fails to Stop WINS Service

	Article: Q139057
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Occasionally, stopping the Windows Internet Name Service (Wins) Service hangs
	with a "Stop Pending" status. This occurs when typing NET STOP WINS or when
	using the Windows NT Scheduling service (AT) to stop WINS. The result is that
	the service fails to shut down as requested. While in this state the following
	condition exists:
	
	- NET START WINS command (from an MS-DOS Command Prompt) returns the message:
	
	  The requested service has already been started. More help is available by
	  typing NET HELPMSG 2182.
	
	  NET HELPMSG 2182 displays the following: The requested service has already
	  been started.
	
	- NET STOP WINS command (from an MS-DOS Command Prompt returns the message:
	
	  The service could not be controlled in its present state. More help is
	  available by typing NET HELPMSG 2189.
	
	  NET HELPMSG 2189 displays the following: The service could not be controlled
	  in its present state.
	
	  NOTE: Similar results are returned by using, "SRVMGR \\<server_name>"
	  and then selecting Services. Attempting to start the WINS service returns
	  error 2182. The option to stop the WINS Service is not available (grayed
	  out).
	
	CAUSE
	=====
	
	The WINS service shutdown is waiting for the return of one or more outstanding
	threads. This results in a continuous wait because the service cannot currently
	accept requests. For example, if the service is just starting, it cannot process
	requests until it is fully started.
	
	WORKAROUND
	==========
	
	Try the operation again in a minute or two. If this problem persists, the
	service may be stuck in a partially running state. Contact technical support. Be
	prepared to give the name of the service and other information about the system,
	such as the services and applications that were running, and the type and amount
	of network activity on the computer at the time of the problem.
	
	RESOLUTION
	==========
	
	Microsoft has corrected the problem and modified the files, WINS.EXE and
	WINSEVNT.DLL in the latest Service Pack for Windows NT version 3.51.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack and
	Windows NT 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
