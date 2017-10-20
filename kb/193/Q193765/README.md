---
layout: page
title: "Q193765: HOWTO: Using Visual FoxPro Online Help Without Installing MSDN"
permalink: /kb/193/Q193765/
---

## Q193765: HOWTO: Using Visual FoxPro Online Help Without Installing MSDN

{% raw %}

	Article: Q193765
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Previous versions of Visual FoxPro used a WinHelp implementation for online
	help. Since WinHelp is included as part of the operating system, it is possible
	to simply copy a Windows help file (*.hlp) to the system and expect to be able
	to view the contents of the help file. Visual FoxPro 6.0 uses the HTML Help
	system for online context-sensitive help. In order to be able to view the HTML
	Help file for Visual FoxPro (FoxHelp.chm), the correct version of the HTML Help
	engine must be present. This article describes how to configure a system with
	the necessary version of the HTML Help engine without having to install the
	Microsoft Developer Network (MSDN).
	
	MORE INFORMATION
	================
	
	Configuring the System with the HTML Help Engine
	------------------------------------------------
	
	1. Insert the Visual FoxPro 6.0 CD or Visual Studio 6.0 Disk 1 CD.
	
	2. Open the HTMLHelp folder on the CD.
	
	3. Double-click the Htmlhelp.exe file.
	
	4. Proceed through the HTML Help Workshop Setup.
	
	5. Choose Custom Setup when given the option.
	
	6. Choose only HTML Help in the Custom Setup options dialog box.
	
	7. Complete the installation.
	
	Once you have installed the HTML Help engine, you can view HTML Help files on
	this system. You can configure Visual FoxPro to use the help file directly from
	the CD, or you can copy the help file (FoxHelp.chm) to your Visual FoxPro
	directory. Use the Visual FoxPro Options dialog box to configure the location of
	the help file.
	
	It is important to recognize that this method of installing online help for
	Visual FoxPro 6.0 is far from complete. This method enables you to view the
	Visual FoxPro help topics contained in the Foxhelp.chm file, but it does not
	provide online help for common components, such as ActiveX controls, Win32 API
	functions, and so forth. To ensure that you have installed all the documentation
	for the various components, it is recommended that you install the Microsoft
	Developer Network.
	
	Additional query words: kbVFp600 kbDocs
	
	======================================================================
	Keywords          : kbHTMLHelp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
