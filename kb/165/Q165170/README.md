---
layout: page
title: "Q165170: HOWTO: Determine the TCP/IP Address"
permalink: /kb/165/Q165170/
---

## Q165170: HOWTO: Determine the TCP/IP Address

{% raw %}

	Article: Q165170
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you do not know the TCP/IP address of your Windows NT machine, you can
	determine it quickly by bringing up an MS-DOS Window and typing IPCONFIG at the
	prompt. On a Windows 95 machine, type WINIPCFG at the Start/Run prompt.
	
	Information similar to the following appears:
	
	  Windows NT IP Configuration
	
	  Ethernet adapter IEEPRO1:
	
	     IP Address. . . . . . . . . : 157.54.53.197
	
	     Subnet Mask . . . . . . . . : 255.255.240.0
	
	     Default Gateway . . . . . . : 157.54.48.1
	
	The Windows 95 machine displays a Window titled IP Configuration with the above
	information, in addition to some information on your network adapter.
	
	MORE INFORMATION
	================
	
	This information is sometimes necessary when setting up a Remote OLE Automation
	Server. When running Clireg32.exe on the client machine, the "network address"
	field requires either the machine name or the TCP/IP address of the server.
	
	REFERENCES
	==========
	
	For more information about using Clireg32.exe, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q155939 How To Use Clireg32.exe for Remote Automation
	
	"Visual FoxPro Developer's Guide," version 5.0, pp. 445-446.
	
	Additional query words: tcp
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
