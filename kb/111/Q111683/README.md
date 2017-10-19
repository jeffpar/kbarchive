---
layout: page
title: "Q111683: New Installation of WFWG with IPX.COM Gives Erroneous Dialog"
permalink: /kb/111/Q111683/
---

## Q111683: New Installation of WFWG with IPX.COM Gives Erroneous Dialog

	Article: Q111683
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows for Workgroups (WFWG) version 3.11 to a new directory,
	and IPX.COM is running, the following message is displayed:
	
	  The files for IPX Support Driver (Monolithic) with NetBIOS transport are
	  currently installed on your computer.
	
	  Do you want to replace them with the version you are installing now?
	
	  If you want to replace all later files with the version you are installing
	  now, press Yes to All.
	
	This message is displayed even though you are installing Windows for Workgroups
	to a new directory, and therefore do not have NetWare 3.x workstation drivers
	installed that need to be updated.
	
	CAUSE
	=====
	
	After Setup copies the NetWare files to your hard disk (including VIPX.386), the
	SETUP.INF file instructs Setup to copy them once again. As a result, Setup
	detects the files it just copied to your hard disk and displays the message
	noted above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, choose Yes to update the files and continue Setup.
	Although Setup does not actually update the files, it copies the same version of
	VIPX.386 to your hard disk and then continues normally.
	
	Additional query words: 3.11 install installation misleading dialog box error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
