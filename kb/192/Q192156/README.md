---
layout: page
title: "Q192156: Y2K: NTMMTA Incorrectly Logs Dates after 1999"
permalink: /kb/192/Q192156/
---

## Q192156: Y2K: NTMMTA Incorrectly Logs Dates after 1999

{% raw %}

	Article: Q192156
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail NTMMTA incorrectly logs dates after 1999 in the Sent.log and
	Recv.log files.
	
	The following is an excerpt from the Session.log file before and after the date
	changed to 2000:
	
	  Cactus     31-12-99 23:52 From: BENSNET/TEAZLE
	  Cactus     31-12-99 23:52 To: BENSNET/CACTUS
	  Cactus     31-12-99 23:54 From: BENSNET/CACTUS
	  Cactus     31-12-99 23:54 To: BENSNET/TEAZLE
	  Cactus     01-01-100 00:01 From: BENSNET/TEAZLE
	  Cactus     01-01-100 00:01 To: BENSNET/CACTUS
	  Cactus     01-01-100 00:02 From: BENSNET/CACTUS
	  Cactus     01-01-100 00:02 To: BENSNET/TEAZLE
	  Cactus     02-01-100 00:01 Sending mail (1)
	  Cactus     01-01-101 00:02 From: BENSNET/TEAZLE
	  Cactus     01-01-101 00:02 To: BENSNET/CACTUS
	  Cactus     02-01-101 00:01 Sending mail (1)
	  Cactus     02-01-101 00:01 Press Y to exit, N to continue.
	  Cactus     02-01-101 00:01 Shutting down ...
	
	The date format in the Session.log is mm/dd/yy. The date should to change from
	xx/xx/99 to xx/xx/00. Instead, the date changes to xx/xx/100 for the year 2000
	and xx/xx/101 for the year 2001.
	
	A similar set of entries exist for the Sent.log and Recv.log files:
	
	  31-12-99 23:52       772  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	  01-01-10 00:01       784  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	  02-01-10 00:01       784  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	  14-01-10 23:57       787  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	  15-01-10 00:01       787  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	  31-12-10 23:56       790  BENSNET/TEAZLE/Admin     BENSNET/CACTUS/Admin
	
	However, the date changes from xx/xx/99 to xx/xx/10, instead of to xx/xx/00.
	
	For the year 2001, the year still remains as 10 and does not change until the
	year 2010 when the year becomes 11.
	
	CAUSE
	=====
	
	The code working out the date format for the Sent.log and Recv.log files was
	incorrect.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Product Support Services to obtain
	the following fix.
	
	This fix should have the following time stamp:
	
	  Async.ovl      4/15/99    2:04AM  277,040 bytes (version 3.5.34)
	  External.exe   4/15/99    2:19AM   54,608 bytes (version 3.5.34)
	  X25eicon.ovl   4/15/99    2:15AM  274,880 bytes (version 3.5.34)
	
	This hotfix has been posted to the following Internet location as Exty2k.exe:
	
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
	

{% endraw %}
