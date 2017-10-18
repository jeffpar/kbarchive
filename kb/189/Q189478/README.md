---
layout: page
title: "Q189478: INFO: What Do eVB/VBCE Have That Visual Basic Doesn't Have?"
permalink: kb/189/Q189478/
---

## Q189478: INFO: What Do eVB/VBCE Have That Visual Basic Doesn't Have?

	Article: Q189478
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbCtrl kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 19-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes differences in functionality that are a part of eMbedded
	Visual Basic and the Windows CE Toolkit for Visual Basic (VBCE) and do not
	appear in regular Visual Basic.
	
	MORE INFORMATION
	================
	
	Control Differences
	-------------------
	
	The controls used in eVB and VBCE are not the same as those used in regular
	Visual Basic and are not interchangeable. They are specifically designed for the
	Windows CE operating system.
	
	- The ScrollBar control is a combination of the horizontal and vertical
	  scrollbars in regular Visual Basic. Properties are used to specify horizontal
	  or vertical orientation.
	
	- The File System Control contains two classes: File and FileSystem. The File
	  object allows for file creation, input, and output. The FileSystem object
	  allows for file and directory management.
	
	- The Financial Control (Finance.DLL) replaces the financial functions that are
	  intrinsic to regular Visual Basic. All of the financial functions available
	  in regular Visual Basic are provided as methods of the Financial object.
	
	Function Differences
	--------------------
	
	- Formatting functions. Instead of the generic Format() function, eVB and VBCE
	  provide dedicated formatting functions for specific data: FormatCurrency(),
	  FormatDateTime(), FormatNumber(), and FormatPercent().
	
	- String functions. Several very useful new string manipulation functions are
	  included for use in Windows CE:
	
	   - Filter() - returns a zero-based array containing a subset of a string
	     array based on a specified filter criteria.
	
	   - InStrRev() - provides similar information about strings as InStr, but it
	     provides the position from the right. The standard InStr() is also
	     available.
	
	   - Join() - returns a string created by joining a number of substrings
	     contained in an array.
	
	   - Split() - returns a zero-based, one-dimensional array containing a
	     specified number of substrings.
	
	   - StrReverse() - returns a string in which the character order of a
	     specified string is reversed.
	
	- Round() returns a number rounded to a specified number of decimal places.
	
	- WeekDayName() returns a string indicating the specified day of the week.
	
	Miscellaneous
	-------------
	
	- The App object has an End method. It has the same functionality as (and is
	  used within eVB and VBCE in lieu of) the End statement in regular Visual
	  Basic.
	
	- The PointSet method replaces PSet to set the color of a specified point on a
	  Form. PointSet does not support the Step optional parameter of PSet.
	
	- The SetScale method replaces Scale to define the coordinate system for a
	  Form.
	
	- Because eVB and VBCE rely heavily on the VBScript Engine, there are several
	  functions that provide useful information about the engine:
	
	   - ScriptEngine() - function returns a string representing the scripting
	     language in use.
	
	   - ScriptEngineBuildVersion() - function returns the build version number of
	     the script engine in use.
	
	   - ScriptEngineMajorVersion() - function returns the major version number of
	     the script engine in use.
	
	   - ScriptEngineMinorVersion() - function returns the minor version number of
	     the script engine in use.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	eMbedded Visual Basic Online Help
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q184650 INFO: What Language Features does VB have that VBCE and eVB Do Not
	
	Additional query words: wce VBCE wince vbce6 evb
	
	======================================================================
	Keywords          : kbCtrl kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
