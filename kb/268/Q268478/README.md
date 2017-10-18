---
layout: page
title: "Q268478: PRB: _CLIPTEXT Loses Line Feeds (ASCII 10)"
permalink: kb/268/Q268478/
---

## Q268478: PRB: _CLIPTEXT Loses Line Feeds (ASCII 10)

	Article: Q268478
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing information that is pasted to the Windows Clipboard through the
	_CLIPTEXT system variable, line feed (ASCII 10) characters are removed. Also,
	when assigning a value to the _CLIPTEXT system variable, line feed characters
	converted to carriage return (ASCII 13) characters.
	
	CAUSE
	=====
	
	Visual FoxPro is expecting carriage returns (ASCII 13) to be used for end-of-row
	or end-of-line terminators and, therefore, replaces lines feeds (ASCII 10) with
	carriage returns (ASCII 13) when assigning a value to the _CLIPTEXT system
	variable.
	
	NOTE: No other ASCII characters are affected in this manner.
	
	RESOLUTION
	==========
	
	When access to the original text pasted in the Clipboard is required and the
	loss of line feeds causes problems, you may retrieve the same information
	through the FoxTools Library GETCLIPDAT() function, as follows:
	
	  Local lcClipText
	  Set Library To (Home()+"FoxTools.Fll")
	  If OpenClip(0)
	      lcClipText = GetClipDat(1)
	      CloseClip()
	  Else
	      lcClipText = Space(0)
	  Endif
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file called "MAKE_IT.prg" (without the quotation marks),
	  paste the following code into the program, and then run the program:
	
	  lnHandle = FCreate("Test.txt",0)
	  =FWrite(lnHandle,"Line 1" + CHR(9) + "2" + CHR(9) + "3" + CHR(9) + "4" + CHR(10))
	  =FWrite(lnHandle,"Line 2" + CHR(9) + "6" + CHR(9) + "7" + CHR(9) + "8" + CHR(10))
	  =FWrite(lnHandle,"Line 3" + CHR(9) + "10" + CHR(9) + "11" + CHR(9) + "12" + CHR(10))
	  =FFlush(lnHandle)
	  =FClose(lnHandle)
	
	2. Create a program file called "TEST_IT.prg" (without the quotation marks),
	  paste the following code into the program, and then save the program.
	
	  NOTE: Do not run this program until the next step has been completed.
	
	  Set Library To (Home()+"FoxTools.Fll")
	  If OpenClip(0)
	      y = GetClipDat(1)
	      ? "From GetClipDat: ", y
	      ? "From _ClipText: ", _ClipText
	      ? "GetClipDat = _ClipText: ", (y=_ClipText)
	      CloseClip()
	  Endif
	  Set Library To
	
	3. Open file named TEST.txt (created by the program in step 1) in Notepad,
	  select all of the text, and then copy it to the Clipboard.
	
	4. In the Command window, enter the following command:
	
	  DO TEST_IT.prg
	
	5. Observe the output from the second program:
	
	   - Data From GetClipDat - observe that a new line is started after the 4 and
	     the 8.
	
	   - Data From _ClipText - observe that '4Line 2' and '8Line 3' run together.
	
	   - GetClipDat = _ClipText returns .F. (false), indicating that the values
	     from GetClipDat() and _ClipText are not the same.
	
	REFERENCES
	==========
	
	For additional information about the FoxTools Library, please refer to the Help
	file located where you have Visual FoxPro installed, in the Tools folder. The
	Help file name is FOXTOOLS.CHM.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
