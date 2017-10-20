---
layout: page
title: "Q153376: Redial on Link Failure Problems After Upgrade"
permalink: /kb/153/Q153376/
---

## Q153376: Redial on Link Failure Problems After Upgrade

{% raw %}

	Article: Q153376
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you upgrade Microsoft Windows NT 3.51 to Windows NT 4.0, the Redial On Link
	Failure option may not work properly.
	
	CAUSE
	=====
	
	This behavior was observed in builds through 1345.03 (RC1) and may occur in
	subsequent builds of Microsoft Windows NT 4.0. After the upgrade from 3.51, the
	new TAPI API set is not used for modems already defined in Remote Access Service
	(RAS).
	
	Instead, the older style components are left in place and the Modem.inf file is
	used instead of UNIMODEM. Without using UNIMODEM, the TAPI API set may not
	monitor the status of the connection properly. RAS may attempt to redial if a
	connection attempt fails, but may not redial on failure of an established
	connection.
	
	RESOLUTION
	==========
	
	1. Click the Start button, point to Settings, and click Control Panel.
	  Double-click the Network icon.
	
	2. Click the Services tab and select Remote Access Service.
	
	3. Click Remove, and then click OK.
	
	4. Restart the computer.
	
	5. Rename the System32\Ras directory to System32\Ras.old.
	
	6. Click the Start button, point to Settings, and click Control Panel.
	  Double-click the Network icon.
	
	7. Click the Services tab, and then click Add.
	
	8. Select Remote Access Service to re-install RAS, and then click OK.
	
	9. Restart the computer.
	
	10. Copy the phonebook files from System32\Ras.old to the System32\Ras
	  directory.
	
	11. Make any other necessary configuration changes to RAS as required.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
