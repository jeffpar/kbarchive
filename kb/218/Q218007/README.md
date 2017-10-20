---
layout: page
title: "Q218007: PRB: IDE May Skip Some TRACE Statements Sent in Quick Succession"
permalink: /kb/218/Q218007/
---

## Q218007: PRB: IDE May Skip Some TRACE Statements Sent in Quick Succession

{% raw %}

	Article: Q218007
	Product(s): Microsoft C Compiler
	Version(s): 2000,5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbDebug kbOSWin2000 kbVC500 kbVC600 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0sp3, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0sp3, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While debugging a Visual C++ application, if TRACE statements are sent to the
	output window consecutively in quick succession, the IDE tends to skip some
	statements.
	
	CAUSE
	=====
	
	When TRACE statements are sent in quick succession, the IDE buffers the strings.
	It tries to keep the screen output current, so in the event of too many calls to
	OutputDebugString to accomplish that, some lines are skipped.
	
	RESOLUTION
	==========
	
	Currently, there is no workaround to this problem. _RPT() and the SDK sample
	DBMON, which is a similar utility, could be used if all the consecutive TRACE
	statements need to be captured in the output window, while debugging.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This scenario can be easily reproduced using a combination of TRACE statements
	as shown below:
	
	  int i, j, k;
	  TRACE(_T("Start TRACE Check\n"));
	  for (i=0; i<20; i++)
	  {
	     TRACE(_T("Outer Loop %d\n"), i);
	      for (j=0; j<20; j++)
	      {
	        TRACE(_T("\tInner Loop %d\n"), j);
	        for (k=0; k<20; k++)
	        {
	          TRACE(_T("\t\tCore Loop %d\n"), k);
	        }
	     }
	  }
	
	  TRACE(_T("End TRACE Check\n"));
	
	When trying to debug an application with the above code, the output window will
	resemble the following code snippet:
	
	      Inner Loop 3
	          Core Loop 1
	          Core Loop 2
	          Core Loop 3
	          Core Loop 4
	          Core Loop 5
	          Core Loop 6
	          Core Loop 18
	          Core Loop 19
	          Core Loop 3
	          Core Loop 4
	          Core Loop 5
	          Core Loop 6
	      Inner Loop 14
	          Core Loop 1
	
	The output window does not consistently show the same pattern when skipping TRACE
	statements; rather, it shows different patterns depending on machine speed and
	number of iterations.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Vidyanand
	N. Rajpathak, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbDebug kbOSWin2000 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,5.0sp3,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
