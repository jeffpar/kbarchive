---
layout: page
title: "Q240358: Ntmarta.dll File in German SP5 Has Conflicting Base Address"
permalink: /kb/240/Q240358/
---

## Q240358: Ntmarta.dll File in German SP5 Has Conflicting Base Address

{% raw %}

	Article: Q240358
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start certain programs after you install Windows NT 4.0
	Service Pack 5 (SP5) on a computer running the German localized version of
	Windows NT, you may receive the following error message:
	
	  Illegale Verschiebung einer System-DLL
	  Die System-DLL "ole32.dll" wurde im Speicher verschoben. Die Anwendung wird
	  nicht einwandfrei ausfuhrbar sein. Die Datei wurde verschoben, da die DLL
	  "C:\WINNT\system32\NTMARTA.DLL" einen AdreBbereich belegt, der fur Windows
	  NT-System-DLLs reserviert ist. Besorgen Sie sich vom DLL-Lieferanten eine
	  neue DLL.
	
	CAUSE
	=====
	
	This problem occurs because the Ntmarta.dll file has a default load address that
	conflicts with the load address of the Ole32.dll file. This is only a problem
	when the Ntmarta.dll file is loaded before the Ole32.dll file.
	
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  23/08/99  15:14                 86,288 Ntmarta.dll   i386
	  23/08/99  15:13                146,704 Ntmarta.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTS400sp5 kbWinNTS400search
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
