---
layout: page
title: "Q153733: PRB: Wrong Mfc40.dll and Msvcrt40.dll from ActiveX CD-ROM Disc"
permalink: /kb/153/Q153733/
---

## Q153733: PRB: Wrong Mfc40.dll and Msvcrt40.dll from ActiveX CD-ROM Disc

{% raw %}

	Article: Q153733
	Product(s): Microsoft C Compiler
	Version(s): 4.1 4.2
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbGenInfo kbVC kbArtTypeINF
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some applications written using Visual C++ 4.1 or 4.2 may break as a result of
	installing the beta version of the ActiveX Development Kit.
	
	CAUSE
	=====
	
	When you run setup (Setupsdk.exe) from the \Msdnsmpl\Tools\Inetsdk\ directory of
	the Internet SDK on the beta version of the ActiveX Development Kit, the CD-ROM
	installs the Visual C++ version 4.0 Mfc40.dll and Msvcrt40.dll. These overwrite
	any newer versions of these files that may already be installed, so they may
	break some applications already built with Visual C++ 4.1 or 4.2.
	
	The size, version and date of the wrong version files installed in the
	Windows\System directory are:
	
	  Mfc40.dll     923,408 bytes  Ver. 4.0.5277  date 4/3/96
	  Msvcrt40.dll  312,832 bytes  Ver. 4.00.5270 date 4/3/96
	
	You can check these file properties from Windows NT File Manager or Windows 95
	Explorer.
	
	The Readme.txt file in the \Msdnsmpl\Tools\Inetsdk\Inetsdk\ directory of the beta
	ActiveX Developmant Kit CD-ROM has a date of 4/3/96 and file size of 16,649
	bytes. Later versions of ActiveX Development Kit will have a later date and
	different size for this file.
	
	The correct size and version of the files in Visual C++ version 4.1 are:
	
	  Mfc40.dll     921,872 bytes  Ver. 4.1.6038
	  Msvcrt40.dll  326,656 bytes  Ver. 4.10.6038
	
	The correct size and version of the files in Visual C++ version 4.2 are:
	
	  Mfc40.dll     921,872 bytes  Ver. 4.1.6038
	  Msvcrt40.dll   65,024 bytes  Ver. 4.2000.6164
	
	RESOLUTION
	==========
	
	To correct the problem, copy these two files from the \Redist directory of the
	Visual C++ 32-bit Edition CD-ROM to the Windows 95 \System directory (or Windows
	NT \System32), or, download and install the latest version of ActiveX INETSDK
	which is available from the following Web site:
	
	  http://www.microsoft.com/workshop/default.asp
	
	NOTE: This article does not apply to Visual C++ versions 5.x and above.
	
	Additional query words: visualc ActiveX INETSDK
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbGenInfo kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.1 4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
