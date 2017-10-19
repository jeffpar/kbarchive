---
layout: page
title: "Q151389: PRB: Code Example in Online Help on HelpContextID Gives Error"
permalink: /kb/151/Q151389/
---

## Q151389: PRB: Code Example in Online Help on HelpContextID Gives Error

	Article: Q151389
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbref kbDocs
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Online Help for the HelpContextID Property topic has a code example that
	returns an error when used.
	
	The code example for the HelpContextID Property references Context IDs in the
	VB.Hlp file is not valid when used with the VB.Hlp file included in Visual Basic
	4.0. Depending on the operating system, an error is returned indicating that the
	Help file is invalid. The Context IDs are valid using the VB.Hlp file shipped
	with Visual Basic 3.0. If that file exists, you can point to it in the sample
	code line - "App.HelpFile = "VB.HLP"" in the Private Sub Form_Load() Function.
	As an example: App.HelpFile = "C:\VB3\VB.HLP".
	
	CAUSE
	=====
	
	The code example for HelpContextID Property topic was not rewritten to use the
	Visual Basic 4.0 VB.Hlp file.
	
	RESOLUTION
	==========
	
	Use the Visual Basic 3.0 VB.Hlp file or use another Help file for which Context
	IDs are known, such as IconWrks.Hlp. The Context ID numbers can be found by
	opening the IconWrks.Hpj file in a text editor.
	
	If the Help files mentioned above are not available, the following Context IDs
	from the Visual Basic 4.0 VB.Hlp file can be used in place of the Context IDs in
	the code example:
	
	       2007557   Command Button Control
	       2007560   DirListBox Control
	       2007570   FontCount Property
	
	A complete list of the HelpContext IDs in the Visual Basic 4.0 VB.Hlp file is not
	available.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbref kbDocs 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbprb
	
	=============================================================================
	
