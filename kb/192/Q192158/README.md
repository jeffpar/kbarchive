---
layout: page
title: "Q192158: Y2K: NTMMTA Dirsync Process Incorrectly Logs Dates Beyond 1999"
permalink: kb/192/Q192158/
---

## Q192158: Y2K: NTMMTA Dirsync Process Incorrectly Logs Dates Beyond 1999

	Article: Q192158
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NTMMTA Dispatch program incorrectly logs dates after 1999.
	
	This problem occurs in the Central, Dirsync, Dispatch, and Dsserver logs. These
	logs use an incorrect date format, for example:
	
	  01/01/100 10:50:31 | Status  Report from NETWORK/POSTOFFICE/$SYSTEM
	
	The date format in the Central, Dirsync, Dispatch, and Dsserver logs is mm/dd/yy.
	Therefore, the date should change from xx/xx/99 to xx/xx/00. Instead, the date
	changes to xx/xx/100 for the year 2000 and xx/xx/101 for the year 2001.
	
	CAUSE
	=====
	
	The code working out the date format for the Central, Dirsync, Dispatch, and
	Dsserver logs was incorrect.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  Dispatch.exe   9/4/97   4:34p    72,854 bytes (version 3.5.32)
	  Import.exe   11/11/98   1:39PM  205,075 bytes (version 3.5.34)
	  Rebuild.exe    9/4/97   4:34p    85,993 bytes (version 3.5.32)
	  Reqmain.exe    9/4/97   4:32p   109,879 bytes (version 3.5.32)
	  Srvmain.exe    9/4/97   4:33p   163,925 bytes (version 3.5.32)
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks
	version 3.5. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
