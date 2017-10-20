---
layout: page
title: "Q78830: PC Ext: Reverse Carrier for Voice/Modem Switches"
permalink: /kb/078/Q78830/
---

## Q78830: PC Ext: Reverse Carrier for Voice/Modem Switches

{% raw %}

	Article: Q78830
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Voice/Modem switches are used to detect incoming modem calls and direct them to
	a modem while allowing voice calls to go to a telephone. By default, the
	Microsoft Mail for PC Networks External Mail program (EXTERNAL.EXE) uses reverse
	carrier to call all Call/Request users. Reverse carrier causes the dialing modem
	to call out its carrier, rather than waiting for the answering modem to speak
	first. This is necessary for Voice/Data or Voice/Modem switches to work
	properly.
	
	This is a feature of the External program; there is no way to turn it off.
	However, some modems have a setting for how long to wait after the dial, before
	calling out their handshake carrier. For example, a Microcom 2400 baud modem has
	an F7 setting. By setting that register to 30 in the modem script, the carrier
	will sound immediately after the phone number is dialed; increasing the register
	to 60 will delay the carrier several seconds.
	
	For more information about reverse carrier, see the owner's manual for your
	modem.
	
	For more information about changing script files, see Appendix N of the Microsoft
	Mail "Administrator's Guide."
	
	Microcom modems are manufactured by Microcom Systems, Inc., a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 2.10e 3.00 3.00b 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b kbMailPCN350 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
