---
layout: page
title: "Q142634: Multiple Processes Are Able to Open the Same Winsock Port"
permalink: /kb/142/Q142634/
---

## Q142634: Multiple Processes Are Able to Open the Same Winsock Port

{% raw %}

	Article: Q142634
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,3.51,4.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51,4.0, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 3.51,4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Winsock application may appear to have stopped responding or it may not be
	able to send or receive data. All other services and applications, including
	other Winsock applications, continue to function without problems.
	
	CAUSE
	=====
	
	On systems running multiple Winsock applications that request the same specific
	port, repeated requests for a Winsock port that was in the process of being
	opened could result in two or more of the processes being assigned the port. The
	last process assigned would continue to function normally, while the other
	processes would fail to send or receive data over the port.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	As a temporary solution, an updated version of Afd.sys has been created to
	correct the problem. After applying the fix, the system must be restarted before
	the change will take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,3.51,4.0,4.0
	
	=============================================================================
	

{% endraw %}
