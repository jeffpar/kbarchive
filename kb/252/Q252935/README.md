---
layout: page
title: "Q252935: Err Msg: STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED"
permalink: /kb/252/Q252935/
---

## Q252935: Err Msg: STOP 0x0000001E KMODE_EXCEPTION_NOT_HANDLED

{% raw %}

	Article: Q252935
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg dun kbDialUp
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you make a Dial-Up Networking (DUN) connection by using Remote Access
	Services (RAS) with a local Internet service provider (ISP), you may receive the
	following error message on a blue screen:
	
	  STOP 0x0000001E (0xc0000005, 0xf3c310c, 0x00000000, 0x00000000)
	  KMODE_EXCEPTION_NOT_HANDLED***Address f3cf310c has a base at f3cf2000
	  MrtRate.sys
	
	CAUSE
	=====
	
	This issue can occur after you install Intuit Quickbooks or Quicken 2000, or if
	you apply Microsoft Windows NT 4.0 Service Pack 6 after these products are
	installed.
	
	WORKAROUND
	==========
	
	Rename the Mrtrate.sys file in the Winnt\System32\Drivers folder, or disable the
	MRT Rate service in the Devices tool in Control Panel.
	
	The Intuit Web site discusses this problem only for Microsoft Windows
	95/Microsoft Windows 98 so far. See these Intuit sites:
	
	  http://www.intuit.com/support/quicken/faqs/win3/5192.html
	
	  http://www.intuit.com/support/quickbooks/faqs/win5/6215.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg dun kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
