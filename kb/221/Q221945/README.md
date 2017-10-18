---
layout: page
title: "Q221945: SMS: Job Status Goes Complete Before Server Processing Completes"
permalink: kb/221/Q221945/
---

## Q221945: SMS: Job Status Goes Complete Before Server Processing Completes

	Article: Q221945
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Systems Management Server 1.2 Service Pack 4, the SMS
	Administrator reports the status of a Send and Distribute job or a Distribute
	only job as Complete, even though the distribution server processing has not
	been completed.
	
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time         Size   File name   Platform
	  ----------------------------------------------------
	  3/8/99   5:37pm     537,632   Base4.dll   x86   
	  3/8/99   5:38pm     918,288   Base4.dll   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	This fix applies to Run Command On Workstation jobs with no Run phase. The
	scheduler distinguishes between Send phase only jobs and jobs with a Distribute
	phase by looking for existence of the Completion and Server detail status
	records. If these records do not exist at the time the scheduler updates working
	status, then scheduler will assume that the job has only a Send phase and will
	base the working status on the status of the Site Arrival detail status record.
	
	If Completion and Server detail status records exist, the scheduler will assume
	the job has a Distribute phase and base the working status on the status of the
	Completion detail status record only, not on the status of the Server records.
	
	To install the hotfix, perform the following steps:
	
	1. Stop the SMS_EXECUTIVE, SMS_SITE_CONFIG_MANAGER, and SMS_HIERARCHY_MANAGER
	  services on the site server.
	
	2. Replace the Base4.dll file in the <sms root
	  dir>\Site.srv\<Platform>.bin directory with the version obtained
	  from the hotfix.
	
	3. Start the SMS_EXECUTIVE, SMS_SITE_CONFIG_MANAGER, and SMS_HIERARCHY_MANAGER
	  services
	
	NOTE: You can perform Step 2 automatically by running Hotfix.exe with the
	supplied Hotfix.ini file.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
