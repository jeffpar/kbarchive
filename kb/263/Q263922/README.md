---
layout: page
title: "Q263922: Message Sent to a Window Is Not Displayed Properly"
permalink: /kb/263/Q263922/
---

## Q263922: Message Sent to a Window Is Not Displayed Properly

{% raw %}

	Article: Q263922
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running SetWindowsHookEx with WH_CALLWNDPROCRET, messages sent to
	SendMessage may not display the proper data.
	
	CAUSE
	=====
	
	During the initial SendMessage call, the Graphics Device Interface (GDI)
	processes the message and the buffer that contains the data is then released.
	Then, when the hook processes the message again, it reinitializes the memory
	(which contains zeros) and overwrites the program's data buffer with zeros.
	
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
	
	  Date        Time    Size       File name   Platform
	  ---------------------------------------------------
	  06/26/2000  10:05p  1,251,504  Win32k.sys  Intel
	  09/21/1999  04:59p    166,160  Gdi32.dll   Intel
	  09/21/1999  04:59p    166,672  Winsrv.dll  Intel
	  09/21/1999  04:59p    335,120  User32.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
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
