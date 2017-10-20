---
layout: page
title: "Q153719: How to Re-Sync PDC/BDC Trust After Event IDs 3210 and 7023"
permalink: /kb/153/Q153719/
---

## Q153719: How to Re-Sync PDC/BDC Trust After Event IDs 3210 and 7023

{% raw %}

	Article: Q153719
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Windows NT backup domain controller (BDC) has been offline for some
	time, it may fall out of synchronization with the primary domain controller
	(PDC). When you attempt to bring the BDC back online, you may get the following
	errors in the BDC's Event Viewer:
	
	  Event ID: 3210
	  Source: Netlogon
	  Type: Error
	  Description: Failed to authenticate with <computer name>, a Windows NT
	  domain controller for domain <domain name>.
	  Data word: c0000022
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Description: Netlogon service terminated with the following error
	  message: Access Denied.
	
	This is very likely to occur if a BDC is restored from a backup that is more than
	a few days old or if the BDC is offline for more than a few days.
	
	CAUSE
	=====
	
	Domain controllers maintain a password-protected channel between each other.
	When a BDC is brought into a domain, the PDC gives the BDC the current password
	to use when connecting to the PDC for authentication, account database
	replication, and other system activities. This password changes automatically on
	a regular basis. If the BDC is offline when the password changes, or if a BDC is
	restored from a backup that has an old password, the BDC will not be able to
	authenticate with the PDC, and Netlogon will fail.
	
	RESOLUTION
	==========
	
	In the simplest case, all that has happened is that the domain password has
	changed. To resolve the behavior, do the following:
	
	1. Start the BDC, and open Server Manager
	
	2. Select the BDC's name, and select Synchronize with Primary Domain Controller.
	
	If this procedure is successful, you will get a message that the LSA Database has
	been updated and Netlogon will start automatically. No other action is
	necessary.
	
	However, if synchronizing with the PDC does not work on the first attempt, try
	carrying out the same command again. Often, a second attempt will succeed.
	However, if the BDC will not synchronize and Netlogon fails to start after three
	attempts, you should create a new machine account for the BDC. These
	instructions are taken from a related article, Q137987:
	
	1. Using Server Manager, create a new computer name.
	
	2. Synchronize entire domain (check another BDC's event viewer to see if it
	  synchronized).
	
	3. At the problem BDC, use the Network tool in Control Panel to change the name
	  to the new name created in Step 1.
	
	4. Shut down the BDC, restart, and log on to Windows NT. Note any error
	  messages. You must logon to the domain the BDC belongs to, not a trusted
	  domain.
	
	5. Using Server Manager, synchronize the entire domain.
	
	6. From the PDC, delete the old computer name(use Server Manager).
	
	7. Synchronize the entire domain, using Server Manager.
	
	8. Make sure the old BDC name has been deleted in Server Manager before
	  proceeding.
	
	9. After the old BDC name is gone from Server Manager, re-create it.
	
	10. Synchronize the entire domain, using Server Manager.
	
	11. At the problem BDC, change computer name to the old name created in step 9,
	  using the Network tool in Control Panel.
	
	12. Shut down the BDC, restart, and log on to the domain. Note any error
	  messages.
	
	13. Synchronize entire domain.
	
	At this point the BDC should be synchronized with the PDC, netlogon should be
	running, and the accounts database should be up to date.
	
	Related Articles:
	
	
	For additional information on authentication issues specific to NWLink, please
	see the following article in the Microsoft Knowledge Base:
	
	Q126752DCs Fail to Synchronize or Validate Users Over NWLINK
	
	For additional information on authentication issues when trying to net view,
	please see the following article in the Microsoft Knowledge Base:
	
	Q137987NET VIEW May Cause Semaphore Time Out and Event ID 3210
	
	For additional information on authentication from the PDC's point of view, please
	see the following article in the Microsoft Knowledge Base:
	
	Q142869Event ID 3210 & 3722 Appear When Synchronizing Entire Domain
	
	Additional query words: resync resynchronization failure
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
