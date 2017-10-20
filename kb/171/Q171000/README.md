---
layout: page
title: "Q171000: Banyan &quot;The procedure Entry Point NtReleaseProcessMutant&quot;"
permalink: /kb/171/Q171000/
---

## Q171000: Banyan &quot;The procedure Entry Point NtReleaseProcessMutant&quot;

{% raw %}

	Article: Q171000
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a Windows NT 3.51 system to Windows NT 4.0 or install the
	Banyan VINES client for Windows NT on Windows NT 4.0, the following blue screen
	STOP message may appear:
	
	  The procedure entry point NtReleaseProcessMutant could not be located in the
	  dynamic link library NTDLL.DLL.
	
	CAUSE
	=====
	
	Versions of Banyan VINES client software prior to 5.56(30) with Service Patch
	Release 1019550 will cause the above behavior. For more information, please see
	the Banyan Web site: www.Banyan.com.
	
	RESOLUTION
	==========
	
	Install the Banyan VINES client for Windows NT Release 4, version 7.26 or later.
	This is the latest release from Banyan as of 6/97 and supports Windows NT
	versions 3.51 and 4.0.
	
	Microsoft has not tested the workaround supplied by Banyan Systems, Inc., and
	therefore cannot guarantee its results.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
