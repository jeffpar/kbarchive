---
layout: page
title: "Q111954: SMB Incorrectly Defined in Windows NT Resource Kit"
permalink: kb/111/Q111954/
---

## Q111954: SMB Incorrectly Defined in Windows NT Resource Kit

	Article: Q111954
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Resource Guide, Volume 1 of the Windows NT Resource Kit,
	incorrectly defines the functionality of a Server Message Block (SMB) as it
	pertains to networking architecture. On page 583, it states:
	
	  The redirector packages SMB requests meant for remote computers in a
	  structure known as a Network Control Block (NCB). NCBs can be sent over
	  the network to a remote device.
	
	In actuality, NCBs are never sent over the wire. Rather, SMBs are transmitted
	over the physical media instead.
	
	RESOLUTION
	==========
	
	The NCB functions as an intermediary between the redirector and the protocol
	driver in Microsoft network architecture. Requests from the redirector sent down
	the network stack to the protocol driver must first be registered as NCB
	commands. Examples of NCB commands are ADD.NAME, CALL, RECEIVE, and SEND. Once
	the commands are registered in the NCB, the redirector calls the protocol driver
	and passes a pointer to the memory location of the NCB. The protocol driver can
	then act on the data contained in the SMBs according to the instructions
	contained in the NCB. The protocol driver then registers the results of the
	completed redirector requests in the appropriate NCB field and returns program
	control to the redirector.
	
	The technical classification for an NCB is Interface Control Information, or ICI.
	Interface Control Information functions completely within the layered
	architecture of an individual protocol stack, and therefore this control
	information itself never passes across the physical media of the network. The
	SMB may be classified as a Protocol Data Unit (PDU) which ultimately is
	transmitted across the physical network connection from one station to another.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT Resource Kit. We
	are researching this problem and will post new information here as it becomes
	available.
	
	
	Additional query words: CFE prodnt requestor buffer osi chain.send
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
