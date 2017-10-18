---
layout: page
title: "Q125328: PC Ext: Purpose of CommInOnly Option for External"
permalink: kb/125/Q125328/
---

## Q125328: PC Ext: Purpose of CommInOnly Option for External

	Article: Q125328
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two scenarios when using the CommInOnly option for the Message
	Transfer Agent (MTA), EXTERNAL.EXE, can be helpful.
	
	1. When setting up two MTAs that will be connected to each other via modem, it
	  is possible that they may try dialing each other at the same time. This will
	  happen if they both have outgoing messages queued and the dialing interval
	  time has elapsed. This will cause the modems to both be busy and not connect
	  to each other, resulting in no mail transferred on that attempt. If you add
	  the CommInOnly option to MTA1, then MTA1 will never attempt to dial out. It
	  will only accept incoming calls. Therefore, outgoing messages queued to be
	  sent from MTA1 to MTA2 will not get delivered until MTA2 dials into MTA1. The
	  External Mail program only dials out if there is outbound mail.
	
	
	2. Use the CommInOnly option when setting up an MTA that only remote users dial.
	  This will prevent that MTA from dialing out to another postoffice and keep
	  the modem free for incoming remote users. This option does not hinder the
	  remote users ability to send or receive messages.
	
	MORE INFORMATION
	================
	
	Please see page 252 in the "Administrator's Guide" for version 3.2 of Microsoft
	Mail for PC Networks.
	
	CommInOnly option
	-----------------
	
	  In .INI file : CommInOnly
	  On command line: /CommInOnly or -KI
	
	Use this option to specify that the remote communications link (CommType of
	asynchronous modem, X.25 Eicon, or X.25 Atlantis board) is to transfer incoming
	messages. Do not use this option with the CommOutOnly option. If you do not
	specify this option or the CommOutOnly option or set one-way mail for the
	postoffice with the Administrators program (ADMIN.EXE), two way mail transfer
	occurs.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : :3.2,3.2a
	
	=============================================================================
	
