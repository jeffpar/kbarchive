---
layout: page
title: "Q175098: XADM: Unexpected Error Occurs During Upgrade or Installation"
permalink: kb/175/Q175098/
---

## Q175098: XADM: Unexpected Error Occurs During Upgrade or Installation

	Article: Q175098
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Exchange Server version 5.5 or upgrading to Exchange
	Server version 5.5, the process may fail and the following three error messages
	may appear:
	
	  An unexpected error occurred in the upgrade process.
	  Microsoft Exchange Server Setup
	  ID no: c1032c00
	
	-and-
	
	  ERROR: Your upgrade did not complete successfully. Please restart your
	  Microsoft Exchange services and your system will behave as it did before
	  the upgrade was attempted.
	  Please contact Microsoft Product Support Services for more information.
	  Microsoft Exchange Server Setup
	  ID No: c1032c08
	
	-and-
	
	  A fatal error has occurred. Check that you have sufficient memory and
	  disk space available.
	
	CAUSE
	=====
	
	These error messages may appear during the upgrade or the installation process
	if there are insufficient system resources, such as low memory, or insufficient
	hard disk space available to perform the upgrade. Corruption in the database
	also may cause the upgrade process to fail.
	
	RESOLUTION
	==========
	
	If failure is due to insufficient system resources, freeing disk space or adding
	additional hardware should correct the situation. Freeing memory by closing any
	running applications or unnecessary services may also allow the upgrade to
	complete.
	
	If failure is due to corruption in the database (.edb) files, the store files
	will have to be repaired using the ESEUTIL program before the upgrade or
	installation to version 5.5 can take place. For more information on using the
	ESEUTIL program, consult the Microsoft Exchange Server Administrator's Guide, or
	see Knowledge Base article Q182903, "XADM: ESEUTIL Command Line Parameters."
	
	If you chose the Fault Tolerant method during the upgrade process, restarting the
	services should be the only recovery method needed to continue using the
	previous version of Exchange Server. This is because the Fault Tolerant
	installation method copies the database files to a backup directory before
	beginning the conversion process to Jet97.
	
	MORE INFORMATION
	================
	
	The error messages may be somewhat confusing because all three error messages
	appear regardless of the cause of the upgrade failure. The first two errors may
	apply to any problem during a failed upgrade, but the third error message
	appears even though it has no reflection on the database being corrupted.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
