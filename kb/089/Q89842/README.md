---
layout: page
title: "Q89842: System May Not Boot After Installing Intel Ether Express"
permalink: /kb/089/Q89842/
---

## Q89842: System May Not Boot After Installing Intel Ether Express

{% raw %}

	Article: Q89842
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some revisions of the Intel Ether Express 16 may conflict with Trident or TSENG
	Labs video cards. This may prevent the system from booting or may cause it to
	boot without video capability.
	
	
	CAUSE
	=====
	
	Intel has confirmed that this hardware conflict occurs when its network card and
	a VGA card, both of which have a capacitor on the reset line, are used on
	motherboards that cannot manage multiple capacitors on the reset line. Intel has
	removed the capacitor from its cards to eliminate this problem.
	
	MORE INFORMATION
	================
	
	To identify the Intel cards that may cause this problem, look at the last five
	digits of the serial number for the card. This eleven-digit number can be found
	on the box or on the bar code label on the card itself.
	
	The last five digits of the serial number are in the format WWYSS, where "WW"
	indicates the work week number, "Y" indicates the year, and "SS" indicates the
	manufacturing site number.
	
	The following cards have a capacitor on the reset line and may cause the above
	behavior:
	
	  If YSS=207, then WW must be less than 20.
	  If YSS=213, then WW must be less than 25.
	  If YSS=212, then WW must be less than 21.
	
	Additional query words: 3.10 3.11 EE16 SVGA TVGA 8800 8900 ETHEREXPRESS 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
