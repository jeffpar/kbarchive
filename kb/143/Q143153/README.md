---
layout: page
title: "Q143153: Event ID 8003, 8009 and 8019 Appear If Subnet Mask Incorrect"
permalink: /kb/143/Q143153/
---

## Q143153: Event ID 8003, 8009 and 8019 Appear If Subnet Mask Incorrect

	Article: Q143153
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT primary domain controller (PDC) and a Windows NT client computer
	reside on the same physical subnet and the same domain. The client computer can
	connect to a network share on the PDC. In the Windows NT PDC, the following
	system event appears in Event Viewer:
	
	  Event ID: 8003
	  Description: The master browser has received a server announcement from the
	  computer <Windows NT client> that believes that it is the master
	  browser for the domain on transport <NetBT>. The master browser is
	  stopping or an election is being forced.
	
	In the Windows NT client computer, the following system events appear in Event
	Viewer:
	
	  Event ID: 8009
	  Description: The browser was unable to promote itself to master browser. The
	  computer that currently believes it is the master browser is <PDC>.
	
	  Event ID: 8019
	  Description: The browser was unable to promote itself to master browser. The
	  browser will continue to attempt to promote itself to the master browser, but
	  will no longer log any events in Event Viewer.
	
	CAUSE
	=====
	
	This problem occurs if the subnet mask of the Windows NT client computer is
	incorrect or different from the PDC. The client computer attempts to promote
	itself to the master browser of the subnet and fails.
	
	RESOLUTION
	==========
	
	To correct this problem, change the TCP/IP protocol configuration to the correct
	subnet mask.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
