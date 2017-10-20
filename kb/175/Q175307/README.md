---
layout: page
title: "Q175307: SRVINFO Causes Dr. Watson Application Error"
permalink: /kb/175/Q175307/
---

## Q175307: SRVINFO Causes Dr. Watson Application Error

{% raw %}

	Article: Q175307
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you run Srvinfo.exe from the Windows NT 4.0 Resource Kit, it results in the
	following error message:
	
	  Dr. Watson For Windows NT
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  SRVINFO.exe Exception access violation (0xc0000005), Address: 0x77a5510
	
	The Application Event Log records the following:
	
	  Event Id: 4097
	  Source: DrWatson
	
	  The application, exe\srvinfo.dbg, generated an application error. The
	  error occurred on <date> @  <time>. The exception generated was
	  c0000005 at address 77a05510 (wcscpy).
	
	CAUSE
	=====
	
	This occurs when a self-extracting hotfix has been applied to the server prior
	to running Srvinfo.exe.
	
	RESOLUTION
	==========
	
	Editing the registry to remove the key created when running the hotfix will
	allow Srvinfo.exe to run without error.
	
	The scenario below uses the example of having run Oobfix_i.exe. Other self-
	extracting hotfixes for various products will also produce this problem, however
	the hotfix key may be located elsewhere in the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT
	  \CurrentVersion\Hotfix
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select the File 1 key. From the Registry menu, click Save Key. After the key
	  is saved to disk, return to Registry Editor and delete the File 1 key.
	
	Deleting this key will allow Svrinfo.exe to run without error, while still
	displaying the hotfix information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: reskit winnt 2.2 sql exchange workstation asp dblclick dns getadmin icmp iis java lm lsa oob simptcp winsupd zip Alpha krnl ras RPC sec serial setupdd sfmsrv TCPIP 32proc afd cdfs mcanet ndis 1NTBackup ntvdm pcmcia spx syn attack toshiba winstone97 fix
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
