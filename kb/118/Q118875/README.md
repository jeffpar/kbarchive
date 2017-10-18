---
layout: page
title: "Q118875: FIX: ClassWizard &quot;Bind&quot;, &quot;Update Columns&quot; Buttons Disabled"
permalink: kb/118/Q118875/
---

## Q118875: FIX: ClassWizard &quot;Bind&quot;, &quot;Update Columns&quot; Buttons Disabled

	Article: Q118875
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbGrpDSToolskbb
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In ClassWizard, choose the Add Class command button. From the Add Class dialog
	box, select the Import Class command button. In the Import Class dialog box,
	type the name of a CRecordset-derived class that you would like to import,
	specifying the header and implementation files from which to import.
	
	
	ClassWizard then imports the class so that you can see object IDs and members,
	but so that you are not able to bind variables ("Bind All") or update column
	information ("Update Columns") from the "Member Variables" tab; this is because
	ClassWizard is not aware that the CRecordset-derived class is associated with a
	database.
	
	CAUSE
	=====
	
	ClassWizard does not copy the database information from the .CLW file associated
	with the imported class. That file contains a "DB" section that tells
	ClassWizard to look for data source information. If the DB section is missing,
	ClassWizard does not enable the Bind All and Update Columns command buttons.
	
	RESOLUTION
	==========
	
	To work around this problem, copy the DB section from the .CLW file that is
	associated with the imported CRecordset-derived class to the .CLW file of the
	current project. For the Enroll sample, the section should look like this:
	
	  [DB:CSectionSet]
	  DB=1
	  ColumnCount=6
	  Column1=CourseID,1,8,1
	  Column2=SectionNo,1,4,1
	  Column3=InstructorID,1,8,1
	  Column4=RoomNo,1,10,1
	  Column5=Schedule,1,24,1
	  Column6=Capacity,5,2,1
	
	The DB section for the imported CRecordset-derived class contains the "DB=1" line
	as shown and column count and name lines reflecting the correct values for that
	class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem no longer occurs in Microsoft Visual C++, version
	5.0 or later because the Import Class command no longer exists (you can no
	longer import a class from an existing source file).
	
	Additional query words: crecordset import add
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbGrpDSTools kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,2.0,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
