---
layout: page
title: "Q173646: HOWTO: Use a Custom Jet Profile to Alter Data Access Behavior"
permalink: kb/173/Q173646/
---

## Q173646: HOWTO: Use a Custom Jet Profile to Alter Data Access Behavior

	Article: Q173646
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0,7.0,97
	Operating System(s): 
	Keyword(s): kbAccess95 kbAccess97 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You can edit the Jet Registry keys to alter the data access behavior of the
	Microsoft Jet database engine. However, doing so affects all Jet-based
	applications, and may have unintended negative consequences for some. By using
	custom profiles, you can tune Jet on a per-application basis.
	
	MORE INFORMATION
	================
	
	In 16-bit versions of Visual Basic and Microsoft Access, Jet settings are stored
	in an .ini file (for example, Msaccess.ini or Msacc20.ini). You can provide a
	custom .ini file with your application that contains settings specific to your
	application.
	
	The 32-bit versions of Jet read their settings from the registry.
	
	In Visual Basic 4.0, 5.0, 6.0, and Jet versions 3.0 and 3.5 use the default
	registry location:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\3.0
	
	-or-
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Jet\3.5
	
	If using Microsoft Access, settings are read from the following branch first, and
	then the default location (above) is used for any additional values:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Access\7.0\Jet\3.0
	
	-or-
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Access\Jet\3.5
	
	To prevent multiple applications from making custom changes to these settings and
	negatively impacting other Jet-based programs, the application can tell Jet to
	read its settings from a different branch of the registry. These alternate
	branches are known as Profiles.
	
	You don't have to reproduce the entire registry branch in your profile. Values
	you specify in your custom profile override values specified in the default
	registry location, which in turn override internal Jet default values.
	
	Example Profile
	---------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	This example illustrates registry changes for a custom profile that lowers the
	LockRetry setting from the default value of 20 to 5.
	
	1. In the Registry Editor, expand HKEY_LOCAL_MACHINE\SOFTWARE and add key values
	  for your company name (MyCorp), application name (MyApp), and version (1.0):
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0
	
	2. The above is sufficient for Visual Basic, but to maintain compatibility with
	  Microsoft Access applications, add keys for "Jet" and "3.0" or "3.5":
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.0
	
	  -or-
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.5
	
	3. This is an empty Profile. From here, add keys and values that affect Jet's
	  behavior. To make the LockRetry changes, add the keys "Engines" and "Jet":
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.0\Engines\Jet
	
	  -or-
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.5\Engines\Jet
	
	  Then, add a REG_DWORD Value, called LockRetry, and a value of 5.
	
	The profile is complete.
	
	Using the Profile in Visual Basic
	---------------------------------
	
	To use the profile in Visual Basic, set DBEngine.IniPath to the profile name
	prior to using any database functionality:
	
	In Visual Basic 4.0:
	
	     DBEngine.IniPath = _
	       "HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.0"
	
	In Visual Basic 5.0:
	
	     DBEngine.IniPath = _
	       "HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.5"
	
	Using the Profile in Microsoft Access
	-------------------------------------
	
	Unlike visual Basic, where you can set the profile name programmatically, Jet is
	already initialized by the time your Microsoft Access code is running. To
	specify a profile name, you need to add another registry key to specify a
	"friendly" profile name and use a command-line switch when starting Microsoft
	Access:
	
	  1. Expand the following registry branch:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Access\7.0
	
	     -or-
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Access
	
	  2. Add a key "Profiles".
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Access\7.0\Profiles
	
	     -or-
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Access\Profiles
	
	  3. Add a REG_SZ value with the name being your "friendly" profile name (for
	     example, MyProfile) and the value being the registry branch where the
	     profile settings are located. For example:
	
	     Name:  MyProfile
	     Type:  REG_SZ
	     Value: HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0
	
	  4. Start Microsoft Access with the command-line option:
	
	     MSACCESS.EXE /PROFILE "MyProfile" MYDATABASE.MDB
	
	Microsoft Access 95 will automatically choose the ...\Jet\3.0 branch, Microsoft
	Access 97 will automatically choose the ...\Jet\3.5 branch, in Visual Basic you
	must specify the complete profile path.
	4. Because you can't guarantee that Microsoft Access was started using the
	  correct profile, you can check your startup code to see if the user started
	  the application properly or just double-clicked the icon for the
	
	.mdb file. For example:
	
	        If SysCmd(acSysCmdProfile) <> "MyProfile" Then
	          MsgBox "To use this database, run MyApp from the Start Menu"
	          DoCmd.Quit acExit
	        End If
	
	Compatibility with Earlier Jet Databases
	----------------------------------------
	
	If the database you're opening is used by earlier versions of Jet (1.0, 1.1, 2.0,
	or 2.5), Microsoft Jet 3.x doesn't read these files directly. It uses an
	Installable ISAM engine in the same way it would when reading a dBase or Paradox
	file.
	
	For example, to set the LockRetry value for accessing a Jet 2.x database, add the
	Value to the following location:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.0\Engines\Jet 2.x\ISAM
	
	You still only reference the profile location as indicated in the Microsoft
	Access and Visual Basic usage sections above. For example:
	
	In Visual Basic:
	
	     DBEngine.IniPath = _
	       "HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.0"
	
	  -or-
	
	     DBEngine.IniPath = _
	       "HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0\Jet\3.5"
	
	In Microsoft Access:
	
	  Value: HKEY_LOCAL_MACHINE\SOFTWARE\MyCorp\MyApp\1.0
	
	Table of Engine Keys
	--------------------
	
	The following table lists registry branches for the Jet 3.x engine and the
	various other engines:
	
	  Engine     Registry Branch
	  ----------------------------------------------------
	  Jet 3.x    ...\Engines\Jet
	  Jet 2.x    ...\Engines\Jet 2.x\ISAM
	  ODBC       ...\Engines\ODBC
	  Xbase      ...\Engines\Xbase
	  Paradox    ...\Engines\Paradox
	  Excel      ...\Engines\Excel
	  Lotus      ...\Engines\Lotus
	  Text       ...\Engines\Text
	
	Jet 3.5 Notes
	-------------
	
	With Jet 3.5, you can tune some values dynamically using the new SetOption method
	of the DBEngine object. This means you can use some values for one part of your
	program, that is, to favor a bulk update, while using other values in another
	part of your program, that is, to favor interactive data entry. Using
	DBEngine.SetOption affects only the current instance of your program. It can be
	used in Microsoft Access 97 and Visual Basic 5.0.
	
	The following table lists the settings you can change:
	
	  Setting                 Constant
	  ---------------------------------------------------
	  PageTimeout             dbPageTimeout
	  SharedAsyncDelay        dbSharedAsyncDelay
	  ExclusiveAsyncDelay     dbExclusiveAsyncDelay
	  LockRetry               dbLockRetry
	  UserCommitSync          dbUserCommitSync
	  ImplicitCommitSync      dbImplicitCommitSync
	  MaxBufferSize           dbMaxBufferSize
	  MaxLocksPerFile         dbMaxLocksPerFile
	  LockDelay               dbLockDelay
	  RecycleLVs              dbRecycleLVs
	  FlushTransactionTimeout dbFlushTransactionTimeout
	
	Usage:
	
	     DBEngine.SetOption dbMaxBufferSize, 128
	
	REFERENCES
	==========
	
	For a complete list of Jet engine registry settings and their descriptions,
	refer to
	
	  Appendix C of the Microsoft Jet Database Engine Programmer's Guide
	
	or the Help topic:
	
	  Customizing Windows Registry Settings for Data Access Objects
	
	For help with Microsoft Access Profiles, see the Help topic "Profiles, User."
	
	To programmatically read/write registry settings, please refer to the following
	Knowledge Base article:
	
	  Q145679 : How to Use the Registry API to Save and Retrieve Setting
	
	- For more information on DBEngine.SetOption, see the Help topic:
	
	  Customizing Windows Registry Settings for Data Access Objects
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbRegistry kbjet kbdao kbVBp400
	
	======================================================================
	Keywords          : kbAccess95 kbAccess97 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:4.0,5.0,6.0,7.0,97
	Issue type        : kbhowto
	
	=============================================================================
	
