---
layout: page
title: "Q302323: The RPC Services May Hang Intermittently"
permalink: /kb/302/Q302323/
---

## Q302323: The RPC Services May Hang Intermittently

{% raw %}

	Article: Q302323
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive "RPC Server Unavailable" error messages intermittently on the
	server when you are running programs (such as Event Viewer) that use Remote
	Procedure Call (RPC). These error messages occur on servers that use two network
	adapters that are configured for fault tolerance.
	
	This problem is known to occur with the Intel family of fault-tolerant network
	adapters.
	
	CAUSE
	=====
	
	There is a problem in Ndis.sys with unloading the network monitor driver (either
	Bhnt.sys or Nmnt.sys) when it is loaded in conjunction with network adapter
	teaming drivers.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name  Platform
	  ---------------------------------------------------------------
	  24-Jul-2001  12:38  4.0.1381.7097  121,872  Ndis.sys   x86
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, rename the network monitor driver (either Bhnt.sys
	or Nmnt.sys) in the %SystemRoot%\System32\Drivers folder, and then reboot the
	computer. This prevents the driver from being loaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: nic
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
