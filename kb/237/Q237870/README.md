---
layout: page
title: "Q237870: HOWTO: Increment Version Information After Each Build in VC++"
permalink: /kb/237/Q237870/
---

## Q237870: HOWTO: Increment Version Information After Each Build in VC++

{% raw %}

	Article: Q237870
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbAutomation kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrp
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ doesn't have a feature to automatically increment the version
	resource information of your project after each build. This article describes
	one way to provide such a feature.
	
	MORE INFORMATION
	================
	
	You can write a program to modify the resource compiler (.rc) file instead of
	using the steps described here. However, the RC file is under the control of
	Visual C++. Visual C++ modifies the RC file while saving, and this may affect
	the version resource. The approach described in this section can be applied to
	any Visual C++ project. This example uses a Microsoft Foundation Classes
	project.
	
	Create a new project using the MFC (EXE) Appwizard and call it "MyProject"
	(without the quotation marks). MyProject will have a MyProject.rc file, which
	includes MyProject.rc2. The .rc2 file is meant for user-defined resources.
	Follow these steps to increment MyProject's version information after each
	build:
	
	1. Remove the version resource from the .rc file and place it in the .rc2 file:
	
	  a. Open both MyProject.rc and MyProject.rc2 (found in the Res folder), in a
	     text editor. To use the Visual C++ editor, click Open on the File menu and
	     select Text in the Open As list for the MyProject.rc file.
	
	  b. Find the version resource statements in MyProject.rc. It should look
	     something like:
	
	  /////////////////////////////////////////////////////////////////////// 
	  // 
	  // Version
	  // 
	
	  VS_VERSION_INFO VERSIONINFO
	   FILEVERSION 1,0,0,1
	   PRODUCTVERSION 1,0,0,1
	   FILEFLAGSMASK 0x3fL
	  #ifdef _DEBUG
	   FILEFLAGS 0x1L
	  #else
	   FILEFLAGS 0x0L
	  #endif
	   FILEOS 0x4L
	   FILETYPE 0x1L
	   FILESUBTYPE 0x0L
	  BEGIN
	      BLOCK "StringFileInfo"
	      BEGIN
	          BLOCK "040904b0"
	          BEGIN
	              VALUE "Comments", "Sample Application\0"
	              VALUE "CompanyName", "Microsoft Corp.\0"
	              VALUE "FileDescription", "MyProject MFC Application\0"
	              VALUE "FileVersion", "1, 0, 0, 1\0"
	              VALUE "InternalName", "MyProject\0"
	              VALUE "LegalCopyright", "Copyright (C) 1999\0"
	              VALUE "OriginalFilename", "MyProject.EXE\0"
	              VALUE "ProductName", "MyProject Application\0"
	              VALUE "ProductVersion", "1, 0, 0, 1\0"
	          END
	      END
	      BLOCK "VarFileInfo"
	      BEGIN
	          VALUE "Translation", 0x409, 1200
	      END
	  END
	
	  c. Cut the version resource from the MyProject.rc file and paste it into the
	     MyProject.rc2 file below the comment "Add manually edited resources here."
	     For information about what each one of the fields in the resource means,
	     see the VERSIONINFO resource statement in Help.
	
	2. Replace the FILEVERSION and PRODUCTVERSION data with macros FILEVER and
	  PRODUCTVER. Similarly, replace the FileVersion and ProductVersion string data
	  with the macros STRFILEVER and STRPRODUCTVER.
	
	3. Add a #include "VersionNo.h" (without the quotation marks) immediately before
	  the VS_VERSION_INFO resource statement. Now the version resource will look
	  like:
	
	  /////////////////////////////////////////////////////////////////////// 
	  // 
	  // Version
	  // 
	  #include "VersionNo.h"
	  VS_VERSION_INFO VERSIONINFO
	   FILEVERSION FILEVER
	   PRODUCTVERSION PRODUCTVER
	   FILEFLAGSMASK 0x3fL
	  #ifdef _DEBUG
	   FILEFLAGS 0x1L
	  #else
	   FILEFLAGS 0x0L
	  #endif
	   FILEOS 0x4L
	   FILETYPE 0x1L
	   FILESUBTYPE 0x0L
	  BEGIN
	      BLOCK "StringFileInfo"
	      BEGIN
	          BLOCK "040904b0"
	          BEGIN
	              VALUE "Comments", "Sample Application\0"
	              VALUE "CompanyName", "Microsoft Corp.\0"
	              VALUE "FileDescription", "MyProject MFC Application\0"
	              VALUE "FileVersion", STRFILEVER
	              VALUE "InternalName", "MyProject\0"
	              VALUE "LegalCopyright", "Copyright (C) 1997\0"
	              VALUE "OriginalFilename", "MyProject.EXE\0"
	              VALUE "ProductName", "MyProject Application\0"
	              VALUE "ProductVersion", STRPRODUCTVER
	          END
	      END
	      BLOCK "VarFileInfo"
	      BEGIN
	          VALUE "Translation", 0x409, 1200
	      END
	  END
	
	4. Create a header file called VersionNo.h in the same directory as your
	  project. This file will contain the following statements, which are the
	  definitions for macros used in step 2:
	
	  #define FILEVER        1,0,0,1
	  #define PRODUCTVER     1,0,0,1
	  #define STRFILEVER     "1, 0, 0, 1\0"
	  #define STRPRODUCTVER  "1, 0, 0, 1\0"
	
	  NOTE: Add linefeed and carriage return characters on the last line.
	
	  Now, MyProject.rc file includes MyProject.rc2, and MyProject.rc2 file includes
	  VersionNo.h.
	
	5. The VersionNo.h file contents will be modified using a Visual Basic Script
	  macro. The macro described below handles the Visual C++ BuildFinish event, so
	  it will not be fired until a build completes. Whenever this VB Script code is
	  called, it first increments the version numbers inside the header file by a
	  fixed amount, then it saves the file and closes it. During a subsequent
	  build, the new version number is included in the executable.
	
	  To install and use the VB Script code, do the following:
	
	  a. Open an existing DSM (macro) file or create a new DSM file in Visual C++.
	     To create a new file, click New on the File menu, select Macro File on the
	     Files tab, give it a name, and click OK.
	
	  b. Paste the following VB Script code below (an empty DSM file cannot be
	     installed in Visual C++; the next step explains installing):
	
	  Function GetProjectDir(FullName)
	
	  'VC++ doesn't provide any method for getting the path of the active project
	  'See the VB Script reference for more information on the VB Script functions 
	  'used in this function
	
	  Dim proj_path
	  proj_path = Split(StrReverse(FullName),"\",-1,1)
	
	  Dim count
	  count = UBound(proj_path)
	
	  Dim full_path
	  full_path = ""
	  Dim i
	
	  for i = 1 to count 
	  	full_path = full_path & "\" & proj_path(i)
	  next
	
	  GetProjectDir = StrReverse(full_path)
	
	  End Function
	
	  Sub ReplaceText(selection, count, incrementby)
	
	  'selection represents the TextSelection object
	  'count represents the position of the version number to be incremented
	  'incrementby represents a number that will be added to the existing version number
	
	  selection.WordRight dsMove, count
	  selection.WordRight dsExtend, 1
	  Dim str
	  str = selection.Text
	  str = str + incrementby
	
	  selection.Text = str
	
	  End Sub
	
	  Sub Application_BuildFinish(numError, numWarning)
	
	  'This event will be triggered after every build of a project
	  'You can check numError and/or numWarning to determine if you want to continue
	  'If numError <> 0 Then
	      'exit sub
	  'Obtain the full path of the active project
	  Dim full_path
	  full_path = GetProjectDir(ActiveProject.FullName)
	
	  full_path = full_path & "versionno.h"
	
	  'Open the VersionNo.h file
	  Documents.Open full_path
	
	  'Obtain the TextSelection object
	  Dim selection
	  set selection = ActiveDocument.Selection
	  selection.StartOfDocument 
	
	  'Increment the version information
	  ReplaceText selection, 9, 1
	  selection.LineDown
	  selection.StartOfLine
	  ReplaceText selection, 9, 1
	  selection.LineDown
	  selection.StartOfLine
	  ReplaceText selection, 10, 1
	  selection.LineDown
	  selection.StartOfLine
	  ReplaceText selection, 10, 1
	
	  ActiveDocument.Save
	  ActiveDocument.Close
	   
	  End Sub
	
	     NOTE: This code is an unsupported sample. You may modify it for your build
	     scenario.
	
	  c. Install the DSM file if it is not already installed. To install, click
	     Customize on the Tools menu, click the Add-in and Macro Files tab, browse
	     to select the DSM file, and click Close.
	
	6. Select Build MyProject.exe from the Build menu. After the build finishes,
	  open the VersionNo.h file. It will contain the following statements:
	
	  #define FILEVER        1,0,0,2
	  #define PRODUCTVER     1,0,0,2
	  #define STRFILEVER     "1, 0, 0, 2\0"
	  #define STRPRODUCTVER  "1, 0, 0, 2\0"
	
	  If you build the code again, this version information in included in the
	  executable, and the version information is incremented. You can introduce
	  some code in the macro described earlier to prevent incrementing version
	  numbers if the build produced errors.
	
	REFERENCES
	==========
	
	For more information on the Visual C++ object model see the following topic in
	the MSDN library:
	
	  MSDN library; Visual C++ Documentation; Using Visual C++; Visual C++ User's
	  Guide; Automating Tasks in Visual C++; Developer Studio Objects
	
	For more information on VB Script macros, see the following topic in the MSDN
	library:
	
	  MSDN library; Visual C++ Documentation; Using Visual C++; Visual C++ User's
	  Guide; Automating Tasks in Visual C++; Macros
	
	For more information on VB Script language, see the following topic in the MSDN
	library:
	
	  MSDN Library: Platform SDK; Internet/Intranet/Extranet Services; Scripting;
	  VBScript Language Reference
	
	For more information on the Visual C++ VERSIONINFO resource statement, see the
	following topic in the MSDN library:
	
	  MSDN Library: Platform SDK; User Interface Services; Windows User Interface;
	  Resource Compiler; About Resource Files; Resource-Definition Statements;
	  VERSIONINFO resource
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbAutomation kbide kbScript kbVC500 kbVC600 kbVCObj kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
