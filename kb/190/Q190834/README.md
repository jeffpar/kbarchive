---
layout: page
title: "Q190834: SCSI Adapter Is No Longer Visible from SCSI Adapters Utility"
permalink: /kb/190/Q190834/
---

## Q190834: SCSI Adapter Is No Longer Visible from SCSI Adapters Utility

{% raw %}

	Article: Q190834
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have attached more than 16 devices on a single SCSI bus, but the SCSI
	Adapters utility in Control Panel no longer displays the SCSI adapter.
	
	CAUSE
	=====
	
	This utility does not allocate enough storage to hold the device information for
	more than 16 devices attached to one SCSI bus.
	
	RESOLUTION
	==========
	
	Windows NT 4.0 Service Pack 4 increased the support for devices on a single SCSI
	controller to 72. A supported fix is now available from Microsoft, but it is
	only intended to correct the problem described in this article and should be
	applied only to systems experiencing this specific problem.
	
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
	
	  Date        Time    Size     File name    Platform
	  --------------------------------------------------
	  01/04/2000  08:55p  305,936  Devapps.cpl  x86
	  01/04/2000  08:47p  361,744  Devapps.cpl  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT 4.0 Service Pack 4 and Windows NT
	Server 4.0, Terminal Server Edition, Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
