---
layout: page
title: "Q140256: &quot;Listen&quot; for NetBIOS Group Name Fails"
permalink: /kb/140/Q140256/
---

## Q140256: &quot;Listen&quot; for NetBIOS Group Name Fails

	Article: Q140256
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): osr1 msnets osr2 win95kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program performs a "listen" for a NetBIOS group name and you are using
	the Microsoft IPX/SPX-compatible protocol with NetBIOS support enabled, the
	"listen" may fail. "Listen" calls for unique NetBIOS names succeed.
	
	CAUSE
	=====
	
	A NetBIOS name can be a unique name or a group name. NetBIOS checks the network
	to verify that a unique name does not already exist at another network adapter.
	A group name may be used by multiple adapters.
	
	
	RESOLUTION
	==========
	
	A supported fix for Windows 95 and OEM Service Release 2.x that corrects this
	problem is now available from Microsoft, but has not been fully regression
	tested and should be applied only to computers experiencing this specific
	problem. To resolve this problem immediately, contact Microsoft Technica Support
	to obtain the fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix for Windows 95 and OEM Service Release 2.x should have the following
	file attributes (or later):
	
	  File name     Version    Date      Time     Size
	  ---------------------------------------------------------
	  Nwnblink.vxd  4.00.952   9/4/96    9:52am   46,677 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95, Microsoft
	Windows 95 OEM Service Release 2 (OSR2), and Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q175055 Cannot Use IPX/SPX with NetBIOS Support with Dial-Up Networking
	
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	
	======================================================================
	Keywords          : osr1 msnets osr2 win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
