---
layout: page
title: "Q243080: XADM: Access Denied During Service Pack Update 0xc0020005"
permalink: /kb/243/Q243080/
---

## Q243080: XADM: Access Denied During Service Pack Update 0xc0020005

{% raw %}

	Article: Q243080
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply an Exchange Server service pack, after the files are copied, when
	you start the World Wide Web (WWW) service, you may receive the following error
	message:
	
	  Microsoft Exchange Setup
	  Access is Denied
	  Microsoft Windows NT ID No. 0xc0020005
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click OK to cancel the Exchange Server service pack update.
	
	2. In Control Panel, double-click Services. Disable all third-party and
	  non-essential services, such as monitoring agents, Simple Network Management
	  Protocol (SNMP), uninterruptible power supply (UPS), backup programs, and
	  anti-virus programs.
	
	3. If you have Outlook Web Access (OWA) for Exchange Server 5.5 or Active Server
	  Components for Exchange Server 5.0 and you have any custom Active Server
	  pages installed, make backups of those custom Active Server pages.
	
	4. Insert the Exchange Server CD-ROM, and then start Exchange Server Setup.
	  Click Add/Remove.
	
	5. If the Outlook Web Access check box is selected, click to clear the Outlook
	  Web Access check box, and then run Setup to remove OWA. In Exchange 5.0, if
	  the Active Server Components check box is selected, click to clear the Active
	  Server Components check box, and then run Setup to remove Active Server
	  Components.
	
	6. After Setup finishes, delete the Exchsrvr\Webdata folder.
	
	7. Run the Exchange Server service pack update. After you apply the update,
	  reinstall OWA or Active Server Components if necessary, and then copy the
	  custom Active Server Pages if necessary.
	
	8. Reapply the Exchange Server service pack update.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
