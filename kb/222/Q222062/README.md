---
layout: page
title: "Q222062: Ntmarta.dll in German SP4 has Conflicting Base Address"
permalink: /kb/222/Q222062/
---

## Q222062: Ntmarta.dll in German SP4 has Conflicting Base Address

	Article: Q222062
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4 on a German Windows NT computer,
	you may receive the following pop-up error message when you start certain
	applications:
	
	  Illegale Verschiebung einer System-DLL
	  Die System-DLL "ole32.dll" wurde im Speicher verschoben. Die Anwendung wird
	  nicht einwandfrei ausfuhrbar sein. Die Datei wurde verschoben, da die DLL
	  "C:\WINNT\system32\NTMARTA.DLL" einen AdreBbereich belegt, der fur Windows
	  NT-System-DLLs reserviert ist. Besorgen Sie sich vom DLL-Lieferanten eine
	  neue DLL.
	
	CAUSE
	=====
	
	This problem occurs because Ntmarta.dll has a default load address that
	conflicts with the load address of Ole32.dll. This is only a problem when
	Ntmarta.dll is loaded before Ole32.dll.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as Ntmart-i.exe
	(x86) and Ntmart-a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/ger/NT40/hotfixes-postSP5/Ntmarta-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
