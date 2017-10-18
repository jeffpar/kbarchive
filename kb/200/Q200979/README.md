---
layout: page
title: "Q200979: FIX: File Corruption Occurs When Shadowed"
permalink: kb/200/Q200979/
---

## Q200979: FIX: File Corruption Occurs When Shadowed

	Article: Q200979
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600fix _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File(s) in the shadow folder are corrupted.
	
	CAUSE
	=====
	
	A carriage return in the file(s) are added only as a carriage return, rather
	than as a carriage return and line feed pairs.
	
	This happens when a shadow directory is set for a project and the shadowed files
	are viewed before they are checked out and checked backed into Visual SourceSafe
	(VSS).
	
	RESOLUTION
	==========
	
	Checking the file(s) out, and then checking them back in should resolve this
	problem once it has occurred.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Visual SourceSafe 4.0, 4.0a, and
	5.0. This bug has been corrected in Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new .txt file with a few lines of text separated by carriage
	  returns.
	
	2. Create a new project in the VSS Explorer.
	
	3. Set a working folder for the project.
	
	4. Add a file to the project.
	
	5. Close VSS Explorer.
	
	6. Run VSS Administrator.
	
	7. Select Tools->Options->Shadow Folders tab.
	
	8. Select BROWSE beside the "Set shadow folder for project:" edit box and select
	  the project created in Step 2.
	
	9. Click BROWSE beside the "Set shadow folder to:" edit box to select the
	  location for the Shadow Folder.
	
	10. Add "\test" to the end of the path in the "Name:" edit box.
	
	11. Click OK.
	
	12. Click Yes when prompted to create the new folder.
	
	13. In the options dialog box set "File Date/Time" to 'Check-In'.
	
	14. Click OK.
	
	15. Close VSS Administrator.
	
	16. Open the file in the shadow folder with a text editor. You can see an
	  undefined character where a carriage return and line feed should be.
	
	REFERENCES
	==========
	
	  Q138344 HOWTO: Set up a Shadow Dir in Visual SourceSafe Administrator
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600fix _IK 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
