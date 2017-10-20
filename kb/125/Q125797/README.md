---
layout: page
title: "Q125797: Dell Computer Hangs with ATI Mach 64 ISA Display Adapter"
permalink: /kb/125/Q125797/
---

## Q125797: Dell Computer Hangs with ATI Mach 64 ISA Display Adapter

{% raw %}

	Article: Q125797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ATI Mach 64 ISA display adapter in a Dell DE-series computer in
	which the onboard VGA adapter has been disabled through the CMOS (not by using
	the jumper), the computer may stop responding (hang) during Windows 95 Setup, or
	during detection if the ATI adapter is installed after Windows 95 is installed.
	
	This problem can also occur with a Dell Omniplex PCI-series computer. You can
	correct this problem on these computers by upgrading the BIOS to revision A10.
	
	CAUSE
	=====
	
	The Windows 95 detection searches the ROM area of the computer's memory. The ATI
	Mach 64 adapter uses the BFC00 address. During detection, Windows 95 receives
	information from the onboard display adapter, causing Windows 95 to hang.
	
	
	STATUS
	======
	
	Dell Computer Corporation is aware of this situation and is researching the
	problem. We will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: locks crashes display
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
