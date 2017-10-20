---
layout: page
title: "Q169907: Error 127 Starting Dial Up Networking After Running Copyadmn.cm"
permalink: /kb/169/Q169907/
---

## Q169907: Error 127 Starting Dial Up Networking After Running Copyadmn.cm

{% raw %}

	Article: Q169907
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Copyadmn.cmd on a computer with Remote Access Service (RAS)
	installed, you will receive the error:
	
	  Cannot load the Remote Access Connection Manager service. Error 127: The
	  specified procedure could not be found.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	To restore RAS functionality, expand the following DLLs from the Windows NT
	CD-ROM to your %SystemRoot%\System32 directory. After expanding the files,
	reapply your current service pack and restart your computer.
	
	Expand the following files to your system32 directory:
	
	  Rasdlg.dl_
	  Rasapi32.dl_
	  Rasfil32.dl_
	  Rasscrpt.dl_
	
	Example: expand D:\i386\Rasdlg.dl_ C:\Winnt\System32\Rasdlg.dll
	
	MORE INFORMATION
	================
	
	Copyadmn.cmd is a command file that copies the files needed to run the Routing
	and RAS Admin (Mpradmin.exe) tool on a computer running Microsoft Windows NT
	version 4.0 Workstation or Server. This utility is intended for Windows NT
	computers that do not have Routing and RAS Admin or legacy Windows NT 4.0 RAS
	installed. If Routing and Remote Access Service (RRAS) is installed, this tool
	is already available by default. If legacy Windows NT 4.0 RAS is installed,
	there will be incompatibilities with DLL files and RAS will not function. The
	Routing and RAS Admin tool and 4.0 RAS cannot run on the same computer.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
