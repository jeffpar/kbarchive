---
layout: page
title: "Q320376: PRB: SAK Error Scheduling Disk Reports"
permalink: /kb/320/Q320376/
---

## Q320376: PRB: SAK Error Scheduling Disk Reports

{% raw %}

	Article: Q320376
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Storage Manager 1.01 for Server Appliances 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience problems with your application if you use time zone
	"(Greenwich mean time [GM]+09:00) Osaka, Sapporo, Tokyo" and schedule your
	storage reports to run between the hours of 15:00 and 24:00.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. On the main Server Appliance Kit window, click the Maintenance tab, click
	  Date/Time, and then change the time zone to (GMT+9:00) Osaka, Sapporo Tokyo.
	
	2. Click Disks and then click Storage Reports.
	
	3. Click Schedule and then click New.
	
	4. On the Location tab, type "Directory Path" (without the quotation marks), and
	  then click Report.
	
	5. On the Date and Time tab, enter a start time between 15:00 and 24:00, and
	  then click OK.
	
	Although you expect the report to be scheduled at the selected start time, you
	receive the following error message:
	
	  Cannot schedule this job (0)
	
	CAUSE
	=====
	
	Start times that are entered in the 24-hour time format are not handled
	correctly in the program.
	
	RESOLUTION
	==========
	
	This problem has been resolved and can be corrected by installing a software
	update, Q320376.cab, through the Server Appliance Kit.
	
	Follow these steps to install the software update:
	
	1. Click the Maintenance tab on the main Server Appliance Kit window.
	
	2. Click Software Update.
	
	  The Welcome window appears.
	
	3. Click Next to continue.
	
	4. Click Browse on the Select File window and then click to select the
	  Q320376.cab file.
	
	5. Click Verify and then click Next to continue.
	
	6. Click Finish to install the Q320376.cab file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time    Version   Size       File name     Platform
	  -------------------------------------------------------------
	  Mar-27-2002  01:55p            340        Info.INF      x86
	  Mar-29-2002  09:32a            4,148,837  Q320376.exe   x86
	
	
	
	Additional query words: Storage Manager Wquin SAK
	
	======================================================================
	Keywords          :  
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
