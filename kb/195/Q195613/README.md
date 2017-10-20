---
layout: page
title: "Q195613: HOWTO: Create a Simple Context-Sensitive HTML Help File"
permalink: /kb/195/Q195613/
---

## Q195613: HOWTO: Create a Simple Context-Sensitive HTML Help File

{% raw %}

	Article: Q195613
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbvfp600
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Foxpro 6.0 includes HTML HELP Workshop that you can use to design help
	systems for your applications. This article describes how to create a simple
	context-sensitive help system.
	
	MORE INFORMATION
	================
	
	HTML Help Workshop is a Help authoring tool with an easy-to-use graphical
	interface for creating help project files, topic files, contents files, index
	files, and everything else you need to put together an online help system or Web
	site.
	
	NOTE: You can install HTML Help Workshop by running HTMLHelp.exe from the
	HtmlHelp directory on Disc 1 of the Microsoft Visual FoxPro version 6.0 or
	Microsoft Visual Studio version 6.0 CDs.
	
	1. Add relevant numbers to the HELPCONTEXTID property of each of the controls in
	  your Visual FoxPro project that you would like to associate with a help
	  topic. For example, if you want to associate help with three controls in a
	  form, set the HELPCONTEXTID property for each of them to 1, 2, and 3
	  respectively.
	
	2. Create the topic files for your help system. These are common HTML files. You
	  can create them in any HTML editor or HTML Help Workshop. Each of the
	  HELPCONTEXTID numbers for the controls represents a topic. Create a file for
	  each of the topics that you want to include in your help system.
	
	3. Create a map file. You can use a Text Editor, such as NotePad, to create this
	  file. A map file is a C Header file that maps the HelpContextId sent by the
	  calling application to constants used in the Help Compiler. A map file is a
	  text file and might contain information similar to the following:
	
	        #Define TOPIC1 1
	        #Define TOPIC2 2
	
	4. Open the HTML Help Workshop and create a new help project. A wizard guides
	  you through how to add the HTML files to the project.
	
	5. Using HTML Help Workshop, open the project created in step 4. Click HtmlHelp
	  API information. Click the Map tab, and click Header File. Select the header
	  file created in step 3.
	
	6. In the HtmlHelp API information dialog box, click the Alias tab. Click Add,
	  and type the constant or the number passed to the HtmlHelp API (for example,
	  TOPIC1) in the box under "Whenever This Constant or number is passed to the
	  HTMLHelp API."
	
	7. In the "Use it to Refer to This HTML File" box, select a topic file (created
	  in step 2) that you want the constant to refer to.
	
	8. Repeat steps 6 and 7 to associate all of the HTML topic files to the
	  appropriate constants.
	
	9. Click Save all project files and compile. This creates a help file with the
	  same name as the Help project and a .chm extension.
	
	10. To set help to the Help file that you created in step 9, use the following
	  command:
	
	  Set Help to MyHelpFile.chm
	
	  Where MyHelpFile.chm is the name of the help file created in HTML Help
	  Workshop.
	
	REFERENCES
	==========
	
	For information on using HTML Help files with Visual FoxPro 3.0 and 5.0, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q185498 SAMPLE: Vfphtml.exe Demonstrates HTML Help in VFP 3.0 and 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
