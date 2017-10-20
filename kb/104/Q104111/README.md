---
layout: page
title: "Q104111: FaxDrv: Err Msg: MAPI of MS Mail for Windows Is Not Installed"
permalink: /kb/104/Q104111/
---

## Q104111: FaxDrv: Err Msg: MAPI of MS Mail for Windows Is Not Installed

{% raw %}

	Article: Q104111
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0a of the Microsoft Mail Gateway to Fax Windows printer driver may
	generate the following error message during installation:
	
	  MAPI of Microsoft Mail for Windows is not installed. You cannot send fax but
	  you can print fax image to file.
	
	The driver will be installed; however, you can only use it if you select FILE as
	the printer port.
	
	CAUSE
	=====
	
	This message indicates that Microsoft Mail for Windows could not be found. The
	Windows client was not installed or was installed incorrectly.
	
	RESOLUTION
	==========
	
	Install the Mail Windows client if it has not already been installed. If it was
	already installed, reinstall the Windows client. You do not need to reinstall
	the Microsoft Fax printer driver.
	
	MORE INFORMATION
	================
	
	To set up Mail to print to a file
	---------------------------------
	
	1. In the Windows Control Panel, choose the Printers icon.
	
	2. Choose the Connect button to display the Ports options.
	
	3. From the Ports list box, select FILE:.
	
	When you select the FILE port, every time you print, a file is created, but
	nothing is faxed.
	
	Additional query words: 3.00a install error message ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300a
	Version           : MS-DOS:3.0a
	
	=============================================================================
	

{% endraw %}
