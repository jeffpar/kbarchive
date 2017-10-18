---
layout: page
title: "Q219178: SFM Macintosh Clients Print %%[Error: undefined...]%%"
permalink: kb/219/Q219178/
---

## Q219178: SFM Macintosh Clients Print %%[Error: undefined...]%%

	Article: Q219178
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Macintosh clients try printing to a print queue defined on an Windows NT
	Server 4.0 computer running Services for Macintosh, you may find that their
	print job appears in the print queue as it is being spooled, and then clears the
	queue as if it has actually finished printing.
	
	No errors will appear on the Windows NT Server computer or on the Macintosh
	client, which looks as if the document printed successfully. But, when viewing
	the printed output, the only thing printed on the page is:
	
	  %%[Error: undefined; OffendingCommand: Volume ]%%
	  %%[Flushing; rest of job (to end-of-file) will be ignored ]%%
	
	CAUSE
	=====
	
	This error may occur when Macintosh clients send print jobs to an SFM printer
	that is using drivers that are not made specifically for the model of printer
	being used; for example, using the HP LaserJet 4M driver for the HP LaserJet 4
	printer.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure you have the correct drivers installed.
	
	MORE INFORMATION
	================
	
	Also make sure the Macintosh client has the latest Apple Laser Writer 8 driver
	installed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
