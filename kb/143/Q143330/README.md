---
layout: page
title: "Q143330: FIX: Messagebox Shows in DDX_FieldCBString &amp; DDX_FieldLBString"
permalink: kb/143/Q143330/
---

## Q143330: FIX: Messagebox Shows in DDX_FieldCBString &amp; DDX_FieldLBString

	Article: Q143330
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map a control to a recordset variable by using DDX_FieldCBString or
	DDX_FieldLBString, the following message may appear in a messagebox when
	UpdateData() is called:
	
	  Please enter no more than 0 characters.
	
	CAUSE
	=====
	
	The DDX_FieldCBString and DDX_FieldLBString functions incorrectly check the
	length of the destination CString variable. The problem exists on lines 420 and
	509 in Daoview.cpp. The code is performing the following check;
	
	     if (nLen > value.GetAllocLength()) ...
	
	It is possible that the buffer for the string has been emptied by a call to
	AddNew() or SetFieldNull(). This would cause the CString value to be empty,
	which causes the messagebox to be displayed.
	
	RESOLUTION
	==========
	
	Create a new function by copying the DDX_FieldCBString or DDX_FieldLBString from
	Daoview.cpp located in the \Msdev\Mfc\Src directory. In the new function, add an
	additional parameter to be used as the maximum allowable length (the size of the
	field). You'll then need to replace the DDX call in your DoDataExchange()
	function with the new function you created.
	
	For the DDX_FieldCBString function, change the function prototype to something
	like this:
	
	     void DDX_MyFieldCBString(CDataExchange* pDX, int nIDC, CString& value,
	     CDaoRecordset* pRecordset, int nMaxFieldLength)
	
	Replace these lines:
	
	     if (nLen > value.GetAllocLength())
	        AfxFailMaxChars(pDX, value.GetAllocLength());
	     // get known length
	     ::GetWindowText(hWndCtrl, value.GetBuffer(0), nLen+1);
	
	with these lines:
	
	     if (nLen > nFieldLength)
	        AfxFailMaxChars(pDX, nFieldLength);
	     // get known length
	     ::GetWindowText(hWndCtrl, value.GetBuffer(nLen), nLen+1);
	
	Note that GetBuffer() is no longer receiving 0 but is using the value in nLen.
	
	For the DDX_FieldLBString() function, change the prototype to:
	
	     void DDX_MyFieldLBString(CDataExchange* pDX, int nIDC, CString& value,
	     CDaoRecordset* pRecordset, int MaxFieldLength)
	
	Replace these lines:
	
	     if (nLen > value.GetAllocLength())
	       AfxFailMaxChars(pDX, value.GetAllocLength());
	     ::SendMessage(hWndCtrl, LB_GETTEXT, nIndex,
	                   (LPARAM)(LPSTR)value.GetBuffer(0));
	
	with these lines:
	
	     if (nLen > nFieldLength)
	       AfxFailMaxChars(pDX, nFieldLength);
	     ::SendMessage(hWndCtrl, LB_GETTEXT, nIndex,
	                  (LPARAM)(LPSTR)value.GetBuffer(nLen));
	
	You will need to include a prototype for AfxFailMaxChars() in your code. Here's
	the prototype:
	
	     void _stdcall AfxFailMaxChars(CDataExchange* pDX, int nChars);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbMFC kbVC kbVC410fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
