---
layout: page
title: "Q240786: SMS: Hierarchy Manager Develops Backlog of .ct2 Files"
permalink: /kb/240/Q240786/
---

## Q240786: SMS: Hierarchy Manager Develops Backlog of .ct2 Files

{% raw %}

	Article: Q240786
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
	
	In a site hierarchy with over 10,000 sites, the Central Site Hierarchy Manager
	may not be able to process .ct2 files from child sites fast enough. Also, the
	Hierarchy Manager can develop a backlog from which it may not recover, and it
	may fall further and further behind.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time   Version      Size   File name   Platform
	  ---------------------------------------------------------
	  08/26/99  5:03pm             376,896   BASE3.DLL    Intel
	  08/26/99  5:05pm              98,096   PREINST.EXE  Intel
	  08/26/99  5:05pm             640,272   BASE3.DLL    Alpha
	  08/26/99  5:07pm             170,256   PREINST.EXE  Alpha
	 
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files. To apply this hotfix, stop
	the SMS Services on the site server and replace the existing Base3.dll and
	Preinst.exe files in the appropriate platform folder, and then restart the SMS
	Services.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
