---
layout: page
title: "Q189625: PRB: Error 168 When Installing or Running Visual Basic"
permalink: /kb/189/Q189625/
---

## Q189625: PRB: Error 168 When Installing or Running Visual Basic

{% raw %}

	Article: Q189625
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup kbRegistry kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	During Visual Basic setup, the following error may be received while the system
	registry is being updated:
	
	  Setup error 168 : Setup encountered an error updating your registry
	
	This problem occurs on Windows 2000, Windows NT 4.0, Windows 95, Windows 98, and
	Windows Me.
	
	CAUSE
	=====
	
	On Windows NT or Windows 2000, this problem frequently occurs when a user
	attempts to install or use Visual Basic without having the necessary access
	rights.
	
	On Windows 95, Windows 98, and Windows Me, this problem frequently occurs when
	registry keys being updated are locked, are used by another application, or have
	exceeded their size limits. See the MORE INFORMATION section to follow.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	This article provides workarounds for Windows 2000, Windows NT 4.0, Windows 95,
	Windows 98, and Windows Me.
	
	Resolution for Windows 2000 and Windows NT 4.0
	----------------------------------------------
	
	NOTE: The procedures shown here must be performed by a person with Administrator
	rights for the machine.
	
	Step-by-Step Example
	--------------------
	
	1. From the Windows Start menu, choose Run.
	
	2. Type in the path to the Registry Editor (for example,
	  "C:\WINNT\SYSTEM32\Regedt32.exe" (without the quotation marks)), and then
	  click OK.
	
	3. From the HKEY_LOCAL_MACHINE on Local Machine window, select the
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools registry key.
	
	4. Choose Permissions from the Security menu.
	
	5. From the Registry Key Permissions dialog box, click Replace Permission on
	  Existing Subkeys.
	
	6. From the Name text box, select Everyone, and then choose Full Control from
	  the Type of Access combo box.
	
	7. Click OK.
	
	8. From the HKEY_LOCAL_MACHINE on Local Machine window, highlight the
	  HKEY_LOCAL_MACHINE\SOFTWARE\Classes\TypeLib registry key.
	
	9. Repeat steps 4 through 7.
	
	10. From the HKEY_CLASSES_ROOT on Local Machine window, highlight the
	  HKEY_CLASSES_ROOT\TypeLib registry key.
	
	11. Repeat steps 4 through 7.
	
	12. Try to reinstall Visual Basic.
	
	
	Resolutions for Windows 95, Windows 98, or Windows Me
	-----------------------------------------------------
	
	NOTE: Four possible resolutions for Windows 95, Windows 98, or Windows Me are
	provided here.
	
	Resolution 1
	------------
	
	Remove erroneous entries from the SharedDLLs registry key
	
	Step-by-Step Example
	--------------------
	
	1. From the Windows Start menu, choose Run.
	
	2. Type the path to the Registry Editor (for example, "C:\WINDOWS\Regedit.exe"
	  (without the quotation marks)), and then click OK to open the Registry
	  Editor.
	
	3. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs
	
	4. Examine the SharedDLLs key entries to see if any files with extensions such
	  as .c, .cpp, or .rc are registered. Note that you should use this key when
	  registering only DLL files. Delete any file entries from the SharedDLLs
	  registry key that contain extensions other than .dll or .exe.
	
	5. Install Visual Basic again.
	
	Resolution 2
	------------
	
	Replace the existing SharedDLLs registry key
	
	Step-by-Step Example
	--------------------
	
	1. From the Windows Start menu, choose Run.
	
	2. Type in the path to the Registry Editor (for example,
	  "C:\WINDOWS\Regedit.exe" (without the quotation marks)), and then click OK to
	  open the Registry Editor.
	
	3. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs
	
	4. From the Registry menu, choose Export Registry File to save the existing
	  registry key.
	
	5. Name the exported registry key file and save it in a temporary directory (for
	  example, "C:\Temp\OldKey.dat" (without the quotation marks)).
	
	6. Delete the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs
	
	7. Install Visual Basic again.
	
	  NOTE: Whether installation is successful or unsuccessful, perform steps 1-2
	  above again, then continue to step 8.
	
	8. Save the new SharedDLLs registry key as described in steps 4-5, assigning it
	  a new name (for example, "C:\Temp\NewKey.dat" (without the quotation marks)).
	
	9. From the Registry menu, choose Import Registry File. Enter the name of the
	  original registry key (in our example, C:\Temp\OldKey.dat), then click Open.
	  This important step restores SharedDLLs registry key information that would
	  otherwise be lost.
	
	10. If the installation in step 7 was successful, import the second saved
	  registry file (in our example, C:\Temp\NewKey.dat) in the event that
	  importing OldKey.dat wrote over some key values. See step 9 for this
	  procedure.
	
	  If the installation in Step 7 was unsuccessful, it may be because you have
	  exceeded the size limit of the Registry. See Resolutions 4 and 5 for
	  workarounds for this problem.
	
	Resolution 3
	------------
	
	Reduce registry size by temporarily deleting fonts
	
	Step-by-Step Example
	--------------------
	
	1. From the Windows Control Panel, select Fonts.
	
	2. Check the number of fonts loaded on the machine: the number of fonts appears
	  at the bottom of the Fonts window. If you have more than 800 fonts on your
	  system, move some fonts from the Windows\Fonts folder to a temporary
	  location.
	
	3. Install Visual Basic again.
	
	4. Move the fonts back after Visual Basic has been successfully installed.
	
	Resolution 4
	------------
	
	Reduce path size to allow for more registry entries
	
	Step-by-Step Example
	--------------------
	
	1. Examine the directory structure into which you have loaded applications on
	  your system. The full directory path for DLLs is entered into the SharedDLLs
	  registry key and the number of characters in the path reduces the number of
	  entries in a registry key.
	
	2. In order to allow for more Registry entries, you may wish to uninstall
	  particular applications and then reinstall the applications closer to the
	  root directory.
	
	3. Install Visual Basic again.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs on Windows 2000, Windows NT 4.0, Windows 98, and Windows 95.
	This article provides additional information and workarounds for all platforms.
	
	Windows 2000 or NT 4.0
	----------------------
	
	1. If you do not have Administrator rights on a Windows 2000 or Windows NT
	  machine and try to install Visual Basic as a regular user, you will get error
	  168 while the system registry is being updated.
	
	2. If you do have Administrator rights and some of the subkeys under
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools are owned by someone else
	  or do not have an owner (they appear dimmed), you will also get error 168.
	
	3. If you don't have access to HKLM\Software\Microsoft\Shared Tools and HKCR and
	  HKLM\Software\Classes\TypeLib subkeys, you will get "Unexpected error
	  quitting" when you try to start Visual Basic. This usually happens when you
	  are a regular user and the administrator did not grant you access rights.
	
	Windows 95, Windows 98, or Windows Me
	-------------------------------------
	
	Windows 95 and Windows 98 appear to have a registry key size limit beyond which
	it will not respond to the RegistrySizeLimit value. If this size limit is
	exceeded, Visual Basic may not be able to update the registry and complete
	setup.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q185647 PRB: Setup Error 168: Setup Encountered Error Updating Registry
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbRegistry kbVBp kbVBp500 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
