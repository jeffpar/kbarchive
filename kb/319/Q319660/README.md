---
layout: page
title: "Q319660: COleVariant Constructor Doesn't Correctly Initialize Its Members"
permalink: kb/319/Q319660/
---

## Q319660: COleVariant Constructor Doesn't Correctly Initialize Its Members

	Article: Q319660
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COleVariant constructor, COleVariant(long lSrc, VARTYPE vtSrc = VT_I4), does
	not correctly initialize its members. As a result, when you call the
	CDaoTableDef::CreateField member function, you receive a CDaoException exception
	with the following call stack:
	
	  
	
	  KERNEL32.DLL!RaiseException
	  msvcr70.dll!_CxxThrowException
	  DaoBug.exe!AfxThrowDaoException
	  DaoBug.exe!AfxDaoCheck
	  DaoBug.exe!CDaoTableDef::CreateField
	
	CAUSE
	=====
	
	This problem occurs because the constructor initializes members based on an
	uninitialized member. As a result, the vt member of COleVariant may be
	initialized to the VT_UI4 or the VT_HRESULT variant type instead of the VT_I4
	variant type.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Visual Studio .NET service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version        Size     File name   Platform
	  ---------------------------------------------------------------
	  26-Mar-2002  10:04   7.00.9480.0    974,848  Mfc70.dll   x86
	  26-Mar-2002  09:19   7.00.9480.0  1,933,312  Mfc70d.dll  x86
	  26-Mar-2002  09:53   7.00.9480.0    964,608  Mfc70u.dll  x86
	  26-Mar-2002  09:22   7.00.9480.0  1,927,680  Mfc70ud.dll x86
	  28-Mar-2002  06:01   none           850,944  VC_MFC.msm  none
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
