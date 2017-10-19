---
layout: page
title: "Q80662: Mac Wkst: Hayes Smartmodem 9600 Modification for MSMail Dial-In"
permalink: /kb/080/Q80662/
---

## Q80662: Mac Wkst: Hayes Smartmodem 9600 Modification for MSMail Dial-In

	Article: Q80662
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.0a,3.0b,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.0a, 3.0b, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Hayes Smartmodem 9600 comes from the factory with error checking on by
	default (AT&Q5). Error checking must be disabled for the Hayes Smartmodem
	9600 to work correctly with the MSMail Dial-In Control Panel device.
	
	To disable error checking permanently for Dial-In use, issue the following
	commands, using a communications program such as DynaComm, or any other
	communications program that will echo back entered modem commands. (NOTE: You
	CANNOT use the Dial-In program to perform this action.)
	
	  AT&Q0 (Write back to ACTIVE PROFILE)
	  OK
	  AT&W0 (Write back to STORED PROFILE 0)
	  OK
	  AT&W1 (Write back to STORED PROFILE 1)
	  OK
	
	The &W command writes the change back to the modem, and saves it in non-
	volatile RAM for all future Dial-In modem sessions. The modem also has two
	default profiles, numbered 0 and 1, that can be called up for use.
	
	The W0 command writes the change back to stored profile 0. The W1 command writes
	back to stored profile 1. By writing back to both stored profiles, this ensures
	that no problems will arise if another profile is used for data transfer.
	
	The OKs are the result of typing in each of the above AT commands. If an error
	message is returned after issuing any of the above commands, there may be a
	problem with the modem, and you should contact Hayes Technical Support.
	
	The Hayes SmartModem is manufactured by Hayes Microcomputer Products, Inc., and
	DynaComm is manufactured by Future Soft Engineering, Inc., vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.00b 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN300a kbMailATN300b kbMailATN310
	Version           : WINDOWS:3.0,3.0a,3.0b,3.1
	
	=============================================================================
	
