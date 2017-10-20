---
layout: page
title: "Q136708: PC Cards (PCMCIA) Related Terms and Definitions"
permalink: /kb/136/Q136708/
---

## Q136708: PC Cards (PCMCIA) Related Terms and Definitions

{% raw %}

	Article: Q136708
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes terms related to PCMCIA cards (also known as PC Cards).
	
	MORE INFORMATION
	================
	
	Host Bus Adapter (HBA):
	
	A chip that protects the PCMCIA bus from dependence on a given hardware
	Architecture by translating between PCMCIA and that architecture.
	
	Socket Services:
	
	The BIOS layer of the PCMCIA software architecture. It handles communication with
	host bus adapters and provides a core API for client drivers.
	
	Card Services:
	
	The layer of the PCMCIA software architecture that sits between Socket Services
	and client drivers. It provides API commands for client drivers and arbitrates
	client-driver access to system resources.
	
	
	Card Information Structure (CIS):
	
	A data structure within non-volatile memory in each PC Card that contains key
	identification and configuration information. Card and Socket Services examines
	the CIS to determine what resources a given card needs.
	
	Driver Stack:
	
	The Card Services, Socket Services, and various client drivers necessary to
	support PC Card devices.
	
	Point Enabler:
	
	A utility that configures a PC Card and HBA to be available to the system at a
	particular IRQ and I/O port address combination. If your PC Card comes with a
	point enabler, you can use this utility rather than full Card and Socket
	Services, though at some cost in convenience. If your computer does not have
	Card and Socket Service (CSS), the PC card can use the point enabler to manage
	system resources. When you are using the point enabler instead of CSS, you may
	experience conflicts with the memory manager installed in your computer. To
	avoid memory manager conflicts, you need to exclude the memory range that the PC
	card is to use. For example, edit the line in CONFIG.SYS file:
	
	  DEVICE = C:\DOS\EMM386.EXE X=DF00H-DFFFH
	
	Tuple:
	
	Tuple is the configuration information built into PCMCIA devices. This
	configuration information consists of items such as the device name, device
	type, default I/O address, voltage requirements, function id and other
	information based on the type of PCMCIA device.
	
	Reference
	---------
	
	"Windows Sources," March 1995, "The Primer (Getting Along with PCMCIA)," page
	148.
	
	Additional query words: prodnt 3.10 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
