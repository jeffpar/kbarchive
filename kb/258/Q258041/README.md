---
layout: page
title: "Q258041: Access Violation in Routemon When You Run &quot;SHOW OSPF&quot;"
permalink: /kb/258/Q258041/
---

## Q258041: Access Violation in Routemon When You Run &quot;SHOW OSPF&quot;

{% raw %}

	Article: Q258041
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive an "Access violation" error message in Routemon when you run the
	following command:
	
	  routemon ip show protocol proto= ospf name= <adapter name>
	
	The "Access violation" error message has the following form:
	
	  The instructions at "0x77f930dd" referenced memory at "0x00000001". The
	  memory could not be read.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size      File name  Platform
	  -------------------------------------------------
	  04/03/2000  12:54p  200,464  Ipmon.dll   Alpha
	  03/29/2000  04:48p  155,408  Ipmon.dll   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem occurs only if the Routing and Remote Access Services (RRAS)
	component is configured to use the Open Shortest Path First (OSPF) routing
	protocol and neighbors are set. For example, the following series of commands
	could be used to configure the router in that state:
	
	  routemon ip add interface name= <adapter name>
	  routemon ip add protocol proto= ospf name= <adapter name>
	  routemon ip set protocol proto= ospf name= <adapter name> ifaddr=
	  10.10.10.10 nbraddr= 10.10.20.20 nbrprio= 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
