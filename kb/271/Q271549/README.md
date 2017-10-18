---
layout: page
title: "Q271549: XWEB: OWA and CDO Daylight Savings Change for Year 2000"
permalink: kb/271/Q271549/
---

## Q271549: XWEB: OWA and CDO Daylight Savings Change for Year 2000

	Article: Q271549
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Because the Olympic Games are scheduled to be held in September, 2000, in
	Sydney, Australia, several Australian states (New South Wales, Victoria,
	Australian Capital Territory, and Tasmania) have moved the daylight saving time
	transition start date forward two months (for the year 2000 only), from the last
	Sunday in October to the last Sunday in August.
	
	Programs that are built by using Microsoft Collaboration Data Objects (CDO), such
	as Microsoft Outlook Web Access (OWA), may not correctly reflect this change to
	the daylight saving time transition date because CDO maintains an internal table
	to track time zone information. This table is not updated with changes that are
	made to the operating system time zone.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	After you install this fix, applications that are written using CDO (such as the
	AutoAccept event script) can be updated with the new Sydney year 2000 time
	zone.
	
	You need to modify part of the OWA Active Server Pages (ASP) code to enable OWA
	users to use the new time zone. In particular, you need to modify the Set.asp
	file in the Webdata\Usa\Options folder so the new time zone can be selected on
	the Options page. The following is an example of the modifications that need to
	be made to the Exchange Server 5.5 Service Pack 3 version of the Set.asp file.
	
	At around line 151, change the following array definition
	
	  Function AmToIdx(n)
	      Dim A         '1   2   3   4   5   6   7   8   9  10 11 12 13 14 15 16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35 36 37 38 39  40  41  42  43  44  45  46  47  48  49  50  51
	      A = Array(-1, 20, 24, 23, 22, 28, 25, 26, 16, 13, 11, 7, 6, 4, 3, 2, 1, 50, 45, 43, 42, 41, 39, 37, 34, 33, 31, 30, 15, 19, 18, 21, 17, 14, 12, 10, 9, 8, 5, 0, 49, 48, 47, 46, 44, 40, 38, 36, 35, 27, 29, 32)
	      AmToIdx = A(n)
	  End Function
	
	to the following
	
	  Function AmToIdx(n)
	      Dim A         '1   2   3   4   5   6   7   8   9  10 11 12 13 14 15 16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35 36 37 38 39  40  41  42  43  44  45  46  47  48  49  50  51  52
	      A = Array(-1, 20, 24, 23, 22, 28, 25, 26, 16, 13, 11, 7, 6, 4, 3, 2, 1, 50, 45, 43, 42, 41, 39, 37, 34, 33, 31, 30, 15, 19, 18, 21, 17, 14, 12, 10, 9, 8, 5, 0, 49, 48, 47, 46, 44, 40, 38, 36, 35, 27, 29, 32, 51)
	      AmToIdx = A(n)
	  End Function
	
	The preceding changes provide for a fifty-second entry in the array "A" with a
	value of "51" as the newly reference able time zone.
	
	At around line 451, after the following lines
	
	  <!-- 48 --><OPTION VALUE="41">(GMT+11:00) Magadan, Soloman Is., New Caledonia
	  <!-- 49 --><OPTION VALUE="40">(GMT+12:00) Fiji Is., Kamchatka, Marshall Is.
	  <!-- 50 --><OPTION VALUE="17">(GMT+12:00) Wellington, Auckland
	
	add a new line as follows
	
	  <!-- 51 --><OPTION VALUE="52">(GMT+10:00) Canberra, Melbourne, Sydney, Hobart (Year 2000 only)
	
	This addition makes the new time zone available from the list on the OWA Options
	page. After users select this new time zone, subsequent appointments are created
	correctly. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q259474 Notification of Australian Daylight Savings Changes for Microsoft
	  Products for the Year 2000
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Component         : Kluane CDO
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
