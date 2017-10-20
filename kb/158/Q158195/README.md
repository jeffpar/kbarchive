---
layout: page
title: "Q158195: Time Zone Editor Available on OEM Service Release 2 CD-ROM"
permalink: /kb/158/Q158195/
---

## Q158195: Time Zone Editor Available on OEM Service Release 2 CD-ROM

{% raw %}

	Article: Q158195
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Time Zone Editor (Tzedit.exe) is available on the OEM Service Release 2 CD-ROM.
	You can run this tool directly from the CD-ROM by double-clicking it in the
	Admin\Apptools\Tzedit folder on the CD-ROM.
	
	MORE INFORMATION
	================
	
	Time Zone Editor was introduced as a means of quickly updating time zone
	information to account for border disputes, addition and removal of time zones,
	and other time zone-specific changes. Time Zone Editor has two main functions:
	
	- You can edit a time zone name or adjust the start and end dates for daylight
	  saving time. Time zone information changes affect every user of the computer.
	
	- You can use Time Zone Editor to create new time zone entries for the
	  Date/Time tool. You can have an unlimited number of time zones customized any
	  way you want.
	
	To edit a time zone:
	
	1. In Time Zone Editor, click a time zone and then click Edit.
	
	2. Change the time zone name, abbreviation, or the difference from Greenwich
	  Mean Time.
	
	  The abbreviation is a short string name passed back to programs that ask for
	  more information about the time zone. This is the Standard time abbreviation
	  that applies to the Standard time zone. In the Daylight Saving Time box, the
	  Abbreviation box is the Daylight abbreviation that applies when daylight
	  saving time is in effect. Many communication programs, such as mail programs,
	  may use this information.
	
	3. If you want daylight saving time to be automatically enabled for the time
	  zone, click Automatically Set Daylight Saving Time. Then, in the boxes
	  underneath the option, fill in the start and stop days and times.
	
	  In the Abbreviation box, type a name to apply when daylight saving time is in
	  effect.
	
	  In the Daylight Bias box, select the amount of time to move forward or
	  backward from the Standard time for daylight saving time. In most cases, this
	  value should stay at the default value of +1:00 hour. This causes the time to
	  move forward by one hour on the daylight saving time start day and time and
	  fall back one hour on the daylight saving time last day and time.
	
	To create a new time zone:
	
	1. In Time Zone Editor, click New.
	
	2. In the Time Zone Name box, type a name for the time zone to be displayed in
	  the Date/Time tool.
	
	  Time zone names should start with the general template GMT+\- 0x:00, and
	  cannot exceed 63 characters. This ensures that the time zone name is sorted
	  in the list box and placed in its proper order (for example, GMT+03:00 or
	  GMT-04:00).
	
	3. In the Abbreviation box, type a name for the Standard time zone name
	  abbreviation. The name should not exceed 31 characters.
	
	  The abbreviation is a short string name passed back to programs that ask for
	  more information about the time zone. This is the Standard time abbreviation
	  that applies to the Standard time zone. In the Daylight Saving Time box, the
	  Abbreviation box is the Daylight abbreviation that applies when daylight
	  saving time is in effect. Many communication programs, such as mail programs,
	  may use this information.
	
	4. In the Offset From GMT box, select the time difference from Greenwich Mean
	  Time. This value is the actual number that gets used in the data fields to
	  determine the time zone's bias from Greenwich Mean Time.
	
	5. If you want daylight saving time to be automatically enabled for the time
	  zone (if the area uses daylight saving time), click the Automatically Set
	  Daylight Saving Time check box to select it. Then, in the boxes underneath
	  the option, fill in the start and stop days and times.
	
	  The Abbreviation box is an optional entry. Type a name to apply when daylight
	  saving time is in effect.
	
	  In the Daylight Bias box, select the amount of time to move forward or
	  backward from the Standard time for daylight saving time. In most cases, this
	  value should stay at the default value of +1:00 hour. This causes the time to
	  move forward by one hour on the daylight saving time start day and time and
	  fall back one hour on the daylight saving time last day and time.
	
	Changes made with Time Zone Editor affect the stored data for time zones in the
	registry. If a time zone is already set on the computer, that data is saved in
	another location in the registry. In order for the new information to be used,
	you must use the Date/Time tool in Control Panel and select or re-select the
	time zone.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
