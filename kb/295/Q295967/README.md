---
layout: page
title: "Q295967: HIS2000 Clients Do Not Access Config File on Localized Win 2000"
permalink: /kb/295/Q295967/
---

## Q295967: HIS2000 Clients Do Not Access Config File on Localized Win 2000

{% raw %}

	Article: Q295967
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a 3270 session by using either the Host Integration Server
	2000 (HIS 2000) Administrator Client or the HIS 2000 End User Client on a
	localized Windows 2000 system, you may receive the following error message:
	
	  Error: No WMI Servers are available. Cannot access Config CFG files
	
	CAUSE
	=====
	
	The HIS 2000 Setup program does not grant the Remote Enable permission to the
	Everyone group for the Windows Management Instrumentation (WMI)
	Root\MicrosoftHIS namespace when you install Microsoft Host Integration Server
	2000 on a localized Windows 2000 system.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- From the HIS 2000 root directory, run the following command:
	
	"Wmiace /namespace:root\microsofthis /user:<Everyone Group> /mask:0x20"
	(without the quotation marks)
	
	where <Everyone Group> is the equivalent group name of the installed
	language.
	
	For example, if the language is German, the command resembles the following:
	
	"Wmiace /namespace:root\microsofthis /user:Jeder /mask:0x20" (without the
	quotation marks)
	
	- Grant permission manually. To do this, follow these steps:
	
	  1. Right-click My Computer and click Manage.
	
	  2. In Services and Applications, right-click WMI Control and click
	     Properties.
	
	  3. Click the Security tab, then locate and select MicrosoftHIS Namespace.
	
	  4. Click Security and grant Remote Enable permissions to the Everyone group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	The HIS 2000 setup program uses a separate command to grant the Remote Enable
	permissions. The syntax is the following:
	
	"Wmiace /namespace:root\microsofthis /user:Everyone /mask:0x20" (without the
	quotation marks)
	
	Because the Everyone group is named differently on localized versions of Windows
	2000, this command fails to grant the required permissions.
	
	Additional query words: HIS2000 Namespace WMI Setup WMIACE
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
