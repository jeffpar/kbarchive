---
layout: page
title: "Q180525: PRB: DCOMCNFG Reports Multiple Copies of DCOM Server"
permalink: kb/180/Q180525/
---

## Q180525: PRB: DCOMCNFG Reports Multiple Copies of DCOM Server

	Article: Q180525
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVBDB
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running DCOM Config (DCOMCNFG.EXE) to configure your DCOM server, you find
	several copies of your server on the Applications tab that have been indexed
	using a number in parenthesis:
	
	     MyServer.MyClass(1)
	     MyServer.MyClass(2)
	     ...
	
	Only one of these entries will function correctly.
	
	CAUSE
	=====
	
	This is caused by an AppID registry key that is left over from a previous build
	of the server project. This key did not get removed from the server machines
	registry when the server was either unregistered using REGSVR32.EXE and
	CLIREG32.EXE, or when a new build of the server was created without having
	binary compatibility setup for the server project, thus creating a new set of
	registry keys and leaving an extra copy of the AppID key structure.
	
	DCOMCNFG.EXE uses the AppID keys to determine if a registered class is available
	as a remote component. If more than one AppID key is present for the same
	server, then DCOMCNFG.EXE will display them all on the Applications tab as
	available remote components. Only one of the listed server entries will work
	correctly because the rest of the entries are missing the key structure required
	for remote component creation.
	
	RESOLUTION
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	To Resolve the Issue if the Problem Has Occurred
	------------------------------------------------
	
	You will need to remove the extra AppID keys from the server machines registry
	manually using Registry Editor (Regedit.exe).
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start REGEDIT.EXE and locate the following key for your server:
	
	  HKEY_CLASSES_ROOT\AppID\<YourServer.exe>
	
	2. Select the AppID value in the right-hand pane. It should resemble a standard
	  class id (such as {1A113664-5B4D-11D1-A3F5-00AA00B7B36F}).
	
	3. Right-click the AppID value, and then select "Modify" from the shortcut menu.
	  The value should appear selected in an Edit String dialog box.
	
	4. Press the key combination CTRL+C to copy this value to the clipboard. NOTE:
	  Also record this value to another place for use in step 19.
	
	5. Click the Cancel button in the Edit String dialog box.
	
	6. Scroll the left pane in RegEdit back to the top and select HKEY_CLASSES_ROOT.
	
	7. From the Edit menu, select Find (CTRL+F) to open the Find dialog box.
	
	8. Press the key combination CTRL+V to paste the value from above into the Find
	  dialog's text box.
	
	9. Click the Find Next button.
	
	10. You should now see this value selected as an open key under the AppID
	  section of HKEY_CLASSES_ROOT. The default value for this key should be the
	  name of your server's first class.
	
	  NOTE: If you do not see this value in the AppID section of HKEY_CLASSES_ROOT,
	  then close REDEDIT.EXE and proceed to the section titled "To Avoid This
	  Issue in the Future" later in this article.
	
	  The AppID selected is the valid AppID that you will want to keep. Make a note
	  of the values listed in this key for a comparison with the invalid AppID
	  keys you will find in the following steps. Typical entries for this key are
	  AccessPermission, LaunchPermission, and RunAS.
	
	11. Select the default value in the right-hand pane. It should be the name of
	  the first class in your server.
	
	12. Right-click the default value, and then select "Modify" from the shortcut
	  menu. The value should appear selected in an Edit String dialog box.
	
	13. Press the key combination CTRL+C to copy this value to the clipboard.
	
	14. Click the Cancel button in the Edit String dialog box.
	
	15. Scroll the left pane back to the top of the AppID section and click on AppID
	  in the left pane (HKEY_CLASSES_ROOT\AppID).
	
	16. From the Edit menu, select Find (CTRL+F) to open the Find dialog box.
	
	17. Press the key combination CTRL+V to paste the value from step 13 into the
	  Find dialog's text box.
	
	  WARNING: This is where you need to be very careful. You are going to delete
	  all occurrences of this value in the AppID section that do not match the
	  AppID recorded in step 4. Make absolutely certain that any entries you
	  delete containing this name are limited to the AppID section of
	  HKEY_CLASSES_ROOT. As an extra precaution, you may want to Export each
	  registry key before deleting. For more information on Exporting registry
	  keys, see the Online documentation for RegEdit.Exe.
	
	18. Click the Find Next button. If the search takes you out of the AppID section
	  of HKEY_CLASSES_ROOT, then proceed to Step 21.
	
	19. If you find an entry in the AppID section of HKEY_CLASSES_ROOT, whose
	  default value is the name of your server's first class, and it does not
	  match the AppID value recorded in step 4, then delete the key by selecting
	  Delete from the Edit menu.
	
	  NOTE: These invalid AppID keys are usually missing their RunAS value.
	
	20. Repeat steps 18 and 19 until the only entry left in the AppID section, with
	  a default value matching the value obtained in step 13, is the value
	  obtained in step 4.
	
	21. Close Registry Editor and run DCOMCNFG.EXE.
	
	22. You should now see only one instance of your server on the Applications tab.
	
	To Avoid This Issue in the Future
	---------------------------------
	
	Set up your server project to use binary compatibility.
	
	1. After you have built your server project the first time, immediately create a
	  new folder in the project folder named "Compat" or something meaningful to
	  you.
	
	2. Copy the EXE that you just created to this new folder, leaving the original
	  in the build folder.
	
	3. Open the Projects Properties dialog and select the Component tab.
	
	4. Check the binary compatibility option and browse to the new copy of the EXE
	  in the Compat folder.
	
	5. Make sure you compile all future builds to the project folder, not to the
	  Compat folder which is storing the original .exe, to maintain binary
	  compatibility.
	
	6. If you must break binary compatibility (changing an existing interface) then
	  Visual Basic will create a new GUID for the project, creating a new set of
	  registry keys, thus leaving the old build showing in DCOMCNFG.EXE.
	
	7. You should unregister the existing server BEFORE compiling the incompatible
	  build. You can unregister the server .exe using the following commands at the
	  Command Prompt or in the Windows Run dialog:
	
	  REGSVR32.exe /u <yourDCOMserver.exe>"
	
	  -and-
	
	  CLIREG32.exe /u <yourDCOMserver.vbr>"
	
	  NOTE: You will still see the old server in DCOMCNFG.exe. Please refer to the
	  above section for information regarding removing the old server from the list
	  of applications in DCOMCNFG.EXE.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open an existing DCOM server project in Visual Basic.
	
	2. From the Project menu, select the Projects Properties. On the Component tab,
	  select "No compatibility."
	
	3. Rebuild the server project into a new .exe.
	
	4. Run DCOMCNFG.EXE. You will see a second copy of your server on the
	  Applications tab with a number in parenthesis appended to the end of the
	  class name. This entry will have only two tabs when you select its properties
	  instead of the usual four tabs. These entries can be left here safely, just
	  make sure that you configure the one with all four tabs.
	
	REFERENCES
	==========
	
	For more information regarding project compatibility, see the following article
	in the Microsoft Knowledge Base:
	
	  Q161137 : HOWTO: Use Project and Binary Compatibility
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Randy Russell, Microsoft Corporation
	
	Additional query words: kbDCOM95, dCOM, DCOMCNFG kbVBp500 kbVBp kbWinOS98 kbDSupport kbdse kbDCOM kbVBp600 kbRegistry
	
	======================================================================
	Keywords          : kbOSWin2000 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
