---
layout: page
title: "Q238247: SMS: Invdos.exe Does Not Compensate for Change of Month"
permalink: /kb/238/Q238247/
---

## Q238247: SMS: Invdos.exe Does Not Compensate for Change of Month

{% raw %}

	Article: Q238247
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Invdos component Getdata.exe incorrectly accounts for month changes within
	an inventory cycle. This can result in inventory being taken on a client when it
	should not be. For example, if the last inventory was taken on 3/30/99 and the
	site inventory interval is set to 10 days, inventory should not be taken again
	until 4/9/99. But on 4/1/99, the Invdos tool takes inventory of the client
	because the Getdata.exe component incorrectly accounts for the different month.
	
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
	
	  Date      Time     Version   Size     File name     Platform
	  ------------------------------------------------------------
	  7/22/99   8:59pm   786       72,388   GETDATA.EXE   x86
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install this hotfix site-wide, replace the existing version of this file on
	the Systems Management Server site server, in the following folder:
	
	  \SMS\SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN
	
	Then open and save the System.map file in the SMS folder. For additional
	information about this procedure, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
