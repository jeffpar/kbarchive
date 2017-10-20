---
layout: page
title: "Q138412: FIX: AppWiz Samples Fail to Build from Command Line"
permalink: /kb/138/Q138412/
---

## Q138412: FIX: AppWiz Samples Fail to Build from Command Line

{% raw %}

	Article: Q138412
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbtool kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to build the CUSTOMWZ, HIERWIZ, and LOGOWIZ samples from the command
	line will fail, giving errors like these:
	
	  
	
	  rc.exe /l 0x409 /fo".\Debug/customwz.res" /d "NDEBUG" /d "_PSEUDO_DEBUG"
	/d "_AFXDLL" .\customwz.rc
	
	       link.exe @C:\temp\nma00116.
	       bscmake.exe @C:\temp\nmb00116.
	
	  NMAKE : fatal error U1073: don't know how to make '"\bin\ide\.awx"'
	  Stop.
	
	CAUSE
	=====
	
	The TargetName and MSDevDir macros have not been assigned values.
	
	RESOLUTION
	==========
	
	Define the macros in NMAKE's command line. Example,
	
	  NMAKE /f CUSTOMWZ.MAK MSDevDir=C:\MSDEV TargetName=customwz<Enter>
	
	NOTE: This example will default to the Pseudo-Debug target.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The samples all build without any errors when you build them from within the
	Developer Studio using the corresponding project workspace (.mdp) files.
	
	Additional query words: kbVC400bug kbvc500fix AppWizard MSDEV NmakeIss
	
	======================================================================
	Keywords          : kbtool kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
