---
layout: page
title: "Q170326: SNMPUTIL Fails with &quot;invalid oid &lt;oid name&gt; specified&quot; Error Msg"
permalink: /kb/170/Q170326/
---

## Q170326: SNMPUTIL Fails with &quot;invalid oid &lt;oid name&gt; specified&quot; Error Msg

{% raw %}

	Article: Q170326
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Windows NT Server 4.0 Resource Kit utility SNMPUTIL or
	another simple network management protocol (SNMP) utility, the command fails
	with an "invalid oid <oid name> specified" error message.
	
	For example, when you attempt to perform the following "get" command, an error
	occurs:
	
	  C:\PROGRA~1\reskit>snmputil get testmachine public system.sysDescr.0
	  Error: Invalid oid, system.sysDescr.0, specified.
	
	CAUSE
	=====
	
	This is caused by an invalid Mib.bin file in the path.
	
	In the case of the above example, the SNMPUTIL utility uses the Mib.bin file in
	its current folder (which is the Mib.bin file that ships with the Windows NT
	Server Resource Kit), instead of the Mib.bin file in the %Systemroot%\System32
	folder.
	
	RESOLUTION
	==========
	
	Rename all Mib.bin files in the path except the one in the %Systemroot%\system32
	directory.
	
	After this is completed, the SNMP query will work successfully, as follows:
	
	  C:\PROGRA~1\reskit>snmputil get testmachine public system.sysDescr.0
	  Variable = system.sysDescr.0
	  Value    = OCTET STRING - Hardware: x86 Family 6 Model 1 Stepping 7
	  AT/AT COMPATIBLE  - Software: Windows NT Version 4.0  (Build Number:
	  1381 Uniprocessor Free)
	
	This behavior is by design.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
