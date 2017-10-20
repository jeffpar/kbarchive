---
layout: page
title: "Q239881: FIX: RResourceView Displays Resource IDs by their Values"
permalink: /kb/239/Q239881/
---

## Q239881: FIX: RResourceView Displays Resource IDs by their Values

{% raw %}

	Article: Q239881
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbEditor kbide kbVC500bug kbVC600bug kbDSupport kbGrpDSTools kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ ResourceView tab displays resource IDs by their values instead of
	by their ID names defined in the resource header file (Resource.h).
	
	CAUSE
	=====
	
	Externally referenced resource files, such as an icons or bitmaps, are 0 bytes
	in size.
	
	RESOLUTION
	==========
	
	Examine all files that are referenced by the resource script (.rc file). Look to
	see if any of these icon, bitmap, and custom resource files are 0 bytes in size.
	For every 0-bytes-sized file, follow these steps:
	
	1. Close the associated project and quit Visual C++.
	
	2. Delete the 0-bytes file.
	
	3. Create a new file of the same type or copy an existing file of the same type.
	
	4. Give the new file the same name as the deleted 0-bytes file.
	
	5. Verify that the new file is larger than 0 bytes in size.
	
	6. In the project directory, delete the .aps file.
	
	If these steps were performed immediately when the problem was first observed,
	the ID numbers may correctly return to ID names. However, if the resource script
	was modified and saved in the incorrect state, the change from ID names to ID
	numbers is permanent. The only solution involves manually ediing the resource
	script to change the numbers back to their ID names stored in resource header
	files including MFC's AfxRes.H. However, a macro has been developed that will
	greatly assist in this process. To use the macro, follow these steps:
	
	1. Open Visual C++ 6.0.
	
	2. On the Tools menu, click Macro.
	
	3. In the Macro Name edit box, type "RCFix" (without the quotation marks). Then
	  click the Edit button. This should bring up your macro file (.DSM).
	
	4. Delete the macro code for RCFix that Developer Studio created for you, and
	  replace it with the following code:
	
	  Sub RCFix()
	     Dim bContinue
	     Dim pszFilePath
	     Dim pszHeaderPath
	
	     pszHeaderPath = InputBox ("Enter the full path to the header file that contains the symbol names:", _
	              "Enter Resource Header Path", _
	              "C:\Program Files\Microsoft Visual Studio\VC98\MFC\Include\AFXRES.H")
	
	     If (pszHeaderPath <> "") Then
	        pszFilePath = ActiveDocument.FullName
	
	        bContinue = MsgBox ("WARNING!! Incorrect paths CRASH DevStudio!" + chr(10) + chr(10) + _
	                             "This will change all ID numbers in file:" + _
	                             chr (10) + chr(10) + "     " + pszFilePath + _
	                             chr(10) + chr(10) + _
	                             "Symbol names will be taken from header file:" + _
	                             chr(10) + chr(10) + "     " + pszHeaderPath + _
	                             chr(10) + chr(10) + _
	                             "All open files will be closed first. Do you want to continue?", _
	                             vbYesNo, "Warning")
	
	        If (bContinue = vbYes) Then
	           Dim bPromptAll, docRC, docAfxRes
	
	           bPromptAll = MsgBox ("Do you want to be prompted for every ID that gets replaced? " + _
	                                "If you select 'No' here, you will only be prompted when there " + _
	                                "is more than one possible matching ID Name for the ID number. " + _
	                                "Note that there is a potential that any numbers you have within the " + _
	                                "name of a menu item may get replaced accidentally.", vbYesNo, "Prompt for All?")
	
	           Documents.CloseAll dsSaveChangesPrompt
	           Set docRC = Documents.Open (pszFilePath, "Text")
	           Set docAfxRes = Documents.Open (pszHeaderPath, "Text")
	
	           docRC.Active = True
	
	           Dim col, line, oldcol, oldline
	           Dim pszWord, longVal
	
	           docRC.Selection.EndOfDocument
	           oldcol = docRC.Selection.CurrentColumn
	           oldline = docRC.Selection.CurrentLine
	
	           docRC.Selection.StartOfDocument
	
	           Do
	              docRC.Selection.WordRight dsExtend
	
	              pszWord = docRC.Selection
	              If (IsNumeric(pszWord)) Then
	                 Dim pszIDNames
	
	                 longVal = CLng(pszWord)
	                 If (longVal > 1) Then
	  			         pszIDNames = GetIDFromNumber(longVal, docAfxRes)
	
	  			         If (pszIDNames <> "") Then
	                       Dim bReplace, pszIDArray, count, index
	
	                       pszIDArray = Split(trim(pszIDNames), ",", -1, 1)
	                       count = UBound(pszIDArray)
	                       index = 0
	                       bReplace = vbNo
	
	                       Do While((index <= count) And (bReplace = vbNo))
	                          If ((count > 0) Or (bPromptAll = vbYes)) Then
	                             bReplace = MsgBox(CStr(count + 1) + " Matches Found: " + pszIDNames + _
	                                               chr(10) + chr(10) + _
	                                               "Replace " + trim(pszWord) + " with " + pszIDArray(index) + _
	                                               "?", vbYesNo, "Replace ID? " + CStr(index + 1) + _
	                                               " of " + CStr(count + 1))
	                          Else
	                             bReplace = vbYes
	                          End If
	
	                          If (bReplace = vbNo) Then
	                             index = index + 1
	                          End If                     
	                       Loop
	
	                       If (bReplace = vbYes) Then
	                          docRC.Selection = (pszIDArray(index) + " ")
	                       End If
	                    End If
	                 End If
	              End If
	
	              docRC.Selection.CharRight
	
	              'PrintToOutputWindow "Column = " + CStr(docRC.Selection.CurrentColumn)
	              'PrintToOutputWindow "Line = " + CStr(docRC.Selection.CurrentLine)
	              oldcol = col
	              oldline = line
	              col = docRC.Selection.CurrentColumn
	              line = docRC.Selection.CurrentLine
	              bContinue = (col <> oldcol) Or (line <> oldline)
	           Loop Until bContinue = False
	        End If
	     End If
	  End Sub
	
	  Function GetIDFromNumber(IDNum, doc)
	     Dim pszIDNames, pszLongVal, pszHexVal
	
	     pszLongVal = CStr(CLng(IDNum))
	     pszHexVal = "0x" + Hex(IDNum)
	     
	     pszIDNames = FindIDNames(pszLongVal, "", doc)
	     pszIDNames = pszIDNames + FindIDNames(pszHexVal, pszIDNames, doc)
	
	     If (pszIDName = "") Then
	        PrintToOutputWindow "Could Not Locate " + pszHexVal + _
	           " or " + pszLongVal + " in file:" + chr(10) + "    " + doc.FullName
	     End If
	
	     GetIDFromNumber = pszIDNames
	  End Function
	
	  Function FindIDNames(pszString, pszExcludeStrings, doc)
	     Dim pszIDNames, bContinue, col, line, pszFoundString
	
	     pszIDNames = ""
	     
	     doc.Selection.StartOfDocument
	     bContinue = doc.Selection.FindText(pszString, dsMatchWord)
	     col = doc.Selection.CurrentColumn
	     line = doc.Selection.CurrentLine
	
	     Do While bContinue = True
	        doc.Selection.WordLeft dsMove, 2
	        doc.Selection.WordRight dsExtend
	        pszFoundString = trim(doc.Selection)
	
	        If (Not InStr(pszIDNames, pszFoundString)) Then
	           If (Not InStr(pszExcludeStrings, pszFoundString)) Then
	              pszIDNames = pszIDNames + pszFoundString + ","
	           End If
	        End If
	     
	        doc.Selection.WordRight dsMove, 2
	        
	        bContinue = doc.Selection.FindText(pszString, dsMatchWord)
	
	        If ((col = doc.Selection.CurrentColumn) And (line = doc.Selection.CurrentLine)) Then
	           bContinue = False
	        End If
	     Loop
	
	     If (pszIDNames <> "") Then
	        pszIDNames = Left(pszIDNames, (Len(pszIDNames) - 1))
	     End If
	
	     FindIDNames = pszIDNames
	  End Function
	
	5. Save and close the DSM file.
	
	At this point the macro is installed. It takes a resource script and a resource
	header file. When it finds a number greater than one in the resource script, it
	checks to see if there is a resource ID number in the associated header file. If
	it only finds one, it replaces it. If it finds more than one, it provides an
	option so that you can make the correct selection. To use this macro follow
	these steps:
	
	Warning! Backup your RC file before continuing in case a problem happens during
	the conversion process!
	
	1. On the File menu, click Open.
	
	2. In the Open As list, select Text.
	
	3. Find the problem resource script (.RC) and open it as text.
	
	4. On the Tools menu, click Macro.
	
	5. Select RCFix from the list, and then click Run.
	
	The macro prompts you for the location of the header file. It automatically
	defaults to a default location for AFXRES.H where all of the MFC resource IDs
	are defined. The macro can only compare the resource script to one header at a
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project named ZeroTest using the MFC(EXE) AppWizard. Accept defaults
	  for each step.
	
	2. Select the ResourceView.
	
	3. Expand the ZeroTest Resources folder and then expand the other folders
	  beneath it. Resources are displayed by their resource ID names.
	
	4. Close the workspace.
	
	5. Delete the Toolbar.bmp file from the .\ZeroTest\Res folder.
	
	6. Create a 0-bytes file called Toolbar.bmp in the same directory.
	
	7. Delete the ZeroTest.aps file from the project directory.
	
	8. Reopen the workspace.
	
	9. Examine the ResourceView again. All resources display numbers rather than
	  IDs. Also, the String Table no longer contains any resource ID's.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbEditor kbide kbVC500bug kbVC600bug kbDSupport kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
