---
layout: page
title: "Q149555: Winlogon &amp; PerfMon Rpc Too Busy or Access Violation"
permalink: /kb/149/Q149555/
---

## Q149555: Winlogon &amp; PerfMon Rpc Too Busy or Access Violation

{% raw %}

	Article: Q149555
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Winlogon may stop responding when Performance Monitor is operating locally or
	remotely against the server. This is a side effect of intermittent internal heap
	corruption. An empty blue domain list may appear on the logon screen.
	
	If a winlogon.exe access violation occurs, an updated Drwtsn32.log file will be
	placed in the %systemroot% directory and the system may stop with STOP message
	21a. The system will raise this exception if the security system stops
	completely.
	
	In some cases winlogon will continue to function for some time following the heap
	corruption and threads may begin to stop responding if the corruption doesn't
	result in an access violation. In this case, existing user sessions provided by
	the server via NET USE remain active and new sessions may be established.
	
	If services.exe threads are blocked due to Winlogon problems, the following
	messages may be returned to client requests involving the RPC services:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	  Error 1722: The RPC server is unavailable.
	  Error 1721: Not enough resources are available to complete this operation.
	
	Access to Winlogon resources such as the winreg pipe may also fail; in this case,
	error 1727 appears:
	
	  The remote procedure call failed and did not execute
	
	A protocol trace shows an RPC associate group command failure with the status
	error code:
	
	  0x1c010014: NCA_STATUS_SERVER_TOO_BUSY.
	
	CAUSE
	=====
	
	The Winlogon memory heap can become corrupted when Performance Monitor accesses
	information beyond the allocated heap boundary. Performance Monitor data is
	stored within the Winlogon heap. This very intermittent failure may result in
	various symptoms of Winlogon processing problems.
	
	RESOLUTION
	==========
	
	Advapi32.dll and Winlogon.exe have been updated to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
