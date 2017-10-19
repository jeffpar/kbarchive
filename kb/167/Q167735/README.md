---
layout: page
title: "Q167735: FIX: Setting Printer to Item in the Printers Collection Fails"
permalink: /kb/167/Q167735/
---

## Q167735: FIX: Setting Printer to Item in the Printers Collection Fails

	Article: Q167735
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp500 kbVBp500bug kbVS97sp2fix kbDSupport
	Last Modified: 18-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to set the default printer to an object variable has no effect. For
	instance, given a system with more than one printer installed, the following
	code will not change the default printer:
	
	     Private Sub Form_Load()
	         Dim Prt As Printer
	         For Each Prt In Printers
	        If Not Prt Is Printer Then
	              Set Printer = Prt
	           Exit For
	        End If
	         Next
	
	        Printer.Print "Hi, Mom"
	        Printer.EndDoc
	     End Sub
	
	The expected behavior is that the document should print to the first non- default
	printer found in the printers collection.
	
	The actual behavior is that the document prints to the original default printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Visual Basic 5.0 Service Pack 2 or later.
	
	To work around this problem, progammatically change the default printer for the
	system. For additional information about how to change the default printer,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q266767 HOWTO: Set Which Printer Is the System Default Printer
	
	NOTE: This workaround changes the default printer for all applications that are
	running. It is recommended that you change the default printer back to the
	original setting after you finish printing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 97 Service Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q266767 HOWTO: Set Which Printer Is the System Default Printer
	
	  Q142388 HOWTO: Changing WIN.INI Printer Settings from VB using Windows API
	
	For additional information on determining which 32-Bit for Windows NT 3.51,
	Windows NT 4.0 and Windows 95, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-Bit Windows Version Is Being Used
	
	Additional query words: setting default printer
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp500 kbVBp500bug kbVS97sp2fix kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
