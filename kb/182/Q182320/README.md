---
layout: page
title: "Q182320: XADM: Unable to Upgrade from Exchange Server 4.0 to 5.5"
permalink: kb/182/Q182320/
---

## Q182320: XADM: Unable to Upgrade from Exchange Server 4.0 to 5.5

	Article: Q182320
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Exchange Server version 4.0 to Exchange Server
	5.5, Setup may terminate with the following error message:
	
	  An unexpected error has returned, the error is 0xc1060107
	
	CAUSE
	=====
	
	This problem occurs because Setup mishandles a return code while upgrading the
	private information store.
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade to Exchange Server 5.0, and then upgrade to
	Exchange Server 5.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	MORE INFORMATION
	================
	
	During the upgrade process, the Setup program must upgrade the public and
	private information stores to a version that is compatible with Exchange Server
	5.0. It is during this process that the upgrade fails.
	
	In order to use the fix, you must copy the Server\Setup\<platform> folder
	from the Exchange Server 5.5 CD-ROM to a local hard drive, copy the fix to that
	folder, and then run Setup from there.
	
	Additional query words: c1060107
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
