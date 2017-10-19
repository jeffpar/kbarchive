---
layout: page
title: "Q132359: Example of Polymorphism in Visual FoxPro"
permalink: /kb/132/Q132359/
---

## Q132359: Example of Polymorphism in Visual FoxPro

	Article: Q132359
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an example that illustrates the concept of polymorphism in
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The object-oriented programming approach focuses on objects as the basis for
	application building. Objects are instances of classes, which contain a
	description of related data and procedures. The Visual FoxPro language has been
	extended to use object-oriented programming (OOP). One of the concepts used in
	OOP is polymorphism.
	
	In OOP terms, polymorphism represents the ability to resolve a reference to an
	object's method at run time. Specifically, different objects could make a call
	to a Draw or Print method, and these methods would act differently with each
	object; the process can take different forms behind a common interface. One of
	the benefits of polymorphism is that because the interface is common to objects,
	any object is able to respond differently to some common set of tasks, and
	objects are independent of each other.
	
	The following code sample illustrates how polymorphism can be implemented in
	Visual FoxPro. It uses a reference to a Print routine. All of the objects
	inherit a Print method, which can be called from any document, and print in a
	different way depending on the document that called the Print method. To execute
	this code, copy and paste it into a program (.PRG) file, and then run the .PRG
	file.
	
	Code Sample
	-----------
	
	  *-- Note:  All Print methods output to active window for demo.
	     CLEAR
	     ? 'Example :'
	     DO PolyExample
	     RETURN
	
	  *-- All objects in this example are derived from the same ancestor, the
	  *-- File class.
	  *-- Polymorphism is demonstrated here by sending the Print method to three
	  *-- independent objects: a document, a spreadsheet, and a file. The Print
	  *-- method is performed for each object instance, demonstrating how each
	  *-- instance knows what action to perform.
	
	     PROCEDURE PolyExample
	     PRIVATE oMyFile1,oMyFile2,oMyFile3
	     oMyFile1=CREATEOBJECT('File')
	     oMyFile1.SetFileName('TEST1.TXT')
	     oMyFile1.Print
	
	     oMyFile2=CREATEOBJECT('DocumentFile')
	     oMyFile2.SetFileName('TEST2.DOC')
	     oMyFile2.Print
	
	     oMyFile3=CREATEOBJECT('SpreadsheetFile')   && Creates the third object
	     oMyFile3.SetFileName('TEST3.XLS')
	     oMyFile3.Print
	     RETURN
	
	  *-- Base File class.
	  *-- Instance variable cFileName is protected for encapsulation.
	  *-- SetFileName(<expC>) method updates instance variable cFileName.
	  *-- Print method prints file based on instance variable cFileName.
	  DEFINE CLASS File AS Custom
	
	     PROTECTED cFileName
	
	     FUNCTION SetFileName
	     PARAMETERS lcNewFileName
	     this.cFileName=lcNewFileName
	     ENDFUNC
	
	     FUNCTION Print           && performs the Print method for a File object
	     IF EMPTY(this.cFileName)
	        RETURN .F.
	     ENDIF
	     ? 'Print File: '+this.cFileName
	     ENDFUNC
	
	     ENDDEFINE
	
	  *-- DocumentFile class derived from File class.
	  *-- Print method prints file based on instance variable cFileName. It
	  *-- overwrites Print method defined in the File class.
	
	     DEFINE CLASS DocumentFile AS File
	
	     FUNCTION Print
	       IF EMPTY(this.cFileName)
	        RETURN .F.
	       ENDIF
	       ? 'Document File: '+this.cFileName
	     ENDFUNC
	
	     ENDDEFINE
	
	  *-- SpreadsheetFile class derived from File class.
	
	  DEFINE CLASS SpreadsheetFile AS File
	
	     FUNCTION Print
	     IF EMPTY(this.cFileName)
	        RETURN .F.
	     ENDIF
	     ? 'Spreadsheet File: '+this.cFileName
	     ENDFUNC
	
	     ENDDEFINE
	
	Additional query words: message VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
