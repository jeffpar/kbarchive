---
layout: page
title: "Q171524: FIX: Ambiguous Names Generate Incorrect Error Message"
permalink: /kb/171/Q171524/
---

## Q171524: FIX: Ambiguous Names Generate Incorrect Error Message

	Article: Q171524
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Binary Compatibility is set, then writing a duplicate Implements statement in
	a Class Module can cause a compatibility error to occur when compiling a DLL,
	instead of the expected "Ambiguous name detected" error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where,and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: MSO97.DLL is required to duplicate this scenario.
	
	1. Start a new ActiveX DLL project in Visual Basic 5.0. Class1 is created by
	  default.
	
	2. Select Project...References from the menu bar and add a reference to the
	  Microsoft Office 8.0 Object Library.
	
	3. Select Project...Add Module to add a new Module (Module1).
	
	4. Add the following code to Module1:
	
	        Sub Main()
	
	        End Sub
	
	5. Add the following code to Class1:
	
	        Implements IFoundFiles
	
	        Private Property Get IFoundFiles_Count() As Long
	
	        End Property
	
	        Private Property Get IFoundFiles_Item(ByVal Index As Long) As String
	
	        End Property
	
	6. Select Project...Properties and change the Startup Object to Sub Main.
	
	7. Select File...Make Project1.dll and compile the project as Project1.DLL.
	
	8. After compilation, select Project...Project1 Properties, and select Binary
	  Compatibility on the Components tab.
	
	9. Change the code in Class1 to the following:
	
	        Implements IFoundFiles
	        Implements IFoundFiles
	
	        Private Property Get IFoundFiles_Count() As Long
	
	        End Property
	
	        Private Property Get IFoundFiles_Item(ByVal Index As Long) As String
	
	        End Property
	
	10. Select File...Make Project1.dll, and compile the project as Project2.DLL.
	
	Result
	------
	
	The following Visual Basic dialog box appears:
	
	  "The Class1 class implemented an interface in the version-compatible
	  component, but not in the current project.
	
	  If you choose Accept, the Class1 class module will no longer support client
	  applications compiled against the version-compatible component. To avoid this
	  incompatibility, add the interface declaration back into the class module, or
	  clear the version compatibility setting in Project Options."
	
	The correct error message that should display is:
	
	  "Compile error: Ambiguous name detected: IFoundFiles"
	
	NOTE: This message does display after the initial dialog is dismissed.
	
	NOTE: This behavior has also been reported when duplicate Enum names are used.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
