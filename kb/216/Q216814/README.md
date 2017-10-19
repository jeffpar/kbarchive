---
layout: page
title: "Q216814: Err Msg: Printer Setting Could Not Be Saved..."
permalink: /kb/216/Q216814/
---

## Q216814: Err Msg: Printer Setting Could Not Be Saved...

	Article: Q216814
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the properties of a shared printer by using the Printers folder,
	you may get the following error message after you click OK, even without making
	any changes:
	
	  Printer setting could not Be saved. Data area passed to a system call is too
	  small.
	  122L Error_insufficiant_Buffer
	
	You may also find that this shared printer does not appear in the shared
	resources list when you click Shares in the Server tool in Control Panel, or
	when you do a net view command.
	
	Also, Network clients will not be able to see the printer when trying to browse
	and connect to it.
	
	CAUSE
	=====
	
	This error can occur if the specific printer's share on the print server becomes
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Click Start, click Settings, and then click Printers.
	
	2. Right-click the problem printer, and then click Sharing.
	
	3. Write down the share name of the printer.
	
	4. Stop sharing this printer by clicking the Not Shared radio button, and then
	  close the printer folder.
	
	5. Open Control Panel, double-click Services, select the Spooler Service, click
	  Stop, and then click Start.
	
	6. After the Spooler Service restarts, open the printer folder and re-create the
	  printer share using the share name found in step 3. Do this by clicking
	  Start, clicking Settings, and then clicking Printers. Right-click the problem
	  printer, and then click Sharing. Click the Shared radio button, and then
	  share the printer with the same name as before.
	
	MORE INFORMATION
	================
	
	The above steps are a workaround that should eliminate the error message
	received when viewing the printer's properties and also enable the printer to
	again be seen on the network.
	
	This exact cause of the share corruption is not known at this time.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
