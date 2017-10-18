---
layout: page
title: "Q150293: INFO: Visual Basic &amp; Visual SourceSafe Add-In Options"
permalink: kb/150/Q150293/
---

## Q150293: INFO: Visual Basic &amp; Visual SourceSafe Add-In Options

	Article: Q150293
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp500
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	There are several registry settings you can set in Visual Basic's Visual
	SourceSafe interface by using the Options menu item. There are also several of
	the Srcsafe.ini file settings that you can set from Visual Basic's Visual
	SourceSafe interface by using the tabbed dialog boxes in the advanced portion of
	the Visual SourceSafe Options.
	
	This article lists the options that are available in Visual Basic's Visual
	SourceSafe Options and the settings they modify in both the registry and the
	Srcsafe.ini file.
	
	Developers who also use SourceSafe integration with DevStudio should take care,
	since the .ini file settings will also affect the integration with DevStudio.
	
	MORE INFORMATION
	================
	
	In the registry, under the following registry path, there are a series of
	options that can be set from the Visual Basic or Visual SourceSafe Options
	window:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\SourceCodeControlProvider\Options
	
	To set the Registry options, on the Add-Ins, SourceSafe menu, click Options.
	
	Caption                                    Registry Setting
	-------------------------------------------------------------------------
	Get latest checked in versions of          GetOnOpenProject
	project files when opening a project?
	
	Check in files when closing the project?   CheckinAllFilesOnCloseProject
	
	Add files to source control when adding    AddFilesToSccWhenAddedToVB
	them to Visual Basic?
	
	Remove files from source control when      DeleteFilesFromSccOnRemoveFormVB
	deleting them from Visual Basic?
	
	Advanced Button
	---------------
	To set the Srcsafe.ini options, on the Add-Ins, SourceSafe menu, click
	Options and click the Advanced button.
	
	General Tab
	-----------
	Caption                                             Ini File Setting
	--------------------------------------------------------------------
	Always keep files checked out                       Keep_Checkedout
	Act on projects recursively                         Recursive
	Display all changes after a merge                   Mark_Merges
	Reuse last comment                                  Reuse_Comment
	Check in unchanged files                            Update_No_Change
	Computer name                                       ComputerName
	Editor for viewing a file                           Editor
	Directory for temporary files                       Temp_Path
	
	Local Files Tab
	---------------
	Caption                                             Ini File Setting
	-------------------------------------------------------------------------
	Remove local copy after add or check in             Delete_Local
	 (This checkbox is disabled with VSS version 5.0)
	Remove local copy after delete                      Smart_Mode
	Use read-only flag for files not checked out        Use_Readonly
	Copy keyword-expanded files into local directory    Expand_Keywords_Locally
	Append end-of-line to all files                     Append_EOL
	Compare files by                                    Compare
	Replace writable files                              Replace_Writable
	Set date/time on local files                        SetTime
	
	Integration Tab
	---------------
	Caption                                             INI Setting
	-----------------------------------------------------------------------
	Display dialog box for History                      Skip_Fhistory
	Display dialog box for Diff                         Skip_Fdiff
	Choose SourceSafe Database
	
	For additional information on the Srcsafe.ini file and the available settings,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q140316 INFO: All Variable Settings for Visual SourceSafe .INI File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 kbVBp500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
