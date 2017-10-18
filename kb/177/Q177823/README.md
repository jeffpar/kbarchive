---
layout: page
title: "Q177823: XADM: Incorrect RPC Operations Cause Information Store to Fail"
permalink: kb/177/Q177823/
---

## Q177823: XADM: Incorrect RPC Operations Cause Information Store to Fail

	Article: Q177823
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An information store crash may occur, generating a Dr. Watson error message with
	the following stack dump:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  252afaf4  0042cc1c  252afb18 000001c5 252afb0c STORE!EcRpc+0xfb8
	  252afb08  77e11841  2652a620 3029b00c 00000030 STORE!EcDoRpc+0x3c
	  265f2070  37363534  0004020a 00413280 00000001 0x77e11841
	
	CAUSE
	=====
	
	An incorrect remote procedure call (RPC) buffer size setting from server to
	client communications causes corruption of memory, which in turn can shut down
	the information store.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: IS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
