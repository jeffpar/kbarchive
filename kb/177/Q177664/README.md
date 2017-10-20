---
layout: page
title: "Q177664: Stop 0x0000000A in Netbt.sys When Shutting Down"
permalink: /kb/177/Q177664/
---

## Q177664: Stop 0x0000000A in Netbt.sys When Shutting Down

{% raw %}

	Article: Q177664
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down your system, you may get following blue screen error
	message:
	
	  STOP 0x0000000A ( 0x00000140, parameter, parameter, parameter)
	  IRQL_NOT_LESS_OR_EQUAL ***Address xxxxxxxx has base at xxxxyyyy -
	  NETBT.SYS
	
	CAUSE
	=====
	
	There is a small timing window in NETBT that can sporadically cause this error.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base:
	
	SERVPACK
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
