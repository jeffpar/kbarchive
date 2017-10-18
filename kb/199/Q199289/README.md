---
layout: page
title: "Q199289: XFOR: Migration Wizard or CCMC Crashes on Alpha NT for JPN"
permalink: kb/199/Q199289/
---

## Q199289: XFOR: Migration Wizard or CCMC Crashes on Alpha NT for JPN

	Article: Q199289
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are migrating from Lotus cc:Mail to Microsoft Exchange Server and are
	running the Lotus cc:Mail Migration Wizard on a fast Alpha server, you might
	encounter the following error message:
	
	  A memory error occured.
	
	After you click OK, you are returned to the Migration Wizard screen. It may or
	may not allow you to continue the migration process, but if it does, no users
	will be migrated.
	
	CAUSE
	=====
	
	The cc:Mail Migration Wizard relies on the Lotus 16-bit application Export.exe
	for migrating messages. When Export.exe starts up, it causes the Windows NT
	Virtual DOS Machine (NTVDM) to intialize itself. During this initialization,
	this error can be encountered. It is due to a problem with three
	terminate-and-stay-resident (TSRs) files that are inherent in the Config.nt file
	on Japanese versions of Windows NT for Alpha. The three TSR files are:
	
	Kkcfunc.sys
	Msimek.sys
	Msimei.sys
	
	These TSRs are required only when customers need to input Kanji characters from
	the user interface of 16-bit applications into the Windows NT environment. Note
	that this problem will occur for any 16-bit application because they all require
	the Windows NT Virtual DOS Machine.
	
	RESOLUTION
	==========
	
	This problem will be addressed in the next service pack of Windows NT 4.0.
	
	WORKAROUND
	==========
	
	To work around this problem do either of the following:
	
	- Remove or comment out the three TSR files before you run any 16-bit
	  application, such as the cc:Mail Migration Wizard.
	
	  -or-
	
	- Wait for the next service pack for Windows NT 4.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This problems has been reproduced on both Windows NT 4.0 Service Pack 3 and
	Service Pack 4. It is possible that this problem may occur in an earlier build
	of Windows NT 4.0.
	
	Additional query words: crash, dr. watson, ccmc.exe, cc:Mail, cc:Mail Migration Wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
