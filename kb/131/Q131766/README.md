---
layout: page
title: "Q131766: Description of ViSCA in Windows 95"
permalink: /kb/131/Q131766/
---

## Q131766: Description of ViSCA in Windows 95

{% raw %}

	Article: Q131766
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the ViSCA VCR Device (Media Control) in Windows 95.
	
	MORE INFORMATION
	================
	
	ViSCA is an acronym for Video System Control Architecture, a machine- control
	protocol designed by Sony to allow synchronized control of up to seven ViSCA
	devices on a daisy chain. Using the Windows 95 VCR ViSCA protocol and the
	computer's RS-232 port, you can control a Vdeck or other device that can be
	operated on a ViSCA port. You can use the VCR ViSCA protocol on any computer
	with a serial port.
	
	
	ViSCA uses packets to send messages. Each packet consists of the following three
	parts:
	
	- The packet header. This is a single byte indicating the source and
	  destination for the message. Addresses are actually encoded in the message
	  header.
	
	- The message header. This can be up to 14 bytes in length and contains
	  information to be processed. This part of the packet contains the command
	  message, inquiry message, and address message.
	
	- The terminator. This is a single byte indicating the end of a packet.
	
	The commands used to control, and retrieve information from, the device are
	passed in the message header.
	
	
	Facts About ViSCA:
	
	- The primary purpose of the ViSCA protocol is the control of devices on a
	  single network.
	
	- The ViSCA protocol is a platform-independent machine-control protocol.
	
	- Using the ViSCA protocol, up to seven devices can share the same network and
	  can be addressed individually.
	
	- The ViSCA protocol is flexible and can be extended to a wide variety of
	  equipment such as monitors, camcorders, VCRs, A/V switchers, and so on.
	
	- The protocol is open, and no licensing is required for distribution of
	  ViSCA-compatible software or hardware.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
