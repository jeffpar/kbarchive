---
layout: page
title: "Q93018: LMLOGON=1 Is Not Recognized at the Command Line"
permalink: /kb/093/Q93018/
---

## Q93018: LMLOGON=1 Is Not Recognized at the Command Line

{% raw %}

	Article: Q93018
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows for Workgroups network driver does not recognize LMLOGON=1 if you
	attempt to log on from the command line before starting Windows for Workgroups,
	or if you attempt to log on from Workgroup Connections. The only entry
	recognized when starting the network at MS-DOS is LMLOGON=YES.
	
	WORKAROUND
	==========
	
	When Control Panel is used to activate LAN Manager validation, it automatically
	puts an entry of LMLOGON=1 in the [network] section of the SYSTEM.INI file. The
	only way to log on to a LAN Manager server from the command line is to manually
	modify this line.
	
	To change this entry:
	
	1. Using a text editor, open the SYSTEM.INI file.
	
	2. In the [network] section, change the LMLOGON= entry to:
	
	  LMLOGON=YES
	
	3. Save the file.
	
	4. Restart the network services from the MS-DOS command prompt.
	
	The entry LMLOGON=YES is not recognized by the Networks section of Control Panel.
	Even if the above modification is made, the LAN Manager settings in Control
	Panel do not display a check in the Logon On To LAN Manager Domain check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	Additional query words: 3.10 Lanman lan man
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	

{% endraw %}
