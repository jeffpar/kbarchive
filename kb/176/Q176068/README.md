---
layout: page
title: "Q176068: XADM: Err: &quot;Private store could not be updated&quot; Running Isinteg"
permalink: kb/176/Q176068/
---

## Q176068: XADM: Err: &quot;Private store could not be updated&quot; Running Isinteg

	Article: Q176068
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Isinteg utility in patch mode (isinteg
	-patch), you may receive the following error message:
	
	  Private store could not be updated. Reason Jet_errMissingLogFile
	
	WORKAROUND
	==========
	
	Before you run the Isinteg utility, you must do the following:
	
	1. Start MSExchangeIS.
	
	2. Stop MSExchangeIS.
	
	3. Run the utility in patch mode with this command:
	
	  isinteg -patch
	
	MORE INFORMATION
	================
	
	This error may occur when you attempt to run Isinteg -patch after the
	information store is restored from an online backup. Running isinteg against
	such an information store may cause the above errors.
	
	The errors may also indicate that the user is missing some log files. Locate the
	Priv.edb and Pub.edb files and compare the file dates to the Edb*.log file
	dates. The dates of the logs should match those of the EDB files if they were
	restored from the same backup, because the services should have been stopped for
	the EDB files to be backed up.
	
	If the dates do not match, ask the user to locate a consistent, even older,
	backup. If another backup is not available, copy these *.edb files into the
	Mdbdata directory, delete the *.chk and *.log files that were previously in the
	Mdbdata directory before you attempt to run Isinteg in patch mode.
	
	It is not necessary to run Isinteg in patch mode if the information store has
	been restored from an online Windows NT Server backup. The Windows NT Server
	Backup utility already includes this Isinteg patch process.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
