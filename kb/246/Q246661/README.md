---
layout: page
title: "Q246661: Cannot Reserve IP Addresses Using Swedish Dhcpadmn.exe"
permalink: /kb/246/Q246661/
---

## Q246661: Cannot Reserve IP Addresses Using Swedish Dhcpadmn.exe

{% raw %}

	Article: Q246661
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Swedish language-version of Windows NT 4.0 Server, you cannot add DHCP
	address reservations by using the Dhcpadmn.exe tool for any IP address that
	contains three decimal digits in any octet. You can enter a maximum of two
	decimal digits for each octet in the reservation dialog box.
	
	CAUSE
	=====
	
	This issue occurs because the octet edit fields in the reservation dialog box in
	the Dhcpadmn.exe tool are too small.
	
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
	
	The Swedish version of this fix should have the following file attributes or
	later:
	
	  Date      Time   Size    File name     Platform
	  -----------------------------------------------
	  10/11/99  17:44  261,392 dhcpadmn.exe  Intel
	  10/11/99  17:44  420,112 dhcpadmn.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Swedish Windows NT Server 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
