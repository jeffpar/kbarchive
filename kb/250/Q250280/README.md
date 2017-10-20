---
layout: page
title: "Q250280: INFO: How to Determine if IMM is Enabled on Windows 2000"
permalink: /kb/250/Q250280/
---

## Q250280: INFO: How to Determine if IMM is Enabled on Windows 2000

{% raw %}

	Article: Q250280
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbIME kbLocalization kbGrpDSIntl kbDSupport
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Input Method Editors (IME) can be installed and used on every version
	of Microsoft Windows 2000, they are not installed by default on non-Asian
	versions of Windows 2000.
	
	MORE INFORMATION
	================
	
	IME and Input Method Manager (IMM) is enabled only when the user has installed
	an Asian language pack on Windows 2000. An IME-enabled application can call the
	GetSystemMetrics function with SM_IMMENABLED to determine whether IMM is
	enabled. SM_IMMENABLED indicates whether the system is ready to use a
	Unicode-based IME on a Unicode application. To ensure that a language-dependent
	IME works, check SM_DBCSENABLED and the system ANSI CodePage. Otherwise, the
	ANSI or Unicode conversion may not be performed correctly, or some components
	like fonts or registry setting may not be present.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIME kbLocalization kbGrpDSIntl kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
