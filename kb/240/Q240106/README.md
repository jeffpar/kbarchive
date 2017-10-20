---
layout: page
title: "Q240106: RAS Server Does Not Automatically Disconnect"
permalink: /kb/240/Q240106/
---

## Q240106: RAS Server Does Not Automatically Disconnect

{% raw %}

	Article: Q240106
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using TCP/IP over a Remote Access Services (RAS) connection, a Host
	Announcement packet from the RAS client causes the RAS server to reset the
	automatic disconnection timer.
	
	On a Windows NT-based computer, the Announce parameter defaults to 720 seconds
	(or 12 minutes). On a Windows NT-based RAS server, the RAS automatic disconnect
	parameter defaults to 20 minutes. If the RAS client is also a Windows NT-based
	computer, the RAS automatic disconnect timer is reset every 12 minutes, and
	therefore, the RAS client never times out.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  9/20/99   3:20pm               59,984  Ndiswan.sys   x86
	  9/20/99   3:27pm              108,624  Ndiswan.sys   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
