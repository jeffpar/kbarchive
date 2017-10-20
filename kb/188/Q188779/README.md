---
layout: page
title: "Q188779: SMS: Inventory Fails to Properly Identify 400 MHz Processors"
permalink: /kb/188/Q188779/
---

## Q188779: SMS: Inventory Fails to Properly Identify 400 MHz Processors

{% raw %}

	Article: Q188779
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug smsinstkbbuglist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	INVDOS and INVWIN32 fail to report Intel Pentium II 350 MHz and 400 MHz
	processors properly. The processors are inventoried as Intel Pentium II 333 MHz
	processors.
	
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
	
	    Date        Time           Size    File name      Platform
	  ------------------------------------------------------------
	
	  08/12/98    7:19 PM          20 KB    Getcomp.exe   Intel
	  08/12/98    7:12 PM         227 KB   Inv32cli.exe   Intel
	  08/12/98    7:12 PM         289 KB   Invwin32.exe   Intel
	
	  08/12/98    7:12 PM         847 KB   Inv32cli.exe   Alpha
	  08/12/98    7:13 PM         863 KB   Invwin32.exe   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug smsinst kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
