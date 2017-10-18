---
layout: page
title: "Q149030: Event Error 132 When Processing RAW File"
permalink: kb/149/Q149030/
---

## Q149030: Event Error 132 When Processing RAW File

	Article: Q149030
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Inventory Agent INVDOS will produce a bad .raw file (which will be discarded
	by the Inventory Processor) when the title of the package being inventoried is
	longer then 40 characters.
	
	Event ID 132 is logged with the following error:
	
	  Length of data given in Inventory Agent output file does not match expected
	  length
	
	WORKAROUND
	==========
	
	A work around this problem, reduce the length of the package name to 40
	characters or fewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 1.1. A
	fix to this problem is in development, but has not been regression- tested and
	may be destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: invproc inventory processor mif badmif prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
