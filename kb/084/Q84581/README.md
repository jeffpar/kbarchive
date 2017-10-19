---
layout: page
title: "Q84581: 3COM 3C501 Network Card May Require Updated Drivers"
permalink: /kb/084/Q84581/
---

## Q84581: 3COM 3C501 Network Card May Require Updated Drivers

	Article: Q84581
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using a 3COM 3C501 network card on a Novell network with Windows version
	3.1, you may receive the following error if you used 3COM low-level drivers
	earlier than version 2.5 during the WSGEN process:
	
	  System Error: Cannot read from device Network
	
	To correct this problem contact your 3COM dealer and obtain updated low-level
	drivers (version 2.5 or later), and then generate a new IPX.COM file. With the
	new low-level drivers, IPX is still version 3.1.
	
	Note: These cards cannot be used as a Windows for Workgroups (WFWG) server. They
	can be used with Windows for Workgroups as a client only.
	
	For more information on Windows for Workgroups, query on "WFWG" in the Microsoft
	Knowledge Base.
	
	The 3COM products included here are manufactured by 3COM, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding there products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
