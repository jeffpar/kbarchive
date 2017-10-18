---
layout: page
title: "Q139106: Modifying the Toll Prefix List in Windows 95/98"
permalink: kb/139/Q139106/
---

## Q139106: Modifying the Toll Prefix List in Windows 95/98

	Article: Q139106
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The toll prefix list contains a list of local number that have the same area
	code as the location from which you are dialing, but that require you to dial
	the area code. You can modify the toll prefix list that is used for a particular
	dialing location.
	
	MORE INFORMATION
	================
	
	To modify the toll prefix list for a dialing location, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  Communications, and then click Phone Dialer.
	
	  NOTE: If Phone Dialer is not installed, you can install it from the Windows
	  Setup tab in the Add/Remove Programs tool in Control Panel.
	
	2. In the Number To Dial box, type a 7-digit phone number with the same first
	  three digits as the phone number you want to add to the toll prefix list. For
	  example, if you want to add all numbers beginning with 555 to the toll prefix
	  list, type a number that begins with 555.
	
	  If you are using Windows 98, click Tools, click Dialing Properties, and then
	  click Area Code Rules. To add a "1" to an area code, click New in the "Dial 1
	  for the numbers with the following prefixes" box, type the new area code, and
	  then click OK. To prevent a 1 from being dialed, click New in the "Do not
	  dial 1 for numbers with the following area codes" box, type the new area
	  code, and then click OK. After you perform these steps, do not perform the
	  remaining steps in this article.
	
	3. On the Tools menu, click Dialing Properties.
	
	4. In the I Am Dialing From box, click the dialing location whose toll prefix
	  list you want to modify.
	
	5. Click the Dial As Long Distance Call check box to select it, and then click
	  OK.
	
	When you perform this procedure, the entry for the dialing location you select is
	modified in the Telephon.ini file. The [Locations] section of the Telephon.ini
	file contains an entry for each dialing location you have created. The entry for
	the default dialing location is similar to:
	
	  Location0=0,"Default Location","9","9","425",1,0,0,1,"",0,""
	
	If you add numbers that start with 555 and 666 to the toll prefix list for the
	default dialing location, the entry in the Telephon.ini file appears similar
	to:
	
	  Location0=0,"Default Location","9","9","425",1,0,0,1,"555,666",0,""
	
	The prefixes are separated by commas, with no preceding or trailing spaces.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 95
	
	=============================================================================
	
