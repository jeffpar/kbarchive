---
layout: page
title: "Q249647: IGMP Incorrectly Sends Membership Packets to Several Groups"
permalink: /kb/249/Q249647/
---

## Q249647: IGMP Incorrectly Sends Membership Packets to Several Groups

	Article: Q249647
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; Win2000:95
	Operating System(s): 
	Keyword(s): osr2 win95kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Group Membership Protocol (IGMP) implementation in the Windows 95
	Winsock 2 update incorrectly attempts to send membership packets to the
	224.0.0.2 (All Routers) and 224.0.0.1 (All Hosts) group addresses. This is an
	unnecessary broadcast that may cause routers to report errors upon the receipt
	of these IGMP broadcasts.
	
	CAUSE
	=====
	
	The Winsock 2 update for Windows 95 updates the Vip.386 file that implements the
	IGMP protocol. This implementation of the IGMP protocol does not skip these
	multicast addresses when it is registering group membership.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Version     Size     File name
	  --------------------------------------------------
	  1/7/2000   3:20pm   4.10.1660   75,885   Vip.386  
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95 (all versions) with
	the Winsock 2 update.
	
	MORE INFORMATION
	================
	
	This update should be applied only to Windows 95-based computers that have the
	Winsock 2 update installed.
	
	With this fix applied, multicast packets for router discovery are still broadcast
	when the computer first starts up, if the computer is configured to do so. This
	behavior is by design.
	
	For additional information about problems resolved by this update, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q174095 IGMP Query Times Out in Windows 95 with Winsock2 Update
	
	For additional information about Windows 95 updates, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words: winsock2 w95qfe
	
	======================================================================
	Keywords          : osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95; Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
