---
layout: page
title: "Q179011: ODE: Running Microsoft ODE97 on a Computer with IE 4.0"
permalink: /kb/179/Q179011/
---

## Q179011: ODE: Running Microsoft ODE97 on a Computer with IE 4.0

	Article: Q179011
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SUMMARY
	=======
	
	You can install and run Microsoft Office 97 Developer Edition Tools (ODE) on a
	computer that has Microsoft Access 97 and Microsoft Internet Explorer 4.0.
	However, you should be aware of the following issues when you develop Microsoft
	Access 97 applications:
	
	- Setup Can't Register Comcat.dll
	
	- Internet Explorer 3.x Breaks When You Install Your Application
	
	- You Can't Install Internet Explorer After Install of ODE Application
	
	
	MORE INFORMATION
	================
	
	Setup Can't Register Comcat.dll
	-------------------------------
	
	When you install your application on a computer that is not running Microsoft
	Internet Explorer 4.0, you receive the following error message:
	
	  Comcat.dll was unable to register itself in the system registry.
	
	When you click OK, you receive another message:
	
	  <App Name> Setup was not completed successfully.
	
	When you click OK again, the setup of your application quits.
	
	If you plan to distribute your application so that it can be installed on
	computers that are not running Microsoft Internet Explorer 4.0, run the ODE
	Setup Wizard on a computer that does not have Internet Explorer 4.0 installed.
	
	NOTE: If you build your disk images on a computer that does not have Internet
	Explorer 4.0 installed, the setup of your application runs successfully on a
	computer that has Internet Explorer 4.0 installed.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q174217 ODE: Comcat.dll Can't be Registered during Run-time install
	
	Microsoft Internet Explorer 3.x Breaks When You Install Your Application
	------------------------------------------------------------------------
	
	When you build your application on a computer running Microsoft Internet Explorer
	4.0 and then install it on a computer running Internet Explorer 3.x, Internet
	Explorer 3.x breaks on the target computer. Two of the files installed with your
	application are not compatible with Internet Explorer 3.x and must be replaced.
	Alternatively, you can build your disk images on a computer that does not have
	Internet Explorer 4.0 installed as described in the section "Setup Can't
	Register Comcat.dll."
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q174508 ODE: Installing Run-Time Application Breaks IE 3.x
	
	You Can't Install Internet Explorer After Install of ODE Application
	--------------------------------------------------------------------
	
	After you install an ODE application that was built on a computer running
	Microsoft Internet Explorer 4.0, you are unable to install any version of
	Internet Explorer on the target computer. The updated files Urlmon.dll and
	Wininet.dll that were installed by your ODE application prevent the installation
	of Internet Explorer.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q174867 Errors Installing Internet Explorer
	
	
	Additional query words: comcat dll was unable to register itself in the system registry Preview Platform 2 fail browser setup can t register comcat dll
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
