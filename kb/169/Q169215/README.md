---
layout: page
title: "Q169215: Remote Administration of Routing &amp; Remote Access"
permalink: /kb/169/Q169215/
---

## Q169215: Remote Administration of Routing &amp; Remote Access

{% raw %}

	Article: Q169215
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to remotely administer a Routing and Remote Access Service router
	using the graphical user interface (GUI) or command line utilities from a
	Microsoft Windows NT Server or Workstation.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	After expanding the CAB file for Routing and Remote Access Service, you can run
	Copyadmn.cmd to install Routing and Remote Access Service Administrator on any
	computer running Windows NT 4.0 Workstation or Server with Service Pack 3 (or
	later). This allows you to remotely administer any Routing and Remote Access
	Service router where you have administrative rights.
	
	NOTE: The Copyadmn.Cmd batch file does not copy Routmon.exe, the command- line
	administrative tool. If you want to use this, you must copy the file manually.
	
	WARNING: The administrative tools should not be installed on a system that is
	running Dial-up Networking or the legacy RAS services. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q169907 Error 127 Starting Dial Up Networking After Running Copyadmn.cmd
	
	Method 2
	--------
	
	Both the GUI tool and the command-line tool (Routmon.exe) can be used to remotely
	administer a Routing and Remote Access router provided the user has
	administrative rights on the remote server.
	
	Method 3
	--------
	
	The Windows NT Resource Kit comes with a utility that allows you to remotely run
	command-line utilities called Remote Command Service (RCMD). For additional
	information on this utility, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151519 Resource Kit Utility Provides Remote Command Execution
	
	Using RCMD you can run command-line utilities such as ROUTEMON and KERNROUT to
	make changes or gather information on a remote Routing and Remote Access Service
	router. This can be used to administer the router from any system not running
	Windows NT 4.0 with Service Pack 3 and the new administrative tools.
	
	Additional query words: prodnt rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
