---
layout: page
title: "Q222095: Terminal Server Deletes Novell Search Drives"
permalink: /kb/222/Q222095/
---

## Q222095: Terminal Server Deletes Novell Search Drives

{% raw %}

	Article: Q222095
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Novell NetWare client on Windows NT Server, Terminal
	Server Edition, NetWare environment variables, drive mappings, and search drives
	that are set in the Novell server logon scripts are deleted from the Windows NT
	Terminal Server session envrionments.
	
	CAUSE
	=====
	
	Terminal Server's Winlogon process was reengineered to prevent users that log on
	more than once from having duplicate volatile environment keys. This was done by
	having the Winlogon session delete the \\HKEY_CURRENT_USER\Volatile Environment
	key just prior to processing logon scripts.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server, Terminal Server Edition service pack that
	contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  03/11/99  10:31a               29,968  Userinit.exe  (x86)
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Terminal
	Server Edition.
	
	Additional query words: 4.00 tse wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
