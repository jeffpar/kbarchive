---
layout: page
title: "Q250321: BUG: CString::Delete() Does Not Return the Correct Value"
permalink: /kb/250/Q250321/
---

## Q250321: BUG: CString::Delete() Does Not Return the Correct Value

	Article: Q250321
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbMFC kbString kbVC600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CString::Delete function returns the length of the original string instead
	of the length of the modified string.
	
	CAUSE
	=====
	
	The CString::Delete function initializes a local variable (nNewLength) with the
	length of the original string and does not change this variable to reflect the
	length of the changed string.
	
	Here is the source code for the Delete method of the CString class (reproduced
	from the Strex.cpp file, which is located in the Mfc/Src folder):
	
	  int CString::Delete(int nIndex, int nCount /* = 1 */)
	  {
	  	if (nIndex < 0)
	  		nIndex = 0;
	  	int nNewLength = GetData()->nDataLength;
	  	if (nCount > 0 && nIndex < nNewLength)
	  	{
	  		CopyBeforeWrite();
	  		int nBytesToCopy = nNewLength - (nIndex + nCount) + 1;
	
	  		memcpy(m_pchData + nIndex,
	  			m_pchData + nIndex + nCount, nBytesToCopy * sizeof(TCHAR));
	  		GetData()->nDataLength = nNewLength - nCount;
	  	}
	
	  	return nNewLength;
	  }
	
	RESOLUTION
	==========
	
	To work around this problem, call the GetLength method on the modified CString
	class to get its length:
	
	  CString str2 = "Hockey is best!";
	  str2.Delete(6, 3);
	  int n = str2.GetLength();
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a dialog box-based application by using MFC AppWizard.
	
	2. Place a button on the dialog box and create a handler for it. Copy the
	  following code to the button's handler:
	
	     //The following example demonstrates the use of CString::Delete:
	     CString str2 = "Hockey is best!";
	     TRACE("Length of the original string: %d\n", str2.GetLength());
	     int n = str2.Delete(6, 3);
	     TRACE("Actual length of the modified string: %d\n", str2.GetLength());
	     TRACE("Return value from Delete method: %d\n",n);   
	
	3. Compile and run the application under the Visual C++ debugger by pressing F5.
	  Click the button.
	
	You should see in the output window that the return value from the Delete method
	is the length of the original string, not the length of modified string.
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: CString delete length return
	
	======================================================================
	Keywords          : kbMFC kbString kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
