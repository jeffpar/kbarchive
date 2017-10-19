---
layout: page
title: "Q151859: Remote Control of NEC Versa M/100 is Unstable Using IPX Sockets"
permalink: /kb/151/Q151859/
---

## Q151859: Remote Control of NEC Versa M/100 is Unstable Using IPX Sockets

	Article: Q151859
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsremote kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote Control of NEC Versa M/100 is unstable using IPX sockets if the system is
	using a network interface card in its docking station.
	
	MORE INFORMATION
	================
	
	In the NEC Versa M/100 the following scenario makes SMS unable to maintain a
	stable remote control session:
	
	The NEC Versa M/100 is running Windows 95 with or without Service Pack 1 and is
	in its docking station using the docking station's network interface card. The
	network protocol is configured to use IPX and you are using sockets only to
	create the remote control session. The Windows 95 client will disconnect the
	session within 30 seconds to two minutes. Attempts to reconnect will fail until
	the client system is cold booted. The issue is reproducible regardless of
	network interface card used. The issue cannot be reproduced if the notebook is
	not in the docking station.
	
	Technical support at NEC has confirmed this to be an issue with the docking
	station hardware.
	
	Hardware:
	NEC Versa M/100
	model: pc-480-1558
	serial no. 57003653
	docking station model op-560-4701
	serial number: 4Y003491H
	
	Phoenix LAP486SL 1.03
	Phoenix 486SL 1.04.06
	ROM BIOS 1.04.07
	
	
	Firmware upgrades can be obtained from NEC Technical Support at (800) 325- 5500,
	access code 700.
	
	The third-party contact information included in this article is intended to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The NEC Versa M/100 is manufactured by NEC Technologies, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsremote kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : WINDOWS:95; winnt:1.1
	
	=============================================================================
	
