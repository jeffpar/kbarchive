---
layout: page
title: "Q149318: WINS Might Not Scavenge All Local Records"
permalink: kb/149/Q149318/
---

## Q149318: WINS Might Not Scavenge All Local Records

	Article: Q149318
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Obsolete records remain in the WINS database, and the following event log
	appears:
	
	  EventID: 4137
	  Source: WINS
	  Description: WINS scavenged its own records in the db. The number of
	  records scavenged are given below.
	
	  Data: 0000: 000003a1 00000000
	
	The first DWORD of the data is the line number of the error; the second DWORD is
	the number of records scavenged.
	
	CAUSE
	=====
	
	WINS may start scavenging from the wrong version number onward, resulting in
	missed records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0; please note the following fix is not
	available for Windows NT version 4.0. A supported fix is now available, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Product Support Services for more
	information.
	
	
	Additional query words: 3.51 prodnt scavenge 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
