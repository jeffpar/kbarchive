---
layout: page
title: "Q122129: Microsoft RAS &amp; At Work PC Fax Won't Run w/ XEMCOMM.DRV Loaded"
permalink: /kb/122/Q122129/
---

## Q122129: Microsoft RAS &amp; At Work PC Fax Won't Run w/ XEMCOMM.DRV Loaded

	Article: Q122129
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Xircom PCMCIA Modem or Modem+Ethernet is running on your computer, neither
	Microsoft Remote Access Service (RAS) nor Microsoft At Work PC Fax installs or
	runs correctly.
	
	CAUSE
	=====
	
	Both Xircom PCMCIA Modem and Modem+Ethernet replace the Windows COMM.DRV file
	with a Xircom proprietary communications driver, XEMCOMM.DRV. The XEMCOMM.DRV
	driver is incompatible with Microsoft Remote Access Service (RAS) and Microsoft
	At Work PC Fax.
	
	By contrast, the XEMCOMM.DRV driver runs correctly with Windows Terminal and
	other Windows-based communication applications.
	
	STATUS
	======
	
	At this time, there is no workaround for this problem. For more information,
	contact Xircom technical support.
	
	MORE INFORMATION
	================
	
	The PCMCIA Modem and Modem+Ethernet products included here are manufactured by
	Xircom, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
