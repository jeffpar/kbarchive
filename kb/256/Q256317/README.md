---
layout: page
title: "Q256317: SMS 1.2 Administrator Loses Package Workstation Command Lines"
permalink: /kb/256/Q256317/
---

## Q256317: SMS 1.2 Administrator Loses Package Workstation Command Lines

{% raw %}

	Article: Q256317
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
	
	When you are using the Systems Management Server (SMS) Administrator console to
	edit package workstation command lines (WCLs), some WCL entries may be lost,
	particularly if there is a large number of WCLs in the package that you are
	editing.
	
	CAUSE
	=====
	
	The SMS Administrator console attempts a bulk deletion and insertion of WCLs
	when you add or edit an individual WCL. It does not use SQL transactional code
	to do this, so there is no rollback if a problem occurs during an insertion. The
	loss of WCLs may be random, rather than just the newly edited or inserted
	information.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Size      File name   Platform
	  -------------------------------------------
	  02/02/2000   538,144   Base4.dll   Intel
	  02/02/2000   919,312   Base4.dll   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on your SMS primary sites and
	Administrator console computers:
	
	1. Stop the SMS services on the primary site server and quit all instances of
	  the Administrator console.
	
	2. Copy the updated Base4.dll file to the SMS\Site.srv\<Platform> folder
	  on each of the primary site servers and each computer with the Administrator
	  console installed.
	
	3. Restart the SMS services on the primary site server.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
