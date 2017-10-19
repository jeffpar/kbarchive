---
layout: page
title: "Q161578: BUG: Duplicate Entries Appear in Open Database Dialog Box"
permalink: /kb/161/Q161578/
---

## Q161578: BUG: Duplicate Entries Appear in Open Database Dialog Box

	Article: Q161578
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe500bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, you may notice that duplicate database entries appear
	in the Open SourceSafe Database dialog box. These entries contain identical path
	references and have a ~x appended to the end of the database name (where x is
	some integer). The following are examples of this type of duplicate entry:
	
	  Database Name                   Path
	  ===================             =================
	  \\RIGEL\PHYDEAUX\               \\RIGEL\PHYDEAUX\ 
	  \\RIGEL\PHYDEAUX\~1             \\RIGEL\PHYDEAUX\ 
	  \\RIGEL\PHYDEAUX\~2             \\RIGEL\PHYDEAUX\ 
	  \\RIGEL\PHYDEAUX\~3             \\RIGEL\PHYDEAUX\ 
	
	CAUSE
	=====
	
	The problem occurs under the following two conditions:
	
	Condition 1
	
	All of the following three circumstances must exist:
	
	1. You added a database to the Open SourceSafe Database dialog box by typing in
	  the path to the SRCSAFE.INI instead of locating the file with the Browse
	  command.
	
	2. The database that you added is located on a network drive.
	
	3. You start the Visual SourceSafe Explorer by using the -s switch and pointing
	  it to the database that you added.
	
	Condition 2
	
	1. You start the Visual SourceSafe Explorer using the -s switch and pointing it
	  to a database that does not yet appear in the Open SourceSafe Database dialog
	  box. Each subsequent time you start the Visual SourceSafe Explorer using this
	  method, a new duplicate entry is added to the Open SourceSafe Database dialog
	  box.
	
	RESOLUTION
	==========
	
	If Condition 1 exists, use the Browse capabilities to locate the SRCSAFE.INI
	file instead of typing in the path.
	
	If Condition 2 exists, make sure that the database referenced through the -s
	switch already resides in the list of available databases.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Condition 1
	
	1. Open or switch to the Visual SourceSafe Explorer.
	
	2. On the File menu, click Open SourceSafe Database. Click Browse.
	
	3. Type the complete UNC path to a SRCSAFE.INI file that resides on a server
	  into the File text box. For example:
	
	     \\RIGEL\PHYDEAUX\SRCSAFE.INI
	
	4. Click Open (this closes the Find Database dialog box). Click OK to close the
	  Browse for the Visual SourceSafe Database dialog box.
	
	5. Click Cancel to close the Open SourceSafe Database dialog box (this prevents
	  the new database reference from becoming the default). Close the Visual
	  SourceSafe Explorer.
	
	6. Create a shortcut or an icon with the following command line:
	
	  <drive letter>:\VSS\win32\SSEXP.EXE -s<UNC Path to newly added database>
	
	  where <drive letter> is the drive containing your Visual SourceSafe
	  installation and <UNC Path to newly added database> is the UNC path to
	  the Visual SourceSafe database added in steps 2, 3, and 4.
	
	7. Start the Visual SourceSafe Explorer using the new icon or shortcut several
	  times. Note that each time you start the Visual SourceSafe Explorer, an
	  additional database reference is added to the Open SourceSafe Database dialog
	  box.
	
	Condition 2
	
	1. Open or switch to the Visual SourceSafe Explorer.
	
	2. On the File menu, click Open SourceSafe Database. Remove all database entries
	  except the current database, and then close the Visual SourceSafe Explorer.
	
	3. Create a shortcut or icon with the following command line:
	
	   <drive letter>:\VSS\win32\SSEXP.EXE -s<UNC Path to alternate database>
	
	  where <drive letter> is the drive containing your Visual SourceSafe
	  installation and <UNC Path to alternate database> is the UNC path to
	  any Visual SourceSafe database (residing on a server) other than the current
	  default (that is, the one that was left in the Open SourceSafe Database
	  dialog box in step 2).
	
	4. Start the Visual SourceSafe Explorer using the new icon or shortcut several
	  times. Note that each time you start the Visual SourceSafe Explorer, an
	  additional database reference is added to the Open SourceSafe Database dialog
	  box.
	
	Additional query words: tilde
	
	======================================================================
	Keywords          : kbSSafe500bug 
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	
