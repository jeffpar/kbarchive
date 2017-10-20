---
layout: page
title: "Q158836: Compaq USB Camera May Not Work Properly on Other Computers"
permalink: /kb/158/Q158836/
---

## Q158836: Compaq USB Camera May Not Work Properly on Other Computers

{% raw %}

	Article: Q158836
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a Compaq USB camera with an OpenHCI (OHCI) USB host
	controller, the camera may not be detected and may not work properly.
	
	CAUSE
	=====
	
	The Compaq USB camera was designed and developed for use on the Intel Universal
	HCI (UHCI) USB host controller. It is not supported on an OHCI controller.
	
	
	MORE INFORMATION
	================
	
	OHCI host controllers employ optimization on the control endpoint zero, where
	multiple transactions are submitted within a single frame. The UHCI host
	controller sends only a single transaction per frame. The camera cannot respond
	to a second transaction within a single frame.
	
	The Compaq USB camera that is included with the Compaq Presario computer is
	intended to be used only on that computer. For more information, contact Compaq.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
