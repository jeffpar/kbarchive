---
layout: page
title: "Q230161: XCLN: Incorrect Holidays Listed in Microsoft Outlook Calendar"
permalink: /kb/230/Q230161/
---

## Q230161: XCLN: Incorrect Holidays Listed in Microsoft Outlook Calendar

{% raw %}

	Article: Q230161
	Product(s): Microsoft Exchange
	Version(s): 5.5,8.03,8.04
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft has confirmed that the dates of the following holidays in Microsoft
	Outlook 97 and Microsoft Outlook 98 are incorrect:
	
	- United States: Memorial Day is incorrectly listed as one week prior to the
	  actual date of Memorial Day.
	
	- United States: Thanksgiving Day is incorrectly listed as one week or one day
	  prior to the actual date of Thanksgiving Day.
	
	- United States: Columbus Day is incorrectly listed as October 12 every year,
	  as opposed to the actual date of Columbus Day which is the second Monday in
	  October.
	
	- United Kingdom: Spring Bank Holiday, 1999, is incorrectly listed as May 24,
	  1999, instead of May 31, 1999.
	
	- United Kingdom: Late Summer Holiday, 1999, is incorrectly listed as August
	  23, 1999, instead of August 30, 1999.
	
	CAUSE
	=====
	
	This behavior occurs because the incorrect dates for these holidays are included
	in the Outlook.txt file.
	
	RESOLUTION
	==========
	
	To correct this problem, use the appropriate method.
	
	How to Correct the Dates Before You Add Holidays to Your Calendar
	-----------------------------------------------------------------
	
	If you have not already added the holidays to the Outlook Calendar, use a text
	editor such as Notepad to correct the dates in the Outlook.txt file, and then
	import the holidays for your country/region. To do this, use the following
	steps:
	
	1. Click Start, point to Find, and then click "Files and Folders".
	
	2. In the Named box, type "Outlook.txt" (without the quotation marks).
	
	3. In the "Look in" box, click the hard disk on which Outlook is installed, and
	  then click Find Now.
	
	4. In the list of found files, double-click the Outlook.txt file.
	
	  If you receive a message that states that the file is too large for Notepad,
	  click Yes to open the file in WordPad.
	
	5. Scroll down to the appropriate section for your country/region, and then
	  change the incorrect holiday dates to the correct dates.
	
	  For example:
	
	  [United Kingdom]
	
	  Change: "Spring Bank Holiday, 1999/05/24"
	
	  to: "Spring Bank Holiday, 1999/05/31" (without the quotation marks).
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	How to Import the Corrected Holiday List:
	
	1. Start Outlook.
	
	2. On the Tools menu, click Options.
	
	3. On the Preferences tab, click Calendar Options.
	
	4. Under Calendar Options, click Add Holidays, and then click to select the
	  check box for your country/region.
	
	5. Click OK on each of the three dialog boxes to close them.
	
	How to Correct the Dates After You Add Holidays to Your Calendar
	----------------------------------------------------------------
	
	If you already added the holidays to the Outlook Calendar, follow these steps to
	adjust the incorrect dates:
	
	1. Open the Outlook Calendar that contains the incorrect holiday dates.
	
	2. Navigate to a holiday with an incorrect date.
	
	3. Double-click the all-day appointment for the holiday to open it.
	
	4. Change the date to the correct date in the "Start time" box and in the "End
	  time" box.
	
	5. On the toolbar, click the "Save and Close" button.
	
	6. Repeat steps 2 through 5 to change any other incorrect dates in your Outlook
	  Calendar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about incorrect holidays in Outlook, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q197002 OL98: Memorial Day, 1999 Holiday Date Incorrect
	
	  Q189509 OL97: United Kingdom Late Summer Holiday Dates Incorrect
	
	  Q189508 OL98: United Kingdom Late Summer Holiday Dates Incorrect
	
	  Q161587 OL97: How to Customize Outlook Calendar Holidays
	
	
	Additional query words: 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbOutlook804
	Version           : :5.5,8.03,8.04
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
