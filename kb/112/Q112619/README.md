---
layout: page
title: "Q112619: Microsoft At Work PC Fax Does Not Display a Time/Date Stamp"
permalink: kb/112/Q112619/
---

## Q112619: Microsoft At Work PC Fax Does Not Display a Time/Date Stamp

	Article: Q112619
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the cover sheet option with Microsoft At Work PC Fax, the date may
	not appear on the Date: line of a sent fax.
	
	CAUSE
	=====
	
	The date of the sent fax does not appear on the Date: line of the cover sheet if
	the sShortDate= line of the [Intl] section in the WIN.INI file is not present or
	is invalid.
	
	RESOLUTION
	==========
	
	In Control Panel, choose the International icon and choose OK. This adds the
	sShortDate= line to the [Intl] section of the WIN.INI file. If the date still
	does not appear on a sent fax, the WIN.INI file should be checked for possible
	invalid or corrupted entries that would prevent Windows from reading the [Intl]
	section properly.
	
	Below is an example of a valid setting for [Intl] section of the WIN.INI file.
	
	     [Intl]
	     sLanguage=enu
	     sCountry=United States
	     iCountry=1
	     iDate=0
	     iTime=0
	     iTLZero=0
	     iCurrency=0
	     iCurrDigits=2
	     iNegCurr=0
	     iLzero=1
	     iDigits=2
	     iMeasure=1
	     s1159=AM
	     s2359=PM
	     sCurrency=$
	     sThousand=,
	     sDecimal=.
	     sDate=/ 
	     sTime=:
	     sList=,
	     sShortDate=M/d/yy
	     sLongDate=dddd, MMMM dd, yyyy
	
	Additional query words: 3.11 3.11a msfax efax pcfax gone facsimile removed missing fax date time
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
