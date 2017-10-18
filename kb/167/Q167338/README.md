---
layout: page
title: "Q167338: BUG: Format(&quot;%D&quot;) Fails for COleDateTime and COleDateTimeSpan"
permalink: kb/167/Q167338/
---

## Q167338: BUG: Format(&quot;%D&quot;) Fails for COleDateTime and COleDateTimeSpan

	Article: Q167338
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbcode kbVC500bug
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COleDateTime::Format("%D") fails to return the day in the object.
	
	COleDateTimeSpan::Format("%D") fails to return the total days.
	
	RESOLUTION
	==========
	
	Instead of using Format use COleDateTime::GetDay() or
	COleDateTimeSpan::GetDays() to get the day value and use CString::Format to put
	it into a CString. The sample code below illustrates this using CString::Format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	Sample Code
	-----------
	
	     COleDateTimeSpan span;
	     // Set to 1 day 2 hours 3 minutes and 4 seconds
	     span.SetDateTimeSpan(1,2,3,4);
	
	     CString str;
	     str = span.Format("%D;%H;%M;%S"); // BUG:Day(s) is not found in CString
	
	     // Following is equivalent to the above
	     str.Format("%02d;%s", span.GetDays(),
	                 (LPCTSTR)span.Format("%H;%M;%S"));
	
	     COleDateTime time;
	     time = COleDateTime::GetCurrentTime();
	     str = time.Format("%D;%H;%M;%S"); // BUG:Day is not found in CString
	
	     // Following is equivalent to the above
	     str.Format("%02d;%s", time.GetDay(),
	                (LPCTSTR)time.Format("%H;%M;%S"));
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation
	
	
	Additional query words: kbVC420bug kbDSupport COleDateTime COleDateTimeSpan Format Day
	
	======================================================================
	Keywords          : kbcode kbVC500bug 
	Technology        : kbAudDeveloper kbMFC
	Version           : 4.2
	Issue type        : kbbug
	
	=============================================================================
	
