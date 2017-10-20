---
layout: page
title: "Q191943: Y2K: Seconds in Time Field Incorrect after 1999"
permalink: /kb/191/Q191943/
---

## Q191943: Y2K: Seconds in Time Field Incorrect after 1999

{% raw %}

	Article: Q191943
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When External.exe is displayed on the screen while it's running, the date may be
	displayed incorrectly. As a result, the seconds in the time field may be pushed
	off the screen due to lack of space. For example, if you run External.exe on
	January 1, 2000, the year is displayed as "100" (without quotation marks)
	instead of "00". This additional digit causes the seconds in the time field to
	be pushed off the screen.
	
	This problem does not occur before the year 2000.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	MS-DOS
	------
	
	This fix should have the following time stamp:
	
	  Async.ovl      7/31/98   11:34a   372,634 bytes (version 3.5.34)
	  External.exe   7/29/98    6:02p    57,583 bytes (version 3.5.34)
	  X25eicon.ovl   7/29/98    6:13p   396,618 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/All-Y2K/
	
	OS/2
	----
	
	This fix should have the following time stamp:
	
	  Async.ovl      7/29/98   6:22p   266,642 bytes (version 3.5.34)
	  External.exe   7/29/98   6:14p    53,200 bytes (version 3.5.34)
	  X25eicon.ovl   7/29/98   6:24p   263,986 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
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
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191942 Y2K: External.exe Displays Dates Incorrectly after 1999
	
	Additional query words: Y2K, compliant, date, mail flow, MTA, delivery
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
