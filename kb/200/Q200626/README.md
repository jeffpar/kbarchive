---
layout: page
title: "Q200626: PRB: UserDocuments Can be Orphaned"
permalink: /kb/200/Q200626/
---

## Q200626: PRB: UserDocuments Can be Orphaned

{% raw %}

	Article: Q200626
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbInternet
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Basic allows you to run only one UserDocument in the integrated
	development environment (IDE).
	
	CAUSE
	=====
	
	There are two sets of uniquely different clsid entries made. The only similarity
	being the globally unique identifier (GUID) data value.
	
	These are, in fact, two separate programs. However, these programs can mislead
	programmers into believing they are the same because:
	
	- Visual Basic has no way of determining whether or not an existing copy of the
	  .exe exists in the registry.
	
	- The programmer is not aware of the implications of creating more than one
	  instance of an .exe or .dll file.
	
	- The programmer is also not aware of the need to delete existing registry
	  entries before creating a new .exe or .dll file.
	
	- The programmer can not assure project success when a definitive distinction
	  between an original and a modified .exe file is not made before any registry
	  attempts are made. For example, Project1 could not be confused with P1V1
	  before CLSID's have been created for that .exe file.
	
	NOTE: Even after both the .exe file and the UserDocument on the desktop were
	renamed, both worked. The registry showed the change in the name of the .exe
	file. However, the GUID's default value shows the following:
	
	     Name        Data
	    (Default)    Project1.UserDocument1
	
	It is, indeed, the ClassID that links the Userdocument with the .exe file, not
	it's name.
	
	The three UserDocuments left in tact, in their unique folder, run from that
	folder once the URL switches to that folder. In fact, as soon as the real
	UserDocument1 of that group is used, both UserDocument2 and UserDocument3
	display the value shared by the global variable in their module.
	
	What makes this behavior easy to trace is the fact that the first userdocument
	you run from the desktop is the only one that initializes the information.
	
	The complete, fully functional project passes the information to a module where
	it was declared globally. The orphaned twin of UserDocument1 on the desktop is
	exposed when the numeric value to be displayed by UserDocument2 and
	UserDocument3 returns a 0.
	
	In conclusion, with the exception the Userdocument1 on the desktop asks if you
	are sure, without the aid of the Module global variable, it would appear as
	though both UserDocument1 on the desktop and UserDocument1 inside the folder are
	one in the same. Renaming both the desktop UserDocument and the EXE changes
	nothing.
	
	RESOLUTION
	==========
	
	Programmers need to check for and delete all traces of any existing registry
	entries when a new release of an .exe file, .dll file, Class, UserControl, or
	UserDocument is about to be tested outside the integrated development
	environment (IDE).
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new instance of Visual Basic 6.0.
	
	2. Select a UserDocument.exe as a project.
	
	3. Add two additional UserDocuments and one module to the project.
	
	4. Add one command button and two labels to each Document. A list of suggested
	  captions for the controls follows:
	
	  Document1
	
	      Label1.Caption = "Hyperlink to UserDocument2"
	      Label2.Caption = "Hyperlink to UserDocument3"
	      Command1.Caption = "Get the magic number"
	
	  Document2
	
	      Label1.Caption = "Hyperlink to UserDocument1"
	      Label2.Caption = "Hyperlink to UserDocument3"
	      Command1.Caption = "Get the magic number"
	
	  Document3
	
	      Label1.Caption = "Hyperlink to UserDocument1"
	      Label2.Caption = "Hyperlink to UserDocument2"
	      Command1.Caption = "Get the magic number"
	
	5. Navigate to the module's code page window and declare a Global variable:
	
	         Global Magic as Integer
	
	6. Navigate to Document1 and add the following in the UserDocument_Initialize
	  event:
	
	         MAGIC = 21
	
	7. In the command1_Click() event, add the following code:
	
	         MSGBOX "The magic number is: " & MAGIC
	
	8. Rename project1 to something other than project1. Create a new folder for
	  your project giving the folder the same name as the project.
	
	9. Under each label in the Label_Click() event and the following code:
	
	         UserDocument.Hyperlink.NavigateTo _<BR/>
	         "Drive:\Directory\folder\UserDocument[X].vbd"<BR/>
	         [X being the number it relative to the label caption document number]
	
	10. Create an .exe and place it in the folder.
	
	11. Add the following code to UserDocument1's link to the second UserDocument:
	
	         MSGBOX "Are you sure?"
	
	12. Create a second exe and place it on the desktop.
	
	13. Delete all of the program files, created when the .exe was made from the
	  desktop, except UserDocument1.
	
	14. Double-click Internet Explorer. Drag and drop UserDocument1 from the desktop
	  to the Internet Explorer window.
	
	Minimize the IDE version of the project. Run the WebBrowser from the desktop.
	Open the folder in which you created your .exe, then drag and drop the
	UserDocument1 into the Browser window. When you click Label1, a message box with
	a prompt displays:
	
	The current URL:
	
	  C:\WINNT\Profiles\REDWAR\Desktop\UserDocument1.vbd
	
	The second URL:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\UserDocument2.vbd
	
	The third URL:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\UserDocument3.vbd
	
	The first URL:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\UserDocument1.vbd
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Richard T.
	Edwards, Microsoft Corporation.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbActiveDocs kbInternet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
