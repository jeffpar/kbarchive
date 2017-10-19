---
layout: page
title: "Q174141: HOWTO: Display Outlook Folder Names"
permalink: /kb/174/Q174141/
---

## Q174141: HOWTO: Display Outlook Folder Names

	Article: Q174141
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following code sample demonstrates how to print the names of all folders
	grouped under a specified Outlook folder. The sample assumes that the Microsoft
	Outlook mail client is installed.
	
	MORE INFORMATION
	================
	
	The code below uses a recursive routine to iterate through a mail folder to
	produce a list of all its sub-folders in the Immediate Window.
	
	Step-by-Step Example
	--------------------
	
	1. Install Microsoft Outlook if it is not already installed.
	
	2. Open a Standard EXE project in Microsoft Visual Basic.
	
	3. Add a reference to the Microsoft Outlook 8.0 Object Library (msoutl8.olb)
	  using the Project item on the References menu.
	
	4. Set the Startup Object to "Sub Main" from the Project Properties dialog.
	
	5. Add a Standard Module (.BAS) file to the project.
	
	6. Insert the following code into the module: (Modify the FOLDER_TO_OPEN
	  constant in the code below as appropriate and Execute.)
	
	        Option Explicit
	
	        Private Sub Main()
	          Dim olMAPI As Outlook.NameSpace
	          Dim Folder As Outlook.MAPIFolder
	          '// Modify as appropriate.
	          Const FOLDER_TO_OPEN = "Mailbox - John Doe"
	
	          Set olMAPI = GetObject("",
	     "Outlook.application").GetNamespace("MAPI")
	          Call PrintFolderNames(olMAPI.Folders(FOLDER_TO_OPEN), "-
	     >")
	          Set olMAPI = Nothing
	        End Sub
	
	        Sub PrintFolderNames(tempfolder As Outlook.MAPIFolder, a$)
	          Dim i As Integer
	          If tempfolder.Folders.Count Then
	            Debug.Print a$ & " " & tempfolder.Name
	            For i = 1 To tempfolder.Folders.Count
	              Call PrintFolderNames(tempfolder.Folders(i), a$ & "-
	     >")
	            Next i
	          Else
	            Debug.Print a$ & " " & tempfolder.Name
	          End If
	        End Sub
	
	7. Run the project.
	
	NOTE: The sample code in this article works only when the FOLDER_TO_OPEN is set
	to a folder you can open, such as your own folder or the public folder.
	Otherwise a runtime error is generated.
	
	Additional query words: kbNoKeyword
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
