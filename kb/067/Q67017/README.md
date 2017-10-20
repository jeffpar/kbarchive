---
layout: page
title: "Q67017: Fontware Installation Kit Did Not Complete All Phases"
permalink: /kb/067/Q67017/
---

## Q67017: Fontware Installation Kit Did Not Complete All Phases

{% raw %}

	Article: Q67017
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make fonts with the Bitstream Fontware Installation Kit, not all the
	phases may be completed.
	
	You may have run out of memory. Check the Fontware error log for this "make
	fonts" session to see if this is the case. If it is, you may have memory
	resident programs or device drivers loaded in your system that can be removed
	temporarily. Make backup copies of your CONFIG.SYS and AUTOEXEC.BAT files; edit
	the original files, increase the amount of free memory, and reboot the computer
	under this new configuration.
	
	MORE INFORMATION
	================
	
	A Bitstream Fontware Installation Kit is available through a fulfillment coupon
	included with the retail version of Microsoft PowerPoint for Windows. This
	starter kit will install fonts for Windows applications only; however, the kit
	can be merged with other starter kits to provide support for multiple
	applications.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
