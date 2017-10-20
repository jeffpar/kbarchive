---
layout: page
title: "Q159567: Windows 95 SNMP Agent Allows Only Read-Only Access"
permalink: /kb/159/Q159567/
---

## Q159567: Windows 95 SNMP Agent Allows Only Read-Only Access

{% raw %}

	Article: Q159567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you attempt to change the string value of the sysContact, sysName, or
	sysLocation object on a Windows 95-based computer using an SNMP manager (such as
	Hewlett-Packard OpenView), you may receive the following error message:
	
	  SNMP error - sysContact read only (OV3122)
	
	CAUSE
	=====
	
	The Windows 95 SNMP agent allows only read-only access for the sysContact,
	sysName, and sysLocation objects.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	Use Remote Registry Editor to set the values listed below for the sysContact,
	sysName and sysLocation fields. The sysName object is not exposed by System
	Policy Editor (Poledit.exe).
	
	sysContact  OBJECT-TYPE
	           SYNTAX  DisplayString (SIZE (0..255))
	           ACCESS  read-write
	           STATUS  mandatory
	           DESCRIPTION
	           "The textual identification of the contact person for this
	           managed node, together with information how on to contact
	           this person."
	           ::= { system 4 }
	
	Registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNMP\RFC1156Agent\ 
	  SysContact
	
	sysName     OBJECT-TYPE
	           SYNTAX  DisplayString (SIZE (0..255))
	           ACCESS  read-write
	           STATUS  mandatory
	           DESCRIPTION
	           "An administratively assigned name for this managed node.
	           By convention, this is the node's fully qualified domain
	           name."
	           ::= { system 5 }
	
	Registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\ComputerName\ 
	  ComputerName
	
	sysLocation OBJECT-TYPE
	           SYNTAX  DisplayString (SIZE (0..255))
	           ACCESS  read-write
	           STATUS  mandatory
	           DESCRIPTION
	           "The physical location of this node (e.g., 'telephone
	           closet, 3rd floor')."
	           ::= { system 6 }
	
	Registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SNMP\RFC1156Agent\ 
	  SysLocation
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The values for the SNMP objects sysContact, sysName, and sysLocation are
	documented in the Internet MIB-II definition in RFC 1158.
	
	Additional query words: hp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
