---
layout: page
title: "Q166624: XADM: Upgrading Active Server Page Scripts"
permalink: /kb/166/Q166624/
---

## Q166624: XADM: Upgrading Active Server Page Scripts

{% raw %}

	Article: Q166624
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange 5.0 Active Server Pages components do not support file
	version numbers. When you install a service pack or upgrade to a new version of
	Microsoft Exchange Server, the entire Webdata directory is renamed to
	Webdata.000, and a new Webdata directory is created. Any scripting changes made
	to the default script files included with Microsoft Exchange Server will need to
	be updated manually after the upgrade has taken place.
	
	MORE INFORMATION
	================
	
	When you upgrade an existing Microsoft Exchange Server installation to a service
	pack or a new version, the install process does a check for every file to be
	installed. It checks to ensure the file exists and then to ensure that the file
	to be installed is not older than the existing file itself.
	
	Microsoft Exchange Server Active Server Pages are primarily script files, open to
	modification by the administrator or other personnel. Because these script files
	may contain custom code, the whole directory is copied to prevent data loss.
	
	If any of the Active Server Pages script files for Microsoft Exchange Server were
	modified before the upgrade, the administrator will need to re- apply these
	changes to the scripts which are now resident in the Webdata directory in order
	to match any changes they may have made by customizing their scripts.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
