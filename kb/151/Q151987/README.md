---
layout: page
title: "Q151987: Event 3096 Promoting BDC to PDC with Different Service Packs"
permalink: /kb/151/Q151987/
---

## Q151987: Event 3096 Promoting BDC to PDC with Different Service Packs

{% raw %}

	Article: Q151987
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are using Server Manager on a primary domain controller (PDC) to promote a
	backup domain controller (BDC) to be the PDC. Both computers are running Windows
	NT 3.51, but they have different Service Packs applied (Service Pack 4 on the
	new BDC and Service Pack 2 on the new PDC).The following event error appears in
	the new BDC's event log:
	
	  ID 3096
	  The Windows NT domain controller could not be located
	
	
	CAUSE
	=====
	
	The netlogon service is started on the new BDC before it is started on the new
	PDC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
