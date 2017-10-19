---
layout: page
title: "Q199071: Recovering from Minor LSA Corruption"
permalink: /kb/199/Q199071/
---

## Q199071: Recovering from Minor LSA Corruption

	Article: Q199071
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You might see event ID 5714
	
	  The full synchronization request from the server "bdc" failed with the
	  following error: <error text>
	
	on the primary domain controller (PDC), or event ID 5716
	
	  The partial synchronization replication of the SAM database from the primary
	  domain controller <name> failed with the following error: Cannot
	  perform this operation on built-in accounts
	
	on one or more backup domain controllers (BDCs), indicating that replication of
	the LSA database failed.
	
	CAUSE
	=====
	
	This problem occurs because one of the secrets in the LSA database is corrupted.
	This can happen when the registry is physically corrupted (as in a disk system
	hardware failure) or when a transaction to the LSA database does not complete
	and is left in a partially completed state (as in a power failure during a
	transaction).
	
	If you examine the LSA secrets in the registry, you will see at least one secret
	that has only one subkey, PolMod. Normal secrets have five subkeys.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, locate and delete the corrupted secret in the registry
	on the PDC.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you examine each secret in the registry, you can locate the corrupted secret
	manually and no reboot will be required.
	
	You can also find the corrupted secret by installing a checked build of
	Netlogon.dll and examining the logs that are generated. A Netlogon.log file of
	this problem will have lines (wrapped for readability) that look like:
	
	  12/08 18:11:41 [SYNC] Packing Secret Object: G$$TRUSTEDDOMAIN
	  12/08 18:11:41 [CRITICAL] NlSyncLsaDatabase: returning unsuccessful
	  (c0000034).
	  12/08 18:11:41 [MISC] Eventlog: 5714 (2) "PDC" "%%2" c0000034
	  12/08 18:11:41 [SYNC] NetrDatabaseSync: LSA returning (0xc0000034) to PDC
	  Context: 0x0.
	
	From this log, you can see that the LSA secret named G$$TRUSTEDDOMAIN is
	corrupted.
	
	For more information on obtaining, installing and configuring the checked build
	of Netlogon.dll, contact Microsoft Product Support Services.
	
	
	After the corrupted secret is located, delete it.
	
	NOTE: Performing the following procedure across a slow WAN link could be
	extremely time-consuming (hours). Microsoft recommends that you perform this
	procedure locally on the PDC.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Security
	
	3. On the Security menu, click Permissions.
	
	4. Change the permissions on this key and all subkeys to:
	
	  Administrators: Full Control
	  System: Full Control
	
	  NOTE: You can safely ignore any errors while applying permissions.
	
	5. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Security\Policy\Secrets\<secretname>
	
	6. On the Edit menu, click Delete.
	
	7. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Security
	
	8. On the Security menu, click Permissions.
	
	9. Change the permissions on this key and all subkeys to:
	
	  Administrators: Special... (only Read Control and Write DAC)
	  System: Full Control
	
	  NOTE: You can safely ignore any errors while applying permissions.
	
	10. Quit Registry Editor.
	
	In this example, the corrupted key corresponds to an outgoing trust. You would
	need to re-establish the trust to TRUSTEDDOMAIN using User Manager for Domains
	to delete and re-create each end of the trust.
	
	Here is a short list of secrets you might see:
	+-------------------------------------------------------------+
	| Secret Name    | Type of Information                        | 
	+-------------------------------------------------------------+
	| G$$DOMAINNAME  | Trust to domain DOMAINNAME                 | 
	+-------------------------------------------------------------+
	| G$<other name> | Other global secret                        | 
	+-------------------------------------------------------------+
	| $MACHINE.ACC   | Machine account password for this computer | 
	+-------------------------------------------------------------+
	| NL$xx          | Cached logon credentials                   | 
	+-------------------------------------------------------------+
	| *ServiceName*  | Information stored by that service         | 
	+-------------------------------------------------------------+
	Problems of this sort occur only in global secrets because other secrets are not
	replicated to BDCs by Netlogon. Thus, it is only necessary to inspect secrets
	beginning with G$.
	
	
	MORE INFORMATION
	================
	
	LSA secrets are stored in the registry under the following registry key:
	
	  HKEY_LOCAL_MACHINE\Security\Policy\Secrets
	
	Each LSA secret key will normally have five subkeys:
	
	  CupdTime
	  CurrVal
	  OldVal
	  OupdTime
	  SecDesc
	
	When a secret changes, the values of each of these keys must be looked up and
	replicated by Netlogon as part of the normal domain accounts database
	replication process.
	
	The 5714/5716 event pair is generated when one or more of these values is
	missing.
	
	During a change to an LSA secret, there is an intermediate state where these five
	subkeys have been deleted and a temporary key, PolMod, is present. If the
	transaction is not completed atomically, this key could persist, resulting in a
	corrupted and non-replicatable LSA secret.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
