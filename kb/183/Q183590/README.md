---
layout: page
title: "Q183590: XFOR: Memory Error Encountered in Migration Wizard for cc:Mail"
permalink: kb/183/Q183590/
---

## Q183590: XFOR: Memory Error Encountered in Migration Wizard for cc:Mail

	Article: Q183590
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Migration Wizard for Lotus cc:Mail, the
	following error message may be displayed:
	
	  Memory error encountered
	
	CAUSE
	=====
	
	The cc:Mail Import.exe and Export.exe files are the wrong version. This error
	will occur if the OS/2 version of Import.exe and Export.exe is found in the
	Winnt system path.
	
	RESOLUTION
	==========
	
	Ensure the correct DOS version of Import.exe and Export.exe are being used and
	in the correct system path location.
	
	To determine which version of cc:Mail Import.exe or Export.exe is being used,
	perform the following steps:
	
	1. Open a WinNT command prompt.
	
	2. Change the directory to the location of the Import and Export files within
	  the Winnt subdirectory.
	
	3. Type "Import" or "Export" (without quotes).
	
	OS/2 Import.exe will display Import2 <version>
	OS/2 Export.exe will display Export2 <version>
	
	DOS Import.exe will display Import <version>
	DOS Export.exe will display Export <version>
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
