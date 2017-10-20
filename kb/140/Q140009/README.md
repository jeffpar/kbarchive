---
layout: page
title: "Q140009: Microsoft Exchange Printout Is Titled &quot;Unknown&quot;"
permalink: /kb/140/Q140009/
---

## Q140009: Microsoft Exchange Printout Is Titled &quot;Unknown&quot;

{% raw %}

	Article: Q140009
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print an e-mail message from Microsoft Exchange, the printout may be
	titled "Unknown."
	
	CAUSE
	=====
	
	This problem can occur if the following situations exists:
	
	- The Microsoft Network Online Service is the only service in the current
	  profile.
	
	- You have no service provider selected, and the current profile contains only
	  a personal address book (.pab file) and a personal information store (.pst
	  file).
	
	  NOTE: In both cases above, you are not prompted for user information when the
	  profile is created, so the registry entry for the profile does not contain
	  the user data required for the printout title.
	
	- You have The Microsoft Network Online Service installed in the current
	  profile along with other message services.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods.
	
	Method 1
	--------
	
	If the Microsoft Network Online Service is the only service in your profile, add
	another service to the profile. For example, add the Microsoft Fax service. This
	service requires a user name, which is printed as the message title.
	
	To use the Microsoft Fax service, you must first add the Microsoft Fax component
	in Windows 95, which adds the Microsoft Fax service to Microsoft Exchange as an
	option.
	
	To add the Microsoft Fax component in Windows 95, follow these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. Click the Windows Setup tab.
	
	3. In the Components box, click the Microsoft Fax check box to select it, and
	  then click OK.
	
	To add the Microsoft Fax service to your profile, follow these steps:
	
	1. In Microsoft Exchange, click Services on the Tools menu.
	
	2. Click Add.
	
	3. Click Microsoft Fax, and then click OK.
	
	4. Supply the information required by Microsoft Exchange when you are prompted.
	
	5. Click OK.
	
	Method 2
	--------
	
	If no service provider is included in your profile, add one (other than the
	Microsoft Network Online Service).
	
	Method 3
	--------
	
	Remove The Microsoft Network Online Service from the profile, then add it back
	again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: inbox
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
