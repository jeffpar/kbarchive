---
layout: page
title: "Q201357: ODE97: Can't Write to Wininet.dll or Urlmon.dll During Install"
permalink: kb/201/Q201357/
---

## Q201357: ODE97: Can't Write to Wininet.dll or Urlmon.dll During Install

	Article: Q201357
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you are installing a run-time application on a computer, you may receive
	the following error message:
	
	  Setup could not write to the file: '<C:\Windows\System>\Wininet.dll'.
	  This file is currently being used by another application. Close any open
	  applications.
	
	or
	
	  Setup could not write to the file: '<C:\Windows\System>\Urlmon.dll'.
	  This file is currently being used by another application. Close any open
	  applications.
	
	You then have the following options: Retry, Abort, and Ignore. The path to the
	files will be specific to your computer's Microsoft Windows System path.
	
	CAUSE
	=====
	
	The run-time application that you are installing contains a newer version of one
	or both of the files, Urlmon.dll or Wininet.dll. The Setup program always tries
	to overwrite older copies of files on a system that it is installing the files
	onto. The Setup program will not be able to successfully overwrite these files
	if the files are locked by the Windows operating system.
	
	RESOLUTION
	==========
	
	You can change the version of the Urlmon.dll and Wininet.dll files that are
	included in your disk images by changing an entry in two of the Setup Wizard
	tables.
	
	For information about how to make these changes, see "Solution 3" in the
	following article:
	
	  Q174508 ODE: Installing Run-Time Application Breaks Microsoft Internet
	  Explorer 3.x
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	At the time of this writing, if you click Ignore in the error message box, your
	application is successfully installed without any side effects to Microsoft
	Internet Explorer 4.0. However, Microsoft still recommends that you use the
	resolution described in the "Resolutions" section to resolve the error message
	completely.
	
	REFERENCES
	==========
	
	For additional information about other issues involving the Office 97 Developer
	Edition and Internet Explorer 4.0, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q174217 ODE97: Comcat.dll Can't Be Registered During Run-time Install
	
	  Q179011 ODE: Running Microsoft ODE97 on a Computer with Internet Explorer 4.0
	
	For additional information about other issues involving the Office 97 Developer
	Edition and distributing applications, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q160870 ACC: VBA Functions Break in Database with Missing References
	
	  Q162884 ODE97: Troubleshooting ODE Setup Wizard Problems
	
	Additional query words: pra wininet dll urlmon dll
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
