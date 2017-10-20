---
layout: page
title: "Q289493: PRB: Component Not Registered Error When Attempt to Run VB App"
permalink: /kb/289/Q289493/
---

## Q289493: PRB: Component Not Registered Error When Attempt to Run VB App

{% raw %}

	Article: Q289493
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbOSWinNT400 kbOSWin2000 kbSecurity kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a Visual Basic (VB) application on a computer that is
	running Microsoft Windows NT 4.0 or Microsoft Windows 2000, and you are not
	logged in as an Administrator or you do not have Administrator rights, you may
	receive the following error message
	
	  Component tabctl32.ocx or one of its dependencies not correctly registered: a
	  file is missing or invalid.
	
	where tabctl32.ocx is the name of the ActiveX control that is experiencing the
	problem. The .ocx file for the control is physically present on the computer.
	Any attempt to manually register this control by using Regsvr32.exe fails with
	the 0x00000005 (or "Access is Denied") return error code.
	
	Users who are logged in as an Administrator or who have Administrator rights do
	not receive an error message.
	
	CAUSE
	=====
	
	The interactive user does not have access permission to the ActiveX control that
	is listed in the error dialog box. This problem usually occurs on computers that
	are formatted with Microsoft Windows NT File System (NTFS). NTFS has a built-in
	security system that allows you to grant various permissions to folders and to
	individual files. These permissions protect files and folders locally and
	remotely.
	
	RESOLUTION
	==========
	
	To resolve this problem, grant the user the necessary permissions to the
	control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To change file permissions, follow these steps:
	
	1. Log on to the system as an Administrator or as a user with Administrator
	  rights.
	
	2. Search for the .ocx file that is listed in the error message. It is usually
	  located in the System32 folder.
	
	3. Right-click the file and click Properties.
	
	4. In the Properties dialog box for this control, click the Security tab.
	
	5. If you are using Windows NT 4.0, on the Security tab, click Permissions. The
	  File Permissions dialog box appears. Make sure that the Type of access is at
	  least set to Read for the interactive user.
	
	  If you are using Windows 2000, on the Security tab, select a user or group
	  from the list, select the permissions that you want to grant (which must
	  include at least Read), and then click either OK or Apply.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbOSWinNT400 kbOSWin2000 kbSecurity kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
