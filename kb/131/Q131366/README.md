---
layout: page
title: "Q131366: Event Error 5712 with Status Access Denied"
permalink: /kb/131/Q131366/
---

## Q131366: Event Error 5712 with Status Access Denied

{% raw %}

	Article: Q131366
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows NT PDC (Primary Domain Controller) is rebooted, event 5712
	warnings appear in the event log, indicating that BDC's (Backup Domain
	Controller's) attempts to synchronize have failed. The Detail Description of the
	error log is:
	
	  The partial synchronization request from the server <BDC_server_name>
	  failed with the following error: Access is denied.
	
	The Detail Data of the error log is:
	
	  0000: c0000022
	
	NOTE: c0000022 is defined as Status_Access_Denied.
	
	CAUSE
	=====
	
	When the Netlogon service starts on the rebooted PDC, it sends a pulse to the
	BDC indicating that it needs to synchronize with the accounts databases on the
	PDC. The BDC responds with a partial synch request. However, a secure channel
	with the PDC is required to complete the request. Because the BDC had a secure
	channel with the PDC before the PDC was rebooted, it attempts to submit the
	partial synch request without establishing a new secure channel. The request
	fails with Access Denied. After receiving the Access Denied status from the PDC,
	the BDC requests a new secure channel and completes the partial synch request
	successfully.
	
	RESOLUTION
	==========
	
	Event 5712 messages due to Access Denied are common immediately after the reboot
	of a PDC. They are not necessarily harmful, and do not mean that the BDC is
	unable to synchronize with the PDC.
	
	As a test to see if the 5712 warning is important, force a synchronization with
	the PDC from the BDC and check the event log on the BDC. If the Netlogon
	messages in the BDC event log indicate that the synchronization attempt with the
	PDC was successful, then the warnings on the PDC can be ignored.
	
	NOTE: This article discusses a single cause of 5712 errors. If your BDC is unable
	to synchronize with the PDC when you force it to in Server Manager, then the
	Secure Channel account on the BDC may have an invalid password.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
