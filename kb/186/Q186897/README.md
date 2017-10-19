---
layout: page
title: "Q186897: PRB: &quot;Failure Writing to the System Registry&quot; Error Message"
permalink: /kb/186/Q186897/
---

## Q186897: PRB: &quot;Failure Writing to the System Registry&quot; Error Message

	Article: Q186897
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a setup program that was created using the Application Setup
	Wizard, you receive the following error message:
	
	  Failure writing to the system registry. The registry may be corrupt, or
	  you may not have the required permissions to write to the registry.
	
	CAUSE
	=====
	
	As the error message indicates, the problem may be due to a corrupt registry or
	incorrect permissions to write to the registry. In addition, the problem occurs
	on computers running Windows 95 when the Setup program tries to add an entry to
	a registry key and the key will exceed 64K in size as a result. Registry keys
	are limited to 64K in Windows 95.
	
	RESOLUTION
	==========
	
	When the problem occurs on a Windows 95 computer, it usually happens when Setup
	tries to add entries to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs
	
	To determine whether the SharedDLLs key is approaching the 64K limit, follow
	these steps to export the key to the Desktop and look at the size of the
	exported file:
	
	1. Click the Start button, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. On the Edit menu, click Find. In the Find What box, type "SharedDLLs"
	  (without the quotation marks). Under Look At, select only the Keys check box,
	  and then click Find Next.
	
	4. On the Registry menu, click Export Registry File. In the Save In list, click
	  Desktop. In the File Name box, type "MySharedDLLs" (without the quotation
	  marks), and then click Save.
	
	  This saves a copy of the SharedDLLs registry key to a file called
	  MySharedDLLs.reg on the Desktop.
	
	5. On the Desktop, right-click MySharedDLLs.reg, and then click Properties on
	  the shortcut menu. Note the size of the file. If it is approximately 64K in
	  size, the "Failure writing to the system registry" error message is being
	  caused by a limitation of Windows 95.
	
	  To work around the 64K limit, open the MySharedDLLs.reg file you created in
	  step 4 in Notepad or Wordpad. Notice which programs have entries in the
	  SharedDLLs key. If you notice file names from programs that you are no longer
	  using, you may want to remove (uninstall) these programs to free up space in
	  the registry key. If you have entries for files that no longer exist on the
	  hard drive, you can remove the entries directly.
	
	If you determine that the error message is not being caused by the 64K registry
	key limit, try the following:
	
	- In Windows NT or 2000, try running Setup while logged on the computer as a
	  member of the Administrators group to determine whether there is a problem
	  with permissions.
	
	
	- Restore the registry file from a backup. For additional information, please
	  see the "Restoring the Registry" Help topic in Regedit.exe or the "Restoring
	  a Registry Key" Help topic in Regedt32.exe.
	
	In addition, there is now a utility that can help you clean up the SharedDLLs key
	in the registry. Please see the following Microsoft Knowledge Base article for
	more information:
	
	  Q217165 FILE: ShareDLL.exe File Checks the Size of the SharedDLLs Regist
	
	
	Additional query words: capacity limitation
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
