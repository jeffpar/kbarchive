---
layout: page
title: "Q156195: ADT2: Setup Wizard Fails to Create Disks Compressing Large File"
permalink: /kb/156/Q156195/
---

## Q156195: ADT2: Setup Wizard Fails to Create Disks Compressing Large File

{% raw %}

	Article: Q156195
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	When you try to create distribution disks by using the Setup Wizard that comes
	with the Microsoft Access Developer's Toolkit version 2.0, the disk images will
	not be created successfully if you include a file that is so large that it takes
	more than 9 compressed files. You may also receive the error message:
	
	  Can't create file.
	
	CAUSE
	=====
	
	The reason for this behavior is that the Setup Wizard creates compressed files
	in the following format:
	
	  mydb.md_
	  mydb.m2_
	  mydb.m3_
	  ...
	  mydb.m9_
	  mydb.m10_
	
	MS-DOS does not allow extensions that are greater than three characters for file
	names. Therefore, a file with an extension such as mydb.m10_ will cause the
	creation of the disk images to fail.
	
	RESOLUTION
	==========
	
	You can edit the code in the Setupwiz.mdb so that the Setup Wizard can create
	compressed files in the following format:
	
	  mydb.md_
	  mydb.2_
	  mydb.3_
	  mydb.4_
	  ...
	  mydb.10_
	
	To modify the code in the Setupwiz.mdb, follow these steps:
	
	1. Open Setupwiz.mdb while holding down the SHIFT key.
	
	2. Open any module in Design view.
	
	3. On the Edit menu, click Find to bring up the Find dialog box. In the Find
	  What box, type "_" and in the Search option box, select Loaded modules, and
	  then click OK. This should bring the pointer to the following line in the
	  module zws_Setup:
	
	  stFileDest = Left$(stDest, Len(stDest) - 2) & Format$(cChunk) & "_"
	
	4. In the line, replace the - 2 with - 3.
	
	5. Save the module and close Setupwiz.mdb.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access Developer's
	Toolkit version 2.0. This problem no longer occurs in Microsoft Access
	Developer's Toolkit for Windows 95.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a very large mdb file with a size of 70 megabytes (MB) or more, or
	  include several mdb files for distribution.
	
	2. Use the Setup Wizard to create distribution disks.
	
	  Note that if more than 9 compressed files are needed to create the
	  distribution disks, the Setup Wizard fails to create the disk images.
	
	Additional query words: ADT can t create file
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
