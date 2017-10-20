---
layout: page
title: "Q97076: PC WRmt: Interrupt Conflicts with LAN Card Installation"
permalink: /kb/097/Q97076/
---

## Q97076: PC WRmt: Interrupt Conflicts with LAN Card Installation

{% raw %}

	Article: Q97076
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have a network interface card (NIC) installed on the system on which you
	run Microsoft Mail Remote version 3.2 for Windows, you should configure the NIC
	such that it does not use Interrupt Request (IRQ) 2, 3, or 4. Use IRQ 5 or
	higher to avoid problems with using the serial port or with its performance. (No
	matter which IRQ you use, verify that it does not conflict with another device.)
	
	MORE INFORMATION
	================
	
	Personal computers commonly use hardware interrupt requests to support different
	peripheral equipment (or accessories). One of these peripherals, apart from your
	modem, can include a NIC to connect your computer to a local-area network
	(LAN).
	
	Many common conflicts occur when two peripherals attempt to service the same IRQ.
	Some common uses of IRQ vectors are as follows:
	
	  IRQ 2: forwards requests to IRQ 9 or higher
	  IRQ 3: serial ports COM2 and COM4
	  IRQ 4: serial ports COM1 and COM3
	  IRQ 5: second parallel printer port (LPT2)
	  IRQ 7: first parallel printer port (LPT1)
	
	Several devices can use the serial communication ports, including printers, mice,
	and modems. The IRQ vectors for COM1 through COM4 are reversed. If a modem uses
	COM1, it must use IRQ4, and so on.
	
	Additionally, the IRQ with a lower number has higher priority for service (in
	other words, IRQ 2 has priority over IRQ 3).
	
	If your network card is installed and configured for IRQ 2, and your network is
	busy, serial communications on IRQ 3 or IRQ 4 can be impaired. If the IRQ 2
	interrupt handler is busy for too long when a serial port interrupt occurs, the
	port will lose characters.
	
	On an active network, if the network card is configured with a lower interrupt
	number than the serial interrupt, the port will lose a character occasionally.
	When this occurs, the packet that contains the character must be resent, and all
	packets in the modem buffers must be resent. This process can be time consuming,
	expensive, and can lead to unacceptably higher communication error rates.
	
	If you can assign the network card to an IRQ that is not currently used on your
	PC, such as IRQ 5 (if you do not have a second parallel printer port installed),
	you can minimize data loss and its consequent retransmission caused by a busy
	network.
	
	Additional query words: adapter 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
