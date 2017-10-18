---
layout: page
title: "Q202303: SMS: Product Denials in Software Metering Fail to Create Report"
permalink: kb/202/Q202303/
---

## Q202303: SMS: Product Denials in Software Metering Fail to Create Report

	Article: Q202303
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software Metering Report for Product Denials in Software Metering may fail to
	create a report using the Report Wizard, even though the denials are recorded on
	the Software Metering Summary screen.
	
	CAUSE
	=====
	
	This behavior can occur because after a denial is generated at the client, it is
	written into the denial table at the Software Metering server. If you look in
	the Software Metering Administrator Console, you see that on the summary page,
	the denial is reported with the server name (for example, ABC2) under the Server
	column.
	
	At this point, the denial can not be reported. Denial data does not get collated
	up to the site for seven days.
	
	After collation has run, you should see that the denial data, which was at the
	Software Metering server, is now at the site server in the Denial table. You
	should now be able to see in the user interface (UI) that the denial record that
	you looked at earlier displays [This Site] in the Server column. This indicates
	that the record has been collated up to the site.
	
	It is now possible to run a report on the denial data. However, the report is
	defaulted to show the denial data for only the preceding seven days. This means
	that if you accept the defaults, you are unable to see the denial record that
	you have just collated up to the site because it is a few minutes or hours
	(depending on how often you have your services scheduled to run) more than seven
	days old. To see the record that you have collated, change the run time of the
	report (in the wizard) to start on the day before the date on which you
	generated the denial. At the end, the report is displayed containing the denial
	data that you generated at the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
