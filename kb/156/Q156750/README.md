---
layout: page
title: "Q156750: AddGroupNameResponse Frame from WinNT May Cause WFWG to Hang"
permalink: /kb/156/Q156750/
---

## Q156750: AddGroupNameResponse Frame from WinNT May Cause WFWG to Hang

{% raw %}

	Article: Q156750
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups 3.11 computers running the NetBEUI protocol may stop
	responding during initialization. NetBIOS applications using AddGroupName may
	also fail.
	
	CAUSE
	=====
	
	This may be caused if the workgroup name for the Windows for Workgroups system
	is used as the computer name by another Windows NT 3.51 or Windows NT 4.0
	computer also running the NetBEUI protocol. If the name is in use, the computer
	running Windows for Workgroups should produce an error message (error 6117).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A NetBIOS application may register a group name using the AddGroupName command.
	NetBEUI then sends an AddGroupName Multicast frame on the network. If the name
	is already registered as a unique name by Windows NT 3.51 (or 4.0), the Windows
	NT computer sends an AddNameResponse frame. The Data2 field of the
	AddNameResponse frame indicates whether the name is registered by the Windows NT
	computer as a GroupName or UniqueName. The Windows NT computer was incorrectly
	setting this field to indicate that it had registered the name as a GroupName.
	More than one computer can register a NetBIOS name as a group name. However, a
	NetBIOS name cannot be registered as both a group name and a unique name. If the
	Data2 of the AddNameResponse frame from Windows NT was set correctly to
	UniqueName, then Windows for Workgroups would have presented the error to the
	user because the name was already in use.
	
	18 109.128 COMPAQ50E3CC MKWFW NETBIOS Add Name Response (0x0D)
	..
	NETBIOS: Add Name Response (0x0D)
	   NETBIOS: Length = 44 (0x002C)
	   NETBIOS: Signature = 0xEFFF
	   NETBIOS: Command = Add Name Response (0x0D)
	   NETBIOS: Data1 = 0x00
	   NETBIOS: Data2 = 0x0001 <<<<*******should be 0*******
	   NETBIOS: Transmit Correlator = 0x0002
	   NETBIOS: Destination Name = BEETLE         <00>
	   NETBIOS: SMB Name Type = Workstation (00)
	   NETBIOS: Node address = 202020202000
	
	
	Additional query words: nameconflict name in conflict
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbWFWSearch
	Version           : winnt:3.51,4.0; :
	
	=============================================================================
	

{% endraw %}
