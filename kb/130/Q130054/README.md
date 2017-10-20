---
layout: page
title: "Q130054: HOWTO: How to Determine the Japanese OEM Windows Version"
permalink: /kb/130/Q130054/
---

## Q130054: HOWTO: How to Determine the Japanese OEM Windows Version

{% raw %}

	Article: Q130054
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:1.2,3.5
	Operating System(s): 
	Keyword(s): kbIntl kbDBCS kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	- Microsoft Win32s version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because of the variety of computer manufacturers (NEC, Fujitsu, IBMJ, and so on)
	in Japan, sometimes Windows-based applications need to know which OEM (original
	equipment manufacturer) manufactured the computer that is running the
	application. This article explains how.
	
	MORE INFORMATION
	================
	
	There is no documented way to detect the manufacturer of the computer that is
	currently running an application. However, a Windows-based application can
	detect the type of OEM Windows by using the return value of the
	GetKeyboardType() function.
	
	If an application uses the GetKeyboardType API, it can get OEM ID by specifying
	"1" (keyboard subtype) as argument of the function. Each OEM ID is listed here:
	
	  OEM Windows       OEM ID
	  ------------------------------
	  Microsoft         00H (DOS/V)
	  all AX            01H
	  EPSON             04H
	  Fujitsu           05H
	  IBMJ              07H
	  Matsushita        0AH
	  NEC               0DH
	  Toshiba           12H
	
	Application programs can use these OEM IDs to distinguish the type of OEM
	Windows. Note, however, that this method is not documented, so Microsoft may not
	support it in the future version of Windows.
	
	As a rule, application developers should write hardware-independent code,
	especially when making Windows-based applications. If they need to make a
	hardware-dependent application, they must prepare the separated program file for
	each different hardware architecture.
	
	Additional query words: 3.10 1.20 3.50 kbinf
	
	======================================================================
	Keywords          : kbIntl kbDBCS kbIntlDev 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWin32s120 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:1.2,3.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
