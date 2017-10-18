---
layout: page
title: "Q184832: Intermittent Name Conflicts with WINS Server"
permalink: kb/184/Q184832/
---

## Q184832: Intermittent Name Conflicts with WINS Server

	Article: Q184832
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your multihomed Windows NT computers may experience name conflicts
	intermittently and Event Viewer may log the following event:
	
	  Event ID   : 4320
	  Source     : NetBT
	  Description: Another machine has sent a name release message to this
	               machine probably because a duplicate name has been
	               detected on the TCP network. The IP address of the node
	               that sent the message is in the data. Use nbtstat -n in a
	               command window to see which name is in the Conflict state.
	
	CAUSE
	=====
	
	The server service on your multihomed Windows NT computers is not releasing its
	registered NetBIOS name from your Windows Internet Name Service (WINS) server
	properly. Only the primary network interface card (NIC) is being released while
	the other NICs are maintaining the registration of the server service.
	
	RESOLUTION
	==========
	
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
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
