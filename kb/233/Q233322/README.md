---
layout: page
title: "Q233322: Computer Hangs at Shutdown If Anti-Virus Software Is Installed"
permalink: /kb/233/Q233322/
---

## Q233322: Computer Hangs at Shutdown If Anti-Virus Software Is Installed

	Article: Q233322
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With both anti-virus software and a PCMCIA (PC Card) adapter installed, your
	Windows 95-based computer may stop responding (hang) with a "Windows Protection
	Error" error message during the shutdown process.
	
	CAUSE
	=====
	
	The Pccard.vxd driver can cause memory corruption during shutdown while it is
	processing a CONFIG_REMOVE message for an adapter. This may cause anti-virus
	software to hang with a "Windows Protection Error" error message.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Windows 95 service pack that contains this fix.
	
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
	
	  Date      Time    Version     Size    File name
	  -------------------------------------------------
	  12/13/99  06:43p  4.00.1121   79,577  Pccard.vxd
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is known to affect the Norton AntiVirus product. Additional
	information about Symantec Corporation products is available at the Symantec Web
	site:
	
	  http://www.symantec.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: w95qfe
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
