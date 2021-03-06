---
layout: page
title: "Q192920: SMS: Site Attachment Fails When Adding Custom Architectures"
permalink: /kb/192/Q192920/
---

## Q192920: SMS: Site Attachment Fails When Adding Custom Architectures

{% raw %}

	Article: Q192920
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
	
	Site attachment fails if the child site's database contains a custom
	architectures created by identification MIF (IDMIF) files. If SQL Tracing is
	enabled, the following entries are logged in the Datalodr.log file:
	
	  SQL>>>select SMSID0 from _Identification_SPEC1 where isnull(SMSID0,'')
	  !=''
	  SQL>>>>> Invalid column name 'SMSID0'.
	
	
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
	  9/11/98   10:24pm      129,136   Dataldr.dll   (Intel)
	  9/11/98   10:23pm      209,680   Dataldr.dll   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the Systems Management Server Database Manager
	(Dbclean.exe) to completely remove the custom architectures from the child
	site's database and then perform the site attachment again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Stop the SMS Executive service.
	
	2. Replace the Dataldr.dll file in the
	  <SMS_root>\Site.srv\<Platform>.bin directory with the hotfixed
	  version.
	
	3. Restart the SMS Executive service.
	
	Additional query words: prodsms dataloader dataldr datalodr dataloder
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
