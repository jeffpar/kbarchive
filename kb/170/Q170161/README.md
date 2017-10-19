---
layout: page
title: "Q170161: INFO: VB 6.0 Readme Part 4: Language Issues"
permalink: /kb/170/Q170161/
---

## Q170161: INFO: VB 6.0 Readme Part 4: Language Issues

	Article: Q170161
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbreadme kbDateTime kbVBp kbVBp600 kbVS600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below includes the documentation and workarounds for Visual
	Basic 6.0. This information can also be found in the README.htm file that ships
	with Visual Basic 6.0 on the Visual Basic 6.0 CD-ROM. Please see the REFERENCES
	section of this article for a list of the Microsoft Knowledge Base articles
	relating to the Visual Basic 6.0 readme.
	
	Following is a list of all parts of the readme file:
	
	Part 1.  Important Issues - Please Read First!
	Part 2.  Data Access Issues and DataBinding Tips
	Part 3.  Control Issues
	Part 4.  Language Issues
	Part 5.  Samples Issues
	Part 6.  Wizard Issues
	Part 7.  Error Message Issues
	Part 8.  WebClass Designer Issues
	Part 9.  DHTML Page Designer Issues
	Part 10. Extensibility issues
	Part 11. Miscellaneous Issues
	Part 12. Microsoft Transaction Server (MTS) Issues
	Part 13. Dictionary Object
	Part 14. Visual Component Manager
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	InStr Function and Locale-Specific Comparisons
	----------------------------------------------
	
	To use locale-specific rules in a comparison, enter a valid LCID (LocaleID).
	
	SendKeys Statement Gives Invalid Procedure Call Error
	-----------------------------------------------------
	
	The short form of the code for sending an Insert, {INS}, results in an "Invalid
	procedure call" error under Windows NT 4.0 Service Pack 3. To work around this
	problem, use the long code for Insert, {Insert}.
	
	Type Statement Clarification
	----------------------------
	
	The last sentence of the "Type statement" Help topic states: "The setting of the
	Option Base statement determines the lower bound for arrays." This sentence is
	incorrect and should be ignored. The Option Base setting has no effect on arrays
	in user-defined types.
	
	Decimal Data Type Stored As Signed Integer
	------------------------------------------
	
	The "Decimal Data Type" Help topic states that Decimal variables are stored as
	unsigned integers, which is incorrect. Decimal variables are stored as signed
	integers.
	
	DateSerial Function and Windows 98/Windows 2000
	-----------------------------------------------
	
	For the year argument, two-digit years are interpreted based on user- defined
	machine settings (the default range is 1930-2029). The range settings are
	defined in the Regional settings of the Microsoft Windows Control Panel.
	
	Code Window "Find Next" Keyboard Shortcut
	-----------------------------------------
	
	The "Code Window Keyboard Shortcuts" Help topic incorrectly states the Find Next
	keyboard shortcut is SHIFT+F4. The correct keyboard shortcut for Find Next is
	F3.
	
	Add Method (Folders) Syntax
	---------------------------
	
	In the "Add Method (Folders)" Help topic, the syntax shown is incorrect. The
	correct syntax is:
	
	     object.Add foldername
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170164 : INFO: VB 6.0 Readme Part 1: Important Issues - Read First!
	
	  Q170163 : INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170162 : INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170160 : INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q190046 : INFO: VB 6.0 Readme Part 6: Wizard Issues
	
	  Q170158 : INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	  Q189539 : INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q190249 : INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 : INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 : INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 : INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 : INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191791 : INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	  Q191790 : INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	======================================================================
	Keywords          : kbreadme kbDateTime kbVBp kbVBp600 kbVS600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
