---
layout: page
title: "Q120487: RAS-Connected BDCs/PDC's: Full_Sync Replication Times"
permalink: /kb/120/Q120487/
---

## Q120487: RAS-Connected BDCs/PDC's: Full_Sync Replication Times

	Article: Q120487
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the approximate full_sync replication time for a single
	server. This information is based on the results of two separate tests.
	
	MORE INFORMATION
	================
	
	Following are the test results from two separate test runs of a Full_Sync forced
	on a single Remote Access Service (RAS)-attached Backup Domain Controller (BDC)
	across a 9600-baud null-modem connection:
	
	- 9200-user/500 group Security Account Manager (SAM) replicated (full_sync) in
	  22 minutes.
	
	- 9200-user/50 group (all groups populated) SAM replicated (full_sync) in
	  36:10.
	
	  NOTE: Most of the delay is when the BDC made its API call to the Primary
	  Domain Controller (PDC) to get the next several accounts. The delay for each
	  call was minimal (for example, 37 seconds to return 201 accounts).
	
	A BDC can be connected to a remote domain through RAS and a modem connection.
	However, if the RAS-connected BDC is ever expected to be promoted to PDC while
	it is remotely connected to the domain, this BDC should be set up as a dial-out
	- only RAS client (RAS is not running on this computer). If you promote the
	RAS-connected client, Netlogon stops, changes roles, and restarts. RAS is
	dependent on Netlogon, so when Netlogon stops, you would lose your connection.
	By just having the RAS client dial- out services on this remote BDC, it can then
	function as a PDC if desired because that functionality does not depend on
	Netlogon running constantly. If neither the RAS server (which could also be a
	BDC) nor the RAS-connected BDC will be expected to ever serve as PDC, this is
	not an issue. A RAS- connected BDC that has been promoted to PDC functions as it
	should, but possibly with slower response time, depending on line speed.
	
	If a remote site has a RAS-connected BDC that dials in nightly to do a partial
	synchronization of any changes, and on some days 2,000 changes are made to the
	SAM/LSA database, then the default ChangeLogSize should be increased. This may
	be necessary if any BDC has been offline while a lot of changes have occurred,
	or else this BDC may be forced to do a full synchronization of the database. If
	minimal changes (for example, fewer than 2,000) occur during the time the RAS
	BDC or any BDC does not have a physical connection to the PDC, then the default
	size is sufficient. If an administrator begins to notice any BDCs doing full
	synchronizations, it could be that many changes are occurring and the
	ChangeLogSize needs to be increased. The default ChangeLogSize is 64K which is
	approximately 2,000 changes.
	
	NOTE: A single UI operation (such as adding a user) results in multiple changes;
	allow room for this in your calculations.
	
	Registry Changes
	----------------
	
	Use REGEDT32.EXE to make the following changes to the Registry on ONLY the PDC of
	the domain. Changes can be made at to the ChangeLogSize as long as the range is
	between (64K to 4 MB - decimal). You need to reboot your computer for the
	changes to take effect.
	
	Add the following value:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	HKEY_LOCAL_MACHINE
	
	Key Name: SYSTEM\CurrentControlSet\Services\NetLogon\Parameters
	Name: ChangeLogSize
	Type: REG_DWORD
	Data (New): 128000 (Decimal)
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
