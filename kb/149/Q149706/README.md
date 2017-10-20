---
layout: page
title: "Q149706: IRQ Conflict Using MicroGate SDLC Adapter"
permalink: /kb/149/Q149706/
---

## Q149706: IRQ Conflict Using MicroGate SDLC Adapter

{% raw %}

	Article: Q149706
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MicroGate SDLC Link Service may report an IRQ conflict if the MicroGate MG96
	or MG144 SDLC adapter is installed in a SNA Server. When you select Adapter
	Details during the MicroGate link service installation, you will see information
	similar to the following if this problem occurs:
	
	  I/O Port Address: 0x380
	  Interrupt(IRQ): conflict?
	  DMA Channel: 1
	
	The System Event Log may also contain the following errors:
	
	  
	
	  Event ID: 7001
	  Source: Service Control Manager
	  Description: The SnaMG1 service depends on the IBMSYNC service which
	  failed to start because of the following error: A device attached to
	  the system is not functioning.
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: The IBMSYNC service failed to start due to the following
	  error:
	  A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	The MicroGate MG96 and MG144 SDLC adapters include a built-in V.32 modem. These
	adapters are hardwired to use IRQs 3 and 4. Microsoft Windows NT detects IRQ3 as
	being used by the UART on these adapters during its startup sequence.
	
	WORKAROUND
	==========
	
	Change the dip switches on the MicroGate SDLC adapter to have the UART use COM3,
	instead of COM2, which is the default. The changes must be made via dip switches
	on the adapter because they are not software configurable. The diagnostics
	software will allow you to make configuration changes and test the changes.
	However, the changes are written to a configuration file and do not change the
	adapter settings.
	
	The default dip switch settings on the adapter are:
	
	S1: 1-8:  01111001 (0=off, 1=on) S2: 1-4: 1111 (all flipped up to ON
	position)
	
	Change the dip switches to:
	
	S1: 1-8:  10011001               S2: 1-4: 0111
	
	This instructs the adapter to use COM3 for the UART.
	
	UART = COM3, Base Address = x'03e8', IRQ = 5
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
