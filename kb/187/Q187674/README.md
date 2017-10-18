---
layout: page
title: "Q187674: HOWTO: Find Undocumented Constants Used by Windows API Functions"
permalink: kb/187/Q187674/
---

## Q187674: HOWTO: Find Undocumented Constants Used by Windows API Functions

	Article: Q187674
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to get the value of a constant required by a
	Windows API function call if the constant is undocumented in the API Text
	Viewer. It shows how to declare this constant and value for use in Visual Basic.
	You can use this information to determine the value of a constant or verify that
	the values of the constants documented in the API Text Viewer are correct.
	
	MORE INFORMATION
	================
	
	The API Text files that ship with Visual Basic document most of the API
	constants required by Visual Basic programmers. However, some API constants are
	not documented in these text files. To look up the constants used by API
	functions, you will need the header files shipped in Visual Studio 97, Visual
	C++, or the Platform SDK.
	
	The Platform SDK can be downloaded from the following site:
	
	  http://www.microsoft.com/msdn/sdk/bldenv.htm
	
	When you run the self-extracting file, the header files are expanded into the
	\include directory.
	
	These header files are the same ones used to create the DLL files containing the
	Windows API functions. This article assumes you are familiar with using Visual
	Basic to access the functions in the Windows API.
	
	To find this value, use the Advanced tab of the Find Files menu item in the Start
	menu of the Windows operating system. If you are using the Active Desktop that
	is included with Internet Explorer 4.0, specify the Name & Location tab.
	After finding the appropriate header file, open this header file in a text
	editor with search capabilities, such as the WordPad program that ships with
	Windows.
	
	Once you find the value of this constant, you declare it and its value in the
	appropriate place in your Visual Basic code. Our example will declare the
	constant in the General Declarations section of Form1.
	
	For example, the function SHGetSpecialFoldersLocation returns the PIDL value of a
	specified special folder. To return the PIDL, the function requires the name of
	the special folder as one of the parameters. In our example, you want the PIDL
	value for the Drives special folders, which is defined in the SHLOBJ.H header
	file as CSIDL_DRIVES.
	
	To Find the Value of a Constant
	-------------------------------
	
	1. From the Start menu, click Find and then Files & Folders. The Find: All
	  Files dialog box appears.
	
	2. In the Look in: text box, enter the path of the \include directory that
	  contains all the header files.
	
	3. Click the Advanced Tab. In the Containing Text field, type the name of the
	  constant whose value you want. For Active Desktop users, the Containing Text
	  field is in the first tab. In our example, type CSIDL_DRIVES.
	
	4. Click Find Now. The file containing this constant is listed in that tab. In
	  our example, CSIDL_DRIVES is in the SHLOBJ.H header file.
	
	5. Open the specified file in a text editor, such as WordPad. Using the search
	  capabilities of your text editor, search for the constant name. Our example
	  uses Word Pad as the text editor:
	
	  a. From the Edit menu, click Find. The Find dialog box displays.
	
	  b. In the Find what: text box, type CSIDL_DRIVES.
	
	  c. Click Find Next.
	
	  The Find results shows the value of the constant CSIDL_DRIVES equal to
	  0x0011.
	
	  0x0011 is a hexadecimal number expressed in the syntax of C and C++. To use
	  this number in Visual Basic, replace the leading '0x' with '&H'.
	
	  If a hexadecimal number is in the range of 0x8000 through 0xFFFF, add an
	  ampersand (&) to the end of the hexadecimal constant. Adding an ampersand
	  ensures that Visual Basic will not convert the constant value to a negative
	  number. For example, if your constant is equal to 0x8000, convert this value
	  for use in Visual Basic by declaring the constant equal to &H8000&:
	
	         Const MY_CONSTANT = &H8000&
	
	  If you do not add an ampersand to the end of the value, Visual Basic will
	  evaluate the number as &HFFFF8000, or decimal -32768, rather than decimal
	  32768, as you might expect.
	
	The following section illustrates how you can use this constant with your Visual
	Basic project.
	
	To Declare a Constant
	---------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. In the General Declarations section of Form1, type the following:
	
	        Const CSIDL_DRIVES = &H0011
	
	  Note that Visual Basic has automatically converted this value to the
	  following:
	
	        Const CSIDL_DRIVES = &H11
	
	  The value of the constant CSIDL_DRIVES is now correctly declared in Visual
	  Basic.
	
	Additional query words: kbDSupport kbDSD Grep kbVBp kbVBp500 kbAPI kbSDKWin32 kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
