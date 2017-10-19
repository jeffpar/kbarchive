---
layout: page
title: "Q191905: Y2K: Key Dirsync Logs Display Incorrect Date after 1999"
permalink: /kb/191/Q191905/
---

## Q191905: Y2K: Key Dirsync Logs Display Incorrect Date after 1999

	Article: Q191905
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The year 2000 is displayed incorrectly in the following log files:
	
	  Central.log
	  Dirsync.log (both on the Requestor and the Dirsync Server)
	
	The date 01/01/2000 is displayed as 01/01/100 by Dispatch.exe for DOS.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	MS-DOS
	------
	
	This fix should have the following time stamp:
	
	  Dispatch.exe   7/10/98   5:39p    85,245 bytes (version 3.5.34)
	  Import.exe     7/10/98   5:39p   205,905 bytes (version 3.5.34)
	  Rebuild.exe    7/22/98   2:26p    85,993 bytes (version 3.5.34)
	  Reqmain.exe    7/10/98   5:38p   109,879 bytes (version 3.5.34)
	  Srvmain.exe    7/10/98   5:38p   164,111 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	Windows NT
	----------
	
	This fix should have the following time stamp:
	
	  Dispatch.exe   9/4/97   4:34p    72,854 bytes (version 3.5.32)
	  Import.exe     9/4/97   4:33p   205,043 bytes (version 3.5.32)
	  Rebuild.exe    9/4/97   4:34p    85,993 bytes (version 3.5.32)
	  Reqmain.exe    9/4/97   4:32p   109,879 bytes (version 3.5.32)
	  Srvmain.exe    9/4/97   4:33p   163,925 bytes (version 3.5.32)
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	OS/2
	----
	
	This fix should have the following time stamp:
	
	  Dispatch.exe   7/22/98   2:26p    73,098 bytes (version 3.5.34)
	  Import.exe     7/10/98   5:39p   205,905 bytes (version 3.5.34)
	  Rebuild.exe    7/22/98   2:26p    85,993 bytes (version 3.5.34)
	  Reqmain.exe    7/10/98   5:38p   109,879 bytes (version 3.5.34)
	  Srvmain.exe    7/10/98   5:38p   164,111 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Dirsy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Microsoft Mail
	for PC Networks listed above. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Product Support Services for more
	information.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q191886 Y2K: Reqmain.exe for DOS Displays the Incorrect Date after 1999
	
	  Q191887 Y2K: Srvmain.exe for DOS Displays Incorrect Date after 1999
	
	  Q191888 Y2K: DOS Dispatch Incorrectly Displays Year
	
	  Q191889 Y2K: Rebuild.exe for DOS Displays Incorrect Date after 1999
	
	  Q191907 Y2K: Import.exe Displays Incorrect Date after 1999
	
	Additional query words: dirsync, dir-sync, Y2K, compliant, date, log
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
