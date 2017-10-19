---
layout: page
title: "Q134573: Error the First Time You Start Computer with Novell NE3200"
permalink: /kb/134/Q134573/
---

## Q134573: Error the First Time You Start Computer with Novell NE3200

	Article: Q134573
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbsetup win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Windows 95 with a Novell NE3200 network adapter, the first
	time that you restart the computer, you may receive the following error message:
	Your network adapter NE3200 or compatible (0000) is not working correctly. You
	may need to set it up again.
	
	CAUSE
	=====
	
	
	The error message described above seems to occur only when there is an EISA
	device present on the computer during setup, and when there are NDIS3 drivers.
	If the NE3200 card is added to an existing Windows 95 installation, this error
	message does not appear.
	
	RESOLUTION
	==========
	
	This error message does not adversely affect networking. If it appears, click
	the OK button and allow Setup to complete. The next time you start the computer,
	the error message does not appear and the card functions properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The NE3200 network adapter is manufactured by Novell, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: fail start
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbsetup win95 kbHardware 
	Technology        : kbWin95search kbWin95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
