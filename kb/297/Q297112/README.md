---
layout: page
title: "Q297112: BUG: VB Compiler Pads Embedded Resources with NULLs"
permalink: /kb/297/Q297112/
---

## Q297112: BUG: VB Compiler Pads Embedded Resources with NULLs

	Article: Q297112
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600 kbDSupport
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you compile XML or XSL resources in your Microsoft Visual Basic project, XML
	or XSL parsers may not be able to parse the XML or XSL document from the
	resources embedded in the Visual Basic executable file.
	
	CAUSE
	=====
	
	The Visual Basic compiler pads embedded resources to align on 32-bit dword
	boundaries with "0" (zero) characters. Because 0 is not a valid character in XML
	or XSL, XML or XSL parsers may consider documents that contain 0s as invalid
	documents.
	
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
	
	  Date              Version      Size      File name    
	  ----------------------------------------------------
	  04/23/2001        6.0.91.15    1.78 MB   VB6.EXE  
	  04/23/2001        6.0.0.8965   1.62 MB   VBA6.dll
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Microsoft Notepad to create an XML file named "Test.xml" (without the
	  quotation marks) and copy the following text into the file:
	
	<XML>
	<Name>Test Name </Name>
	</XML>
	
	2. Use Notepad to create a new file named "Test.rc" (without the quotation
	  marks) and copy the following text into the file. Make sure this file is in
	  the same folder as Test.xml.
	
	TEST.XML          HTML    DISCARDABLE     "TEST.XML"
	
	3. With the working directory set as the folder where you want to save the
	  Test.rc file, run the following command from a command prompt:
	
	  "Rc Test.rc" (without the quotation marks)
	
	  A new file named Test.res is generated.
	
	4. Open Visual Basic 6 and create a new standard EXE project. Use the default
	  name.
	
	5. From the Project menu, select Add File, and add the Test.res file to the
	  project.
	
	6. Compile the project to be Project1.exe.
	
	7. Open Microsoft Internet Explorer and type the following line in the address
	  bar:
	
	  "res://<localpath>\project1.exe/test.xml" (without the quotation marks)
	
	  where <localpath> is replaced with the real path. For example, C:\test.
	
	You should see the following error message:
	
	  The XML page cannot be displayed
	  Cannot view XML input using XSL style sheet. Please correct the error and then
	  click the Refresh button, or try again later.
	  --------------------------------------------------------------------------------
	  Invalid at the top level of the document. Line 3, Position 7
	
	  </XML>
	
	If you use the steps provided above but add two spaces to the end of the Test.xml
	file so that the size of the file becomes 40 bytes, it should work as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
