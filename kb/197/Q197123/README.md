---
layout: page
title: "Q197123: PRB: Out-Of-Date Dependency Information for MSCal.ocx"
permalink: /kb/197/Q197123/
---

## Q197123: PRB: Out-Of-Date Dependency Information for MSCal.ocx

{% raw %}

	Article: Q197123
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbActiveX kbAppSetup kbCtrl kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 18-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you package a Microsoft Visual Basic application with the Package and
	Deployment Wizard (PDW), the following message appears:
	
	  The wizard found dependency information for the listed files, but the
	  information is out of date. To proceed with the out-of-date information,
	  click OK.
	
	This article applies to Visual Basic applications that reference the Microsoft
	Calendar Control (MSCal.ocx).
	
	CAUSE
	=====
	
	The version number for MSCal.ocx is 8.0.0.5007, but the version listed in
	MSCal.dep is 8.0.32.29.
	
	RESOLUTION
	==========
	
	The issue may be resolved by changing the version number in MSCal.dep from
	8.0.32.29 to 8.0.0.5007.
	
	Step-by-Step Procedure
	----------------------
	
	1. Locate the MSCal.dep file. Under Windows NT or Windows 2000, this file is in
	  the \Winnt\System32 directory. Under Windows 95, Windows 98, or Windows Me,
	  this file is in the \Windows\System directory.
	
	2. Open MSCal.dep in a text editor such as Notepad.
	
	3. Scroll down until you see the following:
	
	     [MSCAL.OCX]
	     Dest=$(WinSysPath)
	     Register=$(DLLSelfRegisterEx)
	     Version=8.0.32.29
	     Uses1=
	
	4. Change the line that says "Version=8.0.32.29" to "Version=8.0.0.5007."
	
	In addition to updating the "Version=" setting in MSCal.dep, if the "Register="
	setting is "$(DllSelfRegisterEx)", you must change it to "$(DllSelfRegister)".
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q208699 PRB: Error "$(DllSelfRegisterEx) Could Not Be Registered"
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can find MSCal.ocx
	(http://support.microsoft.com/download/support/mslfiles/MSCal.ocx) and MSCal.dep
	in the \Os\System directory on the first disk of Microsoft Visual Studio 6.0.
	
	
	Additional query words: MSCal.ocx
	
	======================================================================
	Keywords          : kbwizard kbActiveX kbAppSetup kbCtrl kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
