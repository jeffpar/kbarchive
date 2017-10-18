---
layout: page
title: "Q165164: XCLN: Memory Problems After Printing"
permalink: kb/165/Q165164/
---

## Q165164: XCLN: Memory Problems After Printing

	Article: Q165164
	Product(s): Microsoft Exchange
	Version(s): Windows:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you print from the Microsoft Exchange Windows 3.x client you may encounter
	insufficient memory problems when you use other conventional- memory-intensive
	applications.
	
	CAUSE
	=====
	
	Some conventional memory used by the Microsoft Exchange Windows 3.x client when
	printing may not be relinquished even after you quit the client by clicking Exit
	and Logoff. The amount of conventional memory lost can vary between 30 KB and 80
	KB, depending on the printer driver used.
	
	WORKAROUND
	==========
	
	To work around this problem you should try to conserve conventional memory in
	general and use a printer driver that minimizes the use of conventional memory.
	Methods for general conservation of conventional memory include running the
	Memmaker.exe utility to optimize the availability of conventional memory at the
	MS-DOS level and using a standard VGA video driver instead of Super VGA or other
	high-resolution video drivers.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client version 4.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client version 5.0. This problem has been corrected in the latest U.S.
	Service Pack for Microsoft Exchange Server version 5.0. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Win16
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : Windows:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
