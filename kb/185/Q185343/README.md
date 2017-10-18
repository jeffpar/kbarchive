---
layout: page
title: "Q185343: SMS: Splitting One Domain Across Multiple SMS Sites"
permalink: kb/185/Q185343/
---

## Q185343: SMS: Splitting One Domain Across Multiple SMS Sites

	Article: Q185343
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The use of Systems Management Server in certain domain structures can sometimes
	lead to confusion about its capabilities and limitations. This is especially
	true when Systems Management Server is used in a wide area network (WAN)
	consisting of a single domain separated by routers. In this situation, special
	consideration must be given to site type and placement and logon script
	configuration, as well as package distribution techniques.
	
	The example below goes into more detail.
	
	MORE INFORMATION
	================
	
	Consider a typical retail company utilizing a primary domain controller (PDC) at
	the corporate office, and a backup domain controller (BDC) at each outlet (to
	perform logon validation locally) linked to each other by 19.2- kilobyte per
	second (KBps) routed links.
	
	In this situation, Systems Management Server should be implemented as follows:
	
	1. Install a Central site at the corporate office.
	
	2. Install the outlet sites as either primary or secondary Systems Management
	  Server sites. Although there are many factors to consider when planning your
	  site hierarchy, one key point to keep in mind is that each primary site
	  requires a Systems Management Server administrator and a SQL Server computer
	  for the Systems Management Server database.
	
	3. Establish the needed parent-child assignments and addresses.
	
	4. If logon scripts are to be used, ensure that replication is set up at the PDC
	  and all BDCs.
	
	5. Ensure that the Use All Detected Servers option is not enabled by any Systems
	  Management Server site in the domain.
	
	6. Ensure that the Automatically Configure Logon Scripts option is not enabled
	  by any Systems Management Server site in the domain.
	
	For example, each client at outlet xyz will have a site-domain assignment such as
	xyz:corpdom, and clients at the corporate office will have an assignment such as
	abc:corpdom (these assignments will be used again later). Systems Management
	Server makes the ownership distinction based on the combination of the
	three-letter site code combined with the domain name.
	
	If logon scripts are to be used, manually assign a script to each user account
	(through multi-select in User Manager) and ensure that the needed script files
	are copied into the Repl$\Scripts directory on the export server (usually the
	PDC).
	
	For more information, consult the Systems Management Server 1.2 "Concepts and
	Planning Guide," available in the Systems Management Server Books Online.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbinfo
	
	=============================================================================
	
