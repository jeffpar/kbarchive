---
layout: page
title: "Q259183: SMS: Command Clean Utility Does Not Properly Clean History Recor"
permalink: /kb/259/Q259183/
---

## Q259183: SMS: Command Clean Utility Does Not Properly Clean History Recor

	Article: Q259183
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Command Clean (Cmdclean.exe) utility to clean a Systems
	Management Server (SMS) database, history records are not properly removed if
	the computer's time is set to a date after 12/31/1999.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Systems Management Server
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this software should have the following file
	attributes or later:
	
	  Date        Time    Size    File name     Platform  Version
	  -----------------------------------------------------------
	  05/10/2000  4:53pm  29,504  Cmdclean.exe  Intel     1.2.0.0
	  05/10/2000  4:53pm  40,208  Cmdclean.exe  Alpha     1.2.0.0
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	You can clean history records from an SMS site manually. To do so:
	
	1. Start the SMS Administrator console.
	
	2. Click the Sites window.
	
	3. On the Edit menu, click Delete Special.
	
	4. In the Delete box, click "Machine history records".
	
	5. Set the appropriate date range by using either the Dated Before or Older Than
	  boxes.
	
	6. Click OK to begin deletion.
	
	It is a good idea to delete aged history records as part of regular site
	maintenance.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Command Clean utility for
	Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
