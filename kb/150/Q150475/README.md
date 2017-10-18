---
layout: page
title: "Q150475: XCLN: Exchng32 Causes Invalid Page Fault on ThinkPads"
permalink: kb/150/Q150475/
---

## Q150475: XCLN: Exchng32 Causes Invalid Page Fault on ThinkPads

	Article: Q150475
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Windows 95 client on an IBM ThinkPad, you
	might see the following error when you exit Microsoft Exchange:
	
	  EXCHNG32 caused an invalid page fault in module <unknown> at
	  0000;10001b50
	
	CAUSE
	=====
	
	The ThinkPad has Collabra Share installed, an add-on extension for Microsoft
	Exchange. Collabra Share includes an extension DLL to automatically launch the
	application from the Microsoft Exchange toolbar. This DLL causes the error.
	
	RESOLUTION
	==========
	
	Exit the Microsoft Exchange client and use the Windows 95 Registry Editor
	(Regedit.exe) to find the following key in the Windows 95 registry:
	
	  HKEY_LOCAL_MACHINE
	     SOFTWARE
	        Microsoft
	           Exchange
	              Client
	                 Extensions
	
	Delete the following value:
	
	  QuickLaunch   "4.0;C:\COLLABRA\POLL95.DLL;1;01000000000001;111000"
	
	Restart the Microsoft Exchange client.
	
	MORE INFORMATION
	================
	
	For information about how to edit the registry, view the Changing Keys and
	Values online Help topic in Regedit.exe. Note that you should make a backup copy
	of the registry files (System.dat and User.dat) before you edit the registry.
	
	WARNING: Using the Registry Editor incorrectly can cause serious problems that
	may require you to reinstall Windows 95. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	Collabra Share is manufactured by Collabra Software, which has been purchased by
	Netscape Communications, a vendor independent of Microsoft. We make no warranty,
	implied or otherwise, regarding this product's performance or reliability. You
	can contact Netscape Communications regarding Collabra Share at (415) 940-6400.
	
	
	Additional query words: ThinkPad exchange GP fault error
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
