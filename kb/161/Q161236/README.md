---
layout: page
title: "Q161236: Startnet.bat Not Removed with NetWare Workstation Shell 4.0"
permalink: /kb/161/Q161236/
---

## Q161236: Startnet.bat Not Removed with NetWare Workstation Shell 4.0

{% raw %}

	Article: Q161236
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove the Novell NetWare (Workstation Shell 4.0 and later [VLM])
	network client, the Startnet.bat line is not removed from the Autoexec.bat file.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Autoexec.bat file and disable
	the "@call startnet.bat" line. To disable the line, type "rem" (without the
	quotation marks) at the beginning of the line.
	
	MORE INFORMATION
	================
	
	Windows 95 OEM Service Release 2 (OSR2) does place "rem" before each line within
	the Startnet.bat file.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
