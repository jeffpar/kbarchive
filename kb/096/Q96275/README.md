---
layout: page
title: "Q96275: Mac ARA: AppleLink Gateway Conflicts with ARA"
permalink: kb/096/Q96275/
---

## Q96275: Mac ARA: AppleLink Gateway Conflicts with ARA

	Article: Q96275
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1,3.1a,3.1c,3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.1, 3.1a, 3.1c, 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The communication program in the AppleLink gateway will not function correctly
	with AppleTalk Remote Access (ARA) version 1.0. If ARA is installed on the
	server with an AppleLink master gateway and the communication program in the
	AppleLink gateway tries to initiate a call, the following error message will
	occur:
	
	  Ramsdopen: -97
	
	CAUSE
	=====
	
	ARA utilizes the Serial Port Arbitrator to check if the serial port is in use
	before attempting communication. The AppleLink gateway does not recognize the
	Serial Port Arbitrator and tries to use the modem port directly. To avoid this
	problem, put the AppleLink gateway on another server that does not have ARA
	installed. If an alternate network connection exists such as EtherTalk or
	TokenTalk, ARA may be moved to the printer port which will leave the modem port
	available for AppleTalk exclusively. This solution however, requires a modem for
	both the gateway and ARA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1 of Microsoft Mail
	for AppleTalk Networks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.10a 3.10c 3.10d macmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310 kbMailATN310a kbMailATN310c kbMailATN310d
	Version           : WINDOWS:3.1,3.1a,3.1c,3.1d
	
	=============================================================================
	
