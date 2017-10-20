---
layout: page
title: "Q184650: INFO: What Language Features does VB have that VBCE/eVB Do Not"
permalink: /kb/184/Q184650/
---

## Q184650: INFO: What Language Features does VB have that VBCE/eVB Do Not

{% raw %}

	Article: Q184650
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following language features are available in Visual Basic 5.0 and 6.0, but
	are not available in Windows CE Toolkit for Visual Basic (VBCE) or eMbedded
	Visual Basic (eVB).
	
	Category         Omitted Feature/Keyword and Notes
	--------------------------------------------------
	
	Array Handling   Option Base,
	                Declaring arrays with lower bound <> 0
	
	Collection       Add,
	                Count,
	                Item,
	                Remove,
	                Access to collections using ! character
	                (for example, MyCollection!Item)
	
	Conditional
	Compilation      #Const,
	                #If...Then...#Else,
	                Most uses of the # character, including file access using
	                #filenum (#date# is okay)
	
	Control Flow     DoEvents,
	                GoSub...Return,
	                GoTo,
	                On Error GoTo,
	                On...GoSub,
	                On...GoTo,
	                line numbers,
	                Line labels,
	                With...End With,
	                End,
	                Stop
	                NOTE: Use App.End to end your program.
	                On Error Resume Next is provided for error handling.
	
	Conversion       CVar,
	                CVDate,
	                Str,
	                Val
	
	Data Types       All intrinsic data types except Variant, 
	                Type...End Type,
	                As keyword
	                NOTE: (VBCE and eVB allow the use of Dim ... As ... only for Intellisense help in the design environment.)
	
	Date/Time        Date statement,
	                Time statement,
	                Timer
	
	DDE              All DDE Functions
	
	Debugging        Debug.Assert,
	                Debug.Print,
	                End,
	                Stop
	
	Declaration      Declare,
	                New,
	                Optional,
	                ParamArray,
	                Property Get,
	                Property Let,
	                Property Set,
	                Static
	
	Error Handling   Erl,
	                Error,
	                On Error...Resume,
	                Resume
	
	File
	Input/Output     All traditional Basic file I/O (use Windows CE ActiveX
	                controls for file I/O)
	
	Financial        All financial functions (use Windows CE ActiveX controls
	                for financial functions)
	
	Object
	Manipulation     TypeOf
	
	Operators        Like
	
	Options          Deftype,
	                Option Base,
	                Option Compare,
	                Option Private Module
	
	Select Case      Expressions containing Is keyword or any comparison
	                operators,
	                Expressions containing a range of values using the To
	                keyword
	
	Statements       Beep
	
	Statements with
	a $ Character    Chr$,
	                Command$,
	                Date$,
	                Environ$,
	                Error$,
	                Format$,
	                InputBox$,
	                Lcase$,
	                Left$,
	                Ltrim$,
	                Mid$,
	                Right$,
	                Rtrim$,
	                Space$,
	                Str$,
	                String$,
	                Time$,
	                Trim$,
	                case$
	
	Strings          Fixed-length strings,
	                LSet,
	                RSet,
	                Mid Statement,
	                StrConv
	
	Using Objects    Collection access using !
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	eMbedded Visual Basic Online Help
	
	Additional query words: vbce vbce6 wince evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
