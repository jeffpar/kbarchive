---
layout: page
title: "Q192238: PC WRmt: Remote Client May Display Date Incorrectly After 2000"
permalink: /kb/192/Q192238/
---

## Q192238: PC WRmt: Remote Client May Display Date Incorrectly After 2000

	Article: Q192238
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 20-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the year 2000, the Microsoft Mail Remote for Windows client may display
	the year as 10 instead of 2000. The Callin.log and Callout.log files may also
	reflect this date incorrectly.
	
	CAUSE
	=====
	
	The problem is caused by running an older version of Microsoft Mail Remote for
	Windows or the Microsoft Mail External.exe program.
	
	RESOLUTION
	==========
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Contact
	Microsoft Product Support Services for more information.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	following fix.
	
	Microsoft Mail Remote for Windows
	---------------------------------
	
	This fix should have the following time stamp:
	
	  Msrmttr.dll   7/31/98   11:37a   76,608 bytes (version 3.2.4025)
	
	This hotfix has been posted to the following Internet location as Remcy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	MS-DOS External
	---------------
	
	This fix should have the following time stamp:
	
	  Async.ovl      7/31/98   11:34a   372,634 bytes (version 3.5.34)
	  External.exe   7/29/98    6:02p    57,583 bytes (version 3.5.34)
	  X25eicon.ovl   7/29/98    6:13p   396,618 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	OS/2 External
	-------------
	
	This fix should have the following time stamp:
	
	  Async.ovl      7/29/98   6:22p   266,642 bytes (version 3.5.34)
	  External.exe   7/29/98   6:14p    53,200 bytes (version 3.5.34)
	  X25eicon.ovl   7/29/98   6:24p   263,986 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	Windows NT External
	-------------------
	
	This fix should have the following time stamp:
	
	  Async.ovl      1/06/00   5:48p   266,770 bytes (version 3.5.35)
	  External.exe   1/06/00   5:48p    53,200 bytes (version 3.5.35)
	  X25eicon.ovl   1/06/00   5:48p   264,098 bytes (version 3.5.35)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350 kbMailRemote320
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
