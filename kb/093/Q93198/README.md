---
layout: page
title: "Q93198: Windows for Workgroups NET START Error 5736"
permalink: /kb/093/Q93198/
---

## Q93198: Windows for Workgroups NET START Error 5736

{% raw %}

	Article: Q93198
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message after the NET START command in the
	AUTOEXEC.BAT file is processed:
	
	  hardware failure error 5736
	
	CAUSE
	=====
	
	This error can occur if one of the following conditions exists:
	
	- You are using an IBM Token Ring network interface card (NIC) and there is a
	  memory conflict caused by a non-standard ROM address.
	
	- You have an Intel EtherExpress 16 network interface card (NIC) and your AMI
	  Plug and Play BIOS "Interrupts from Available" CMOS entry is set to something
	  other than "Used by ISA Slot."
	
	
	- You are using an IBM Token Ring PCMCIA network adapter and the IBMTOKCS.DOS
	  driver written specifically for it.
	
	- You are using an Intel EtherExpress 16 network adapter and another device in
	  your computer (such as a SCSI controller) is using base address 0x300.
	
	RESOLUTION
	==========
	
	Use any one of the following methods to work around this problem:
	
	- Add the following line to PROTOCOL.INI file in the [MS$IBMTR1] section:
	
	  RAM=0xD800
	
	  NOTE: This section can also be named [MS$IBMTR2], [MS$IBMTR3], or [MS$IBMTR4].
	
	- Set your AMI Plug and Play BIOS "Interrupts from Available" CMOS entry to
	  "Used by ISA Slot."
	
	- Change the default RAM address for your IBM Token Ring PCMCIA network adapter
	  from D800 to D400, and change the IRQ from 10 to 5.
	
	- Configure the Intel EtherExpress 16 card to use a different base address.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
