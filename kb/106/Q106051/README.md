---
layout: page
title: "Q106051: Errors Printing from Windows for Workgroups"
permalink: /kb/106/Q106051/
---

## Q106051: Errors Printing from Windows for Workgroups

{% raw %}

	Article: Q106051
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.10 3.11 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print from a Windows for Workgroups computer to a Windows NT
	computer that is sharing a printer on the network, the first print job prints,
	but subsequent print jobs cause the following error to appear on the Windows for
	Workgroups computer:
	
	  !ERROR in Print Manager
	
	Quitting and restarting Windows for Workgroups allows the computer to print
	again, but the error appears again after the first print job.
	
	CAUSE
	=====
	
	This problem may be due to the Windows for Workgroups computer running Banyan
	VINES software in addition to Windows for Workgroups.
	
	Banyan VINES adds the following lines to the AUTOEXEC.BAT file of the Windows for
	Workgroups computer:
	
	     ban /nc
	     redirall
	     arswait
	     Z:login
	     Z:setmsgs off
	
	In addition, Banyan VINES adds the following lines to the Windows for Workgroups
	computer's SYSTEM.INI:
	
	     [Boot]
	     secondnet=vines.drv
	     [386 enh]
	     secondnet=vvinesd.386
	
	     [network]
	     multinet=vines500
	
	RESOLUTION
	==========
	
	Removing the Banyan VINES software from the Windows for Workgroups computer.
	
	The Banyan product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: wfw wfwg prodnt 3.10 3.11 StreetTalk WAN ntas
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW310 kbWFW311
	Version           : 3.10 3.11 3.50
	
	=============================================================================
	

{% endraw %}
