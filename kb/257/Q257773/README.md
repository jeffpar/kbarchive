---
layout: page
title: "Q257773: INFO: Support for Third-Party Installers"
permalink: /kb/257/Q257773/
---

## Q257773: INFO: Support for Third-Party Installers

	Article: Q257773
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbwizard kbAppSetup kbDeployment kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 18-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following installation tools are supported by Microsoft for the distribution
	of Visual Basic applications:
	
	- Package and Deployment Wizard (PDW) - Visual Basic 6.0 only
	
	- Visual Basic Application Setup Wizard - Visual Basic 4.0 and 5.0 only
	
	- Windows/Visual Studio Installer - Visual Basic 6.0 only
	
	Support for other installation programs is provided by the vendor of the product.
	However, some information must be provided to an installer program in order to
	ensure a successful installation regardless of the tool that is used. The
	installer needs to know which files need to be distributed, and that only those
	files are distributed. The purpose of this article is to explain the recommended
	method of gathering this information.
	
	MORE INFORMATION
	================
	
	When packaging an application for distribution, there are five main
	considerations:
	
	1. What files are required by the application?
	2. Do these files require any other files?
	3. Where should each individual file be installed?
	4. Which of these files need to registered?
	5. Do any of these files require special handling, such as reboot after install
	  or run to install?
	
	Because the PDW and the Setup Wizard are designed specifically to aid the
	distribution of Visual Basic applications, they are the best tools to use to
	answer these questions, even if you do not intend to use them as your final
	installer.
	
	At startup, the PDW/Setup Wizard asks which type of package you want to create.
	There are two options, a Dependency List and a Standard Setup Package. Either
	one can be used for this purpose, and each has its advantages and
	disadvantages.
	
	When you select Dependency List, the wizard creates a dependency file
	(ProjectName.dep) that lists the files that are needed by your application,
	along with additional information about each specific file. This includes the
	destination folder, the type of COM registration needed, and a list of
	dependencies. The advantage of this method is that the dependency file is all
	that is created: the setup script, .cab files, and so forth are not created.
	
	When you select Standard Setup Package, the wizard creates a complete setup
	package. The disadvantage of this option is that you create files that you might
	never use. The advantage is that the setup instructions for the program are also
	created. This set of instructions, contained in the file Setup.lst, is a
	complete chronicle of the steps you need to follow when you install the
	application. This list provides information that is above and beyond what is
	available in the dependency file. Perhaps the most important information is
	about which files require a system reboot. The method you use is a matter of
	preference, although with a complex application containing many components, it
	is good practice to generate both the dependency list and the standard setup
	package.
	
	The Setup Wizard and PDW rely heavily on dependency files. Microsoft ships
	dependency files for all of the Visual Basic controls and components. For
	example, Msdatgrd.dep is the dependency file for Msdatgrd.ocx, the Microsoft
	DataGrid control. There should be a dependency file (Filename.dep) for each of
	the files you include in your installation package. If so, the PDW picks up the
	information in these files and includes it in the dependency file and/or the
	Setup.lst for your application.
	
	If one of the components that you need to distribute does not have a .dep file,
	you can use the Dependency Walker (Depends) utility from the Platform SDK to
	gather the necessary information. Depends provides you with two main pieces of
	information:
	
	1. A list of the files that your file needs in order to function properly.
	2. An answer to the question of whether the file in question is a COM component
	  that requires registration.
	
	Depends.exe also lists all of the functions that are exported by the component.
	Look in the Function window to determine if one of the RegisterServer functions
	is listed. If it is, then this is a file that needs to be registered. For more
	information on Depends, consult the Depends Help File and the "Useful Tools for
	Package and Deployment Issues" in the "References" section of this article.
	Depends.exe is shipped with Visual Basic 6.0, and it is located on your CD in
	the folder:
	
	  \Common\Tools\VB\Unsupprt\Depend
	
	Once you have gathered this information, you can proceed with building your
	installation package.
	
	One additional troubleshooting step is worth trying. If you have problems
	installing the application with another tool, try packaging and installing the
	application with the PDW/Setup Wizard. If the application runs successfully, it
	provides a starting point for working with the vendor of your distribution tool.
	
	REFERENCES
	==========
	
	You can download the Platform Software Development Kit (SDK) from the following
	Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?URL=/code/topic.asp?URL=/msdn-files/028/000/123/topic.xml
	
	For additional information about the structure of Setup.lst and Dependency files,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q178354 INFO: How Setup Wizard and PDW Uses Dependency Files
	
	  Q189743 INFO: Description of Setup.lst Sections
	
	  Q198038 INFO: Useful Tools for Package and Deployment Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbwizard kbAppSetup kbDeployment kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
