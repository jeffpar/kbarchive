---
layout: page
title: "Q325103: FIX: COMTI Perfmon Counters Do Not Collect Data by Using MOM"
permalink: /kb/325/Q325103/
---

## Q325103: FIX: COMTI Perfmon Counters Do Not Collect Data by Using MOM

	Article: Q325103
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view COM Transaction Integrator (COMTI) Performance Monitor
	counters by using the Microsoft Operations Manager (MOM) client, no data is
	collected and all of the counters show a value of 0.
	
	The same problem can occur with Performance Monitor if your computer is set up to
	start Performance Monitor before any of the COMTI applications start.
	
	
	CAUSE
	=====
	
	If the shared memory that is used to store performance data was created by a
	monitoring application such as the MOM client or Performance Monitor, COMTI does
	not use the correct security attributes to gain access to the shared memory.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Host Integration Server 2000
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
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
	
	  Date         Time   Version      Size    File name
	  --------------------------------------------------
	  24-Jun-2002  13:24  5.0.0.867    28,944  Comtiperf.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	The problem described here does not occur if the COMTI applications that you
	want to monitor start before the monitoring application starts. However, because
	the MOM client starts during system initialization, the problem always occurs
	because the COMTI applications are not likely to be running before to the MOM
	client starts.
	
	If the monitoring application is Performance Monitor (or another similar
	application), you can avoid the problem by doing one of the following:
	
	- Start Performance Monitor after you start the COMTI applications that you
	  want to monitor.
	
	  -or-
	
	- Configure the COMTI applications to run under a user account that has
	  Administrative rights.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	On a computer that does not experience this problem, when you select the COM
	Transaction Integrator performance object, a general COMTI instance is listed,
	and an instance for each COMTI application that is active is listed, also.
	
	When the problem described here occurs, the general COMTI instance is listed but
	no additional instances are created when COMTI applications are running, so none
	of the COMTI applications can be monitored. The general COMTI instance counters
	are not incremented when the problem occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
