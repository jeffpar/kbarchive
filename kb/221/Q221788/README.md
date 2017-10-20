---
layout: page
title: "Q221788: HOWTO: Get Localized Microsoft Components for Your Applications"
permalink: /kb/221/Q221788/
---

## Q221788: HOWTO: Get Localized Microsoft Components for Your Applications

{% raw %}

	Article: Q221788
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbLocalization kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you need to distribute a localized version of an application developed
	using Visual Basic, you need to know which localized files need to be added to
	your localized distribution package, and where are they located.
	
	MORE INFORMATION
	================
	
	If a Microsoft component has localized resources, these are stored in a separate
	resource DLL for each language. You can find a list of resource DLLs (often
	called satellite DLLs) in the component's dependency (.dep) file. To view the
	contents of a .dep file, open it with a text editor such as Notepad as a normal
	text file.
	
	Once you know which satellite DLLs you need, you can download them from the Web.
	The easiest way to do this is as follows:
	
	1. Open the dependency file for an ActiveX control. This example uses
	  comctl32.dep.
	
	2. Determine the location of your language's information. This example uses
	  German.
	
	3. In the Localized Dependencies section you will find:
	
	   - The name of the satellite DLL: CmCtlDE.dll
	
	   - The cab file where it is stored: CmCtlDE.cab
	
	   - The URL of the cab file: http://activex.microsoft.com/controls/vb6
	
	4. Point your Web browser to the URL you create by concatenating the URL and cab
	  file above, with a forward slash ( / ) between them:
	
	  http://activex.microsoft.com/controls/vb6/CmCtlDE.cab
	
	  This allows you to download the cab file to your machine.
	
	5. Once you have downloaded the cab file, you can extract the file you need and
	  add it to your distribution package.
	
	REFERENCES
	==========
	
	For additional information about extracting a file from a cab file, please see
	the following article in the Microsoft Knowledge Base:
	
	Q198038 Useful Tools for Package and Deployment Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbLocalization kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
