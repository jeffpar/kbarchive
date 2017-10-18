---
layout: page
title: "Q278020: Visual C++ 6.0 Programmer's Guide Comments and Corrections"
permalink: kb/278/Q278020/
---

## Q278020: Visual C++ 6.0 Programmer's Guide Comments and Corrections

	Article: Q278020
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual C++ 6.0 Programmer's Guide ISBN 1-57231-866-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Visual C++ 6.0 Programmer's
	Guide, ISBN 1-57231-866-x.
	
	The following topics are covered:
	
	- Page 254: Code Sample Is Missing Include Statement
	
	- Page 335: MSChart.ocx Is Not A License-Free ActiveX Object
	
	MORE INFORMATION
	================
	
	Page 254: Code Sample Is Missing Include Statement
	--------------------------------------------------
	
	On page 254, in Listing 5-3, the code for DirList1.cpp will not compile, as it is
	missing an Include statement. Note that this omission was made in the
	DirList1.cpp file on the companion CD-ROM as well. If you try to build this
	program, you may receive the following error:
	
	irlist1.obj : error LNK2001: unresolved external symbol "void __stdcall 
	DDX_DateTimeCtrl(class CDataExchange *,int,class CTime &)" 
	(?DDX_DateTimeCtrl@@YGXPAVCDataExchange@@HAAVCTime@@@Z)
	.\Debug/Dirlist1.exe : fatal error LNK1120: 1 unresolved externals
	Error executing link.exe
	
	To correct the problem, the following statement should be added to the
	DirList1.cpp code.
	
	  #include "afxdtctl.h"
	
	
	Page 335: MSChart.ocx Is Not A License-Free ActiveX Object
	----------------------------------------------------------
	
	On page 335, MSChart.ocx is described as a license-free ActiveX object. This is
	not true. When trying to use this object, users will get a "design-time license"
	error. Users must have a valid Visual Basic license in order to use
	MSChart.ocx.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: VC DevBook Zaratian
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
