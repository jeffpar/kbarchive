---
layout: page
title: "Q314302: Stop Error Message When You Run Optus FACSys Version 4.1 Program"
permalink: /kb/314/Q314302/
---

## Q314302: Stop Error Message When You Run Optus FACSys Version 4.1 Program

{% raw %}

	Article: Q314302
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg kbtool
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT-based computer that is running the Optus FACSys version 4.1 program
	may generate the following stop error message:
	
	  Stop 0X0000001E (0xc0000046, 0x8011be75, 0xf9e3a822, 0xf7059d4c)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	NOTE: The first parameter is always 0xc0000046.
	
	CAUSE
	=====
	
	The Brktrt.sys file may cause this issue to occur.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, update the Optus FACSys version 4.1 program to version
	4.51 or later after you verify compatibility with your operating system. For
	information about how to do so, please view the following Brooktrout Technology
	Web site:
	
	  http://www.brooktrout.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	WORKAROUND
	==========
	
	To work around this issue, uninstall the Brooktrout Technology faxing software,
	and then remove the Brooktrout Technology fax/modem driver from your computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 0x1e
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
