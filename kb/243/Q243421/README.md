---
layout: page
title: "Q243421: TAPI 2.1 Is Not Installed on Backup Domain Controllers"
permalink: /kb/243/Q243421/
---

## Q243421: TAPI 2.1 Is Not Installed on Backup Domain Controllers

{% raw %}

	Article: Q243421
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Telephony Server Setup (Tcmsetup /s), it may not be
	installed on a backup domain controller and you may receive the following error
	message:
	
	  SetPrivilege on account failed - verify security of logged on account and
	  specified administrator account
	
	CAUSE
	=====
	
	This behavior occurs because Tcmsetup /s tries to grant a privilege on the
	backup domain controller instead of remoting this call to the primary domain
	controller.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  08/05/99  12:13              30,480    Tcmsetup.exe  Alpha
	  08/05/99  12:15              21,264    Tcmsetup.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about TAPI 2.1, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q186358 How to Enable TAPI 2.1 in Windows NT 4.0 with Service Pack 4
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
