---
layout: page
title: "Q262865: XCON: Do Not Replay .dat Files Removed by Mtacheck Utility"
permalink: kb/262/Q262865/
---

## Q262865: XCON: Do Not Replay .dat Files Removed by Mtacheck Utility

	Article: Q262865
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 18-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Mtacheck.out subfolder that contains .dat files may be located in the
	Exchsrvr\Mtadata folder. If you add the .dat files that are located in the
	Mtacheck.out subfolder to the parent Mtadata folder, a variety of error messages
	may be displayed and erratic behavior may occur.
	
	CAUSE
	=====
	
	This issue can occur because the Mtacheck.out subfolder contains message data
	.dat files or corresponding reference .dat files that the message transfer agent
	(MTA) cannot process.
	
	The Mtacheck utility creates the Mtacheck.out subfolder automatically. When you
	run the Mtacheck utility, files are placed in the Mtacheck.out subfolder because
	they cannot be processed by the MTA for various reasons, typically because a
	data .dat file does not have a corresponding reference .dat file, or a reference
	.dat file does not have a corresponding data .dat file.
	
	If you use certain switches to run the Mtacheck utility, some Exchange Server
	system messages may also be removed to the Mtacheck.out subfolder, such as
	directory replication messages, public folder replication messages, or link
	monitor messages. You do not need to replace these files because they will be
	automatically resent.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not re-add the files that are located in the
	Mtacheck.out subfolder to the parent Mtadata folder. If you do, a variety of
	error messages are displayed, and erratic behavior occurs. The .dat files that
	are located in the Mtacheck.out subfolder were removed for a reason, and are
	only retained for reference and for troubleshooting.
	
	NOTE: You can only run the Mtacheck utility if there are no .dat files in the
	Mtacheck.out subfolder. If you want to keep the files that are located there for
	further research or troubleshooting, rename the Mtacheck.out subfolder. When you
	run the Mtacheck utility again, it automatically re-creates the Mtacheck.out
	subfolder.
	
	MORE INFORMATION
	================
	
	For additional information about the Mtacheck utility and the .dat files that
	are located in the Mtacheck.out subfolder, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q163326 XCON: How and Why to Run Mtacheck
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
