---
layout: page
title: "Q94766: Workstation Not Showing Status w/Print Mgr Minimized on Server"
permalink: /kb/094/Q94766/
---

## Q94766: Workstation Not Showing Status w/Print Mgr Minimized on Server

{% raw %}

	Article: Q94766
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Print Manager is minimized on a Windows for Workgroups server that is
	sharing a printer, the Print Manager on another workstation that sends print
	jobs becomes idle as soon as the job is sent (not when the job is finished
	printing). Usually, the Print Manager on the workstation would display the
	current status of the print job and of the printer.
	
	CAUSE
	=====
	
	The Print Manager on the workstation checks and displays the network printer
	status when it is first loaded; however, if the Print Manager on the printer
	server is minimized, the network printer's status is not updated.
	
	WORKAROUND
	==========
	
	To work around this problem, run the Print Manager on the server maximized so
	that Windows for Workgroups workstations can monitor their print jobs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups versions
	3.1 and 3.11.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.10 3.11 queue
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
