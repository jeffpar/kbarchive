---
layout: page
title: "Q190174: HOWTO: Create Shortcuts on the Programs Menu with PDW"
permalink: /kb/190/Q190174/
---

## Q190174: HOWTO: Create Shortcuts on the Programs Menu with PDW

{% raw %}

	Article: Q190174
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run a setup program that was created with the Application Setup Wizard
	in earlier versions of Visual Basic, the application's shortcut is created
	directly on the Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows
	Me, Microsoft Windows 2000, or Microsoft Windows NT 4.0 Programs menu by
	default. Program groups are only created if there are multiple shortcuts, the
	installation is on an earlier version of Windows or NT, or the Setup Toolkit
	project is modified.
	
	When you run a setup program that was created using the Package and Deployment
	Wizard (PDW) in Visual Basic 6.0, the application's shortcut is always placed in
	a program group by default. However, you can create a shortcut directly on the
	Programs menu by modifying the steps used in the PDW. This article describes how
	to accomplish this.
	
	MORE INFORMATION
	================
	
	To create a shortcut for the application directly on the Programs menu, follow
	these steps in the Start Menu Items screen of the PDW:
	
	1. Under Start Menu Items, select the program group for your application.
	
	  For example, if the name of your project is Hello, you will see a program
	  group named Hello with a shortcut named Hello below it. Select the program
	  group named Hello.
	
	2. Click Remove, and then click New Item.
	
	3. In the Target list, click the program file you want the shortcut to start.
	
	4. In the Start In list, click $(AppPath).
	
	5. In the Name box, type the name you want to give the shortcut, and click OK.
	
	6. Click Next, and then complete the remaining screens in the PDW as
	  appropriate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
