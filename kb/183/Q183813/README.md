---
layout: page
title: "Q183813: FIX: Developer Studio Macro Constants Not Defined"
permalink: /kb/183/Q183813/
---

## Q183813: FIX: Developer Studio Macro Constants Not Defined

{% raw %}

	Article: Q183813
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.0,4.01; winnt:5.0
	Operating System(s): 
	Keyword(s): kbIE400bug kbie401bug kbOSWinNT400 kbVC500bug kbVC600fix kbOSWin95
	Last Modified: 21-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Developer Studio macros use constants to modify the behavior of certain methods.
	On some machines that have regional settings set to anything other than "English
	(United States)," these constants are zero or blank.
	
	CAUSE
	=====
	
	Typically, this problem surfaces after installing Internet Explorer version 4.0.
	The installation updates an important file: Vbscript.dll.
	
	All the Developer Studio type libraries (labeled Visual Studio 97 in the
	registry) were created with the locale identifier for U.S. English, which is
	0x409. The registry refers to them under a "409" subkey. Developer Studio macros
	use Vbscript.dll to access and use the information stored in the type libraries.
	Past versions of Vbscript.dll accessed the information under 0x409 for all
	regional settings. The newer version of Vbscript.dll loads only type libraries
	registered under either of the following:
	
	- The current system locale identifier.
	
	- A language neutral locale identifier.
	
	This new behavior of Vbscript.dll prevents Developer Studio from gaining access
	to the appropriate constants.
	
	RESOLUTION
	==========
	
	Although Developer Studio can't access the constants in a VBScript macro, it can
	execute the methods. It is possible to define the constants manually and use
	these definitions in place of the predefined constants. Use the following table
	to manually define the constants:
	
	  Constant              Value
	  ---------------------------
	  dsMove                  0
	  dsExtend                1
	  dsFirstColumn           0
	  dsFirstText             1
	  dsLowercase             1
	  dsUppercase             2
	  dsCapitalize            3
	  dsHorizontal            0
	  dsVertical              1
	  dsLastLine              -1
	  dsDevStudio             0
	  dsVC2                   1
	  dsBrief                 2
	  dsEpsilon               3
	  dsCustom                4
	  dsMatchWord             2
	  dsMatchCase             4
	  dsMatchNoRegExp         0
	  dsMatchRegExp           8
	  dsMatchRegExpB          16
	  dsMatchRegExpE          32
	  dsMatchRegExpCur        64
	  dsMatchForward          0
	  dsMatchBackward         128
	  dsMatchFromStart        256
	  dsWindowStateMaximized  1
	  dsWindowStateMinimized  2
	  dsWindowStateNormal     3
	  dsMinimize              1
	  dsTileHorizontal        2
	  dsTileVertical          3
	  dsCascade               4
	  dsGlyph                 1
	  dsText                  2
	  dsSaveChangesYes        1
	  dsSaveChangesNo         2
	  dsSaveChangesPrompt     3
	  dsSaveSucceeded         1
	  dsSaveCanceled          2
	  dsTextDocument          "Text"
	  dsVBSMacro              "VBS Macro"
	  dsJava                  "Java"
	  dsCPP                   "C/C++"
	  dsIDL                   "ODL/IDL"
	  dsHTML_IE3              "HTML - IE 3.0"
	  dsHTML_RFC1866          "HTML 2.0 (RFC 1866)"
	  dsFortran_Fixed         "Fortran Fixed"
	  dsFortran_Free          "Fortran Free"
	
	For example, consider the following macro:
	
	     Sub HighLightLeft()
	     'Highlights the character to the left of the cursor.
	        ActiveDocument.Selection.CharLeft dsExtend
	     End Sub
	
	On a system that has a regional setting other than "English (United States)" and
	Internet Explorer 4.0 installed, this macro may not work properly; it just moves
	the cursor left one character without selecting it.
	
	Using the table above, note that the constant "dsExtend" has an assigned value of
	1 (one). Instead of using "dsExtend", you can manually define your own constant.
	The following code corrects the problem:
	
	     Sub HighLightLeft()
	     'Highlights the character to the left of the cursor.
	        Dim myDsExtend
	        myDsExtend = 1
	        ActiveDocument.Selection.CharLeft myDsExtend
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Visual C++ 6.0.
	
	
	MORE INFORMATION
	================
	
	To modify the current regional settings:
	
	1. From the Start menu, point to Settings.
	
	2. Click Control Panel.
	
	3. Select Regional Settings, then click the Regional Settings tab.
	
	
	======================================================================
	Keywords          : kbIE400bug kbie401bug kbOSWinNT400 kbVC500bug kbVC600fix kbOSWin95 
	Technology        : kbVCsearch kbIEsearch kbAudDeveloper kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE400Win95 kbIE401Win95 kbIE400WinNT400 kbIE401WinNT400 kbVC32bitSearch kbVCPE500 kbVCEE500
	Version           : WINDOWS:4.0,4.01; winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
