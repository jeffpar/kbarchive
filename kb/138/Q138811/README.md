---
layout: page
title: "Q138811: Cannot Add RAS ISDN Ports in Control Panel"
permalink: /kb/138/Q138811/
---

## Q138811: Cannot Add RAS ISDN Ports in Control Panel

{% raw %}

	Article: Q138811
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No ISDN ports are listed in the Add Port dialog box, when you attempt to add an
	ISDN port in the Remote Access Service (RAS) Setup dialog box after you start
	Control Panel, choose Network, select Remote Access, choose Configure, and then
	Add.
	
	CAUSE
	=====
	
	This problem occurs if you install a DigiBoard ISDN driver without immediately
	installing RAS when prompted.
	
	If you do not have RAS installed under Windows NT and you install a DigiBoard
	ISDN adapter driver, you are prompted to install RAS after the DigiBoard driver
	installation completes. If you do not install RAS at this time, or if you
	receive an error trying to install RAS and you are unable to complete the
	installation, and you successfully install RAS at a later time, you cannot see
	any ISDN ports in the list of ports available to configure within RAS.
	
	RESOLUTION
	==========
	
	1. Run Control Panel and choose Network.
	
	2. Select the DigiBoard ISDN adapter driver and choose Remove.
	
	3. Shut down and restart Windows NT.
	
	4. Reinstall the ISDN adapter driver and install RAS when prompted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	The DigiBoard ISDN adapter is manufactured by DigiBoard International, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt PCIMAC datafire 3.5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
