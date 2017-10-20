---
layout: page
title: "Q304487: MSReader: Installation Process Stops Responding at 100 Percent"
permalink: /kb/304/Q304487/
---

## Q304487: MSReader: Installation Process Stops Responding at 100 Percent

{% raw %}

	Article: Q304487
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Reader, the installation process may stop
	responding (hang) at 100 percent during the installation of the Ltypeo.ttf file.
	
	CAUSE
	=====
	
	This behavior can occur if the InstallShield cache on your system is damaged
	(corrupted).
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the InstallShield folder. To do this, follow these
	steps:
	
	1. Set Windows to show all files. To do this, follow the appropriate steps for
	  your version of Microsoft Windows.
	
	Microsoft Windows Millennium Edition (Me) and Microsoft Windows 2000:
	
	  a. On the desktop, double-click My Computer.
	
	  b. Click Tools, and then click Folder Options.
	
	  c. Click the View tab, and then click to select the "Show hidden files and
	     folders" check box.
	
	  d. Click OK.
	
	Microsoft Windows 95 and Microsoft Windows 98:
	
	  a. On the desktop, double-click My Computer.
	
	  b. Click View, and then click Folder Options.
	
	  c. Click the View tab, and then click to select the "Show all files" check
	     box.
	
	  d. Click OK.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following (including the quotation marks):
	
	  "c:\program files\common files\"
	
	4. Right-click the InstallShield folder, click Delete, and then click Yes to
	  confirm the deletion.
	
	Reinstall Microsoft Reader
	--------------------------
	
	To download and install Microsoft Reader, browse to the following Microsoft Web
	site:
	
	  http://www.microsoft.com/reader (http://www.microsoft.com/reader/)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
