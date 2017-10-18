---
layout: page
title: "Q173895: XFOR: Migration Process is Faster on an Intel Processor"
permalink: kb/173/Q173895/
---

## Q173895: XFOR: Migration Process is Faster on an Intel Processor

	Article: Q173895
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running the migration process on an Intel processor may be considerably faster
	than running on a non-Intel CPU such as the DEC Alpha, even though the DEC Alpha
	may be a faster CPU.
	
	MORE INFORMATION
	================
	
	During Lotus cc:Mail and Novell GroupWise migration, 16-bit code is run as part
	of the extraction phase of the migration process. Running extractors on RISC
	platform computers results in significantly slower migration performance due to
	16-bit code running Intel x86 emulation mode. Performance for the import phase
	of the migration process is not affected. For maximum performance, run the
	migration extraction phase for Lotus cc:Mail and Novell GroupWise on a computer
	with an Intel processor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
