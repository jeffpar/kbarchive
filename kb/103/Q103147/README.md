---
layout: page
title: "Q103147: Err Msg: An Application Error Has Occurred... in SPOOLSS.EXE"
permalink: /kb/103/Q103147/
---

## Q103147: Err Msg: An Application Error Has Occurred... in SPOOLSS.EXE

{% raw %}

	Article: Q103147
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Microsoft Windows NT Advanced Server and trying to configure
	a printer under Services for Macintosh, you may receive the following error
	message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  SPOOLSS.EXE
	
	  Exception: access violation (0xc0000005), Address: 0x766026ee
	
	  Note: The address may be different, but the Access violation code should be
	  the same.
	
	RESOLUTION
	==========
	
	To avoid this error message, do not press the ENTER key while the AppleTalk zone
	is being searched for printers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Control Panel, use the Network icon to install Services for
	  Macintosh.
	
	2. From the Main group window, choose the Print Manager icon.
	
	3. If no printers appear in the Print Manager dialog box, choose Create Printer
	  from the Printer menu and install a printer driver for an Apple LaserWriter
	  printer.
	
	4. Select the Apple LaserWriter, and then choose Properties from the Printer
	  menu in Print Manager.
	
	5. Choose Network Printer at the bottom of the Print To list.
	
	6. Choose AppleTalk Printing Devices from the Print Destinations dialog box and
	  then choose the OK button.
	
	7. From the Available AppleTalk Printing Devices dialog box, select a zone and
	  press the ENTER key.
	
	8. While the computer is searching the zone, press ENTER again.
	
	At this point, the above error message will appear.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
