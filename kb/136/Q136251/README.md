---
layout: page
title: "Q136251: System Log Event 5705 with &gt; 500 Security Object Changes"
permalink: /kb/136/Q136251/
---

## Q136251: System Log Event 5705 with &gt; 500 Security Object Changes

	Article: Q136251
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 SP5 
	- Microsoft Windows NT Server versions 3.5, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event appears in your backup domain controller (BDC) system log:
	
	  Date:       N/A             Event ID:   5705
	  Time:       N/A             Source:     NETLOGON
	  User:       N/A             Type:       Error
	  Computer:   BDC             Category:   None
	
	  Description:
	
	  The change log cache maintained by the Netlogon service for database
	  changes is corrupted. The Netlogon service is resetting the change log.
	
	  Data, Byte:
	
	  000:    02
	
	CAUSE
	=====
	
	This problem occurs, if you enable auditing of security objects and more than
	500 changes are made to an individually replicated security object from the
	Security Account Manager (SAM), local security authority (LSA), or built-in
	databases.
	
	How Event ID 5705 is Triggered with the Netlogon Service
	--------------------------------------------------------
	
	On a heavily used server configured to audit many objects, if the security log
	fills up, the LSA security object is updated with each attempt to record an
	event in the full security log. With each LSA update a change is registered in
	the Netlogon change log file. If more than 500 of these events occur within the
	primary domain controller (PDC) to BDC Netlogon update cycle, the PDC does not
	replicate the individual changes to the BDCs, but sends a record that indicates
	a serial number skip and another record with the entire object that contains the
	accumulation of all changes. When the BDC encounters the skip in serial numbers,
	it records Event 5705 in the BDC system log.
	
	
	RESOLUTION
	==========
	
	To work around this problem, prevent the security log from becoming full by
	doing one or more of the following:
	
	- Clear the security log more frequently.
	
	- Set the security log to overwrite events when it gets full.
	
	- Audit fewer items.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5,4.0 SP5
	
	=============================================================================
	
