---
layout: page
title: "Q117607: FIX: Common Dialog Classes Don't Update DDX Member Variables"
permalink: kb/117/Q117607/
---

## Q117607: FIX: Common Dialog Classes Don't Update DDX Member Variables

	Article: Q117607
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC100bug kbVC150bug kbVC200fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use classes derived from the common dialog classes (for example
	CFileDialog) in the MFC, DDX member variables do not get updated when you choose
	the "OK" button. The reason for this is that the base class "OnOK()", provided
	for these classes, does not call UpdateData(). For example, CFileDialog::OnOK()
	does not call UpdateData().
	
	RESOLUTION
	==========
	
	The workaround for this is to override OnOK() in your derived class and call
	UpdateData(). See CDialog::OnOK() in <drive>:\MSVC\MFC\SRC\DLGCORE.CPP for
	an example of how to set up the code and message-map entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MFC, versions 2.0 and 2.5.
	This problem was corrected in MFC version 3.0, included with Visual C++ version
	2.0.
	
	Additional query words: ok button CPrintDialog CColorDialog CFontDialog 1.00 1.50 2.00 2.50 2.10 kbNoUpdate
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC100bug kbVC150bug kbVC200fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
