---
layout: page
title: "Q170164: INFO: VB 6.0 Readme Part 1: Important Issues - Read First!"
permalink: /kb/170/Q170164/
---

## Q170164: INFO: VB 6.0 Readme Part 1: Important Issues - Read First!

	Article: Q170164
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbreadme kbhtml kbDCOM kbInternet kbVBp600
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
	
	Part 1. Important Issues - Please Read First!
	
	Part 2. Data Access Issues and DataBinding Tips
	
	Part 3. Control Issues
	
	Part 4. Language Issues
	
	Part 5. Samples Issues
	
	Part 6. Wizard Issues
	
	Part 7. Error Message Issues
	
	Part 8. WebClass Designer Issues
	
	Part 9. DHTML Page Designer Issues
	
	Part 10. Extensibility issues
	
	Part 11. Miscellaneous Issues
	
	Part 12. Microsoft Transaction Server (MTS) Issues
	
	Part 13. Dictionary Object
	
	Part 14. Visual Component Manager
	
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	Passing User-Defined Types to Procedures
	----------------------------------------
	
	With Visual Basic 6.0 it is possible to pass a user defined type (UDT) as an
	argument to a procedure or function. However, there is a restriction. Passing a
	UDT to a procedure in an out-of-process component or across threads in a
	multi-threaded component requires an updated version of DCOM for Windows 95 and
	Windows 98, or Service Pack 4 for Windows NT 4.0. This update is required on
	your development computer as well as on any computer that will run your
	application. A run-time error will occur if the required files are not
	installed.
	
	The above does not apply to passing UDTs within a single-threaded application;
	this will work without updating. The Package and Deployment Wizard will not
	determine the dependencies for the necessary components - it is up to you to
	make sure that the files are on the end user's computer. You can test for the
	existence of the components by trapping for run-time error 458 - "Variable uses
	an Automation type not supported in Visual Basic". If this error occurs, the
	DCOM or Service Pack components must be updated; the update procedure differs
	depending on the operating system:
	
	- Windows 95 or Windows 98
	
	  DCOM98.EXE is a self-extracting executable that installs the updated DCOM
	  components for Windows 95 or Windows 98. It can be found in the DCOM98
	  directory of the Visual Basic 6.0 CD. This file may be freely distributed
	  with your Visual Basic application.
	
	- Windows NT 4.0
	
	  The updated DCOM components are automatically installed with Service Pack 4
	  (SP4). When it is released, you can download the Service Pack from the
	  Microsoft Web site.
	
	Searching Online by Topic Title
	-------------------------------
	
	To search for a topic when you have the title:
	
	1. In the navigation pane of the MSDN window, click the Search tab and then type
	  or paste the title of the topic you want to find. Enclose the search string
	  in quotation marks.
	
	2. Click Search Titles Only.
	
	3. Click List Topics. (If your search returns more than one hit, you can sort
	  the topic list by clicking the Title or Location column heading.)
	
	4. Select the title of the topic you want and then click Display.
	
	  To find where a topic is located in the table of contents, click the Locate
	  button on the toolbar. The table of contents will synchronize with the topic
	  you are viewing.
	
	  NOTE: The Locate button is unavailable for the topics in the Reference node of
	  the Visual Basic documentation.
	
	Cross References to Internet Client SDK
	
	Refer to the Internet/Intranet/Extranet SDK
	-------------------------------------------
	
	In the Building Internet Applications book within the Component Tools Guide,
	multiple cross references are made to a part of MSDN referred to as the
	"Internet Client SDK." The correct name for this SDK is the
	"Internet/Intranet/Extranet SDK." When searching for an Internet Client SDK
	reference in MSDN, please look in this section.
	
	Context-Sensitive Help
	----------------------
	
	To use Help buttons and the F1 key to access Help without having the MSDN CD in
	your CD drive, you must choose the Custom install option during setup of the
	MSDN Library. Check the boxes labeled "VB Documentation," "VB Product Samples,"
	and "VS Shared Documentation." You may also want to check "VSS Documentation" if
	you are using Visual SourceSafe.
	
	Sample Code Sometimes Does Not Cut and Paste Properly
	-----------------------------------------------------
	
	Line breaks and formatting information may not copy correctly when you copy and
	paste sample code from the MSDN Library Visual Studio documentation to your code
	editor. To work around this issue, do one of the following:
	
	- Manually edit the line breaks after you copy the code.
	
	- View the sample code source, copy the entire code sample, including the
	  <pre> and </pre> tags, paste it to your code editor, and then
	  delete the unwanted sections from the pasted version.
	
	Locate Button Disabled for Reference Topics
	-------------------------------------------
	
	When you find a language reference topic in MSDN through the Search tab, you
	cannot use the Locate button to find where the topic is located in the MSDN
	Table of Contents tree.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170163 : INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170162 : INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170161 : INFO: VB 6.0 Readme Part 4: Language Issues
	
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
	Keywords          : kbreadme kbhtml kbDCOM kbInternet kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
