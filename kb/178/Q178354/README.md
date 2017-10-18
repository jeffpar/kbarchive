---
layout: page
title: "Q178354: INFO: How Setup Wizard and PDW Use Dependency Files"
permalink: kb/178/Q178354/
---

## Q178354: INFO: How Setup Wizard and PDW Use Dependency Files

	Article: Q178354
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A dependency (.DEP) file contains information about the run-time requirements of
	an application or component; it contains information regarding which files are
	needed, how the files are to be registered, and where they should be installed
	on the target computer. You can create dependency files for standard Visual
	Basic projects, ActiveX controls, ActiveX documents, and other ActiveX
	components.
	
	When a component is used in another project, the dependency information for the
	component is incorporated into the project's dependency information. This
	dependency information is used by the Setup Wizard (known as the Package and
	Deployment Wizard or PDW in Visual Basic 6.0). When you use the Setup Wizard or
	PDW to generate a setup for your project, the wizard refers to the project's
	dependency information to determine which files should be distributed with your
	project and how those files should be installed.
	
	All of the ActiveX controls that ship with Visual Basic have a companion
	dependency file. It is strongly recommended that you generate a dependency file
	for your component, especially if you intend that the component be used in other
	Visual Basic projects. The Setup Wizard and PDW give you the option to generate
	a dependency file for your project or component. The dependency file may also be
	generated using a text editor if you cannot use the Setup Wizard or PDW to
	create one. The remainder of this article describes the syntax for a dependency
	file.
	
	MORE INFORMATION
	================
	
	A dependency file is a standard Windows .INI file and can be read and written to
	using the standard Windows APIs (GetPrivateProfileString and
	WritePrivateProfileString).
	
	There are a few items to note for dependency files:
	
	- Dependency files may have multiple sections. The section order is not
	  significant.
	
	- Entries are not case-sensitive.
	
	- Comments are allowed when preceded by a semi-colon (;).
	
	- The dependency file name is important. The file name prefix must match the
	  file name of the component it describes. For example, a dependency file
	  MyOCX.DEP would correspond to a component, such as MyOCX.OCX or MyOCX.DLL.
	
	Each section in a .DEP file uses the following syntax:
	
	     [Component File Name]
	     Dest=<Destination>
	     UsesN=<Dependent File>
	     Register=<Method of Registration>
	     Version=<Component version>
	     Date=<Component Date>
	     Time=<Component Time>
	     ProgramIconTitle=<Title for Shortcut>
	     ProgramIconCmdLine=<Command Line for Shortcut>
	
	Dest=
	-----
	
	The Dest= key indicates the destination folder for the component. This value may
	be a relative path, a full path, or a path based on any of the following macros
	(for example, it may be simply a macro, or it may be a macro followed by a
	backslash and a relative path):
	
	$(AppPath)            Indicates the path the user selects
	                      during setup.
	
	$(WinSysPath)         Indicates the \Windows\System or
	                      \Winnt\System32 folder.
	
	$(WinPath)            Indicates the \Windows or \Winnt folder.
	
	$(ProgramFiles)       Indicates the folder specified at
	                      HKEY_LOCAL_MACHINE\Software\ 
	                      Microsoft\Windows\CurrentVersion\ 
	                      ProgramFilesDir.
	
	$(CommonFiles)        Indicates the folder specified at
	                      HKEY_LOCAL_MACHINE\Software\ 
	                      Microsoft\Windows\CurrentVersion\ 
	                      CommonFilesDir.
	
	$(CommonFilesSys)     Indicates $(CommonFiles)\System in
	                      Windows 95, Windows 98, NT 4.0, and Windows 2000,
	                      or the same as $(WinSysPath) in NT 3.51.
	
	$(MSDAOPath)          The location stored in the registry
	                      for DAO components.
	
	The Dest= key applies only to the component to which the section applies. By
	default, all files dependent on the component will also be placed in the same
	location. To override the location for a "child," you can create a section for
	the "child" and specify a different destination in that section.
	
	UsesN=
	------
	
	The UsesN= key (where N is an integer) indicates a dependent file for the
	component. A file specified by a UsesN= key is required for the component
	defined by that section. In a section, N must be sequential and must start with
	1. For an illustration, refer to the following sample section:
	
	     [MyOCX.OCX]
	     Dest=$(WinSysPath)
	     Uses1=MyDLL.DLL
	     Uses2=MyOCX.TXT
	
	In this example, MyOCX.OCX depends upon (or requires) MyDLL.DLL and MyOCX.TXT.
	
	NOTE: If the UsesN keys are not ordered sequentially, or if a number is skipped,
	dependent files may not be recognized in the section and may not be acknowledged
	by the Setup Wizard or PDW.
	
	Register=
	---------
	
	The Register= key indicates whether the file should be registered and, if so, how
	it should be registered. The valid values for this key are:
	
	  None                  If a value is omitted for this key,
	                        the file is not registered.
	
	  $(DllSelfRegister)    The file supports self-registration
	                        and self-unregistration via a DLL
	                        entry point.
	
	  $(ExeSelfRegister)    The file is a local server that
	                        supports self-registration through
	                        the command-line parameter
	                        "/RegServer" and self-unregistration
	                        through the command-line parameter
	                        "/UnRegServer."
	
	  $(TLBRegister)        The file is a .TLB file and should be
	                        registered.
	
	  Filename              The file is registered by calling
	                        Regedit.exe with this filename as a
	                        Command-line parameter.
	
	  $(Remote)             Used only by Visual Basic to indicate
	                        that the file is a .VBR file.
	
	If the Register= key is omitted altogether, the file is not registered.
	
	Version=
	--------
	
	(Optional)
	
	The Version= key indicates the version of the component that is needed. The Setup
	Wizard and PDW can detect that a .dep file is out-of-date using the Version=
	key. The version is specified in the format a.b.c.d, as in the following
	example:
	
	     Version=4.50.10.11
	
	Date=
	-----
	
	(Optional)
	
	The Date= key is the date stamp of the component that is needed. The Setup Wizard
	and PDW can detect that a .DEP file is out-of-date using this key. This value
	must always be in the format d/m/yyyy or dd/mm/yyyy, even when using a localized
	Setup Wizard or PDW. For example:
	
	     Date=10/5/1996
	
	-or-
	
	     Date=04/03/1997
	
	NOTE: This key is ignored if a value is specified for the Version= key.
	
	Time=
	-----
	
	(Optional)
	
	The Time= key is the time stamp of the component that is needed. The Setup Wizard
	and PDW can detect that a .DEP file is out-of-date using this key. This value
	must always be in the 24-hour format hh:mm:ss, even when using a localized Setup
	Wizard or PDW. For example:
	
	     Time=14:05:32
	
	NOTE: This key is ignored if a value is specified for the Version= key.
	
	ProgramIconTitle= and ProgramIconCmdLine=
	-----------------------------------------
	
	(Optional)
	
	The ProgramIconTitle= key indicates that a shortcut (or Program Manager icon for
	Windows NT 3.51) should be created if the file is installed. The value for the
	ProgramIconTitle= key is the title given to the shortcut (or icon). The value
	may be quoted or unquoted. For example:
	
	     ProgramIconTitle=My Program Title
	
	If you indicate that a shortcut should be created, you can give the command line
	for the shortcut by specifying a value for the ProgramIconCmdLine= key. The path
	that you use for the command-line value may contain the macros listed for the
	Dest= key. For example:
	
	     ProgramIconCmdLine=$(AppPath)\Readme.txt
	
	Localized Components
	--------------------
	
	Some components may have different dependencies based on the language. To install
	a component based on the language setting for the client's computer, you may
	specify a section with the component name followed by the language ID.
	
	For example, VBRUN500.DLL has a satellite DLL for all languages (with the
	exception of English):
	
	     [VBRUN500.DLL]
	     Dest=$(WinSysPath)
	
	     [VBRUN500.DLL <000C>]     ;000C = primary language ID for French
	     Uses1=VB5FR.DLL
	
	     [VBRUN500.DLL <0007>]     ;0007 = primary language ID for German
	     Uses1=VB5DE.DLL
	
	In this example, if VBRUN500.DLL is installed and the client's language settings
	are French, VB5FR.DLL will also be installed. Likewise, if VBRUN500.DLL is
	installed and the client's language settings are German, VB5DE.DLL will be
	installed.
	
	Sample Dependency File
	----------------------
	
	The following is a sample .DEP file for a component named MyOCX.OCX. This
	dependency file would be named MyOCX.DEP:
	
	     [MyOCX.OCX]
	     Register=$(DLLSelfRegister)
	     Dest=$(WinSysPath)
	     Date=1/23/1996
	     Time=10:15:33
	     Version=1.1.13.6
	     Uses1=MyDLL.DLL
	     Uses2=MyServer.EXE
	     Uses3=VBRUN500.DLL
	
	     [MyServer.EXE]
	     Dest=$(WinPath)
	     Date=1/23/1996
	     Time=18:52:48
	     Version=1.0.1.0
	     Uses1=VBRUN500.DLL
	     Register=$(ExeSelfRegister)
	     ProgramIconTitle=My Program
	     ProgramIconCmdLine=$(WinSysPath)\MyOCX.OCX
	
	     [MyDLL.DLL]
	     Register=$(DLLSelfRegister)
	     Version=1.0.1.0
	
	     [VBRUN500.DLL]
	     Dest=$(WinSysPath)
	
	     ;Additional Files for International Support
	     [VBRUN500.DLL <0007>]
	     Uses1=VB5DE.DLL
	
	     [VBRUN500.DLL <000C>]
	     Uses1=VB5FR.DLL
	
	MyOCX.OCX is a self-registering file that is installed in the Windows\System
	folder (or Winnt\System32 folder on NT or Windows 2000). MyOCX.OCX depends upon
	(requires) three files: MyDLL.DLL, MyServer.EXE, and VBRUN500.DLL.
	
	MyServer.EXE is a self-registering file that is installed in the Windows folder
	(or Winnt folder on NT or Windows 2000). MyServer.EXE has only one dependent
	file, VBRUN500.DLL. If MyServer.EXE is installed during setup, a shortcut is
	created with the title "My Program" and the command line
	Windows\System\MyOCX.OCX (or Winnt\System32\MyOCX.OCX on NT or Windows 2000).
	
	MyDLL.DLL is also a self-registering file. A destination for MyDLL.DLL is not
	specified; thus, it will be placed in the destination path for its parent,
	MyOCX.OCX.
	
	VBRUN500.DLL will not be registered because a Register= key is not specified in
	its section. VBRUN500.DLL will be placed in the Windows\System (or
	Winnt\System32) folder. If VBRUN500.DLL is installed during setup, VB5DE.DLL
	will be installed if the language setting is German and VB5FR.DLL will be
	installed if the language setting is French. If the language setting is set to
	something other than French or German, no additional files will be installed.
	
	How Setup Wizard and PDW Search for Dependency Information
	----------------------------------------------------------
	
	When the Setup Wizard and PDW need to find dependency information for a file (for
	example, MyOCX.OCX), they follow a specific path. The wizards use the following
	methods to locate a section entitled [MyOCX.OCX]; when the section is found, the
	search ends.
	
	1. If the file has been located in a .DEP file, it will use the information in
	  the .DEP file in which it was first found.
	
	2. The Setup Wizard will look in the default master dependency file for Visual
	  Basic 5.0 (VB5DEP.INI). The PDW will look in the default master dependency
	  file for Visual Basic 6.0 (VB6DEP.INI). Information that is placed in the
	  default master dependency file overrides that which might be found elsewhere.
	
	3. The Setup Wizard and PDW will look for a dependency file named MyOCX.DEP. If
	  the dependency file is found, the wizard will search for the section entitled
	  [MyOCX.OCX].
	
	4. It will search for a .DEP file associated with the parent of MyOCX.OCX and
	  possibly continue up the parent chain until a section entitled [MyOCX.OCX] is
	  located.
	
	REFERENCES
	==========
	
	For additional information about how the Setup Wizard and PDW combine dependency
	files with the Visual Basic project and the VB5DEP.INI or VB6DEP.INI file to
	create a setup program, a Setup.LST, and a project .DEP file, refer to the
	Distributing Your Application" section of the Visual Basic "Programmer's Guide."
	
	Additional query words: directory
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
