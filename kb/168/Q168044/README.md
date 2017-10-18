---
layout: page
title: "Q168044: FIX: ClassWizard May Fail to Derive a Class from CRecordset"
permalink: kb/168/Q168044/
---

## Q168044: FIX: ClassWizard May Fail to Derive a Class from CRecordset

	Article: Q168044
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deriving a class from CRecordset, ClassWizard may send the following error
	message:
	
	  The file names (<path>MyFile.h, <path>MyFile.cpp) for the class
	  "CMyFile" do not exist or are invalid file names.
	
	CAUSE
	=====
	
	This problem occurs if the current directory is changed sometime during the
	derivation process. For example, if you are using a DSN for an Access data
	source, but you haven't specified the path to the MDB file. This causes a dialog
	box to appear so that you can navigate to the MDB file. When the dialog box is
	closed, the current directory is not reset to the project directory. The .h and
	.cpp files are created in the current directory, where the MDB file is located.
	
	RESOLUTION
	==========
	
	Use a DSN that consists of a qualified path to the database file or directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	Additional query words: kbVC500bug kbVC600bug kbmfc kbdatabase kbodbc kbwizard kbtools
	
	======================================================================
	Keywords          : kberrmsg kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
