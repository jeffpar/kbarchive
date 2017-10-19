---
layout: page
title: "Q69193: Mac Srv: Macintosh II Server Hangs Occasionally"
permalink: /kb/069/Q69193/
---

## Q69193: Mac Srv: Macintosh II Server Hangs Occasionally

	Article: Q69193
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail server may occasionally hang when it is subject to a large
	amount of server activity. This behavior has primarily been observed on
	Macintosh II's but may also occur on the Macintosh SE, SE/30, IIx, or IIcx. The
	problem described will typically occur under high-stress conditions, such as
	when a large image message is read simultaneously on two separate workstations.
	
	To correct this problem, update the disk drivers with the Apple HD SC Setup
	program that is shipped with System versions 6.0.5 and later. Microsoft has been
	unable to reproduce the problem when using the updated disk drivers.
	
	MORE INFORMATION
	================
	
	The driver update procedure does not reformat the hard disk. For safety reasons,
	a backup of the Microsoft Mail data file should be made before attempting to
	update the disk drivers.
	
	For more information on the Apple HD SC Setup program, see the "Macintosh System
	Software User's Guide" for System version 6.0.5.
	
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
