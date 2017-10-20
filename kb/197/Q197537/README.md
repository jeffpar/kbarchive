---
layout: page
title: "Q197537: Windows NT Starts in VGA Mode After You Update to SP4"
permalink: /kb/197/Q197537/
---

## Q197537: Windows NT Starts in VGA Mode After You Update to SP4

{% raw %}

	Article: Q197537
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4, Windows NT may start in VGA mode.
	
	CAUSE
	=====
	
	This problem has been observed with the following video adapters:
	
	- Number Nine Revolution 3D AGP graphics Accelerator
	
	- NeoMagic MagicMedia 256AV Multimedia Accelerator
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  10/27/98  04:41p               25,104 Videoprt.sys  (x86)
	  10/27/98  04:41p               32,816 Videoprt.sys  (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Service Pack 4 for Windows NT
	version 4.0.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
