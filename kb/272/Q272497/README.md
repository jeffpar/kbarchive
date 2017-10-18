---
layout: page
title: "Q272497: &quot;Stop 0x0000001E&quot; in Win32k.sys"
permalink: kb/272/Q272497/
---

## Q272497: &quot;Stop 0x0000001E&quot; in Win32k.sys

	Article: Q272497
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive an error message on a blue screen. The error message has the
	following parameters:
	
	  0x0000001e (0xc0000005, 0xa001d4dc, 0x00000000, 0x00000014)
	
	CAUSE
	=====
	
	The Windows NT 4.0 Win32k.sys system file is attempting to access a null
	pointer.
	
	
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
	
	  Date       Time       Size       File name   Platform
	  -----------------------------------------------------
	  9/13/2000  4:06:25PM    166,160  Gdi32.dll   Intel
	  9/13/2000  4:06:23PM    326,416  User32.dll  Intel
	  9/13/2000  4:06:33PM  1,254,480  Win32k.sys  Intel
	  9/13/2000  4:06:30PM    175,376  Winsrv.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: bugcheck
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
