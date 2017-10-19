---
layout: page
title: "Q173000: Moving Files on Macintosh Volume Causes Stop 0x0000001E"
permalink: /kb/173/Q173000/
---

## Q173000: Moving Files on Macintosh Volume Causes Stop 0x0000001E

	Article: Q173000
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run or start Services for Macintosh (SFM) on a computer running Windows
	NT Server and Cheyenne's InocuLAN version 4.0 is installed, the following stop
	screen message may occur when you move files on the Macintosh volume:
	
	  STOP: 0x0000001E
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	When the driver INO_FLTR.SYS is present on the computer running Windwos NT
	Server, InocuLAN tracks files that are copied or moved on a Macintosh volume.
	This symptom can occur if either users or applications move files (that is, mail
	clients or a mail gateway).
	
	RESOLUTION
	==========
	
	Cheyenne is aware of this problem and has a patch for it. Contact Cheyenne
	software for more information about the patch.
	
	
	-or-
	
	Remove InocuLAN from the server completely. When you disable the four services
	and restart the computer, the INO_FLPY.SYS and INO_FLTR.SYS drivers will still
	be loaded into memory. The files must be removed from the server completely to
	stop them from loading.
	
	MORE INFORMATION
	================
	
	InocuLAN is manufactured by Cheyenne, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: AFP Apple Talk blue screen 0x1e
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
