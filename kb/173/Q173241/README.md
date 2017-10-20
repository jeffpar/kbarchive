---
layout: page
title: "Q173241: Update to Windows for Workgroups TCP/IP for Out-of-Band Issue"
permalink: /kb/173/Q173241/
---

## Q173241: Update to Windows for Workgroups TCP/IP for Out-of-Band Issue

{% raw %}

	Article: Q173241
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11b
	Operating System(s): 
	Keyword(s): kbnetwork kbtoolkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11b 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.11 users with Microsoft TCP/IP installed and
	running may be susceptible to very specific "out-of-band" data packets that are
	deliberately sent to the server during a TCP/IP session. When they are received,
	these packets may cause the Windows for Workgroups 3.11-based computer to stop
	responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if certain very specific "out-of-band" data packets are
	deliberately sent to the server during a TCP/IP session.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	3.11 running Microsoft TCP/IP 32b.
	
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
	
	
	
	
	MORE INFORMATION
	================
	
	For additional information about out-of-band data issues, see the following
	articles in the Microsoft Knowledge Base:
	
	  Q168747 Update to Windows 95 TCP/IP to Address Out-of-Band Issue
	
	  Q143478 Stop 0A in TCPIP.SYS When Receiving Out Of Band (OOB) Data
	
	Additional query words: attack
	
	======================================================================
	Keywords          : kbnetwork kbtool kbfixlist
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311b
	Version           : :3.11b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
