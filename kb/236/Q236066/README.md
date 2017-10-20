---
layout: page
title: "Q236066: SMS: INVMAC Fails to Report Package During Software Inventory"
permalink: /kb/236/Q236066/
---

## Q236066: SMS: INVMAC Fails to Report Package During Software Inventory

{% raw %}

	Article: Q236066
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
	
	If multiple instances of a program are on your Macintosh computer, the
	Invmac.mac file may fail to report the presence of the program during a software
	inventory.
	
	For example, if you create a software inventory package using the following
	criteria and multiple instances of the "My App" file are on the Macintosh client
	computer, the Invmac.mac file does not report the package if the first "My App"
	file it finds does not match the defined criteria.
	
	  "My Application 5.0.1" FILE "My App" DATE 6/28/99
	
	CAUSE
	=====
	
	This issue occurs because the Invmac.mac file only evaluates the first instance
	of the file it finds.
	
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
	
	NOTE: All columns in the table except for File Name are optional.
	
	  Date      Time     Size      File name    Platform
	  ---------------------------------------------------
	  5/26/99   7:33pm   361,086   Invmac.mac   Macintosh
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, delete all instances of the file except for the one
	that matches the criteria defined for the software inventory package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, you must use the Hdecomp.exe program found in the Support
	folder of the Systems Management Server 1.2 CD-ROM. Expand the file to a user
	authentication module (UAM) volume, and place it in the
	\SMS\Site.srv\Maincfg.box\Client.src\Mac.bin folder on each site server.
	Macintosh clients must run the Systems Management Server Apple script to get the
	updated Invmac.mac file.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
