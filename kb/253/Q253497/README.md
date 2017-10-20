---
layout: page
title: "Q253497: RDPCLIP.EXE: Does Not Work If Session Was Disconnected"
permalink: /kb/253/Q253497/
---

## Q253497: RDPCLIP.EXE: Does Not Work If Session Was Disconnected

{% raw %}

	Article: Q253497
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RDPCLIP's capabilities to transfer files and folders between the client and
	server sessions may not work if the Terminal Server session was disconnected and
	reconnected.
	
	RESOLUTION
	==========
	
	Microsoft has created a new version of the installation file, FXFRINST.BAT, that
	will make the appropriate adjustments to the registry keys and resolve this
	problem.
	
	The updated version of RDPCLIP.EXE contains the updated FXFRINST.BAT and FXFR.INI
	files.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Rdpclip.exe
	  (http://download.microsoft.com/download/win2000platform/rdpclip/1.0/NT5/EN-US/rdpclip_hotfix.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in RDPCLIP.EXE.
	
	
	Additional query words: rkbook reskit tools resource kit 1-57231-805-8 W2K Server
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
