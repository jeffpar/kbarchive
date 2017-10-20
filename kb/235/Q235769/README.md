---
layout: page
title: "Q235769: SMS: Admin Guide Talks About Inbox on WinNT Logon Points"
permalink: /kb/235/Q235769/
---

## Q235769: SMS: Admin Guide Talks About Inbox on WinNT Logon Points

{% raw %}

	Article: Q235769
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbdocerr kbsms200 kbsms200bug kbsms200fix
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Systems Management Server version 2.0 Administrator's Guide,
	the documentation indicates that inboxes exist on the SMSLOGON share.
	
	The following statement appears on page 99 of the Administrator's Guide in table
	4.1: "These inboxes are found below the SMSLOGON share: Ccr.box, Ddr.box,
	Inventory.box, Sinv.box, and Statusmsg.box". This is found under the Default
	Directory Permissions heading for the SMSLOGON Share name.
	
	The remainder of the information on this page is accurate. Only Ddr.box is found
	on the SMSLOGON share and Ccr.box, Inventory.box, Sinv.box, or Statusmsg.box.
	Note that if Windows Networking Logon Discovery method is enabled, the Ddr.box
	is found. If Windows Networking Logon Discovery is not enabled, then there is no
	Ddr.box at all. The table has been corrected to show that the SMSLOGON share has
	the following directories: Alpha, ALPHA.bin, Config, DDR.BOX, i386, Logs, Sites,
	x86.bin, and Sitescfg.
	
	Inboxes are only found on site systems that act as client access points (CAPs)
	and on the site server itself.
	
	This information was also incorrect in the online Help and has since been
	corrected. In the online Administrator's Guide, this fix appears in the
	following topic: "Using Windows NT File and Directory Security".
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr kbsms200 kbsms200bug kbsms200fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
