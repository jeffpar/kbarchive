---
layout: page
title: "Q67265: Cannot Run Swapfile When Any Other Applications Are Running"
permalink: /kb/067/Q67265/
---

## Q67265: Cannot Run Swapfile When Any Other Applications Are Running

{% raw %}

	Article: Q67265
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message occurs if your Windows installation is set up to run on a
	Novell NetWare network.
	
	  Cannot run Swapfile when any other applications are running. To use Swapfile,
	  close all applications and start Swapfile again.
	
	CAUSE
	=====
	
	This message is generated because the NWPOPUP.EXE application is started in the
	load= line of the WIN.INI file.
	
	
	WORKAROUND
	==========
	
	There are two possible workarounds to this problem as follows:
	
	1. Run the Control Panel's Network icon and execute the Disable Broadcast
	  Messages command. Close Control Panel and rerun Swapfile.
	
	  -or-
	
	2. Edit the WIN.INI file by placing a semicolon in front of the load= line and
	  restart Windows in real mode and run Swapfile.
	
	Once the Swapfile has been created, the NWPOPUP.EXE application may be
	reactivated. Run the Control Panel's Network icon and execute the Enable
	Broadcast Messages command or remove the semicolon in front of the load= line in
	the WIN.INI file, depending on which method was used to disable NWPOPUP.EXE.
	
	Additional query words: 3.0 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
