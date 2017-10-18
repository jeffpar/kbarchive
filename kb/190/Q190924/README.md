---
layout: page
title: "Q190924: BUG: Command Line Argument /MAKE Truncates User Documents"
permalink: kb/190/Q190924/
---

## Q190924: BUG: Command Line Argument /MAKE Truncates User Documents

	Article: Q190924
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbide kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Visual Basic command line argument /MAKE to compile
	an ActiveX .exe document, user documents may get truncated.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Version      Size      File name     
	  ----------------------------------------------
	  18-Sep-2001   6.0.93.56    1.79 MB   VB6.exe
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Visual Basic, and then create a new ActiveX Document EXE.
	  UserDocument1 is created by default.
	
	2. In the Project window, double-click User Documents.
	
	3. In the Project window, right-click UserDocument1, and click View Object.
	
	4. Set the Top property of UserDocument1 to "16000" (without the quotation
	  marks).
	
	5. Using the toolbox, create two labels on the form. Set the properties of the
	  labels as follows:
	
	     Name       Caption       Top
	     ----       -------       ---
	     Label1     "Top 8000"    8000
	     Label2     "Top 15000"   15000
	
	6. Save the project, and exit Visual Basic.
	
	7. From a command line, type the following command:
	
	  "c:\program files\devstudio\vb98\vb6.exe" /MAKE "c:\temp\project1.vbp"
	
	  NOTE: Modify the path information to correspond to the directories for both
	  the installation of Microsoft Visual Basic and the saved project. Use
	  quotation marks if the path contains long file names.
	
	8. In Microsoft Internet Explorer, open the UserDocument1.vbd file, which should
	  reside in the same directory as the project created above. Scroll down. Note
	  that the first label is visible but the second is not.
	
	NOTE: The height to which the UserDocument is truncated depends on the video
	resolution of the development computer. For instance, non-exhaustive testing
	found that on a computer with 800x600 resolution, the UserDocument was truncated
	to 8775 twips (6.1 inches). On a computer with 1024x768 resolution, the
	UserDocument was truncated to 8+ inches.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q190165 BUG: Compile Errors When Using Command Line Argument /MAKE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbide kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
