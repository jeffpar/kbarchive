---
layout: page
title: "Q222676: HOWTO: Tell if a VFP COM DLL is Single- or Multi-threaded"
permalink: kb/222/Q222676/
---

## Q222676: HOWTO: Tell if a VFP COM DLL is Single- or Multi-threaded

	Article: Q222676
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600 kbVS600sp2 kbVS600sp3
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with the Visual Studio 6.0 Service Pack 3 version of Visual FoxPro 6.0,
	you now have the ability to create multi-threaded DLL COM components. There is
	no obvious way to tell from the DLL file itself or its Property Sheet whether a
	DLL is single-threaded or multi-threaded. This article demonstrates a technique
	for determining whether a particular DLL is single- or multi-threaded.
	
	MORE INFORMATION
	================
	
	This approach uses the FILETOSTR() function to transfer the contents of the DLL
	to be tested into a string variable, then searches for the text "foxwt" or
	"foxwd" within the string. The "foxwt" text will be contained in a
	multi-threaded DLL and the "foxwd" text will be contained in a single- threaded
	DLL.
	
	The program below is an implementation of this approach. You can pass it a DLL
	name if you want, or it will prompt you for a file to test.
	
	It correctly calls a Visual FoxPro 5.0 or Visual FoxPro 6.0 pre-SP3 DLL
	"single-threaded."
	
	The program calls DLLs not built in Visual FoxPro "Non-FoxPro" DLLs.
	
	STEPS TO USE THE PROGRAM
	------------------------
	
	1. Save the following code in a file called TestADLL.PRG:
	
	  ****************************
	  * Program TestADLL.PRG
	  *
	  * Parameters:
	  *               tcFileName - Name of DLL file w/ or w/o extension
	  *
	  * Usage:        DO TestADLL with <dllname>
	  *
	  *                    OR
	  *
	  *               DO TestADll
	  * 			Prompts for file name
	  *
	  ****************************
	  #DEFINE 	MSGBOXTITLE 	'VFP COM DLL Tester'
	
	  LPARA tcFileName, p2, p3, p4, p5, p6
	  LOCAL lcType, lcFileContents
	
	  * Parameter checking/cleanup
	
	  DO CASE
	     CASE PARA() > 1
	        MESSAGEBOX([Too many parameters specified. Usage is:] + ;
	           CHR(13)+CHR(13) + ;
	           [DO TestDLL with 'filename'], 16, MSGBOXTITLE)
	        RETURN
	     CASE PARA() = 0
	        tcFileName = GETFILE('dll','Open a DLL' , ;
	           'Open', 0, 'Select a DLL to check')
	        IF EMPTY(tcFileName)
	           RETURN
	        ENDIF
	     CASE VARTYPE(tcFileName) # 'C'
	        MESSAGEBOX([Incorrect parameter data type. Usage is:] + ;
	           CHR(13)+CHR(13) + ;
	           [DO TestDLL with 'filename'], 16, MSGBOXTITLE)
	        RETURN
	
	  ENDCASE
	
	  * Drop trailing dot, if present
	  IF ATC('.', tcFileName) = LEN(tcFileName)
	     tcFileName = STRTRAN(tcFileName, '.', '')
	  ENDIF
	
	  * Append DLL extension if not there
	  IF ATC('.', tcFileName) = 0
	     tcFileName = tcFileName + '.dll'
	  ENDIF
	
	  tcFileName = PROPER(tcFileName)
	
	  * See if file exists
	  IF !FILE(tcFileName)
	     MESSAGEBOX([File '] + tcFileName + ;
	        [' does not exist.], 48, MSGBOXTITLE)
	     RETURN
	  ENDIF
	
	  * Verify it is a DLL
	  IF ATC('.dll', tcFileName) = 0
	     MESSAGEBOX([File '] + tcFileName + ;
	        [' is not a dll.], 48, MSGBOXTITLE)
	     RETURN
	  ENDIF
	
	  lcFileContents = FILETOSTR(tcFileName)
	
	  DO CASE
	     CASE  ATC('foxwt',lcFileContents) <> 0
	        lcType = 'Multi-threaded'
	     CASE ATC('foxwd',lcFileContents) <> 0
	        lcType = 'Single-threaded'
	     OTHERWISE
	        lcType = 'Non-FoxPro'
	  ENDCASE
	
	  MESSAGEBOX('File '+ tcFileName + ' is a '+ ;
	     lcType + ' dll.', 64, MSGBOXTITLE)
	
	2. To test a specific file, run the following code from the Command window:
	
	  DO TestADLL.PRG with <path and filename>
	
	3. To have the program prompt you for a file, run the following code from the
	  Command window:
	
	  DO TestADLL.PRG 
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbCOMt kbvfp600 kbVS600sp2 kbVS600sp3 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
