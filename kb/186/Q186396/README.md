---
layout: page
title: "Q186396: SMS: MIF File Renamer - Mifname.exe"
permalink: kb/186/Q186396/
---

## Q186396: SMS: MIF File Renamer - Mifname.exe

	Article: Q186396
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mifname.exe, which is available in the Microsoft BackOffice Resource Kit, gives
	Microsoft Systems Management Server version 1.0 and 1.1 MIF files new file name
	extensions based on their content. The Systems Management Server version 1.2
	Dataloader is multithreaded for different types of MIF files. The different
	types are determined by the extensions on the MIF files. However, Systems
	Management Server versions 1.0 and 1.1 make no distinction among different types
	of MIF files (all have a .mif extension). Therefore, MIF files being passed up a
	hierarchy from a 1.0 or 1.1 site to a 1.2 site cannot take advantage of the 1.2
	Dataloader's multithreaded attributes.
	
	MIFNAME solves this by scanning the current directory (which should be
	\Sms\Site.srv\Dataload.box\Deltamif.col) and changing MIF file name extensions
	according to their content. MIFNAME performs this task at intervals that are
	specified on the command line.
	
	MORE INFORMATION
	================
	
	MIFNAME runs on Alpha, MIPS, and x86 hardware.
	
	MIFNAME Syntax
	--------------
	
	  cd \sms\site.srv\dataload.box\deltamif.col
	  mifname  [sleep_time]
	
	sleep_time
	----------
	
	The amount of time to wait between checks of the Dataload.box directory. If this
	parameter is omitted, only a single check is made. If the sleep_time value is
	-1, MIFNAME displays a list of all MIF file types and their quantity, but does
	not rename any. To bring MIFNAME out of sleep mode, press CTRL+C.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
