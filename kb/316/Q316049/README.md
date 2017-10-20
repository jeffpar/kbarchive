---
layout: page
title: "Q316049: PRB: Default Image Error When You Start Pocket PC 2002 Emulation"
permalink: /kb/316/Q316049/
---

## Q316049: PRB: Default Image Error When You Start Pocket PC 2002 Emulation

{% raw %}

	Article: Q316049
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSETK
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE eMbedded Visual C++, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 2002 
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you target the Pocket PC 2002 emulation environment from either eMbedded
	Visual C++ (eVC)or eMbedded Visual Basic (eVB), you may receive the following
	error:
	
	  A valid default image must be supplied within a skin's view element. Please
	  specify a .bmp file name to display. File:C:\Windows CE Tools\WCE300\Pocket
	  PC 2002\Emulation\Ppc2002.xml
	
	RESOLUTION
	==========
	
	To resolve this problem, delete the following file from your computer, and then
	reinstall the Pocket PC 2002 Platform SDK:
	
	  C:\Program Files\Windows CE Tools\Common\Platman\bin\skin.dll
	
	MORE INFORMATION
	================
	
	This error can occur only if the beta or other pre-release version of the
	PocketPC 2002 Platform SDK had been installed earlier on your computer.
	
	Additional query words: evb evc ppc2002 default
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbWinCEETKSearch kbWinCESearch
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
