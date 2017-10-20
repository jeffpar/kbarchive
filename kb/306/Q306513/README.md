---
layout: page
title: "Q306513: Server Hangs Before Logon Screen After Uninstalling the SRP"
permalink: /kb/306/Q306513/
---

## Q306513: Server Hangs Before Logon Screen After Uninstalling the SRP

{% raw %}

	Article: Q306513
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0-based computer with the System Key (Syskey.exe)
	functionality enabled, the computer may stop responding (hang) before the logon
	screen is displayed. This problem may occur after you uninstall certain hotfixes
	or the Windows NT 4.0 post-Service Pack 6a (SP6a) Security Rollup Package (SRP).
	
	CAUSE
	=====
	
	This issue occurs if the Samsrv.dll or Lsasrv.dll file (or both) was removed.
	These files need to remain installed on the computer.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size    File name   Platform
	  ---------------------------------------------------------------
	  Aug-30-2001  18:21  4.0.1381.7097  94,992  Hotfix.exe  x86     
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	Replace the installed Hotfix.exe file with the updated version from this hotfix.
	This ensures that the files are handled properly. You can extract the contents
	of the hotfix package manually by using the /x switch to update the Hotfix.exe
	file.
	
	WORKAROUND
	==========
	
	To work around this problem, perform a parallel installation of Windows NT 4.0
	SP6a. Replace the SP6a versions of the Samsrv.dll and Lsasrv.dll files with the
	hotfixed or Windows NT 4.0 post-SP6a SRP versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
