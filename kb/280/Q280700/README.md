---
layout: page
title: "Q280700: RPC Server Process Access Violation Due to Use of NULL Pointer"
permalink: /kb/280/Q280700/
---

## Q280700: RPC Server Process Access Violation Due to Use of NULL Pointer

{% raw %}

	Article: Q280700
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A process that is written as an RPC Server may not work, and the process may
	generate an access violation error message. The following callstack that was
	obtained from a User.dmp file provides an example of this problem, and the
	important observation is that the first argument to
	OSF_SCONNECTION::DispatchPacket() is NULL (0x00000000):
	
	  
	
	  ChildEBP RetAddr  Args to Child
	  181eff64 77e3f19c 00000000 f70f2e80 001513a8 RPCRT4!OSF_SCONNECTION__DispatchPacket+0x15
	  181eff90 77e3dc3a 77e16125 001cf490 181effec RPCRT4!OSF_SCONNECTION__ReceiveDirect+0xb6
	  181eff94 77e16125 001cf490 181effec 00000000 RPCRT4!RecvDirectWrapper+0x9
	  181effac 77e160bb 7f20eb08 776bbbc2 77f04ede RPCRT4!BaseCachedThreadRoutine+0x50
	  181effb8 77f04ede 20e48aa0 00000000 776bbbc2 RPCRT4!ThreadStartRoutine+0x17
	  181effec 00000000 77e160a4 20e48aa0 00000000 KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	This problem can occur under low memory conditions. RPC runtime components may
	be unable to allocate memory under low memory conditions, and when this occurs,
	may be unable to properly handle the error condition.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time               Size     File name     Platform
	  --------------------------------------------------------------
	  01/03/2001  02:30p              37,136  Rpcltscm.dll  Intel
	  01/03/2001  02:30p             343,312  Rpcrt4.dll    Intel
	  01/03/2001  02:28p              59,664  Rpcltscm.dll  Alpha
	  01/03/2001  02:28p             602,896  Rpcrt4.dll    Alpha
	
	
	
	NOTE: The preceding RPC Runtime components have been corrected to properly handle
	an inability to allocate memory by closing the RPC connection and generating an
	error message that indicates that the connection is closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
