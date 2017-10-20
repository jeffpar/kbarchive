---
layout: page
title: "Q294196: &quot;Stop 0x0000001E&quot; in Win32k.sys on Windows NT Terminal Server"
permalink: /kb/294/Q294196/
---

## Q294196: &quot;Stop 0x0000001E&quot; in Win32k.sys on Windows NT Terminal Server

{% raw %}

	Article: Q294196
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message for Win32k.sys on a blue screen in
	Windows NT 4.0 Terminal Server:
	
	  STOP 0x0000001e (0xc0000005, 0xa308cdf8, 0x00000001, 0x00000051)
	
	The last two parameters may change, but the first two are always the same.
	
	CAUSE
	=====
	
	A timing problem while creating a thread may cause a pointer to be dereferenced
	before it is initialized.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Version         Size       File name   Platform
	  ---------------------------------------------------------
	  07/31/01  4.0.1381.33478  1,279,856  Win32k.sys  Intel
	  03/27/01  4.0.1381.33476  170,256    Gdi32.dll   Intel
	  07/11/00  3.10.0.103      47,456     User.exe    Intel
	  07/11/00  4.0.1381.33392  331,536    User32.dll  Intel
	  03/01/01  4.0.1381.33474  195,856    Winsrv.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
