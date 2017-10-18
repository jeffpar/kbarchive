---
layout: page
title: "Q174697: XFOR: Correspondence Between Foreign.nsf and Lmd.&#42;"
permalink: kb/174/Q174697/
---

## Q174697: XFOR: Correspondence Between Foreign.nsf and Lmd.&#42;

	Article: Q174697
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you recreate the Foreign.nsf file from scratch, any full loads or updates
	to existing users have no effect from Exchange to Lotus Notes. You may also see
	the following errors for the process DXANOTES in the LinkAge logs:
	
	  1997/09/22 18:29:40- DXANOTES(0165) 2 64083:Transaction: ### - Record
	  has already been added - Treat as an update
	  >> lndxapi(1965)
	  1997/09/22 18:29:44- DXANOTES(0165) 1 41116:Error opening Notes document
	  with id = ####
	  >> lsnabapi(1012)
	  1997/09/22 18:29:44- DXANOTES(0165) 2 41127:Notes Package ID: Notes
	  Storage Facility (NSF). Extended Reason String: Invalid or nonexistent
	  document
	  >> lsnabapi(3118)
	  1997/09/22 18:29:44- DXANOTES(0165) 1 64103:Error {System failure}
	  detected opening Note
	  >> lndxapi(2512)
	  1997/09/22 18:29:44- DXANOTES(0165) 2 64073:Error {System failure}:
	  While processing Transaction ###
	  >> lndxapi(1397)
	
	Applies to the LinkAge Notes Connector with LinkAge Directory Exchange version
	3.2 (components include LinkAge Exchange DXA, LinkAge Notes DXA, and LinkAge
	DXM).
	
	CAUSE
	=====
	
	The LinkAge Directory Exchange Manager (DXM) sends the full load to the Notes
	Directory Exchange Agent (DXA); however, the Notes DXA compares each user being
	added to the LMD table, which has not been reset. Because the entry exists in
	the Local Mapping Directory (LMD), the Notes DXA assumes that the entry should
	be interpreted as an update to an existing user in Foreign.nsf, though the
	Foreign.nsf has been cleared. The Notes DXA then attempts to update the person
	document in Foreign.nsf that no longer exists. The result is that the user is
	not added, and the above error occurs in the LinkAge log files (located in
	Linkage\Logs directory).
	
	WORKAROUND
	==========
	
	This workaround should only be used when Foreign.nsf has been recreated from
	scratch. The following procedure requires a directory pull/push on the Notes
	side, which could take a significant amount of time to transmit and process:
	
	1. Stop the DXANOTES process, or shut down the LinkAge Directory Exchange
	  service.
	
	2. Go to the LINKAGE\DXANOTES directory and delete, rename, or move the
	  following files:
	
	  Dlockfil.dat
	  Lmd.dat
	  Lmd.ix1
	  Lmd.ix2
	
	3. Start the DXANOTES process, or start the LinkAge Directory Exchange service.
	
	4. Request a full load from Notes. This will bring in a full directory from
	  Notes and recreate the LMD tables.
	
	5. Send a full load from DXM to Notes. This will ensure that the LMD also
	  represents what currently exists in Exchange.
	
	Step 5 may produce duplicate entries in the Notes address book if it was not
	empty; that is, if it contains any Exchange users. The LMD tables have a
	correlation between the document ID and the key fields (username, domain) of the
	person document. When this LMD table is removed, the Notes DXA will try to
	insert these names as new documents, not modifications, though the identically
	named user is in the address book. To recover, or prevent this, in the case
	where Exchange names are stored in a separate address book, recreate a blank
	address book for the Exchange names, and redo steps 1-5. In the case where
	Exchange names are stored in the same address book as other Notes names, a
	solution would have to be researched.
	
	
	Additional query words: LDE
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	
	=============================================================================
	
