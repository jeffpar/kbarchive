---
layout: page
title: "Q226891: Dataloader Causes AV Attempting to Insert &gt; 1,962 Bytes of Data"
permalink: /kb/226/Q226891/
---

## Q226891: Dataloader Causes AV Attempting to Insert &gt; 1,962 Bytes of Data

{% raw %}

	Article: Q226891
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS Executive service may cause an access violation if
	SMS_INVENTORY_DATA_LOADER attempts to insert more than 1,962 bytes of data into
	a row. The following error message is logged just before the access violation if
	SQL tracing is enabled:
	
	  SQL>>>>> Updated or inserted row is bigger than maximum size
	  (1962 bytes) allowed for this table.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q139141 Debugging SMS/SQL Related Problems
	
	CAUSE
	=====
	
	The access violation occurs when the SMS_INVENTORY_DATA_LOADER thread attempts
	to print the entire SQL command that did not succeed to its log file. The buffer
	that is used to store the SQL command to be printed is too small.
	
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
	
	  Date      Time    Size     File name   Platform
	  -----------------------------------------------
	  05/15/00  6:58pm  535,616  Base.dll    Intel
	  05/15/00  6:59pm  377,408  Base3.dll   Intel
	  05/15/00  6:59pm  538,656  Base4.dll   Intel
	  05/15/00  7:01pm  750,352  Base.dll    Alpha
	  05/15/00  7:02pm  640,784  Base3.dll   Alpha
	  05/15/00  7:11pm  919,824  Base4.dll   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the Systems Management Server (SMS)
	site server:
	
	1. Stop all SMS services.
	
	2. Quit all SMS programs (including the SMS Administrator program, SMS Database
	  Manager, and so on).
	
	3. Replace the Base.dll file in the
	  <SMS_root_folder>\Site.srv\<Platform>.bin folder with the hotfix
	  version.
	
	4. Replace the Base3.dll file in the
	  <SMS_root_folder>\Site.srv\<Platform>.bin folder with the
	  hotfixed version.
	
	5. Replace the Base4.dll file in the
	  <SMS_root_folder>\Site.srv\<Platform>.bin folder with the hotfix
	  version.
	
	6. Restart the SMS services.
	
	
	Additional query words: prodsms av 1962
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP2 kbSMS120SP3 kbSMS120SP4 kbSMS120SP1
	Version           : winnt:1.2,1.2 SP1,1.2 SP2,1.2 SP3,1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
