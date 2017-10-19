---
layout: page
title: "Q129129: Windows NT SNMP Agent Allows Only Read Access"
permalink: /kb/129/Q129129/
---

## Q129129: Windows NT SNMP Agent Allows Only Read Access

	Article: Q129129
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the string value of the sysContact, sysName, and
	sysLocation objects using an SNMP manager (such as the Hewlett Packard
	OpenView), the following error message appears:
	
	  SNMP error - sysContact read only (OV3122)
	
	CAUSE
	=====
	
	The Windows NT 3.5 SNMP agent only allows read access for the sysContact,
	sysName, and sysLocation objects. According to Internet MIB-II definition in RFC
	1158, these SNMP objects should allow read and write access as follows:
	
	  sysContact  OBJECT-TYPE
	
	              SYNTAX  DisplayString (SIZE (0..255))
	              ACCESS  read-write
	              STATUS  mandatory
	              DESCRIPTION
	              "The textual identification of the contact person for this
	              managed node, together with information how to contact this
	              person."
	              ::= { system 4 }
	
	  sysName     OBJECT-TYPE
	
	              SYNTAX  DisplayString (SIZE (0..255))
	              ACCESS  read-write
	              STATUS  mandatory
	              DESCRIPTION
	              "An administratively-assigned name for this managed node.
	              By convention, this is the node's fully-qualified domain
	              name."
	              ::= { system 5 }
	
	  sysLocation OBJECT-TYPE
	
	              SYNTAX  DisplayString (SIZE (0..255))
	              ACCESS  read-write
	              STATUS  mandatory
	              DESCRIPTION
	              "The physical location of this node (e.g., 'telephone
	              closet, 3rd floor')."
	              ::= { system 6 }
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	For Windows NT 3.51, upgrade to the latest service pack (Service Pack 4) and
	apply the fix mentioned below.
	
	For Windows NT 3.5, upgrade to Windows NT 3.51 and the latest service pack
	(Service Pack 4) and apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Workstation or Server version 3.51. For information on obtaining this update,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
