---
layout: page
title: "Q192352: HOWTO: Invoke the &quot;Open With...&quot; Dialog Box Using _shellexecute"
permalink: /kb/192/Q192352/
---

## Q192352: HOWTO: Invoke the &quot;Open With...&quot; Dialog Box Using _shellexecute

	Article: Q192352
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbFFC kbGrpDSFox kbDSupport
	Last Modified: 14-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro Foundation Class _shellexecute can be used to run external programs,
	as well as open non-executable files if there is a program associated with that
	file. However, if there is no program associated with the file, _shellexecute
	returns SE_ERR_NOASSOC (31) and no action is taken upon the file. This article
	demonstrates how to create a procedure that uses the "Open With..." dialog box
	to give the user the option of selecting a program with which to open the file.
	
	MORE INFORMATION
	================
	
	The process must be either executed from a program function or a class will have
	to be created from scratch. The following code describes how to do this as a
	program function.
	
	1. Save the following code to a program file and save it as ShellDoc.prg:
	
	  
	
	        *-- Code begins here.
	        PROCEDURE ShellDoc()
	        LPARAMETERS lsFile
	
	        *-- Defines from Winuser.h
	        *-- These constants will be used with the
	        *-- ShellExecute function.
	        #define SW_HIDE             0
	        #define SW_SHOWNORMAL       1
	        #define SW_NORMAL           1
	        #define SW_SHOWMINIMIZED    2
	        #define SW_SHOWMAXIMIZED    3
	        #define SW_MAXIMIZE         3
	        #define SW_SHOWNOACTIVATE   4
	        #define SW_SHOW             5
	        #define SW_MINIMIZE         6
	        #define SW_SHOWMINNOACTIVE  7
	        #define SW_SHOWNA           8
	        #define SW_RESTORE          9
	        #define SW_SHOWDEFAULT      10
	        #define SW_FORCEMINIMIZE    11
	        #define SW_MAX              11
	
	        #define SE_ERR_NOASSOC 31
	
	        *-- GetDesktopWindow gives us a window handle to
	        *-- pass to ShellExecute.
	        DECLARE INTEGER GetDesktopWindow IN user32.dll
	        DECLARE INTEGER GetSystemDirectory IN kernel32.dll ;
	          STRING @lsBuffer, ;
	          INTEGER liSize
	
	        *-- ShellExecute is of the following format:
	        *--   HINSTANCE ShellExecute(
	        *--       HWND hwnd,
	        *--       LPCTSTR lpOperation,
	        *--       LPCTSTR lpFile,
	        *--       LPCTSTR lpParameters,
	        *--       LPCTSTR lpDirectory,
	        *--       INT nShowCmd
	        *--   );
	
	        DECLARE INTEGER ShellExecute IN shell32.dll ;
	          INTEGER, ;
	          STRING @lsOperation, ;
	          STRING @lsFile, ;
	          STRING @lsParameters, ;
	          STRING @lsDirectory, ;
	          INTEGER liShowCmd
	
	        lsOperation = "open"
	        liRet = ShellExecute(GetDesktopWindow(), @lsOperation, @lsFile, ;
	          "", "", SW_SHOWNORMAL)
	        IF liRet = SE_ERR_NOASSOC && No association exists
	           lsSysDir = SPACE(260)  && MAX_PATH, the maximum path length
	
	           *-- Get the system directory so that we know
	           *-- where Rundll32.exe resides.
	           liRet = GetSystemDirectory(@lsSysDir, LEN(lsSysDir))
	           lsSysDir = SUBSTR(lsSysDir, 1, liRet)
	           lsRun = "RUNDLL32.EXE"
	           lsParameters = "shell32.dll,OpenAs_RunDLL "
	           liRet = ShellExecute(GetDesktopWindow(), "open", lsRun,;
	             lsParameters + lsFile, lsSysDir, SW_SHOWNORMAL)
	        ENDIF
	        ENDPROC
	        *-- Code ends here.
	
	2. In the Command window, issue the following command:
	
	  
	
	        SET PROCEDURE TO ShellDoc
	
	3. Call the ShellDoc procedure with the following syntax:
	
	  
	
	        DO ShellDoc WITH <cFilename>
	
	  You may need to pass a path with the file name if the file is on a mapped
	  drive. If <cFilename> has no association, the "Open With..." dialog box
	  appears.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbFFC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
