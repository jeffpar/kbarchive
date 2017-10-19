---
layout: page
title: "Q104686: PC Rmt WRmt: Connecting Asynchronously at Different Speeds"
permalink: /kb/104/Q104686/
---

## Q104686: PC Rmt WRmt: Connecting Asynchronously at Different Speeds

	Article: Q104686
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2; WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for MS-DOS, versions 2.1, 3.0, 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 2.1, 3.0, and 3.2 of Microsoft Mail Remote for MS-DOS and version
	3.2 of Microsoft Mail Remote for Windows, you should use identical modems on
	each end of a communication session. However, when you use the Hayes V-Series
	modems with the VSERIES.SCR file, it is possible for the modems to connect at a
	different speed. For example, the calling modem might connect at 9600 baud, when
	the called modem might connect at 2400 baud. This results in a time-out failure
	when mail is sent from the called modem (2400 baud) to the calling modem (9600
	baud).
	
	CAUSE
	=====
	
	Versions 3.0 and later of Mail Remote includes two V-Series scripts. One is for
	the V4.2 family (V42SERIE.SCR) and the other is for the V-Series Smartmodems
	(VSERIES.SCR). Only the V42SERIE.SCR can work with different connection changes
	such as 1200 and 2400 baud. However, only the VSERIES.SCR can call out at high
	speed (9600 baud and higher).
	
	V42SERIE.SCR works with 1200, 2400, 9600, and 19200 baud in Call-OUT and Call-IN
	connections.
	
	VSERIES.SCR works with 1200, 2400, 9600, and 19200 baud in Call-IN connections,
	but only works with 9600 and 19200 baud in Call-OUT connections.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailRemote300DOS kbMailRemote320DOS kbMailRemote210DOS kbMailRemote320
	Version           : MS-DOS:2.1,3.0,3.2; WINDOWS:3.2
	
	=============================================================================
	
