---
layout: page
title: "Q161568: Desktop Themes from Resource Kit Produces Dr. Watson Error"
permalink: /kb/161/Q161568/
---

## Q161568: Desktop Themes from Resource Kit Produces Dr. Watson Error

{% raw %}

	Article: Q161568
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article is applicable to Windows NT 4.0 Servers and Workstations on which
	the Desktop Themes application from the Windows NT Resource Kit and Microsoft
	Office 97 are both installed.
	
	When you attempt to change to a new desktop theme, you get the following Dr.
	Watson message:
	
	  Themes.exe - Exception access violation (0xc0000005), Address: 0x0100efde
	
	In addition, the following Application event is logged:
	
	  Event ID: 4097
	  Source: DrWatson
	  Description: Exception access violation (0xc0000005), address: 0x0100efde
	
	  The application, , generated an application error. The error occurred on...
	  The exception generated was c0000005 at address 0100efde
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q156312
	  TITLE : OFF97: Page Fault After Using Desktop Themes Control Panel.
	
	CAUSE
	=====
	
	Microsoft Office 97 replaces a file named Jpegim32.flt in the
	%SystemDrive%\Program Files\Common Files\Microsoft Shared\Grphflt folder with a
	version that is incompatible with desktop themes.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following two steps:
	
	1. Rename the file Jpegim32.flt to Jpegim32.flt_bak in the %SystemDrive%\Program
	  Files\Common Files\Microsoft Shared\Grphflt folder. Copy the Jpegim32.flt
	  file included with either Office 95 or Windows 95 to the same folder.
	
	  - or -
	
	2. Rename the file Jpegim32.flt to Jpegim32.flt_bak in the %SystemDrive%\Program
	  Files\Common Files\Microsoft Shared\Grphflt folder and do not replace it.
	
	  Note that Windows NT 4.0 may have the same-named file in the
	  %SystemRoot%\System32 folder; this file does not need to be renamed.
	
	NOTE: The first method will display the window with the percentage bar showing
	the decompression. The second will not.
	
	Once the new desktop theme has been installed, the Jpegim32.flt_bak file should
	be renamed back to Jpegim32.flt. This will ensure compatibility with Microsoft
	Office 97.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server and
	Workstation version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: themes resource kit
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
