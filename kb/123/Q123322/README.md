---
layout: page
title: "Q123322: No Access to COM Ports with SuperVoice 2.0b &amp; RHICOMM.DRV"
permalink: /kb/123/Q123322/
---

## Q123322: No Access to COM Ports with SuperVoice 2.0b &amp; RHICOMM.DRV

{% raw %}

	Article: Q123322
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 cannot gain access to the communication (COM) ports for detection.
	
	CAUSE
	=====
	
	This symptom occurs if the Windows 3.1 communications application SuperVoice
	version 2.0b is installed in Windows 95 when you add a new modem to the system.
	This application copies a new communications driver called RHICOMM.DRV to the
	Windows SYSTEM subdirectory and changes a line in the SYSTEM.INI file.
	
	NOTE: The above symptom does not occur until you restart the system.
	
	WORKAROUND
	==========
	
	Using a text editor such as MS-DOS Editor or Notepad, open the SYSTEM.INI file,
	which is found in the Windows directory. In the [boot] section, locate the line
	that reads:
	
	  Comm.drv=Rhicomm.drv
	
	Change this line to read:
	
	  Comm.drv=Comm.drv
	
	Save the changes and then restart the system.
	
	MORE INFORMATION
	================
	
	SuperVoice is manufactured by Pacific Image Communications, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3rdparty comm port
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
