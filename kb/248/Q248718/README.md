---
layout: page
title: "Q248718: XWEB: VBScript Error 800A01A8 and Outlook Web Access"
permalink: /kb/248/Q248718/
---

## Q248718: XWEB: VBScript Error 800A01A8 and Outlook Web Access

{% raw %}

	Article: Q248718
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to an Exchange Server 5.5 computer using Outlook Web
	Access (OWA), you may receive the following error message:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A01A8)
	  Object required: 'Application(...)'
	  /exchange/USA/logon.asp, line 12
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Start the Internet Information Server (IIS) Microsoft Management Console
	  (MMC) snap-in, and expand the Transaction Server folder.
	
	2. Click Computers, click My Computer, click Packages Installed, click IIS
	  In-Process Applications, and then click Components.
	
	3. Delete the IISWAM.1_Root_Exchange component.
	
	4. Click the Internet Information Server folder, and then click Default Web
	  Site.
	
	5. Right-click the Exchange virtual directory, and then click Properties.
	
	6. Under the Application Settings section on the Virtual Directory tab, there
	  are three buttons: Remove, Configuration, and Unload. Click Remove, click
	  Apply, and then click OK.
	
	7. In Control Panel, double-click Services, and stop the IIS Admin Service.
	
	  NOTE: This also stops the FTP Publishing Service and the Web Publishing
	  Service.
	
	8. Return to the Exchange virtual directory properties. The Configuration and
	  Unload buttons are unavailable.
	
	9. Click Create.
	
	10. Click Apply, and then click OK.
	
	11. In Control Panel, double-click Services, and start the IIS Admin, FTP
	  Publishing, and Web Publishing Services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
