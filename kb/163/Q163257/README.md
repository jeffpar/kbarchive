---
layout: page
title: "Q163257: XADM: Dr. Watson, AV When You Create X.400 Address"
permalink: /kb/163/Q163257/
---

## Q163257: XADM: Dr. Watson, AV When You Create X.400 Address

	Article: Q163257
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you create a new custom recipient on a Microsoft
	Exchange Server computer and assign it an X.400 address. If you enter
	information on the General tab, click the Advanced tab, enter information in one
	of the Domain Defined Attributes (DDAs), and then click OK, you may receive the
	following error message:
	
	  Dr Watson for Windows NT
	  An Application error has occurred and a log is being generated
	
	  ADMIN.EXE Exception: access violation (0xc0000005), address: 0x0050f361
	
	This problem happens more frequently on DEC Alpha computers than on Intel
	computers. If you just enter information on the General tab for the X.400
	address, and then click OK, the address is generated correctly and no error
	messages are displayed. You can then edit that address and add the DDA
	information.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was first corrected in Microsoft Exchange Server
	version 5.0 Service Pack Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	This happens because of an invalid pointer to a dialog box procedure for the
	page. Normally, this would not cause the array to be overwritten but if you have
	specified DDA, the string is not parsed correctly.
	
	Additional query words: X400
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
