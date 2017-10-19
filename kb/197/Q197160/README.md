---
layout: page
title: "Q197160: NETDOM 1.7 Reports Access Denied with Windows NT 4.0 SP4"
permalink: /kb/197/Q197160/
---

## Q197160: NETDOM 1.7 Reports Access Denied with Windows NT 4.0 SP4

	Article: Q197160
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NETDOM version 1.7 (which is included in the Windows NT 4.0
	Resource Kit Supplement 3) on a computer with Windows NT 4.0 Service Pack 4, you
	receive the following error message:
	
	  Access Denied
	
	RESOLUTION
	==========
	
	NETDOM 1.8 corrects this problem and is available on the following Microsoft FTP
	site: For Intel processors:
	
	  ftp://ftp.microsoft.com/reskit/nt4/x86/
	
	For Alpha-based processors:
	
	  ftp://ftp.microsoft.com/reskit/nt4/alpha/
	
	
	The new version of NETDOM has been modified so that it works with all computers
	running Windows NT 4.0 Service Pack 4. NETDOM 1.8 also provides the following
	new feature set:
	
	- Option to trigger partial synchronization from a backup domain controller
	  (BDC) to a primary domain controller (PDC):
	
	  NETDOM BDC \\BDCNAME /PARTIALSYNC
	
	- Option to trigger full synchronization from a BDC to a PDC
	
	  NETDOM BDC \\BDCNAME /FULLSYNC
	
	Secure channels are no longer checked by comparing passwords on both sides of the
	secure channel. The new release of NETDOM relies on the NETLOGON service to
	query secure channels status (as NLTEST utility). If a secure channel is
	incorrect, NETDOM can reset it automatically. For more information, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q150493 How to Join a Domain From the Command Line
	
	  Q175024 Resetting Domain Member Secure Channel
	
	  Q150518 NetLogon Service Fails when Secure Channel Not Functioning
	
	  Q175025 How to Build and Reset a Trust Relationship from a Command Line
	
	Some changes have been made on Windows NT 4.0 Service Pack 4 so that computer
	account password changes are no longer replicated urgently (flag
	ANNOUNCE_IMMEDIATE). NETDOM 1.8 displays new warning messages stating that a
	possible cause of an incorrect member's secure channel is synchronization
	between the BDC, with which the member has established a secure channel, and the
	PDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NETDOM version 1.7.
	
	MORE INFORMATION
	================
	
	For each member, there is a discrete communication channel (that is, the secure
	channel) with a domain controller. The secure channel is used by the Netlogon
	service on the member and on the domain controller to communicate. The password
	of the secure channel is stored on one hand on the member itself under an LSA
	secret entry and on the other hand on the PDC in the SAM (password of the
	computer account), which is then replicated to all BDCs.
	
	To check a secure channel remotely, NETDOM used to establish a connection with
	the PDC using the computer account and the password found in the LSA secret
	$MACHINE.ACC. With Service Pack 4, LSA secret values are no longer returned to
	clients over the network and it prevented NETDOM from working fine.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q184017 Administrators Can Display Contents of Service Account Passwords
	
	Additional query words: 4.00 rkit resource kit sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
