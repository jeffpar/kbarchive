---
layout: page
title: "Q240870: &quot;Access Denied&quot; When SP5 RRAS Client Access SP5 RRAS Server"
permalink: kb/240/Q240870/
---

## Q240870: &quot;Access Denied&quot; When SP5 RRAS Client Access SP5 RRAS Server

	Article: Q240870
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to make a Point-to-Point Tunneling Protocol (PPTP) connection
	from a Windows NT 4.0 Service Pack 5 (SP5) client to a Windows NT 4.0 SP5 PPTP
	server running Remote Access Services (RAS) or Routing and Remote Access
	Services (RRAS), the initial authentication attempt may not succeed and may
	display an "Error 5: Access Denied" error message. This problem can also occur
	if RRAS is configured to forward Microsoft Challenge-Handshake Authentication
	Protocol (MS-CHAP) version 2 authentication requests to a Remote Authentication
	Dial-In User Service (RADIUS) server.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in Rasrad.dll, in which the challenge from
	the RRAS server to the client is incorrectly formatted. This problem results in
	the client rejecting the challenge and disconnecting the session.
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  07/27/99  09:28a                41,744 Rasrad.dll    x86
	  07/27/99  09:26a                68,368 Rasrad.dll    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q189594 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	  Q189595 Performance and Security Upgrade for WinNT 4.0 Release Notes
	
	  Q222060 Err Msg: 'Error 5: Access Denied' When Using PPTP with RAS
	
	To enable MS-CHAP with RADIUS authentication, you must add the following registry
	value:
	
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Rasman\PPP\CHAP
	
	  Value Name: OfferMSCHAP
	  Type: DWORD
	  Data Value: 0x00000001 - Once this is enabled, every incoming Point-to-Point
	  Protocol (PPP) connection is offered MS-CHAP, and MS-CHAP is used to
	  authenticate each PPP user against the RADIUS server that your RAS server is
	  using.
	
	Additional query words: IAS mschap
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
