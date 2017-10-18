---
layout: page
title: "Q241518: &quot;E_OUTOFMEMORY&quot; When Structured Storage Files Are Marshaled"
permalink: kb/241/Q241518/
---

## Q241518: &quot;E_OUTOFMEMORY&quot; When Structured Storage Files Are Marshaled

	Article: Q241518
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A process may run out of memory after opening and closing approximately 486
	structured storage files. When the process runs out of heap space, error code
	0x80070008 is generated.
	
	CAUSE
	=====
	
	The marshalling process does not use standard marshaling because it is closing
	the root storage after each marshal, and so behaves as if it has only one root
	storage (and hence one shared heap) open at a time. Meanwhile, the unmarshaling
	process keeps creating a new shared heap for each unmarshal until it runs out of
	address space.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  9/10/99   7:45pm              700,688  Ole32.dll     Intel
	  9/10/99   7:43pm            1,239,312  Ole32.dll     Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
