---
layout: page
title: "Q192199: DOS Remote Client Displays Year 100 on or after Year 2000"
permalink: /kb/192/Q192199/
---

## Q192199: DOS Remote Client Displays Year 100 on or after Year 2000

	Article: Q192199
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0; WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	- Microsoft Mail Remote for MS-DOS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create or read mail after the year 2000, the date will appear as 100
	plus the year. For example, the year 2001 will appear as 101. This problem will
	occur for all mail created by or received by the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  Listen.exe     7/28/98    6:16p    72,507 bytes (version 3.0.4)
	  Mail.exe       7/28/98    6:15p   221,153 bytes (version 3.0.4)
	  Transmit.exe   7/31/98   11:36a    56,923 bytes (version 3.0.4)
	
	This hotfix has been posted to the following Internet location as Remcy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Remote for MS-DOS
	version 3.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350 kbMailRemote300DOS
	Version           : MS-DOS:3.0; WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
