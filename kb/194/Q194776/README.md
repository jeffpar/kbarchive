---
layout: page
title: "Q194776: HOWTO: Install a Visual Basic Application on Terminal Server"
permalink: /kb/194/Q194776/
---

## Q194776: HOWTO: Install a Visual Basic Application on Terminal Server

	Article: Q194776
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbConfig kbOSWinNT kbVBp600 kbGrpDSVB
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Package and Deployment Wizard (PDW) to install a Microsoft
	Visual Basic 6.0 application on a Microsoft Windows-based Terminal Server
	Client, the following error message may occur:
	
	  Cannot start main setup program!
	  (CreateProcess() returned error code 0x00000002H)
	
	MORE INFORMATION
	================
	
	Although Microsoft Windows NT 4.0 Terminal Server Edition is not a supported
	platform for Microsoft Visual Basic 6.0, an application that is created in
	Visual Basic 6.0 may be installed and may work on Windows NT 4.0 Terminal Server
	Edition. It may be necessary to modify path information before installing a
	Visual Basic 6.0 application using the Terminal Server client.
	
	NOTE: Visual Basic 6.0 is supported on Windows 2000 Server with terminal services
	installed.
	
	The error above can be avoided by modifying the path environment variable on the
	Terminal Server client to contain the exact path of the \Windows and
	\Windows\System directories. The following is an example of what the path should
	be set to:
	
	  C:\WTSVR\Profiles\[User]\Windows
	
	and:
	
	  C:\WTSVR\Profiles\[User]\System32
	
	where [User] is the username name for the user logged on to the Terminal Server
	client. The information would be entered into the path as a single line
	separated by a semicolon (;). The following steps demonstrate how to modify the
	path environment:
	
	Step-by-Step Example
	--------------------
	
	1. Open the Windows Control Panel.
	
	2. Double-click the System icon, and click the Environment tab.
	
	3. In the System Variables list, click Path.
	
	4. In the Value box, add the necessary path information, as shown above, for
	  both the \Windows and \Windows\System32 directories for the given user, and
	  separate these two entries with a semicolon (;).
	
	5. Click OK to exit the System Properties dialog box. The Visual Basic
	  application should now install without the error message listed above.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196201 INFO: Visual Basic Is Not Supported on Terminal Server 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbConfig kbOSWinNT kbVBp600 kbGrpDSVB 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
