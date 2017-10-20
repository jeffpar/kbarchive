---
layout: page
title: "Q95993: WFWG: Cannot See Workstations When Using Tiara NIC"
permalink: /kb/095/Q95993/
---

## Q95993: WFWG: Cannot See Workstations When Using Tiara NIC

{% raw %}

	Article: Q95993
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Tiara technical support, the TNDIS driver has not been tested with
	any of the Lancard E/16PC TP (lattice net based) network interface cards
	(NICs).
	
	The Lancard E/16PC TP has a PWA number on the card. If the last six digits are in
	the range 000000 to 000004, it is a lattice net based card and incompatible with
	Windows for Workgroups.
	
	If you try to use this card with Windows for Workgroups, you may be unable to see
	or use other workstations, but no error messages appear.
	
	MORE INFORMATION
	================
	
	For more information, contact Tiara technical support.
	
	The Tiara products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 NIC 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
