---
layout: page
title: "Q244084: &quot;Stop 0xA&quot; Error Message in Wlbs.sys or Computer Hangs"
permalink: /kb/244/Q244084/
---

## Q244084: &quot;Stop 0xA&quot; Error Message in Wlbs.sys or Computer Hangs

{% raw %}

	Article: Q244084
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT 4.0 Server-based computer may stop responding (hang), or you may
	receive the following error message in Wlbs.sys:
	
	  STOP: 0x0000000A (0x00000001 0x00000002 0x00000001 0xeb597fc0)
	
	Note that the parameters for the "Stop" error message may vary.
	
	CAUSE
	=====
	
	This behavior occurs because the Windows Load Balancing Service (WLBS)
	connection queue becomes corrupted when it sees packets with a source IP address
	of 0.0.0.0.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                Size     File name     Platform
	  -------------------------------------------------------------
	  10/12/99  9:44PM               36,112  Wlbs.exe      Intel
	  10/12/99  9:44PM               60,144  Wlbs.sys      Intel
	  10/12/99  9:43PM               51,472  Wlbs.exe      Alpha
	  10/12/99  9:42PM              101,072  Wlbs.sys      Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
