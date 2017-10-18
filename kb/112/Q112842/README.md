---
layout: page
title: "Q112842: Locating the Source of AppleTalk Error 48"
permalink: kb/112/Q112842/
---

## Q112842: Locating the Source of AppleTalk Error 48

	Article: Q112842
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running Services for Macintosh, there may be multiple occurrences
	of AppleTalk error 48 in the event viewer. These errors may be caused by a
	faulty network card on one of the computers.
	
	MORE INFORMATION
	================
	
	To locate the address of the computer with the faulty network card, look at the
	error message.
	
	Example
	-------
	
	  Date: 11/22/93                            Event ID: 48
	  Time: 10:19:32 AM                         Source: Apple Talk
	  User: N/A                                 Type: Warning
	  Computer: JIAN                            Category: None
	
	  Description:
	
	  Packet received on adapter "<AdapterName>" contained errors and is not
	  being accepted.
	
	  Data: (x)Bytes ( )Words
	
	  0000: 00 00 3c 00 02 00 90 00   ..<... .
	  0008: 00 00 00 00 30 00 00 80   ....0..
	  0010: bf 07 03 00 01 00 01 00   ........
	  0018: 00 00 00 00 00 00 00 00   ........
	  0020: 00 00 00 00 00 00 00 00   ........
	  0028: aa aa 03 00 00 00 80 f3   aa....
	  0030: 00 01 80 9b 06 04 00 01   .. .....
	  0038: 08 00 02 03 52 31 00 01   ....R1..
	  0040: 0e 01 00 00 00 00 00 00   ........
	  0048: 00 01 0f 50 00 00 ff ff   ...P..
	  0050: ff ff ff ff 80 01 00 00   yyyy ...
	  0058: 00 01 00 dd 01 0b b7 a6   ...y..
	  0060: 80 20 00 00                ...
	
	In this example of an AppleTalk error 48, 0800020352310001 is the address of the
	computer with the bad network card:
	
	After you have this address, you can use a tracing program to see whose computer
	it is and then correct the problem.
	
	Additional query words: prodnt SFM MacFile MacPrint
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
