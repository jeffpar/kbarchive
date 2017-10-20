---
layout: page
title: "Q223009: SMS: Long Paths Make Audit Create a MIF That Cannot Be Processed"
permalink: /kb/223/Q223009/
---

## Q223009: SMS: Long Paths Make Audit Create a MIF That Cannot Be Processed

{% raw %}

	Article: Q223009
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbAudit
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Audit scans and finds a match in a path that is 128 characters or greater in
	length, the MIF created is not processed by Dataloader and the following error
	is logged in the Dataldr.log file:
	
	  Compilation failed~String value exceeds declared or derived size.
	
	CAUSE
	=====
	
	The MIF being created by Audit contains a path that is greater than 128
	characters. The size defined in SQL for the file path is 128 characters.
	
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
	
	  Date      Time         Size      File name     Platform
	  -------------------------------------------------------
	
	  2/25/99   10:23pm      134,684   Audit16.exe   (x86)
	  2/25/99   10:23pm      188,384   Audit32.exe   (x86)
	  2/25/99   10:24pm      626,448   Audit32.exe   (Alpha)
	
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
	
	1. Replace the Audit32.exe file in the
	  <SMS_root>\Primsite.srv\Audit\Package\<Platform>.bin directory
	  with the hotfixed version.
	
	2. Replace the Audit16.exe file in the
	  <SMS_root>\Primsite.srv\Audit\Package\<Platform>.bin directory
	  with the hotfixed version.
	
	NOTE: You can perform these steps automatically by using Hotfix.exe with the
	provided Hotfix.ini file.
	
	NOTE: Any previous Audit packages that have been distributed will need to be
	refreshed.
	
	
	Additional query words: prodsms audit
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbAudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
