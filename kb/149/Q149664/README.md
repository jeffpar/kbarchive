---
layout: page
title: "Q149664: Verifying Domain Netlogon Synchronization"
permalink: kb/149/Q149664/
---

## Q149664: Verifying Domain Netlogon Synchronization

	Article: Q149664
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If users are having problems getting validated or are experiencing other
	account-related issues, you should verify that complete synchronization is
	taking place across all domain controllers in the domain, including in the User
	Account Database and Machine Account Database. Anytime a change is made in User
	Manager or Server Manager, the changes occur at the primary domain controller's
	database, and those changes need to be replicated.
	
	The Netlogon Service tries to maintain synchronization automatically but is
	sometimes unable to. If you suspect a domain controller is not up to date,
	locate your situation in the section below and follow the procedures outlined.
	
	MORE INFORMATION
	================
	
	In User Manager, changing any of the following requires a complete domain
	synchronization for all domain controllers in the domain to be able to correctly
	service the Netlogon request:
	
	- Creating a new user or group account
	
	- Changing a password or description
	
	- Changing domain or user policies
	
	- Changing group membership
	
	- Changing logon script file name
	
	- Changing home directory path
	
	- Changing hours of valid logon
	
	- changing the list of valid machines to be validated against
	
	- Changing account expiration and type
	
	In Server Manager, doing any of the following requires a complete domain
	synchronization for all domain controllers in the domain to be able to correctly
	service the Netlogon request:
	
	- Creating a new computer account for a Workstation
	
	- Creating a new computer account for a stand-alone Server
	
	- Creating a new computer account for a backup domain controller
	
	In the case where the PDC has to be taken offline, full replication will need to
	have already occurred before promotion of a BDC to PDC. If the synchronization
	did not occur, any new information not replicated is lost.
	
	To verify Domain Synchronization, individually replicate the User Account
	Database on each backup domain controller with the primary domain controller.
	
	From within Server Manager, select each BDC in turn and, from the Computer menu,
	choose "Synchronize with primary domain controller." This will trigger an
	immediate replication for the selected BDC with the PDC.
	
	From the Event Log on each Domain Controller, verify that one or more of the
	following is on each server (both event IDs do not need to be present on each
	computer):
	
	On the PDC:
	
	  Event 5711 Source Netlogon
	  The partial synchronization request from the server <BDC> completed
	  successfully. <Number> changes(s) has(have) been returned to the
	  caller.
	
	  Event 5713 Source Netlogon
	  The full synchronization request from the server <BDC> completed
	  successfully. <Number> object(s) has(have) been returned to the caller.
	
	On the BDC:
	
	  Event 5715 Source Netlogon The partial synchronization replication of the SAM
	  database from the primary domain controller <PDC> completed
	  successfully. <Number> change(s) is(are) applied to the database.
	
	  Event 5717 Source Netlogon The full synchronization replication of the <SAM
	  or BUILTIN or LSA> database from the primary domain controller <PDC>
	  completed successfully.
	
	Additional query words: repl Directory Services
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
