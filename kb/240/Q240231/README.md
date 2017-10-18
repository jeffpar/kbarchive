---
layout: page
title: "Q240231: Common Dialog Box Does Not Populate Drive Selection Box"
permalink: kb/240/Q240231/
---

## Q240231: Common Dialog Box Does Not Populate Drive Selection Box

	Article: Q240231
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT common dialog boxes for handling files may not display all the
	available drives in the Drive Selection box. This behavior occurs if there is no
	networking installed on the computer.
	
	CAUSE
	=====
	
	This issue is caused by a problem in the Comdlg32.dll file for common dialog
	boxes.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  08/17/99  04:10p  4.0.1381.319 189,200 Comdlg32.dll  I386
	  08/17/99  04:10p  4.0.1381.319 365,328 Comdlg32.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
