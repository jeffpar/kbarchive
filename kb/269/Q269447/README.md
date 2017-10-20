---
layout: page
title: "Q269447: XCLN: How to Disable the &quot;Reconfigure Mail Support&quot; Button"
permalink: /kb/269/Q269447/
---

## Q269447: XCLN: How to Disable the &quot;Reconfigure Mail Support&quot; Button

{% raw %}

	Article: Q269447
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When using Outlook 2000, the Reconfigure Mail Support button is enabled by
	default. By clicking this button, you can configure Outlook 2000 by selecting
	either the "Corporate or Workgroup" option, or the Internet Only option. In
	certain situations, the administrator may wish to enable one mode, and disable
	the option so that this mode cannot be changed. This article describes a
	registry change that the administrator can use to disable this functionality.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To use Registry Editor to disable the Reconfigure Mail Support button, follow
	these steps:
	
	1. Create the following registry key if it does not already exist (this key does
	  not exist by default):
	
	  HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Office\9.0\Outlook\Setup
	
	2. Add the following information:
	
	  String value: MailSupport
	  Value: 1
	
	3. To have the changes take effect, quit, and then restart Outlook if it is
	  open.
	
	Verify that the Reconfigure Mail Support button is now unavailable:
	
	In Outlook, on the Tools menu, click Options, and you should see the unavailable
	Reconfigure Mail Support button on the Mail Services tab.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
