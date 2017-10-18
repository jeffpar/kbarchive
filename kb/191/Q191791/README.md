---
layout: page
title: "Q191791: INFO: VB 6.0 Readme Part 14: Visual Component Manager"
permalink: kb/191/Q191791/
---

## Q191791: INFO: VB 6.0 Readme Part 14: Visual Component Manager

	Article: Q191791
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbreadme kbRegistry kbVBp kbVBp600 kbVS600
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
	
	Part 1.  Important Issues - Please Read First!
	Part 2.  Data Access Issues and DataBinding Tips
	Part 3.  Control Issues
	Part 4.  Language Issues
	Part 5.  Samples Issues
	Part 6.  Wizard Issues
	Part 7.  Error Message Issues
	Part 8.  WebClass Designer Issues
	Part 9.  DHTML Page Designer Issues
	Part 10. Extensibility issues
	Part 11. Miscellaneous Issues
	Part 12. Microsoft Transaction Server (MTS) Issues
	Part 13. Dictionary Object
	Part 14. Visual Component Manager
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	Known Problems in Visual Component Manager:
	
	Related Files Tab (Component Properties Dialog Box)" Topic Incorrect
	--------------------------------------------------------------------
	
	Visual Component Manager User Interface Reference: The topic "Related Files Tab
	(Component Properties Dialog Box)" incorrectly states that the tab is used to
	display and enter files that are related to the selected component. In fact,
	none of the information displayed on this tab can be modified. You can add
	related files to a component only when publishing or re-publishing the
	component. For more information, search online, with Search titles only
	selected, for "Publishing Components" in the MSDN Library Visual Studio 6.0
	documentation.
	
	Removing Repository 1.0 Registry Keys
	-------------------------------------
	
	If you installed VCM 5.0 (previously available for Web download) you will have
	the following Windows Registry keys setup. They were necessary for VCM 5.0 and
	the 1.0 version of the Repository. If you find the following Registry entries
	then it is safe to remove them and may, in fact, improve VCM 6.0 performance:
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\Repository\CacheMaxAnnProps
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\Repository\CacheMaxObjects
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\Repository\ CacheRelshipMaxCollections
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\Repository\CacheRelshipMaxRows
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\Repository\MaxRowCacheAge
	
	Adding Repository Tables to an Existing .mdb File
	-------------------------------------------------
	
	If you try to open an existing .mdb file from within VCM that is not a repository
	database (i.e., it does not contain the repository structure/tables), you will
	be asked if you want the repository tables added to the database. You should not
	do this for normal use; the repository should generally be in a separate
	database. This will work, but it can take as long as 10 minutes to create the
	repository structure in an existing .mdb file.
	
	To create a brand new .mdb file containing the repository structure, right- click
	in the folder outline, click Repository, click New, and then enter the name of
	the file you want to create.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q170164 INFO: VB 6.0 Readme Part 1: Important Issues - Read First!
	
	  Q170163 INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170162 INFO: VB 6.0 Readme Part 3: Control Issues
	
	  Q170161 INFO: VB 6.0 Readme Part 4: Language Issues
	
	  Q170160 INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q190046 INFO: VB 6.0 Readme Part 6: Wizard Issues
	
	  Q170158 INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191790 INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	======================================================================
	Keywords          : kbreadme kbRegistry kbVBp kbVBp600 kbVS600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
