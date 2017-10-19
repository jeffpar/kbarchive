---
layout: page
title: "Q191626: FIX: CComVariant &gt; and &lt; Operators Cause LNK2001 Errors"
permalink: /kb/191/Q191626/
---

## Q191626: FIX: CComVariant &gt; and &lt; Operators Cause LNK2001 Errors

	Article: Q191626
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbnokeyword kbCOMt kbVC600bug kbATL300bug kbVS600sp2 kbVS600SP1 kbVS600sp
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the "greater than" (>) or "less than" (<) comparison operators
	for CComVariant, you receive the following linker error:
	
	  error LNK2001: unresolved external symbol _VarCmp@12
	
	CAUSE
	=====
	
	You use VarCmp() to compare two VARIANTS. This function is supposed to take four
	arguments. The declaration for VarCmp() in Oleauto.h is incorrect, and it takes
	only three arguments. ATL also calls VarCmp() incorrectly with three arguments
	in CComVariant::operator < and CComVariant::operator >.
	
	RESOLUTION
	==========
	
	In OLEAUTO.H, change the declaration for VarCmp() from:
	
	  STDAPI VarCmp(LPVARIANT pvarLeft, LPVARIANT pvarRight, LCID lcid);
	
	to the following:
	
	  STDAPI VarCmp(LPVARIANT pvarLeft, LPVARIANT pvarRight, LCID lcid,
	                   ULONG dwFlags);
	
	In Atlbase.h, change the calls to VarCmp() by passing in a fourth argument of
	zero. Change the code from:
	
	  bool operator<(const VARIANT& varSrc) const
	  {
	
	     return VarCmp((VARIANT*)this, (VARIANT*)&varSrc,
	                   LOCALE_USER_DEFAULT)==VARCMP_LT;
	
	  }
	  bool operator>(const VARIANT& varSrc) const
	  {
	
	     return VarCmp((VARIANT*)this, (VARIANT*)&varSrc,
	                   LOCALE_USER_DEFAULT)==VARCMP_GT;
	
	  }
	
	to the following:
	
	  bool operator<(const VARIANT& varSrc) const
	  {
	
	     return VarCmp((VARIANT*)this, (VARIANT*)&varSrc,
	                   LOCALE_USER_DEFAULT, 0)==VARCMP_LT;
	
	  }
	  bool operator>(const VARIANT& varSrc) const
	  {
	
	     return VarCmp((VARIANT*)this, (VARIANT*)&varSrc,
	                   LOCALE_USER_DEFAULT, 0)==VARCMP_GT;
	
	  }
	
	You must do a "Rebuild All" to bring in the new changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	VarCmp() is implemented only in a newer version of Oleaut32.dll (2.30.4261 or
	later). If you use the CComVariant > or < operators, you must distribute
	Oleaut32.dll via Vbrun60.exe. For more information, refer to Redist.wri in the
	VC98\Redist directory on the Visual C++ CD.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbnokeyword kbCOMt kbVC600bug kbATL300bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
