---
layout: page
title: "Q94655: Using the HP 27247A Network Interface Card with WFWG"
permalink: /kb/094/Q94655/
---

## Q94655: Using the HP 27247A Network Interface Card with WFWG

{% raw %}

	Article: Q94655
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HP 27247A Network Interface Card is supported for use with Windows for
	Workgroups (WFWG). There are several revisions of this network card and the
	configuration options available for the card depend on which revision of the
	card is being used.
	
	The Windows for Workgroups Network Adapters setup lists the available interrupt
	request lines (IRQs) for the HP 27247A network interface card (NIC) as IRQ 3, 4,
	5, 7, 9, 10, and 11. This is incorrect; use of IRQ 9 is not possible.
	
	If IRQ 9 is selected, the following error message occurs when you start the
	machine:
	
	  HP LAN ADAPTER/16+ Illegal value in PROTOCOL.INI after parameter: Interrupt=
	
	IRQ 9 is not a valid selection for the HP 27247A network card. To select a
	different available IRQ:
	
	1. Run Control Panel.
	
	2. Choose the Network icon.
	
	3. In the Network Setting dialog box, choose the Adapters button. The Network
	  Adapters dialog appears.
	
	4. Choose the Setup button.
	
	5. Change the Interrupt (IRQ) setting to something other than 9.
	
	6. Choose the OK button to save your changes.
	
	7. Exit Windows and run the Setup utility for the card provided by HP and change
	  the IRQ setting to the same value you used in step 5.
	
	MORE INFORMATION
	================
	
	Earlier versions of the HP 27247A network card may not work on IRQ 10 or 11. The
	60001 series HP27247A cards cannot be used with IRQs 10 or 11, while the 60002
	(and later) series can be used with these IRQs.
	
	If you are trying to use an IRQ that the card does not support, such as IRQ 10 or
	11 on the 60001 series, or an IRQ that is already in use, the following error
	message may occur when you start your system:
	
	  Error 5733: The protocol manager has reported an incomplete binding.
	
	To prevent this error message from occurring, change the IRQ for the card to a
	valid, unused IRQ. If you have an earlier 60001 series card, try using IRQ 3, 4,
	5, or 7.
	
	Hewlett-Packard (HP) manufactured several revisions of the 27247A network card.
	The version of the network card can be identified by the number stamped on the
	network card's bracket (which should be visible from outside the computer case)
	or by a label on the network card that indicates either 60001 or 60002 (or
	later).
	
	60001 Series
	------------
	
	The 60001 series can be configured for Windows for Workgroups on IRQ 3, 4, 5, and
	7 (if no other hardware device is using the selected interrupt).
	
	60002 Series (and Later)
	------------------------
	
	The 60002 series and later can be configured for Windows for Workgroups on IRQ 3,
	4, 5, 7, 10, and 11 (if no other hardware device is using the selected
	interrupt).
	
	
	Additional query words: 3.1 3.10 LAN Manager errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
