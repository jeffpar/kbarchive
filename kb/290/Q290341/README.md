---
layout: page
title: "Q290341: IIS5 OWA: Configuring Internet Authentication in Exchange 2000"
permalink: /kb/290/Q290341/
---

## Q290341: IIS5 OWA: Configuring Internet Authentication in Exchange 2000

{% raw %}

	Article: Q290341
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Configuring Authentication in Exchange 2000 Outlook Web Access:
	
	When you configure Outlook Web Access (OWA), Exchange creates a Virtual Directory
	in Internet Information Services (IIS) under the Default Web Site. By default,
	the OWA (Exchange) Virtual Directory is configured with Basic Authentication (no
	default domain/realm specified) and Integrated Windows Authentication as the
	Authentication Methods. If your network environment requires you to change or
	edit these Authentication Methods you need to make these changes in the
	"Exchange System Manager" and not through Internet Information Services. If
	these changes are made in the Internet Information Services Snap-in, Exchange
	changes them back to the configurations set in the "Exchange System Manager".
	
	MORE INFORMATION
	================
	
	To change or edit the Authentication Method of a Virtual Directory, use these
	steps:
	
	1. Open the "Exchange System Manager" Snap-in.
	
	2. Expand Servers, expand Server Name, expand Protocols, expand HTTP, and then
	  expand Exchange Virtual Server.
	
	3. Right-click the Virtual Directory in which you need to make changes (that is,
	  Exchange, and so forth), and then click Properties.
	
	4. Click the Access tab.
	
	5. Click Authentication.
	
	6. Make your changes just as you would in the Internet Information Services
	  snap-in.
	
	  If you want to specify a default domain for authentication, enter the default
	  domain name (the Net BIOS name) in the Default Domain field.
	
	7. Click OK, and then click OK again.
	
	NOTE: If you are configuring the domain name on a front-end server, you must have
	at least one mailbox and public folder store mounted. You can remove the stores
	on the front-end server after configuration is complete. Also, you must enter
	the domain name on the Back-end server as well.
	
	Additional query words: iis iis5 disappear disappears vanish deleted delete removed gone away
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbExchangeSearch kbiis500 kbExchange2000Search kbWinAdvServSearch kbExchange2000Serv
	Version           : :2000,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
