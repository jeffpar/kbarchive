---
layout: page
title: "Q240426: SMS: Cannot Obtain Performance Data for SMS Counters"
permalink: /kb/240/Q240426/
---

## Q240426: SMS: Cannot Obtain Performance Data for SMS Counters

	Article: Q240426
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server (SMS) version 2.0 site server or component
	server, you may not be able to gather data from the SMS-related performance
	counters in the Windows NT Performance Monitor tool, or with third-party
	performance-monitoring software.
	
	In Performance Monitor, the symptoms of this problem can include the complete
	absence of SMS performance counters or slow performance when adding.
	
	In third-party programs, the symptoms can include an error message when
	initializing Smsperf.dll or the inability to gather some or all performance data
	from the SMS site or component server.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
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
	
	NOTE: This fix disables all performance monitoring of Systems Management Server.
	
	The English-language version of this software update should have the following
	file attributes or later:
	
	 Date      Time              Size    File name    Platform
	 ---------------------------------------------------------
	 10/25/99  04:21:28pm        59,159  Smsperf.dll  Alpha
	 11/03/99  12:31:06am       153,360  Delperf.exe  Alpha
	 08/26/99  04:21:10pm        40,752  Smsperf.dll  I386
	 11/03/99  12:31:00am        92,080  Delperf.exe  I386
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Note that this hotfix will disable all the SMS counters.
	
	To Apply This Hotfix on Intel-Based Site Servers
	------------------------------------------------
	
	1. Copy all files to a folder on the site server.
	
	2. Run Q240426.exe.
	
	3. Follow the directions in the Q240426.txt file to run Delperf.exe.
	
	To Apply This Hotfix on Alpha-Based Site Servers
	------------------------------------------------
	
	1. Stop all SMS services.
	
	2. Replace the <Drive>:SMS\Bin\I386\Smsperf.dll file with the hotfix
	  version, where <Drive> is the drive on which SMS is installed.
	
	3. Restart the server.
	
	4. Follow the directions in the Q240426.txt file.
	
	Additional query words: prodsms perfmon
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
