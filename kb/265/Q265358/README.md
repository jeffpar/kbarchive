---
layout: page
title: "Q265358: &quot;Site Config Last Checked&quot; Registry Value Is Missing"
permalink: /kb/265/Q265358/
---

## Q265358: &quot;Site Config Last Checked&quot; Registry Value Is Missing

	Article: Q265358
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbsms200bug kbCAP
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A Microsoft Systems Management Server (SMS) version 2.0 client may seem to
	belong to SMS sites that are no longer in existence. By default, an SMS client
	should remove itself from a site if it is unable to contact the client access
	point (CAP) in 60 days.
	
	The Ccim32 log file on the client may display the following error message:
	
	  Warning: Unable to check assignment for site "BB2" - #2147942453
	  Warning - couldn't read site config timestamp
	  The site BB2 does not exist any longer.
	
	CAUSE
	=====
	
	This behavior can occur because the "Site Config Last Checked" value is missing
	from the following registry key on the client:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\Client\Sites\Shared\<Sitecode>\
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this behavior, you must create a string value with the name "Site
	Config Last Checked" under the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Sms\Client\Sites\Shared\<Sitecode>\
	
	Double-click the new Reg_SZ (string) registry key value and add a date with the
	format "2000/06/13 06:28.53". If the date is set to a time that is 60 days older
	than the current date, Client Configuration Installation Manager (CCIM) can
	remove the client from the previous site on its next polling cycle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbsms200bug kbCAP 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
