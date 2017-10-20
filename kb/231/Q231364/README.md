---
layout: page
title: "Q231364: HOWTO: Install VFP6 Application for All Users on NT 4 Server"
permalink: /kb/231/Q231364/
---

## Q231364: HOWTO: Install VFP6 Application for All Users on NT 4 Server

{% raw %}

	Article: Q231364
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbOSWinNT400 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing an application from a routine created with the Visual FoxPro 6.0
	Setup Wizard to a computer running Microsoft Windows NT Server, any program
	group that is created is only accessible to the current user (usually the
	ADMINISTRATOR or a member of the ADMINISTRATORS group). Using a post-setup
	executable, developers can move the program group from the current user's start
	menu to that of All Users, thereby ensuring that the application is accessible
	to all.
	
	MORE INFORMATION
	================
	
	NOTE: The code in this article will work with Visual FoxPro version 5.0x as
	well. However, there is an issue with post-setup executables running on
	Microsoft Windows NT with that version. Please see the REFERENCES section below
	for more information on this problem.
	
	There are three things to consider when doing this:
	
	1. Step 4 of the Setup Wizard asks for a program group name. It also has a
	  selection to allow users to modify the directory and program group or just
	  the directory. Because there is no way to tell the post-setup executable the
	  name of the program group the user picked if they change the default, the
	  developer MUST select "DIRECTORY ONLY" in this step.
	
	2. As the program group will be moved from the Start menu of the current user to
	  that of all users, using ADD/REMOVE PROGRAMS in control panel to uninstall
	  the application will leave the program group behind. It will successfully
	  uninstall the application files, but will not remove the program group from
	  its new location.
	
	3. The name of the program group specified in the post-setup executable MUST be
	  exactly the same as that given in step 4 of the Setup Wizard. See the
	  comments in the code for the location of this information.
	
	To use the sample code:
	
	1. Copy and paste it into a .PRG file.
	
	2. Add this .PRG to a project and set it as MAIN.
	
	3. Create a CONFIG.FPW with the following lines:
	
	  RESOURCE=OFF
	  SCREEN=OFF
	
	4. Add the config.fpw to the OTHER\TEXT FILES tab of the project.
	
	5. Build this into an .EXE and direct the Setup Wizard toward it in step 4 (Post
	  Setup Executable).
	
	NOTE: Adding the CONFIG.FPW file to the project builds it into the .EXE. This
	ensures that the post-setup .EXE uses this specific config file and not one that
	may be distributed with the main .EXE. This is important because the two
	executables will be in the same directory after install.
	
	  LOCAL lcShortcutDir, lcTargetDir, lcProgGrpName
	  #DEFINE lnFile_Archive 32
	  #DEFINE lnFile_RO_Archive_Hidden 35
	  ON ERROR DO errhand WITH ERROR( ), MESSAGE( )
	  * Declare function to change file attributes on the file "MSCREATE.DIR"
	  DECLARE INTEGER SetFileAttributes IN "kernel32.dll" STRING lpFileName, INTEGER dwFileAttributes
	
	  * Set name of the program group created by the install program.
	  * MUST be the same as that given in Step 4 of the setup wiz for your application
	
	  lcProgGrpName = "My Test Program Group"
	
	  * Get directory where shortcuts were installed.
	  lcShortcutDir = GETENV('userprofile')+"\Start Menu\Programs" + "\" + lcProgGrpName
	  * Determine where shortcuts need to be moved.
	  lcTargetDir = GETENV('windir')+"\Profiles\All Users\Start Menu\Programs" + "\" + lcProgGrpName
	
	  SET SAFETY OFF
	  * Create new program group DIR in ALL USERS.
	  MD (lcTargetDir)
	  * Remove the Read Only & Hidden attributes from MSCREATE.DIR
	  SetFileAttributes(lcShortcutDir+"\mscreate.dir",lnFile_Archive)
	  * Copy application shortcuts.
	  COPY FILE lcShortcutDir + "\*.*" TO lcTargetDir + "\*.*"
	  * Reset the attributes on MSCREATE.DIR
	  SetFileAttributes(lcTargetDir+"\mscreate.dir",lnFile_RO_Archive_Hidden)
	  * Delete application shortcuts from source DIR so it can be removed.
	  DELETE FILE lcShortcutDir + "\*.*"
	  * Remove source DIR.
	  RD (lcShortcutDir)
	  SET SAFETY ON
	
	  RELEASE lcShortcutDir, lcTargetDir, lcProgGrpName
	  CLEAR DLLS
	
	  **************
	  #DEFINE MB_ICONINFORMATION  64  &&Information message
	  PROCEDURE errhand
	  	PARAMETER merror, ErrMess
	  	MESSAGEBOX ("The 'All Users' program group could not be created due to the following error:"+CHR(13)+CHR(13)+ ;
	  		"Error number: " + LTRIM(STR(merror))+CHR(13)+ ;
	  		"Error message: " + ErrMess,MB_ICONINFORMATION,"Program Group Error")
	
	REFERENCES
	==========
	
	For additional information about using the Setup Wizard in Visual FoxPro 6,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q194434 HOWTO: Use the Setup Wizard in Visual FoxPro 6.0
	
	For additional information about running post-setup executables under Windows NT
	from Visual FoxPro 5.0 Setup Wizard-created distribution files, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q176887 FIX: Running VFP Exe as Post-Setup Executable Hangs the Process
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Trevor Hancock, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbOSWinNT400 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbVFP500 kbVFP600 kbVFP500a kbOSWinNTSearch
	Version           : WINDOWS:5.0,5.0a,6.0; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
