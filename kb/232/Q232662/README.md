---
layout: page
title: "Q232662: Problems Accessing Secured Site with Czech WinNT SP4 and IE 5"
permalink: /kb/232/Q232662/
---

## Q232662: Problems Accessing Secured Site with Czech WinNT SP4 and IE 5

{% raw %}

	Article: Q232662
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	NOTE: The information in this article applies to the 
	Czech version(s) of Windows NT 4.0 Service Pack 4.
	
	SYMPTOMS
	========
	
	If you install the Czechoslovakian version of Microsoft Internet Explorer 5 on a
	computer with the Czech version of Windows NT Workstation 4.0 Service Pack 4,
	you may experience problems gaining access to secure HTTP Web sites. For
	example:
	
	  https://microsoft.com/
	
	CAUSE
	=====
	
	This behavior is caused by an incorrect version of Schannel.dll that was
	included with the Czech version of Windows NT 4.0 Service Pack 4. To display
	secure http Web sites properly, the version of Schannel.dll has to be at least
	4.85.1900.1877.
	
	RESOLUTION
	==========
	
	This fix upgrades Schannel.dll so that secure sites are displayed properly. A
	supported fix is now available from Microsoft, but it is only intended to
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
	
	The Czech version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size      File name      Platform
	  -----------------------------------------------------
	  04/29/99  12:27p   152,848   Schannel.dll   x86
	  04/29/99  12:27p   268,048   Schannel.dll   Alpha
	
	This hotfix has been posted to the following Internet location as Schanfixi.exe
	(x86) and Schanfixa.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/cze/nt40/hotfixes-postsp4/schannel-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Czech version of Windows NT
	4.0.
	
	MORE INFORMATION
	================
	
	More information on secure site problems are contained in the Czech Internet
	Explorer 5.0 Readme Addendum.txt (in Czech language) - part of Czech IE5.0a.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
