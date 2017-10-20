---
layout: page
title: "Q253995: BUG: Connecting to Emulation Hangs Developer Studio"
permalink: /kb/253/Q253995/
---

## Q253995: BUG: Connecting to Emulation Hangs Developer Studio

{% raw %}

	Article: Q253995
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbide kbMiscTools kbVC600 kbOSWinCEsearch kbEmulatex86 kbDSupport kbGrpDSVCCompiler
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to download or run a remote tool in a Windows CE emulation
	environment, a remote connection may be initiated; however, it may then stop
	responding or hang indefinitely.
	
	CAUSE
	=====
	
	To use the Windows CE emulation environment, you must have Transfer Control
	Protocol/Internet Protocol (TCP/IP) networking support. Also, a bug in the
	emulation TCP/IP transports may require that the workstation TCP/IP be
	configured for Dynamic Host Configuration Protocol (DHCP).
	
	RESOLUTION
	==========
	
	Try one of the following solutions to enable emulation connectivity:
	
	- If the workstation is using a static IP address, ensure that the address is a
	  valid workstation address (the first and last addresses of a subnet are not
	  valid workstation addresses). Please see your network administrator for more
	  details.
	
	- Install TCP/IP networking for your operating system and configure for DHCP.
	  If you do not have a DHCP server available, you may not be able to connect
	  with the emulation environment.
	
	- Delete the following components from the emulator \Windows folder and attempt
	  the connection again:
	
	   - Cemgrc.exe
	   - Cetlstub.dll
	   - Tcpipc.dll
	   - Tlcesrv.dll
	   - Tlppp.dll
	   - Toolhelp.dll
	   - Cemon.exe
	   - Cefwcli.exe
	   - Cehwcli.exe
	   - Cepwcli.exe
	   - Ceregcli.exe
	   - Cespycli.exe
	   - Cezcli.exe
	
	- Connect your desktop computer to a Windows CE device by using Microsoft
	  Windows CE Services or ActiveSync 3.0, before you try to establish a
	  connection with the emulator.
	
	- If your system is using Microsoft Windows NT 4.0 Service Pack 6 (SP6),
	  install Service Pack 6a.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q226479 PRB: EndDialog May Hang in Emulation Environment
	
	Additional query words: platform manager
	
	======================================================================
	Keywords          : kbide kbMiscTools kbVC600 kbOSWinCEsearch kbEmulatex86 kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
