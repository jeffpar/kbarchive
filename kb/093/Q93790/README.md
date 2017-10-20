---
layout: page
title: "Q93790: RipBAR 6.0 Not Compatible with Windows NT 3.5"
permalink: /kb/093/Q93790/
---

## Q93790: RipBAR 6.0 Not Compatible with Windows NT 3.5

{% raw %}

	Article: Q93790
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RipBAR for Windows NT, version 6.0, is not compatible with Windows NT version
	3.5.
	
	The application starts, but it doesn't complete painting the screen and an error
	message appears stating that the instruction at "0x00033d4b" referenced memory
	at "0x00000021" and the memory could not be read.
	
	CAUSE
	=====
	
	This problem occurs because the application is dereferencing a GDI object handle
	as if it were a pointer. This doesn't cause a problem in Windows NT version 3.1,
	but it causes an access violation in Windows NT version 3.5.
	
	RESOLUTION
	==========
	
	This problem has been confirmed with SoftDesign and an update is now available.
	To obtain an update to RipBAR version 6.04, contact the author, Jonathan
	Carroll, at one of the following addresses:
	
	Conventional mail::
	
	  Jonathan Carroll 28 Parkland Pointe Claire, Quebec CANADA H9R 2 E8
	
	CompuServe::
	
	  User ID: 74017,3242
	
	GEnie::
	
	  User ID: J.H. Carroll
	
	E-mail (Internet)::
	
	  74017.3242@compuserve.com
	
	RipBAR is manufactured by SoftDesign, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt third-party 3rdparty thirdparty
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
