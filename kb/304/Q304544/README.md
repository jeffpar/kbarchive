---
layout: page
title: "Q304544: Cannot Install IIS 5.1 Printers Virtual Directory Subcomponent"
permalink: /kb/304/Q304544/
---

## Q304544: Cannot Install IIS 5.1 Printers Virtual Directory Subcomponent

{% raw %}

	Article: Q304544
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Internet Information Services (IIS) 5.1 Printers
	Virtual Directory subcomponent through Add/Remove Windows Components, the
	Printers Virtual Directory, which enables Internet Printing Protocol (IPP), is
	not installed, even though the Printers Virtual Directory check box is selected.
	
	CAUSE
	=====
	
	The Printers Virtual Directory installation is configured in the Local Computer
	Policy, not through Add/Remove Windows Components.
	
	RESOLUTION
	==========
	
	To install the Printers Virtual Directory:
	
	1. Start the Microsoft Management Console (MMC), and then load the Group Policy
	  snap-in.
	
	2. Select Computer Configuration, select Administrative Templates, and then
	  select Printers.
	
	3. Make sure that Web-based printing is enabled.
	
	NOTE: You must restart the Spooler service for these changes to take effect.
	
	If the server is part of a domain, you can configure Web-based printing through
	the Domain Group Policy.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	(IIS) 5.1.
	
	MORE INFORMATION
	================
	
	Enabling and disabling Web-based printing by using the Local Computer Policy
	snap-in toggles the following registry key:
	
	  [HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Printers]
	  "DisableWebPrinting"=dword:00000000
	
	When you restart the Spooler service, the service detects this setting and takes
	the appropriate action. For example, if Web-based printing is enabled:
	
	- The printers virtual directory pointing to C:\WINDOWS\Web\Printers is added
	  in the IIS configuration.
	
	- A .printer ISAPI extension mapping is configured for the Msw3prt.dll ISAPI
	  extension.
	
	- You can use Internet Printing Protocol (IPP) by browsing to
	  http://%servername%/printers/.
	
	Initially, the Printers Virtual Directory is not present in the IIS configuration
	and Web-based printing is disabled. If Web-based printing is explicitly
	disabled, the Printers Virtual Directory is removed from the IIS configuration
	when the Spooler service is restarted.
	
	NOTE: In the Internet Services Manager (ISM), the .printer ISAPI extension
	mapping is not visible under the Printers Virtual Directory; however, you can
	check the setting by using Adsutil.vbs:
	
	  C:\Inetpub\AdminScripts> cscript.exe adsutil.vbs enum w3svc/1/root/printers
	
	Additional query words: metabase v-dir remove policy
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
