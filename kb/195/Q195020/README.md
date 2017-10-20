---
layout: page
title: "Q195020: INFO: VB Project in a Shared Location Overwrites Modifications"
permalink: /kb/195/Q195020/
---

## Q195020: INFO: VB Project in a Shared Location Overwrites Modifications

{% raw %}

	Article: Q195020
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbVBp
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a group of people use Visual SourceSafe with Visual Basic, it is important
	for each user have his or her own unique working folder. Developers tend to have
	their source-code controlled projects in a shared location and all users get
	access to projects through a network drive. If Multiple check out is enabled,
	then many users can check out the same file at the same time. This might end up
	in losing the modifications made by one user, when another user checks in or
	checks out the project. This article describes this problem and how to resolve
	it.
	
	MORE INFORMATION
	================
	
	The following scenario takes place when a Visual Basic project is under source
	control and all users have the same working folder. Let us assume that there are
	two users, UserA and UserB, who are working in a Visual Basic project that is
	integrated with Visual SourceSafe located in a Shared location
	\\shared\VBProject. This Visual Basic project contains a project file
	(Project1.vbp) and two form files (Form1.frm and Form2.frm).
	
	UserA opens the shared project Project1.vbp and checks out Project1.vbp and
	Form1.frm. Then, UserB opens the same project from the same location. Now, UserB
	will not see the padlock glyph for Project1.vbp and Form1.frm in the project
	window. (You can see this padlock glyph only if the file is read- only. Since
	UserA checked out the file, it changed the read-only attribute of both the files
	to read-write).
	
	UserA makes some changes in Form1.frm and saves it. Now UserB Checks Out
	Form2.frm and he modifies and he clicks on the save button. This saves both
	Project1.vbp, Form1.frm, and Form2.frm. As a result, the modification performed
	by UserA are overwritten. If UserA checks in all the files, her modifications
	will be lost.
	
	To avoid this problem, each user needs to have the Visual Basic project in his or
	her local machine and integrate it with the server copy through Visual
	SourceSafe addins. Each source-controlled project (.vbp) is associated with a
	Mssccprj.scc file. This file is created as soon as you do one of the following:
	
	- Add a Visual Basic project to Visual SourceSafe.
	
	- Download a project from Visual SourceSafe.
	
	Each user will have this file in his or her local directory where the
	source-controlled project is located. This file contains information about the
	source-controlled project to which the Visual Basic project is integrated and
	the path to the SrcSafe.ini file.
	
	Sample Entry in Mssccprj.scc File:
	
	     [SCC]
	     SCC=This is a source code control file
	     [Project1.vbp]
	     SCC_Project_Name = "$/MyProject", WQAAAAAA
	     SCC_Aux_Path=C:\vss,
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q147585 INFO: The Mssccprj.scc File and How Is It Used
	
	After creating a project in Visual Basic, you need to add it to Visual SourceSafe
	from one of the Visual SourceSafe client/server computers. Then, each user has
	to download the project from Visual SourceSafe to his or her local machine.
	Following are the various steps involved in this process.
	
	NOTE: This article assumes that Visual Basic and Visual SourceSafe integration is
	enabled.
	
	Creating a Sample Visual Basic Project
	--------------------------------------
	
	First, let us create a sample VB project from a client computer by name Machine1
	and let the Visual SourceSafe user be UserA:
	
	1. Start Visual Basic.
	
	2. Open a new project. By default, it will create a project Project1.vbp and a
	  form Form1.frm.
	
	3. Add another form, Form2.frm, to the project.
	
	4. Add a Command Button Command1 to the form Form1.frm.
	
	5. Add a Text Box, Text1, to the form Form2.frm.
	
	6. Click Save and save the project and forms under C:\MyProjects.
	
	Adding the Visual Basic project to Visual SourceSafe
	----------------------------------------------------
	
	After creating a project in Visual Basic, you need to add it to Source Control as
	follows:
	
	1. Under the Tools menu, click SourceSafe and then click Add Project to
	  SourceSafe to add the project to Source Control.
	
	  NOTE: If, 'Add files to Source Control when adding them to VB project?' option
	  in the Options dialog box is set to Yes, then Visual Basic automatically asks
	  you to add the project to Source Control as soon as you save the project.
	
	2. In the Add Project dialog box that appears, select "$/" and type the
	  following in the project text box:
	
	  MyProject
	
	  NOTE: This dialog box appears only when the Choose SourceSafe Database option
	  (under Tools menu, click SourceSafe, click Options, click Advanced, and then
	  click the Integeration tab) is set to Use Default. If it set to "prompt",
	  then you have choose the correct database and login.
	
	3. Click Create, and then click OK.
	
	4. In the Add files to SourceSafe dialog box, click Select All and then click
	  OK. You can now see a Mssccprj.scc file under C:\MyProjects.
	
	Creating Local Copy of the Project from Visual SourceSafe
	---------------------------------------------------------
	
	Now, UserA has added the Visual Basic project to Source Control from Machine1.
	UserB has to download the project locally to his computer from SourceSafe. Let
	his machine name be Machine2.
	
	1. Open Visual Basic from Machine2.
	
	2. Under the Tools menu, click SourceSafe, and then click Create project from
	  SourceSafe to download the project.
	
	3. In the Create local project from SourceSafe dialog box, select $/MyProject
	  from the list box, type C:\MyProject, and then click OK.
	
	  NOTE: This dialog box only appears when Choose SourceSafe Database option
	  (under the Tools menu, click SourceSafe, click Options, click Advanced, and
	  then click the Integeration tab) is set to Use Default. If it set to
	  "prompt," then you have choose the correct database and login. Also, it is
	  not necessary that all users store the Visual Basic project in the same
	  directory name.
	
	RESULT: You can see a Mssccprj.scc file in C:\MyProjects.
	
	Now UserA and UserB have created the Visual Basic project locally. If UserA want
	to modify the forms, all he needs to do is check out the form with the project
	file and modify.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142823 INFO: Visual Basic Programmer's Guide to Visual SourceSafe
	
	  Q135995 FAQ: Visual SourceSafe Integration with Visual Basic 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbVBp 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
