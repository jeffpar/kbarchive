---
layout: page
title: "Q157001: XCLN: PRC Exchange Win 95 Client cannot Display DBCS Characters"
permalink: kb/157/Q157001/
---

## Q157001: XCLN: PRC Exchange Win 95 Client cannot Display DBCS Characters

	Article: Q157001
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the PRC version of the Microsoft Exchange Windows 95 client,
	any file with Double Byte Character Set (DBCS) characters will have corrupted
	characters in it. You can see this by opening the Gbk.txt file supplied in the
	\Windows directory. The Gbk.txt file contains all of the characters defined for
	the system.
	
	CAUSE
	=====
	
	When the Microsoft Exchange Windows 95 client is installed, it replaces the
	Riched32.dll with it's own version. The Microsoft Exchange version incorrectly
	displays some of the DBCS characters.
	
	
	WORKAROUND
	==========
	
	Replace the Microsoft Exchange client version of riched32.dll with the one that
	came with Windows 95. Then Gbk.txt will open properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
