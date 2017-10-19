---
layout: page
title: "Q297427: Event ID 5718 Generated During LSA Database Replication"
permalink: /kb/297/Q297427/
---

## Q297427: Event ID 5718 Generated During LSA Database Replication

	Article: Q297427
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During link state algorithm (LSA) database replication from the primary domain
	controller (PDC) to the backup domain controller (BDC), the following
	information may be recorded in Event Viewer:
	
	  Event ID 5718
	  The full synchronization replication of the LSA database from the primary
	  domain controller <servername> failed with the following error:
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur if the Security hive has become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, copy the Security hive from another BDC to the BDC on
	which the event information is recorded:
	
	1. Perform a parallel installation of Windows NT 4.0 on the BDC on which the
	  event information is recorded.
	
	2. On a reliable (working) BDC, update the repair folder by using the Repair
	  Disk (RDISK) utility.
	
	3. Copy the following folder from the reliable BDC to a temporary folder on the
	  BDC on which the event information is recorded:
	
	  %SystemRoot%\Repair\Security
	
	4. Start the BDC on which the event information is recorded, by using the
	  parallel Windows NT 4.0 installation.
	
	5. In the original Windows NT 4.0 installation, rename the following folders:
	
	  %SystemRoot%\Repair\Security
	  %SystemRoot%\Repair\Security.log
	
	6. Expand the Security folder that you created in step 3, and then copy the
	  folder to the following location of the original Windows NT installation:
	
	  %SystemRoot%\System32\Config\Security
	
	7. Start the BDC on which the event information is recorded, in the original
	  installation.
	
	8. On the PDC, use the netdom command utility to reset the secure channel on the
	  BDC. Use the following syntax
	
	  "netdom BDC \\<BDC Name> /reset" (without the quotation marks)
	
	  where <BDC Name> is the computer name of the BDC.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
