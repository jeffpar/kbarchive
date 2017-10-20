---
layout: page
title: "Q152079: SNMP Traps Contain Invalid Agent ID Field"
permalink: /kb/152/Q152079/
---

## Q152079: SNMP Traps Contain Invalid Agent ID Field

{% raw %}

	Article: Q152079
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbSDKPlatform kbSNMP kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Agent ID field in SNMP traps do not contain the source computer's IP
	address. The IP address, which is contained in this field, is always of the form
	0.0.x.y where x.y is the decimal representation of the first four hexadecimal
	digits of the computer's host name.
	
	CAUSE
	=====
	
	If the computer has a host name which is exactly 12 characters long and consists
	only of valid hexadecimal characters (1-9 and A-F), then the SNMP trap
	generation code assumes that the host name is actually a valid IPX address and
	places an invalid address in the Agent ID field.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following:
	
	- Make sure the host name is not 12 characters.
	
	- Make sure one of the characters in the host name is not a valid hexadecimal
	  character.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: 3.51 4.00 prodnt TCP/IP simple network management protocol
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbSDKPlatform kbSNMP kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
