---
layout: page
title: "Q190471: BUG: CTime::Format Returns Wrong Date If the Date Field Is NULL"
permalink: kb/190/Q190471/
---

## Q190471: BUG: CTime::Format Returns Wrong Date If the Date Field Is NULL

	Article: Q190471
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The string 01/01/1970 or its equivalent, depending on the time zone, is returned
	by CTime::Format() when the CTime object is NULL. It is expected to return a
	blank string when the CTime object is NULL.
	
	CAUSE
	=====
	
	CTime only measures dates after 12:00 a.m. 01/01/1970 GMT.
	
	CTime::Format() makes a call to localtime(), which is expected to return a blank
	string when the date is null or invalid. Instead, it returns the date 12:00 a.m.
	01/01/1970 GMT sufficiently compensated with respect to the time zone settings
	of the computer.
	
	For example, if the time zone is set to Eastern (US and Canada only), then the
	date returned is 12/31/69 because it is 5 hours behind GMT.
	
	RESOLUTION
	==========
	
	Insert an "If condition" to check whether the CTime object is NULL. If it is,
	then do not make a call to CTime::Format(). For example:
	
	     CTime newVar;
	     // Other code to manipulate CTime
	     if (newVar == NULL)
	       cout << "Date: 'Date is Blank'" << endl;
	     else
	       cout << "Date:" << newVar.Format("%m/%d/%y")<<endl;
	     // Remaining code
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Win32 Console Application.
	
	2. Type in the following sample code:
	
	        #include <iostream.h>
	        #include <afx.h>
	        int main(void)
	        {
	           CTime newVar = NULL;
	           cout<< "CTime::Format():" << newVar.Format("%m/%d/%y") << endl;
	           return 0;
	        }
	
	3. On the Project menu, click Settings, click the General tab and select Use
	  MFC.
	
	4. The output for Eastern Time zone (US and Canada only) can be viewed as
	  12/31/69.
	
	Additional query words: kbvc500bug kbVC600bug kbDatabase kbMFC
	
	======================================================================
	Keywords          : kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
