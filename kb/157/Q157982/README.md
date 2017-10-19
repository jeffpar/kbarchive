---
layout: page
title: "Q157982: INFO: Understanding Promotions"
permalink: /kb/157/Q157982/
---

## Q157982: INFO: Understanding Promotions

	Article: Q157982
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes staged development in Visual SourceSafe.
	
	Every commercial software program goes through different phases in its life
	cycle. For instance, a typical program might begin in a development phase for
	code writing, move into a Q/A phase for testing, and finally reach a production
	version for official release. In some companies, the movement through these
	"stages" is so informal that it's barely recognized. In others, systematic
	controls exist to control the life cycle of an application from inception to
	release. But, in any environment, the program must progress through stages, and
	when a version control or configuration management tool is used, that tool must
	ensure that the right people are working with the right version of the
	software.
	
	Many version control systems use the phrase "promotion modeling" to describe this
	aspect of their functionality. However, Visual SourceSafe does not use the words
	"promotion" or "life cycle" at all. There are two reasons that the Visual
	SourceSafe designers avoided this terminology in their product:
	
	1. There is no accepted industry definition of the "promotion" feature. For
	  instance, PVCS by Intersolv "promotes" files by labeling them; CCC:Manager by
	  Softool "promotes" a configuration by copying it into a directory.
	
	2. Life-cycle management is determined by the needs of the individual company.
	  Products that "hard-code" a specific methodology are often viewed as
	  restrictive, forcing all users to conform to the model preferred by the
	  program designers.
	
	For these reasons, rather than providing a specific "promotion" feature,
	SourceSafe provides flexible project-level branching, and file and project
	labeling schemes that can be used to implement a variety of life cycle
	methodologies. This article describes a few specific scenarios, and how they can
	be handled by SourceSafe.
	
	MORE INFORMATION
	================
	
	Directory-based Promotion
	-------------------------
	
	Directory-based promotion, analogous to "promotion" in CCC:Manager, is the
	simplest case, but also the most common. For example, you would create a
	directory for use in testing. You might give only the project manager the right
	to create files in this directory, and only the Q/A department the right to read
	these files. When a project is ready for its first round of testing, the project
	manager would GET the Project into the testing directory. The Q/A team would
	then work with that code exclusively. Note that SourceSafe allows you to GET
	either an entire project or a specific file. Therefore, if different files are
	approved for testing individually, each file can be retrieved into the testing
	directory at the appropriate time.
	
	Advantages of this system are that it is very simple, it gives each group access
	to the appropriate files, it does not require Q/A people to use SourceSafe at
	all, it provides for tight security, etc. However, two notable disadvantages are
	that the directory itself is not under version control. Therefore, there is no
	automatic way to go back to an earlier version of the testing directory. Second,
	the testing people cannot, themselves, make any changes to the code. For many
	companies, these disadvantages are small or irrelevant. However, companies
	needing to track their incremental stages more closely need to use some of
	SourceSafe's more advanced features.
	
	File and Project Labeling
	-------------------------
	
	Visual SourceSafe uses file and project labeling as a way to record the different
	stages that a program goes through. This method is analogous to the "promotion"
	mechanism in PVCS. A "label" in SourceSafe is a named snapshot in time. For
	instance, you might "label" a project with the label "Test." This does not
	freeze or stop development progress. Rather, it associates the string "Test"
	with this particular moment in the life of the project. At any time in the
	future, you can ask SourceSafe to retrieve version "Test" of this project, and
	it will give you the files that were in the project at the time when you applied
	the label. Labels can also be applied to an individual file. Therefore, you
	might label one file "Test" today, and another file "Test" tomorrow.
	
	Labeling is often used in conjunction with directories as a way of recording when
	a particular stage was released. For instance, you might label a project Release
	2.01 and then GET the project into a production directory. Later, if that
	directory has been destroyed or altered, you can recreate it simply by telling
	SourceSafe to GET version Release 2.01 of the project.
	
	File and project labeling goes a step beyond directories, because it creates a
	permanent record of what files made up any particular stage. However, it still
	does not allow for parallel development. In other words, simultaneous changes
	cannot be made on the development and testing configurations of a program. For
	that level of flexibility, project-level branching is required.
	
	Project Level Branch and Merge
	------------------------------
	
	A complete discussion of project-level branching is beyond the scope of this
	article. The issue is explained in detail in the Visual SourceSafe
	documentation. However, it should be mentioned how some companies use
	SourceSafe's unique branching capabilities to control promotion in this flexible
	way.
	
	Suppose the project $/Word is in development and reaches the testing stage. At
	this point, the project manager creates a static branch project called
	$/WordTest. (This is a one-step operation: in SourceSafe terminology, you Share
	an old version of the project.) The developers continue to work on $/Word and
	the Q/A department works on $/WordTest. As in the above methods, the Q/A
	department is working on its own frozen copy and the developers continue to work
	on the original project. Unlike the above methods, however, the testing team can
	begin to make changes to its own project, which is tracked separately. Using the
	Visual SourceSafe project security system, you can ensure that the developers
	cannot modify the $/WordTest project and the testers have no access to the
	original $/Word project.
	
	Changes can be "migrated" from one project to another in one of two ways: You can
	delete a file from one project and then re-Share it from the other. This is
	analogous to standard CCC:Manager migration, which simply replaces one file with
	another. Or you can merge a file from one project to the other, which brings
	together both sets of changes.
	
	Branching is always a complex topic and merging may involve conflicts. For the
	needs of most corporations, creating and maintaining multiple branches is
	overkill. However, for companies needing to control and develop multiple stages
	of a single application, project-level branching provides a complete solution
	with powerful security and flexibility.
	
	Others
	------
	
	The above three methods are all "idealized" cases. While many companies can use
	them exactly as described, many others will need to use combinations of
	directories, project labels, branching, and other Visual SourceSafe features.
	The SourceSafe feature set is designed to accommodate as many different
	environments and methodologies as possible, while maintaining the elegance and
	ease of use of the product's core functionality.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
