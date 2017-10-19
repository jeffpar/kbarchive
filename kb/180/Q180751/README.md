---
layout: page
title: "Q180751: INFO: Error Messages Shared Between VBCE and VBScript"
permalink: /kb/180/Q180751/
---

## Q180751: INFO: Error Messages Shared Between VBCE and VBScript

	Article: Q180751
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500 kbVBp600fix kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE Toolkit for Visual Basic 6.0 (VBCE) and eMbedded Visual Basic
	(eVB) share the following list of error codes and descriptions with Visual Basic
	Script (VBScript).
	
	MORE INFORMATION
	================
	
	The error codes and messages are as follows:
	
	Error Code Description
	----------------------
	
	When error handling is turned on in VBCE or eVB, the Source property of the Err
	object will return "VBScript runtime error" when encountering one of the errors
	listed below.
	
	5          Invalid procedure call or argument
	6          Overflow
	7          Out of memory
	9          Subscript out of range
	10         Array fixed or temporarily locked
	11         Division by zero
	13         Type mismatch
	14         Out of string space
	17         Can't perform requested operation
	28         Out of stack space
	35         Sub or Function not defined
	48         Error in loading DLL
	51         Internal error
	52         Bad file name or number
	53         File not found
	54         Bad file mode
	55         File already open
	57         Device I/O error
	58         File already exists
	61         Disk full
	62         Input past end of file
	67         Too many files
	68         Device unavailable
	70         Permission denied
	71         Disk not ready
	74         Can't rename with different drive
	75         Path/File access error
	76         Path not found
	91         Object variable not set
	92         For loop not initialized
	94         Invalid use of Null
	322        Can't create necessary temporary file
	424        Object required
	429        ActiveX component can't create object
	430        Class doesn't support Automation
	432        File name or class name not found during Automation operation
	438        Object doesn't support this property or method
	440        Automation error
	445        Object doesn't support this action
	446        Object doesn't support named arguments
	447        Object doesn't support current locale setting
	448        Named argument not found
	449        Argument not optional
	450        Wrong number of arguments or invalid property assignment
	451        Object not a collection
	453        Specified DLL function not found
	455        Code resource lock error
	457        This key already associated with an element of this collection
	458        Variable uses an Automation type not supported in VBScript
	500        Variable is undefined
	501        Illegal assignment
	502        Object not safe for scripting
	503        Object not safe for initializing
	32811      Element not found
	
	Syntax Errors
	
	1001	 Out of memory 
	1002	 Syntax error 
	1003	 Expected ':' 
	1005	 Expected '(' 
	1006	 Expected ')' 
	1007	 Expected ']' 
	1010	 Expected identifier 
	1011	 Expected '=' 
	1012	 Expected 'If' 
	1013	 Expected 'To' 
	1014	 Expected 'End' 
	1015	 Expected 'Function' 
	1016	 Expected 'Sub' 
	1017	 Expected 'Then' 
	1018	 Expected 'Wend' 
	1019	 Expected 'Loop' 
	1020	 Expected 'Next' 
	1021	 Expected 'Case' 
	1022	 Expected 'Select' 
	1023	 Expected expression 
	1024	 Expected statement 
	1025	 Expected end of statement 
	1026	 Expected integer constant 
	1027	 Expected 'While' or 'Until' 
	1028	 Expected 'While', 'Until' or end of statement 
	1029	 Expected 'With' 
	1030	 Identifier too long 
	1031	 Invalid number 
	1032	 Invalid character 
	1033	 Unterminated string constant 
	1034	 Unterminated comment 
	1037	 Invalid use of 'Me' keyword 
	1038	 'loop' without 'do' 
	1039	 Invalid 'exit' statement 
	1040	 Invalid 'for' loop control variable 
	1041	 Name redefined 
	1042	 Must be first statement on the line 
	1043	 Cannot assign to non-ByVal argument 
	1044	 Cannot use parentheses when calling a Sub 
	1045	 Expected literal constant 
	1046	 Expected 'In' 
	1047	 Expected 'Class' 
	1048	 Must be defined inside a Class 
	1049	 Expected Let or Set or Get in property declaration 
	1050	 Expected 'Property' 
	1051	 Number of arguments must be consistent across properties specification 
	1052	 Cannot have multiple default property/method in a Class 
	1053	 Class initialize or terminate do not have arguments 
	1054	 Property set or let must have at least one argument 
	1055	 Unexpected 'Next' 
	1056	 'Default' can be specified only on 'Property' or 'Function' or 'Sub' 
	1057	 'Default' specification must also specify 'Public'") 
	1058	 'Default' specification can only be on Property Get
	
	REFERENCES
	==========
	
	Fore more informatin, click the link below:
	
	  http://msdn.microsoft.com/library/en-us/script56/html/vsmscSyntaxErrors.asp
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500 kbVBp600fix kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
