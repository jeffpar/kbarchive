---
layout: page
title: "Q240664: COM Internet Services Do Not Work Without ProxyOverride Entry"
permalink: /kb/240/Q240664/
---

## Q240664: COM Internet Services Do Not Work Without ProxyOverride Entry

	Article: Q240664
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Internet Explorer version 5 on a computer running
	Windows NT version 4.0, you may receive the following error message from COM
	Internet Services:
	
	  The remote server machine does not exist or is unavailable (Error 462)
	
	CAUSE
	=====
	
	This behavior can occur if you clear the "Bypass proxy server for local intranet
	access" check box in Internet Explorer options.
	
	In Internet Explorer 4, clearing the "Bypass proxy server for local internet
	access" check box sets the following registry value to null:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet
	  Settings\ProxyOverride
	
	In Internet Explorer 5, the ProxyOverride value is deleted. The Remote Procedure
	Call (RPC) protocol flags an error condition when it cannot find the
	ProxyOverride key in the registry.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time              Size     File name     Platform
	  -----------------------------------------------------------
	  08/09/99  04:16p            45,840   Rpcltccm.dll  Intel
	  08/09/99  11:27p            95,504   Rpcltccm.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
