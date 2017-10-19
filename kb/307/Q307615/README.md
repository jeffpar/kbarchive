---
layout: page
title: "Q307615: FIX: Published Visual Component Manager Components Not Saved"
permalink: /kb/307/Q307615/
---

## Q307615: FIX: Published Visual Component Manager Components Not Saved

	Article: Q307615
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbGrpDSVBDB kbDSupport
	Last Modified: 18-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Component Manager (VCM) is a Visual Studio add-in that allows you to
	store reusable components in a repository database. The Visual Basic VCM add-in
	contains three menu options to extract stored components from the repository:
	
	- Add to project
	- Open
	- Save to disk
	
	When you use any of these three options on workstations that have the SQL Server
	2000 version of the Microsoft Repository, you cannot retrieve the components,
	and no files are saved locally. The process fails silently on Visual Studio 6.0
	Service Pack 4 (SP4) or earlier. In Visual Studio 6.0 Service Pack 5, you
	receive the following error message:
	
	  This component does not contain any reusable files
	
	CAUSE
	=====
	
	The new Microsoft Repository component (Repodbc.dll), which is installed with
	SQL Server 2000, is not compatible with the original Visual Studio 6.0 release
	of Visual Component Manager.
	
	
	RESOLUTION
	==========
	
	This problem has been resolved in Visual Studio 6.0 Service Pack 5 with new
	versions of the Vcmagg.dll and Repvcm.dll files.
	
	After you install Service Pack 5, you can successfully publish components to and
	retrieve components from the VCM repository database. However, components that
	are published before you install Service Pack 5 are invalid and cannot be
	recovered.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 5 with the new versions
	of Vcmagg.dll and Repvcm.dll.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual Basic 6.0.
	
	2. Install SQL Server 2000.
	
	3. Open Visual Basic, and then open Visual Component Manager from the View menu.
	
	4. Right-click VCM in the left pane of the VCM window to create a new SQL Server
	  VCM repository database.
	
	5. Create or open a Visual Basic project.
	
	6. Right-click the project file in Project Explorer, and then click Publish in
	  the shortcut menu to publish the project to the VCM repository.
	
	7. In VCM, browse to the VCM folder where you stored the project. Right-click
	  the icon for the stored project, click Save to disk, and then select a local
	  destination folder. Notice that the process appears to succeed. However, when
	  you look in the destination folder, the stored project files do not exist.
	
	8. Install Visual Studio 6.0 Service Pack 5.
	
	9. Repeat step 7. Notice that the process fails with the above-mentioned error
	  message. When you look in the destination folder, the stored project files do
	  not exist.
	
	Workaround
	----------
	
	1. Install Visual Basic 6.0 Service Pack 5 and SQL Server 2000.
	
	2. Open Visual Basic, and then open Visual Component Manager from the View menu.
	
	3. Right-click VCM in the left pane of the VCM window to create a new SQL Server
	  VCM repository database.
	
	4. Create or open a Visual Basic project.
	
	5. Right-click the project file in Project Explorer, and then click Publish in
	  the shortcut menu to publish the project to the VCM repository. Notice that
	  the process succeeds and that the project files are stored in the destination
	  folder as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
