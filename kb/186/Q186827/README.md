---
layout: page
title: "Q186827: SMS: Despooler Causes AV While Creating Retry Instruction"
permalink: /kb/186/Q186827/
---

## Q186827: SMS: Despooler Causes AV While Creating Retry Instruction

{% raw %}

	Article: Q186827
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bugkbbuglist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMS_EXECUTIVE may cause a Dr. Watson error when SMS_DESPOOLER attempts to create
	a retry instruction.
	
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
	
	  Date      Time       Size     File name     Platform
	  ----------------------------------------------------
	  03/1/99   09:06pm   254,400   Smsinst.dll   (x86)
	  03/1/99   09:05pm   481,040   Smsinst.dll   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Stop the SMS Executive service.
	
	2. Close all Systems Management Server applications (including the SMS
	  Administrator program, SMS Database Manager, and so on).
	
	3. Replace the Smsinst.dll file in the
	  <SMS_root>\Site.srv\<Platform>.bin directory with the hotfixed
	  version.
	
	  NOTE: You can perform this step automatically by running Hotfix.exe with the
	  Hotfix.ini file that is provided.
	
	4. Start the SMS Executive service.
	
	Additional query words: prodsms smsutil SMS drwatson smsexec
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
