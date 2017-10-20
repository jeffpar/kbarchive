---
layout: page
title: "Q267258: SMS Hotfixes Not Installed If &quot;Full Version&quot; Value Is Missing"
permalink: /kb/267/Q267258/
---

## Q267258: SMS Hotfixes Not Installed If &quot;Full Version&quot; Value Is Missing

{% raw %}

	Article: Q267258
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to install a Systems Management Server (SMS) hotfix on a
	secondary site, the hotfix may seem to be installed correctly, or may not be
	installed. If the hotfix is not installed, you may see the following text in the
	Q<nnnnnn>.log file that is generated when you install a hotfix:
	
	  Installation aborted. This system is not running SMS version number
	  2.00.1239.1000. Instead, the version reported is 000.
	
	  -or-
	
	  Installation aborted. This system is not running SMS version number
	  2.00.1380.1000. Instead, the version reported is 000.
	
	However, the server is in fact running SMS 2.0 or SMS 2.0 SP1.
	
	The Q<nnnnnn>.log file is located in the SMS\Logs folder on the site server
	on which you installed the hotfix. The <nnnnnn> portion of the file name
	represents the number of the hotfix you installed.
	
	CAUSE
	=====
	
	This behavior can occur if you either installed or upgraded an SMS 2.0 secondary
	site directly from the SMS Administrator console at the primary site. This issue
	does not occur on sites that you installed or upgraded by using the CD-ROM.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, manually create or update the required registry value. To
	create or update this value on secondary sites:
	
	1. Start Registry Editor.
	
	2. Locate and click the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	3. If the Full Version value exists, manually update it with the correct data
	  value:
	
	   - SMS 2.0 release version (build 1239): 2.00.1239.0000
	   - SMS 2.0 SP1 release version (build 1380): 2.000.1380.1000
	
	4. If the Full Version value does not exist, create it and add the appropriate
	  data value:
	
	  Value Name: Full Version
	  Data Type: REG_SZ
	  Value: 2.00.1239.0000 -or- 2.00.1380.0000
	
	5. Quit Registry Editor.
	
	After you follow these steps, you can continue installing the hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
