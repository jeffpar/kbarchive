---
layout: page
title: "Q153078: Err Msg: Your Local Shared Schedule+ File Was Previously..."
permalink: /kb/153/Q153078/
---

## Q153078: Err Msg: Your Local Shared Schedule+ File Was Previously...

{% raw %}

	Article: Q153078
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,7.0,95
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 14-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Schedule+ for Windows, versions 95, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Microsoft Windows 95 from Microsoft Windows for Workgroups
	version 3.11, and you upgrade to Schedule+ version 7.0 from Schedule+ version
	1.0, you may get the following error message:
	
	  Your local shared Schedule+ was previously synchronized with another version.
	
	NOTE: You will not be able to access your existing Schedule+ appointments.
	
	CAUSE
	=====
	
	The Schedule+ version 1.0 .CAL file that the Setup program is trying to migrate
	may be corrupt.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Export the appointments out in Schedule+ Interchange format.
	
	2. Run Schedule+ by pressing the CTRL and SHIFT keys while you double-click the
	  icon.
	
	  The following dialog box will appear:
	
	  You have launched Schedule+ with the CTRL and SHIFT keys held down. If you
	  continue, Schedule+ will clear your schedule data. A backup copy of the data
	  will be saved in your Windows directory.
	
	  Are you sure you want to clear your schedule data?
	
	3. Answer Yes.
	
	4. Import the file previously exported in step 1.
	
	Additional query words: 4.00 3.20 Schedule+ error upgrade
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0,7.0,95
	
	=============================================================================
	

{% endraw %}
