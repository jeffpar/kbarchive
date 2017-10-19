---
layout: page
title: "Q238941: Dcomcnfg Changes the &quot;Logon As&quot; Type on Service's Identity Tab"
permalink: /kb/238/Q238941/
---

## Q238941: Dcomcnfg Changes the &quot;Logon As&quot; Type on Service's Identity Tab

	Article: Q238941
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Dcomcnfg.exe changes the services database for the process you are
	running. After the services database is changed, the process is no longer able
	to run on the computer. This occurs because the service no longer has "Logon as"
	settings.
	
	For example, if the service is set to log on as <domain>\<account> in
	the Windows NT SCM database (configured by using the Services tool in Control
	Panel), and you run Dcomcnfg.exe and change some settings for the service (such
	as the launch permissions), Dcomcnfg.exe changes the service logon type back to
	"System."
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  07/09/99  04:49PM              139 KB  Dcomcnfg.exe    x86
	  07/09/99  04:48PM              209 KB  Dcomcnfg.exe    Alpha           
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
