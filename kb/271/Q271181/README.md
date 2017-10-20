---
layout: page
title: "Q271181: SMS: Interval X Not Found Error in Offersum.log"
permalink: /kb/271/Q271181/
---

## Q271181: SMS: Interval X Not Found Error in Offersum.log

{% raw %}

	Article: Q271181
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbAdvertisement kbQuery kbStatSum
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Offer or Advertisement status messages may not populate the Systems Management
	Server database. When you make Structured Query Language (SQL) tracing
	available, messages such as the following are recorded in the Offersum.log
	file:
	
	  
	
	  SQL>>>SELECT OfferID,SiteCode,LastUpdate,Replicate,oi.DisplayInterval,oi.ScheduleToken,
	  OfferRecieved,OfferFailure, ProgramStarted,ProgramSuccess,ProgramFailure 
	  FROM OfferStatusSummary o (NOLOCK),OfferStatusSummaryDetail od (NOLOCK),
	  OfferStatusIntervals	oi (NOLOCK) WHERE o.OfferStatusSummaryID = 
	  od.OfferStatusSummaryID AND oi.DisplayInterval = od.DisplayInterval AND 
	  Replicate != 0  $$<SMS_OFFER_STATUS_SUMMARIZER><Tue Jul 18 17:38:07.470 
	  2000 Eastern Daylight Time><thread=170 (0xAA)>
	  SQL>>>>> Done.  $$<SMS_OFFER_STATUS_SUMMARIZER><Tue Jul 18 17:38:07.510 2000 
	  Eastern Daylight Time><thread=170 (0xAA)>
	  Warn>: Interval 8 not found in the OfferSummaryDetail record EN120014
	  $$<SMS_OFFER_STATUS_SUMMARIZER><Tue Jul 18 17:38:07.530 2000 Eastern Daylight Time>
	  <thread=170 (0xAA)>
	  STATMSG: ID=3807 SEV=W LEV=M SOURCE="SMS Server" COMP="SMS_OFFER_STATUS_SUMMARIZER" 
	  SYS=ECGJ01 SITE=OH1 PID=259 TID=170 GMTDATE=Tue Jul 18 21:38:07.530 2000
	  ISTR0="8" ISTR1="" ISTR2="" ISTR3="" ISTR4="" ISTR5="" ISTR6="" ISTR7="" 
	  ISTR8="" ISTR9="" NUMATTRS=0
	
	  -or-
	
	  Info>: Processing replication file...  $$<SMS_OFFER_STATUS_SUMMARIZER>
	  <Fri Jul 14 08:37:37.120 2000 Eastern Daylight Time><thread=66 (0x42)>
	  Warn>: Interval 7 not found in the OfferSummaryDetail record EN12000F 
	  $$<SMS_OFFER_STATUS_SUMMARIZER><Fri Jul 14 08:37:37.180 2000 Eastern Daylight Time>
	  <thread=66 (0x42)>
	  STATMSG: ID=3807 SEV=W LEV=M SOURCE="SMS Server" COMP="SMS_OFFER_STATUS_SUMMARIZER" 
	  SYS=ECGJ01 SITE=OH1 PID=258 TID=66 GMTDATE=Fri Jul 14 12:37:37.180 2000
	  ISTR0="7" ISTR1="" ISTR2="" ISTR3="" ISTR4="" ISTR5="" ISTR6="" ISTR7=""
	  ISTR8="" ISTR9="" NUMATTRS=0  $$<SMS_OFFER_STATUS_SUMMARIZER>
	  <Fri Jul 14 08:37:37.180 2000 Eastern Daylight Time><thread=66 (0x42)>
	  Warn>: Interval 7 not found in the OfferSummaryDetail record EN120010
	  $$<SMS_OFFER_STATUS_SUMMARIZER><Fri Jul 14 08:37:37.180 2000 Eastern Daylight Time>
	  <thread=66 (0x42)>
	  STATMSG: ID=3807 SEV=W LEV=M SOURCE="SMS Server" COMP="SMS_OFFER_STATUS_SUMMARIZER" 
	  SYS=ECGJ01 SITE=OH1 PID=258 TID=66 GMTDATE=Fri Jul 14 12:37:37.190 2000 
	  ISTR0="7" ISTR1="" ISTR2="" ISTR3="" ISTR4="" ISTR5="" ISTR6="" ISTR7=""
	  ISTR8="" ISTR9="" NUMATTRS=0  $$<SMS_OFFER_STATUS_SUMMARIZER>
	  <Fri Jul 14 08:37:37.190 2000 Eastern Daylight Time><thread=66 (0x42)>
	
	CAUSE
	=====
	
	These messages indicate that Systems Management Server is attempting to read the
	information stored in the DisplayInterval field of either the
	OfferStatusIntervals table or the OfferStatusSummaryDetail table, one of which
	may be corrupted.
	
	To determine if this is the cause of the error in your site, follow these steps:
	
	1. Open Microsoft SQL Query analyzer for SQL 7.0 or Microsoft ISQL/w for SQL
	  6.5, and then select the Systems Management Server database.
	
	2. Execute the following query against the Systems Management Server database:
	
	  SELECT * FROM OFFERSTATUSINTERVALS
	
	The results set should appear similar to the following table:
	
	+------------------------------------+
	| DisplayInterval | ScheduleToken    | 
	+------------------------------------+
	| 1               | 0001128000100008 | 
	+------------------------------------+
	| 2               | 00C1128000100008 | 
	+------------------------------------+
	| 3               | 0181128000100008 | 
	+------------------------------------+
	| 4               | 0241128000100008 | 
	+------------------------------------+
	| 5               | 0001128000192000 | 
	+------------------------------------+
	| 6               | 00011280001A2000 | 
	+------------------------------------+
	| 7               | 00011280001B2000 | 
	+------------------------------------+
	| 8               | 00011280001C2000 | 
	+------------------------------------+
	| 9               | 00011280001D2000 | 
	+------------------------------------+
	| 10              | 00011280001E2000 | 
	+------------------------------------+
	| 11              | 00011280001F2000 | 
	+------------------------------------+
	| 12              | 000A470000284400 | 
	+------------------------------------+
	| 13              | 000A4700002BC400 | 
	+------------------------------------+
	| 14              | 0001128000080008 | 
	+------------------------------------+
	
	If the entries in the DisplayInterval column are not sequential and have a break
	around 7 or 8, as in the following table, you may see errors like those
	described in the "Symptoms" section of this article. The
	OfferStatusSummaryDetail table is probably also corrupted because it stores the
	same entries. It is for this reason that the Offer status messages are not being
	reported correctly back to the site.
	
	An incorrectly ordered table may appear similar to the following example:
	
	+------------------------------------+
	| DisplayInterval | ScheduleToken    | 
	+------------------------------------+
	| 1               | 0001128000100008 | 
	+------------------------------------+
	| 2               | 00C1128000100008 | 
	+------------------------------------+
	| 3               | 0181128000100008 | 
	+------------------------------------+
	| 4               | 0241128000100008 | 
	+------------------------------------+
	| 5               | 0001128000192000 | 
	+------------------------------------+
	| 6               | 00011280001A2000 | 
	+------------------------------------+
	| 8               | 00011280001B2000 | 
	+------------------------------------+
	| 9               | 00011280001C2000 | 
	+------------------------------------+
	| 10              | 00011280001D2000 | 
	+------------------------------------+
	| 11              | 00011280001E2000 | 
	+------------------------------------+
	| 12              | 00011280001F2000 | 
	+------------------------------------+
	| 13              | 000A470000284400 | 
	+------------------------------------+
	| 14              | 000A4700002BC400 | 
	+------------------------------------+
	| 15              | 0001128000080008 | 
	+------------------------------------+
	
	When the table's format no longer matches the data being passed to it, the data
	is discarded or not processed. If it is not processed, the data may continue to
	back up on the computer until the drive is filled.
	
	WORKAROUND
	==========
	
	If the information in the OfferStatusIntervals table is corrupted, verify
	whether the OfferStatusSummaryDetail table has been affected and restore the
	necessary tables from backup copies.
	
	If you have determined that corruption of these tables is the reason status is
	not being reported back to the site for your offers or advertisements, please
	contact Microsoft Product Support Services for a resolution. Modifying the
	Systems Management Server database directly is not supported and may cause
	irreparable damage to the site's database.
	
	MORE INFORMATION
	================
	
	If you have specific questions about restoring tables to a SQL database, or or
	you need more information about your SQL database, please contact a SQL Support
	Professional for assistance.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbAdvertisement kbQuery kbStatSum 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
