---
layout: page
title: "Q67653: How to Respond When DDE Data Cannot Be Locked"
permalink: kb/067/Q67653/
---

## Q67653: How to Respond When DDE Data Cannot Be Locked

	Article: Q67653
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Dynamic Data Exchange (DDE) client application receives a WM_DDE_DATA message
	when the DDE server has data to transmit. The low-order word of lParam contains
	the handle to a global memory object containing the data. If the DDE client is
	unable to lock the handle to access the data [GlobalLock() returns NULL], the
	DDE client should send a negative acknowledgment to the DDE server. A negative
	acknowledgment is a WM_DDE_ACK message with the fAck bit set to zero.
	
	DDE is discussed in Chapter 15 of the "Microsoft Windows Software Development Kit
	Reference Volume 2."
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
