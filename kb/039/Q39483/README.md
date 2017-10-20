---
layout: page
title: "Q39483: Mac DOS: Installing a LocalTalk Compatible Card in an IBM PC/XT"
permalink: /kb/039/Q39483/
---

## Q39483: Mac DOS: Installing a LocalTalk Compatible Card in an IBM PC/XT

{% raw %}

	Article: Q39483
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IBM PC/XT or a PC/XT compatible uses interrupt 5 for the hard disk
	controller. To avoid conflicts, no devices installed in an XT should use
	interrupt 5. To reduce the possiblity of conflicts between other applications
	and software drivers, set the DMA (direct memory access) channel to 1; note also
	that the software interrupt should be located at address 60.
	
	MORE INFORMATION
	================
	
	The following table shows some of the common devices that might be installed in
	an XT, the interrupts used by these devices (in brackets []), and the possible
	interrupt settings for the Farallon LocalTalk card or compatible cards:
	
	Net Card  Mouse    COM1  COM2    Possible PC LocalTalk Card Settings
	--------  -----    ----  ----    -----------------------------------
	
	[2]       [2,3,4]  [4]   [3]
	
	No        No       No    No      Interrupt = 2, 3, or 4
	
	No        No       Yes   No      Interrupt = 2 or 3
	
	No        Yes      Yes   No      Interrupt = 3 with mouse interrupt=2
	                                Interrupt = 2 with mouse interrupt=3
	
	No        Yes      Yes   Yes     Interrupt = 2 requires disabling mouse
	                                Interrupt = 3 requires disabling COM2
	
	Yes       No       No    No      Interrupt = 3 or 4
	
	Yes       No       Yes   No      Interrupt = 3
	
	Yes       Yes      Yes   No      Interrupt = 3 requires disabling mouse
	                                Interrupt = 4 requires disabling COM1
	
	Yes       No       Yes   Yes     Interrupt = 2 requires disabling net
	                                              card
	                                Interrupt = 3 requires disabling COM2
	                                Interrupt = 4 requires disabling COM1
	                                              and COM2
	
	Yes       Yes      No     No     Interrupt = 3 with mouse interrupt=4
	                                Interrupt = 4 with mouse interrupt=3
	
	If you still encounter problems installing your Farallon LocalTalk card, call
	Farallon Technical Support at (415) 596-5000.
	
	Additional query words: 1.37 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	

{% endraw %}
