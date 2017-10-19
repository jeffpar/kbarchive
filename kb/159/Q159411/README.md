---
layout: page
title: "Q159411: PRB: &quot;Invalid Line in Setup Information File&quot; Error Message"
permalink: /kb/159/Q159411/
---

## Q159411: PRB: &quot;Invalid Line in Setup Information File&quot; Error Message

	Article: Q159411
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbtool kbDSSTools kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	During the installation of a Visual Basic application that uses Jet, a message
	box entitled "APPNAME Setup" appears with the following error message:
	
	  Invalid line in setup information file!
	
	  Section: Files
	  1,,DAO3032.DL_,DAO3032.DLL,$(MSDAOPath),$(DLLSelfRegister),$(Shared),
	  1/12/1996,456464,3.0.0.2504
	
	NOTE: The file name, date, version number, and size shown in the error message
	may vary according to the build of Jet being distributed.
	
	CAUSE
	=====
	
	The 32-bit Jet components are registered as installed to a network server with a
	UNC path. The error message appears because this registration occurs before you
	install your Visual Basic application.
	
	WORKAROUND
	==========
	
	NOTE: Microsoft Developer Support does not support the modification of the setup
	process or any of the setup files. Support is provided for the Setup Wizard only
	on an "as is" basis.
	
	Several workarounds are possible. The following three are recommended:
	
	1. "Trick" setup into thinking DAO is not installed by removing the offending
	  registry reference to the UNC path. Use the Regedit utility to find the DAO
	  key for Visual Basic 5.0 and the DAO350 key for \ Visual Basic 6.0.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	  For Visual Basic 5.0:
	
	  The DAO key is located in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\DAO
	
	  There will be a value named "Path" in the following form:
	
	  "\\MyServer\DAO\DAO3032.DLL"
	
	  Rename "Path" to "OldPath," and re-run the application setup.
	
	  For Visual Basic 6.0:
	
	  The DAO350 key is located in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\DAO350
	
	  There will be a value named "Path" in the following form:
	
	  "\\MyServer\DAO\DAO350.DLL"
	
	  Rename "Path" to "OldPath," and re-run the application setup.
	
	2. If the Jet components are already installed on all the workstations, remove
	  them from the application setup routine.
	
	3. (NOTE: This is the most reliable method.) Modify the code in the Setup1.vbp
	  project as follows:
	
	  a. Make a backup copy of the \VB\setupkit\setup1\Setup1.exe file
	
	  b. Open the Setup1.vbp project located in \VB\setupkit\setup1\setup1.vbp
	
	  c. Go to the strGetDAOPath() subroutine in the basSetup1.bas module and
	     locate this section of code:
	
	           If RegOpenKey(HKEY_LOCAL_MACHINE, strKey, hkey) Then
	              RegQueryStringValue(hkey, strValueName, strPath)
	              RegCloseKey(hkey)
	           End If
	     
	
	     Insert this line of code immediately following the preceding section:
	
	           If Left(strPath, 2) = "\\" Then strPath = ""
	     
	
	     If the DAO Path or the DAO350 Path is a UNC Path, Setup1 does not consider
	     Jet to be installed.
	
	  d. Save the project.
	
	  e. Make the Setup1.exe program by choosing File Make Setup1.exe menu.
	
	  f. Run the Setup Wizard again to re-create the setup process for your
	     project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Setup1 project routines that check the validity of the installation paths
	will mark UNC paths as invalid. UNC paths for DAO frequently occur on systems
	where you install Office95 from a network server that uses UNC paths, and select
	the option to leave system components on the network.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbsetup kbtool kbDSSTools kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
