---
layout: page
title: "Q82695: MSD.EXE Requires /I Switch with Arcnet Boards"
permalink: /kb/082/Q82695/
---

## Q82695: MSD.EXE Requires /I Switch with Arcnet Boards

{% raw %}

	Article: Q82695
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run Microsoft System Diagnostic (MSD) version 2.0, which ships with Windows
	version 3.1, on a network workstation with an Arcnet board, it is necessary to
	use the /I switch as follows:
	
	  MSD /I
	
	If you run MSD without any switches, the workstation's connections are terminated
	and other workstations on the network using Arcnet boards may experience errors
	or disconnections.
	
	The /I parameter causes MSD to start without looking at the hardware. Choose each
	option you want additional information about, but do NOT choose NETWORK.
	
	
	KBCategory: kbnetwork kbdisplay kb3rdparty kbhw kbtool
	KBSubcategory: win31
	
	Additional query words: 3.10 arc net hang lock ms-dos 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
