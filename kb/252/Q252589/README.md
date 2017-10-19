---
layout: page
title: "Q252589: Dcomcnfg.exe Utility Improvements, Fixes, Registry Entries"
permalink: /kb/252/Q252589/
---

## Q252589: Dcomcnfg.exe Utility Improvements, Fixes, Registry Entries

	Article: Q252589
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Dcomcnfg.exe tool to add a port range to Connection-oriented
	Transport Control Protocol/Internet Protocol (TCP/IP) properties, and then view
	the registry entry for the new port range, there may be extra spaces in the port
	range value. Also, if you use the Dcomcnfg.exe tool to remove a port range, and
	then view the registry, the following registry key may not be removed:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\Internet
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  01/26/00  1:52pm               142,096  Dcomcnfg.exe    Intel
	  01/25/00  9:47pm               212,752  Dcomcnfg.exe    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Spaces in the Port Range:
	
	1. Start Dcomcnfg.exe, and then click the Default Protocols tab.
	
	2. Click "Connection-oriented TCP/IP" in the Protocol list, and then click
	  Properties.
	
	3. Add a port range by clicking Add.
	
	4. Enter a port range, for example "5000-6000" without quotation marks, and then
	  click OK. Note the space around the hyphen.
	
	5. Use Registry Editor to view the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\Internet\Ports
	
	  You will see spaces around the hyphen.
	
	Steps to Reproduce Registry Key not Removed:
	
	1. After adding a port range as specified in the preceding procedure, it creates
	  the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\Internet
	
	2. Start Dcomcnfg.exe, and then click the Default Protocol tab.
	
	3. Select Connection-oriented TCP/IP in the protocol list, and then click
	  Properties.
	
	4. Remove all port ranges by clicking Remove All.
	
	5. Use Registry Editor to view the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Rpc\Internet
	
	  It is not removed.
	
	For a list of items affected by the RPC port entries enterred in the Registry
	with additional spaces, click the following link below:
	
	  Q246784 RPC Services Fail: Not Enough Resources Available to Complete This
	  Operation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
