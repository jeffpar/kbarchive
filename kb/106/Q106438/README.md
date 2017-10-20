---
layout: page
title: "Q106438: Windows for Workgroups 3.11: How to Disable Printer Alerts"
permalink: /kb/106/Q106438/
---

## Q106438: Windows for Workgroups 3.11: How to Disable Printer Alerts

{% raw %}

	Article: Q106438
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you print to a shared Microsoft Windows for Workgroups printer, your
	computer stops responding, or hangs. The print job finishes successfully.
	
	CAUSE
	=====
	
	When you share a printer on a Windows for Workgroups version 3.11 computer, the
	default configuration for the printer is to send printer alerts through the
	Print Manager. These alerts can sometimes cause a computer to hang.
	
	WORKAROUND
	==========
	
	To work around this problem, disable printer alerts by adding the following
	entry to the [Network] section of the SYSTEM.INI file on the print server:
	
	  SendPrintMessages=no
	
	NOTE: Disabling WinPopup does not disable printer alerts since these messages are
	sent through Print Manager. The only way to disable printer alerts is to add the
	line described above.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 freeze pop up notification
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
