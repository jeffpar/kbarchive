---
layout: page
title: "Q138147: HOWTO: Use the SourceSafe Explorer to Modify the Ss.ini File"
permalink: kb/138/Q138147/
---

## Q138147: HOWTO: Use the SourceSafe Explorer to Modify the Ss.ini File

	Article: Q138147
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can set and modify most of the settings in the Ss.ini file from the
	interface by using the tabbed dialog boxes in the SourceSafe Explorer. Some of
	settings were not available from the interface in SourceSafe versions 3.x. This
	article lists the options that are available in the SourceSafe Explorer and the
	settings they modify in the Ss.ini file.
	
	MORE INFORMATION
	================
	
	To set the Ss.ini file options, click Options on the Tools menu, and then click
	the appropriate tab:
	
	General Tab:
	
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Always keep files checked out                     Keep_Checkedout
	  Act on projects recursively                       Recursive
	  Display all changes after a merge                 Mark_Merges
	  Reuse last comment                                Reuse_Comment
	  Check in unchanged files                          Update_No_Change
	  Computer name                                     ComputerName
	  Editor for viewing a file                         Editor
	  Directory for temporary files                     Temp_Path
	
	Local Files Tab:
	
	  Caption                                           Ini File Setting
	  -----------------------------------------------------------------------
	  Remove local copy after add or check in           Delete_Local
	  Remove local copy after delete                    Smart_Mode
	  Use read-only flag for files not checked out      Use_Readonly
	  Copy keyword-expanded files into local directory
	  Expand_Keywords_Locally
	  Append end-of-line to all files
	  Compare files by                                  Compare
	  Replace writable files                            Replace_Writable
	  Set date/time on local files                      SetTime
	
	View Tab:
	
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Show results window                               Results_Window
	  Show Toolbar                                      Toolbar
	  Show status bar                                   Status_Bar
	  Always use MS-DOS format filenames                Long_Filenames
	  make selected project the current project         CP_OnSelection
	  Automatically refresh file list                   Refresh_Display
	  Every XX minutes                                  Refresh_Interval
	
	Command Dialogs Tab:
	
	  (File)
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Get                                               Skip_FGet
	  Check Out                                         Skip_FCheckout
	  Undo Check Out                                    Skip_FUncheckout
	  Difference                                        Skip_FDiff
	  History                                           Skip_FHistory
	
	  (Project)
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Get                                               Skip_PGet
	  Check Out                                         Skip_PCheckout
	  Undo Check Out                                    Skip_PUncheckout
	  Difference                                        Skip_PDiff
	  History                                           Skip_PHistory
	
	Warnings Tab:
	
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Undo checkout of a modified file                  Warn_Uncheckout
	  Delete a file or project                          Warn_Remove
	  Destroy a file or project                         Warn_Destroy
	  Purge a file or project                           Warn_Purge
	  Rollback a file                                   Warn_Rollback
	  Check out an already checked out file             Warn_Multiple_Checkout
	  Exit Visual SourceSafe                            Warn_Exit
	
	File Types Tab:
	
	  Caption                                           Ini File Setting
	  ------------------------------------------------------------------
	  Binary files:                                     Binary_Masks
	  Create SCC file:                                  Mssccprj
	  File groups:                                      File_Types
	  File types included in file groups                Relevant_Masks
	
	Command Line Options Tab:
	
	  Caption                                           Ini File Setting
	  -------------------------------------------------------------------
	  Assume working directory based on current project Force_Dir
	  Assume project based on working directory         Force_Prj
	  Check out comments                                Checkout_Comment
	  Comment prompt Editor                             Comment_Editor
	  Prompt string:                                    Comment_Editor_Prompt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
