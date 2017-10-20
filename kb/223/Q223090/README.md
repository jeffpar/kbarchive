---
layout: page
title: "Q223090: FIX: UserControl on Active Desktop Causes AV Shutdown"
permalink: /kb/223/Q223090/
---

## Q223090: FIX: UserControl on Active Desktop Causes AV Shutdown

{% raw %}

	Article: Q223090
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveDesktop kbCtrl kbVBp600 kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there is a user control on Active Desktop, and the shell is shut down, an
	access violation occurs in Internet Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new ActiveX Control project in Visual Basic. Leave the default name
	  Project1. UserControl1 is created by default.
	
	2. Compile the project to generate Project1.ocx, and save the project.
	
	3. Use the Package and Deployment Wizard (PDW) to create an Internet download
	  package.
	
	4. If not already installed, add the Windows Desktop Update component. From the
	  Control Panel, click Add/Remove Programs, and select Microsoft Internet
	  Explorer 4.0. Click Add/Remove and then select the appropriate option.
	
	5. Right-click the desktop and select Properties from the shortcut menu.
	
	6. Select the Web tab from the Display Properties dialog box.
	
	7. Make sure "View my Active Desktop as a Web page" is selected, and click New.
	
	8. Click No in the next dialog box, and then browse to the .htm page hosting our
	  control (Project1.htm).
	
	9. Select Project1.htm and click OK. You should see that the UserControl is now
	  part of the desktop.
	
	10. Close the shell either by logging off or selecting Shut Down from the Start
	  button.
	
	You will see either an Access Violation in the Explorer process at a location
	where the Msvbvm60.dll was loaded or a dialog box stating the Explorer is not
	responding. If the user turns off the Active Desktop before shutting down the
	shell, then this problem will not occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveDesktop kbCtrl kbVBp600 kbGrpDSInet kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
