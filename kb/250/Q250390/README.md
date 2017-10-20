---
layout: page
title: "Q250390: Programs Cannot Print or Access Violations After Applying SP5"
permalink: /kb/250/Q250390/
---

## Q250390: Programs Cannot Print or Access Violations After Applying SP5

{% raw %}

	Article: Q250390
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 5 (SP5), programs may not be able to print or an
	"Access violation" error message may occur in the spooler if you select the
	"Hold mismatched documents" check box on the Scheduling tab in the printer's
	properties.
	
	NOTE: This problem occurs in Far East versions of Windows NT 4.0 with SP5, but
	not in other versions.
	
	CAUSE
	=====
	
	This problem is caused by issues with the Rasddui.dll file.
	
	
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
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/30/99  04:28p              88,352   Rasddui.dll   Intel
	  12/30/99  04:28p             157,968   Rasddui.dll   Alpha
	
	The Pan Chinese version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/30/99  04:28p              84,752   Rrasddui.dll  Intel
	  12/30/99  04:28p             157,968   Rasddui.dll   Alpha
	
	The Simplified Chinese version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/30/99  04:28p              84,752   Rasddui.dll   Intel
	  12/30/99  04:28p             157,968   Rasddui.dll   Alpha
	
	The Traditional Chinese version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/30/99  04:28p              84,752   Rasddui.dll   Intel
	  12/30/99  04:28p             157,968   Rasddui.dll   Alpha
	
	The Korean version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  12/30/99  04:28p              84,752   rasddui.dll   x86
	  12/30/99  04:28p             157,968   rasddui.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
