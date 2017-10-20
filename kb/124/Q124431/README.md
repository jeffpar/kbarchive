---
layout: page
title: "Q124431: SNMP Traps Sent to Wrong Port"
permalink: /kb/124/Q124431/
---

## Q124431: SNMP Traps Sent to Wrong Port

{% raw %}

	Article: Q124431
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows NT 3.5 over Windows NT 3.1, SNMP traps are not received
	by your network agent. If you have access to a network monitor or sniffer, you
	can see the traps being sent to the wrong port.
	
	CAUSE
	=====
	
	Under Windows NT 3.1, builds 511 and 528, the entry in the SERVICES file for
	SNMP-TRAP was set (incorrectly) to port 167. The SERVICES file under Windows NT
	3.5 has the entry for SNMP-TRAP correctly set to port 162. The SERVICES file is
	copied only if the file does not already exist when you upgrade to Windows NT
	3.5. Since it exists from the Windows NT 3.1 installation, the new SERVICES file
	with the corrected port number is not copied.
	
	This was not a problem under Windows NT 3.1 is because SNMP did not look in the
	SERVICES file to determine which port to use. The SNMP that ships with Windows
	3.5 does look in the SERVICES file to determine which port to use for sending
	SNMP traps.
	
	RESOLUTION
	==========
	
	Edit the SERVICES file in the %SYSTEMROOT%\SYSTEM32\DRIVERS\ETC directory and
	change the SNMP-TRAP entry from
	
	  snmp-trap         167/udp    snmp
	
	to:
	
	  snmp-trap         162/udp    snmp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
