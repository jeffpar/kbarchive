---
layout: page
title: "Q135277: WINS Records of Multi-homed Computers Do Not Replicate"
permalink: kb/135/Q135277/
---

## Q135277: WINS Records of Multi-homed Computers Do Not Replicate

	Article: Q135277
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT multi-homed computer registers with one of two Windows Internet
	Naming Service (WINS) servers that are replicating with each other. If you
	change the IP addresses of the Windows NT multi-homed computer and register with
	another WINS server, the previous records on the first WINS server are not
	updated. Therefore, the new registration corresponds to the previous IP
	addresses.
	
	CAUSE
	=====
	
	An active multi-homed unique replica does not replace an active multi- homed
	replica in a WINS database if the owner's identifications are different (the two
	records are owned by different WINS servers, neither of them being the WINS
	server that pulled the replica).
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	To work around this problem:
	
	1. Create a static entry for the multi-homed computer in the first WINS server.
	
	2. Enter the new IP addresses for the static entry.
	
	  Inserting a static record is acceptable, because MigrateOn is set by default
	  on a WINS server. If the node registers again with a new address, assuming
	  the old static address has become obsolete, the new registration or its
	  replicas will overwrite the old static entry.
	
	3. Ensure that MigrateOn is set by selecting the WINS server Advanced Settings
	  configuration.
	
	After the records are replicated to the WINS servers, the previous registration
	records, that are not used, are overwritten.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt dns replicating multihomed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
