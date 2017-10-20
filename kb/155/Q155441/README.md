---
layout: page
title: "Q155441: SNA Server Windows 95 Client Fails over 16-Bit Sockets"
permalink: /kb/155/Q155441/
---

## Q155441: SNA Server Windows 95 Client Fails over 16-Bit Sockets

{% raw %}

	Article: Q155441
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you initialize the Microsoft Windows 95 SNA Server client on a Windows 95
	computer running a 16-bit sockets interface, SnaBase returns the following error
	message:
	
	  SnaBase
	  SNA Server transport DLL initialization failed.
	  Do you want to run the SNA Client configuration program?
	
	
	CAUSE
	=====
	
	The Windows 95 SNA Server client is a 32-bit application and it requires a
	32-bit Winsock interface.
	
	
	WORKAROUND
	==========
	
	The following are two known solutions for this problem:
	
	- Install a 32-bit sockets interface on the Windows 95 computer.
	
	- Use the 16-Bit (Windows 3.x) SNA Server client on the Windows 95 computer.
	
	Additional query words: prodsna tcp/ip ipx spx vines banyan
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
