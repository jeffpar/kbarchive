---
layout: page
title: "Q223143: SMS: AUDIT32 Does Not Delete Temp MIF Created in Ms&#92;Sms&#92;Temp"
permalink: /kb/223/Q223143/
---

## Q223143: SMS: AUDIT32 Does Not Delete Temp MIF Created in Ms&#92;Sms&#92;Temp

	Article: Q223143
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
	
	Audit32.exe creates a temporary MIF in the Ms\Sms\Temp directory during its
	software scan. However, the MIF is not deleted after Audit completes. A
	zero-byte MIF is left over. AUDIT16 does not exhibit this behavior.
	
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
	   
	  2/25/99   10:23pm      188,384   Audit32.exe   (x86)
	  2/25/99   10:24pm      626,448   Audit32.exe   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually delete the zero-byte MIF after AUDIT32 has
	completed.
	
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
	
	  NOTE: You can perform this step automatically by using Hotfix.exe with the
	  provided Hotfix.ini file.
	
	2. Any previous Audit packages that have been distributed will need to be
	  refreshed.
	
	Additional query words: prodsms audit terminates terminated stops stopped
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbAudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
