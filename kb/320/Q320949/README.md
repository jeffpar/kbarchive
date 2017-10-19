---
layout: page
title: "Q320949: PRB: 1394 Devices Stop Responding During Isochronous Transfers"
permalink: /kb/320/Q320949/
---

## Q320949: PRB: 1394 Devices Stop Responding During Isochronous Transfers

	Article: Q320949
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbOSWin2000fix kbWin2000sp3fix kbWinXPsp1fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a 1394 device performs an isochronous transfer, this operation may be
	unsuccessful if certain non-page aligned data buffers are used.
	
	CAUSE
	=====
	
	If a 1394 device driver passes non-page aligned data buffers at
	REQUEST_ISOCH_ATTACH_BUFFERS time and uses the DESCRIPTOR_SYNCH_ON_SY flag in
	the attached isoch descriptors, you may receive an error message on a blue
	screen. Note that not all non-page aligned buffers cause this behavior. This
	behavior occurs if Ohci1394.sys does not correctly map the ScatterGather DMA
	array.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  
	
	  Date         Time   Version        Size    File name     Operating system
	  -------------------------------------------------------------------------
	  07-Mar-2002  10:51  5.0.2195.5040  37,712  OHCI1394.SYS  Windows 2000
	  11-Mar-2002  12:18  5.1.2600.34    55,552  OHCI1394.SYS  Windows XP
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbAppCompat kbBaseOS bluescreen fail crash
	
	======================================================================
	Keywords          : kbOSWin2000fix kbWin2000sp3fix kbWinXPsp1fix 
	Technology        : kbWinXPHome kbWinXPPro kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
