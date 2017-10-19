---
layout: page
title: "Q181929: SMSINST: Repackage Does Not Use Variables in .ini File Edits"
permalink: /kb/181/Q181929/
---

## Q181929: SMSINST: Repackage Does Not Use Variables in .ini File Edits

	Article: Q181929
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbDatabase smsdatabase smsinst
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the repackage feature on a Windows 95 client, .ini file edits which
	should reference variables, use the hard-coded equivalents instead. When you use
	the same repackage feature on a Windows NT client, it uses the variables
	correctly. If a user changes the default directory when installing the
	repackaged .exe file, any .ini file paths which should use the variable are now
	incorrectly referenced.
	
	MORE INFORMATION
	================
	
	The following example shows how the problem may be exhibited. Repackaging
	Microsoft Office 95 Professional causes file edits to the Powerpnt.ini file and
	when running under Windows NT, produces the following settings when C:\MSOFFICE
	is selected as the installation directory:
	
	[MS PowerPoint Translators]
	PP7TRANS1=,%MAINDIR%\Powerpnt\PP7TRANS.dll,PP7
	PP7TRANS2=PowerPoint 7.0 Presentations,%MAINDIR%\Powerpnt\pp7trans.dll,PPT
	PP7TRANS3=PowerPoint 7.0 Templates,%MAINDIR%\Powerpnt\pp7trans.dll,POT
	
	The same repackage under Windows 95 produces the following:
	
	[MS PowerPoint Translators]
	PP7TRANS1=,C:\MSOFFICE\POWERPNT\PP7TRANS.dll,PP7
	PP7TRANS2=PowerPoint 7.0
	Presentations,C:\MSOFFICE\POWERPNT\pp7trans.dll,PPT
	PP7TRANS3=PowerPoint 7.0 Templates,C:\MSOFFICE\POWERPNT\pp7trans.dll,POT
	
	WORKAROUND
	==========
	
	Prior to repackaging on Windows 95, make the following changes:
	
	1. On the View menu, click Installation Expert.
	
	2. Select Advanced Configuration and click the Global Tab.
	
	3. Change the Destination Platform to "Windows95 and NT (True Win32)."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase smsdatabase smsinst 
	Technology        : kbSMSSearch kbSMS110 kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
