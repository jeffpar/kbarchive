---
layout: page
title: "Q153233: XADM: Exchange Server Setup Error Under Chinese Version of NT"
permalink: kb/153/Q153233/
---

## Q153233: XADM: Exchange Server Setup Error Under Chinese Version of NT

	Article: Q153233
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Exchange Server onto the Chinese version
	of Windows NT 3.51, the following error message will be displayed:
	
	  The windows NT natural language system is not configured for the Teletex code
	  page. Install the Windows NT Service Pack 4 and try again.
	
	CAUSE
	=====
	
	The C_20261.nls code page is not installed by the Chinese version of Windows NT
	3.51.
	
	WORKAROUND
	==========
	
	1. Copy C_20261.nls to the \%systemroot%\system32 directory.
	
	2. Start Regedt32.exe and add the following value under:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage
	
	  Value name:  20261
	  Data Type:  REG_SZ
	  String: c_20261.nls
	
	3. Reboot the Windows NT Server and start the installation of Microsoft Exchange
	  Server again.
	
	MORE INFORMATION
	================
	
	The Chinese version of Windows NT 3.51 has Microsoft Windows NT Service Pack 4
	built-in.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
