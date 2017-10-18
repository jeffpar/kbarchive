---
layout: page
title: "Q233184: XCLN: Out-of-Range Calendar Items Don't Print with Daily Style"
permalink: kb/233/Q233184/
---

## Q233184: XCLN: Out-of-Range Calendar Items Don't Print with Daily Style

	Article: Q233184
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you print your daily calendar by using the daily style, meeting items that
	are scheduled earlier than 7:00 A.M. or later than 7:00 P.M. do not print,
	although they show up in the print preview.
	
	CAUSE
	=====
	
	There is an all-day event scheduled on that day.
	
	WORKAROUND
	==========
	
	To work around this problem, you can modify the daily style time range to
	include the appointment times:
	
	1. On the File menu, click Print, and then click Page Setup.
	
	2. Under Options, in the Print From list, click the earliest time that you want
	  to print for the daily calendar, and in the Print To list, click the latest
	  time that you want to print for the daily calendar.
	
	You can also create a new print style that includes a print range beyond the
	default times of 7:00 A.M. to 7:00 P.M.:
	
	1. On the File menu, click Print.
	
	2. Click Daily Style, and then click Define Styles.
	
	3. In the Define Print Styles dialog box, click the print style that you want to
	  copy as a new print style, and then click Copy.
	
	4. Under Options, in the Print From list, click the earliest time that you want
	  to print for the daily calendar, and in the Print To list, click the latest
	  time that you want to print for the daily calendar.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	If you change the default print style, you affect the way that all of the folder
	items for which you use that style print. In contrast, if you create a new print
	style, you can maintain the default print style and still use the new print
	style when applicable.
	
	Because you create a new print style by copying an existing batch of settings,
	you only need to modify the specific settings that you want to change; you do
	not have to set all of the options yourself. Also, you do not have to re-create
	your special print style for every view or folder, because in any instance in
	which the print style you copied applies, your custom style is also displayed,
	for example, in the Print dialog box or the Page Setup: <style name>
	dialog box.
	
	
	Additional query words: OL2K, daily print style, calendar and print, OL2000, OL98, OL97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
