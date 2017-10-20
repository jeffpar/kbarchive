---
layout: page
title: "Q176217: PRB: Mastering VB 5.0 Err Msg: The Version of ActiveMovie..."
permalink: /kb/176/Q176217/
---

## Q176217: PRB: Mastering VB 5.0 Err Msg: The Version of ActiveMovie...

{% raw %}

	Article: Q176217
	Product(s): Microsoft Mastering Series
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Microsoft Visual Basic 5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for Mastering Microsoft Visual Basic 5, you may
	receive the following error message:
	
	  The version of ActiveMovie that you are trying to install is a different
	  language than the one already present on your system. ActiveMovie Setup
	  cannot upgrade an existing installation if the version is newer or if the
	  language is different. Please uninstall your existing ActiveMovie and then
	  run setup again.
	
	CAUSE
	=====
	
	You can receive this error message if the version of ActiveMovie installed on
	your computer is later than the version Mastering Microsoft Visual Basic 5 is
	attempting to install.
	
	In order to run correctly, Mastering Microsoft Visual Basic 5 requires the
	version of ActiveMovie included with the program.
	
	RESOLUTION
	==========
	
	To resolve this error message, you must remove the existing version of
	ActiveMovie before you run the Mastering Microsoft Visual Basic 5 Setup
	program.
	
	NOTE: This problem may occur with other Mastering Titles and you can use this
	resolution to correct it.
	
	ActiveMovie may not be in the Add/Remove Programs tool in Control Panel if it is
	installed by another product.
	
	If ActiveMovie is not listed on the Install/Uninstall tab in the Add/Remove
	Programs tool in Control Panel, follow these steps to remove the previous
	version:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Double-click the Windows folder to expand the branch.
	
	3. Double-click the System folder to expand the branch.
	
	4. Locate and rename the following files:
	
	  Filename        Location in Win95      Location in Win NT
	  --------        -----------------      ------------------
	
	  Amov4ie.inf     C:\Windows\Inf\ 
	  AMovie.ocx      C:\Windows\System      C:\Windows\System32
	  Mciqtz32.dll    C:\Windows\System      C:\Windows\System32
	  Quartz.dll      C:\Windows\System      C:\Windows\System32
	  Actmovie.exe    C:\Windows\System      C:\Windows\System32
	  Amstream.dll    C:\Windows\System      C:\Windows\System32
	  Devenum.dll     C:\Windows\System      C:\Windows\System32
	  Unam4ie.exe     C:\Windows\System      C:\Windows\System32
	  Mciqtz.drv      C:\Windows\System      C:\Windows\System32
	  Vidx16.dll      C:\Windows\System      C:\Windows\System32
	  Quartz.vxd      C:\Windows\System      C:\Windows\System32
	  Amovie.hlp      C:\Windows\Help        C:\Windows\Help
	  Amovie.chm      C:\Windows\Help        C:\Windows\Help
	
	5. Run the Setup program for Mastering Microsoft Visual Basic 5.
	
	MORE INFORMATION
	================
	
	Many different products install ActiveMovie. It is included with Internet
	Explorer version 3.02, the Microsoft Network (MSN), and Internet Explorer 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMSPressSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
