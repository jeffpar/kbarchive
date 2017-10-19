---
layout: page
title: "Q47507: Mac DOS: Err Msg: &quot;You Need to Run AppleTalk&quot; with TOPS"
permalink: /kb/047/Q47507/
---

## Q47507: Mac DOS: Err Msg: &quot;You Need to Run AppleTalk&quot; with TOPS

	Article: Q47507
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run the Microsoft Mail (PC Client) program before loading the AppleTalk
	driver software provided with your AppleTalk network card, you may receive the
	following message upon starting Mail:
	
	  You need to run the AppleTalk device driver software before starting Mail.
	
	This message may also appear if Mail did not locate the AppleTalk driver at a
	specific software interrupt address. Mail keeps track of the AppleTalk driver's
	location through the MAIL.INI file, which is located in the Mail program
	directory.
	
	AppleTalk protocol requires that the AppleTalk driver be loaded within the
	software interrupt address range 5C-6F. PC Client Mail uses software interrupt
	address 60 as the default value when locating the AppleTalk driver.
	
	If Mail Setup locates the AppleTalk driver at a software interrupt address other
	than 60, it will add the statement INT=XX to the MAIL.INI file to inform Mail
	that the driver will not be found in the default software interrupt address. You
	may also need to inform the device driver to load at this address through a
	/INT=XX parameter (for example, ALAP /INT=60).
	
	MORE INFORMATION
	================
	
	This problem usually occurs with TOPS/DOS versions 2.10 and 3.00 and the
	ALAP.EXE AppleTalk driver.
	
	The following is a list of default software interrupt addresses used by the
	AppleTalk-compatible network cards supported by PC Client Mail:
	
	  Card                               Default Address
	  ----                               ---------------
	
	  Apple LocalTalk PC card            60
	  DayStar Digital PC Interface       60
	  DayStar Digital MC Interface       60
	  Hercules Network Plus              5C
	  Tangent PC MacBridge I,II          60
	  TOPS FlashCard                     5C
	
	Additional query words: 1.37 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	
