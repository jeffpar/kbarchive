---
layout: page
title: "Q152781: FIX: Incorrect Return Values from COleDateTime Members"
permalink: /kb/152/Q152781/
---

## Q152781: FIX: Incorrect Return Values from COleDateTime Members

{% raw %}

	Article: Q152781
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbCOMt kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the COleDateTime members (SetDate, SetTime, and SetDateTime), the
	return value indicates failure even though the call is successful. This may
	cause code that checks the return value to believe incorrectly that the call
	failed.
	
	CAUSE
	=====
	
	This behavior is caused by a problem in the COleDateTime code. COleDateTime
	defines the following enumeration:
	
	      enum DateTimeStatus
	      {
	          valid = 0,
	          invalid = 1,    // Invalid date (out of range, etc.)
	          null = 2,       // Literally has no value
	      };
	
	The problem occurs because SetDate, SetTime, and SetDateTime all return 'valid'
	if successful. However 'valid' is defined to be 0 in the DateTimeStatus
	enumeration, which translates to a Boolean FALSE. The code should check for
	success and return TRUE or FALSE.
	
	RESOLUTION
	==========
	
	Call COleDateTime::GetStatus after each call to SetDate, SetTime, or
	SetDateTime. Then compare the value returned by GetStatus() against 'valid' to
	check for success. The "More Information" section of this article provides an
	example.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the Visual C++ 4.2b
	technology update.
	
	MORE INFORMATION
	================
	
	Because of the problem outlined previously in this article, code that checks the
	return value from these functions may believe that a failure has occurred when
	in fact the Date/Time was set correctly. For example, the following code will
	ASSERT even though the call was successful:
	
	     COleDateTime myodt;
	     VERIFY(myodt.SetDateTime(96,1,1,10,45,0));
	
	To work around this problem, test the success of the call by calling the
	COleDateTime::GetStatus() member. Compare the value returned by GetStatus()
	against 'valid' to check for success as shown in this example:
	
	      COleDateTime myodt;
	      myodt.SetDateTime(95,6,1,23,45,0);
	      VERIFY(myodt.GetStatus() == COleDateTime.valid);
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbole kbCOMt kbMFC kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
