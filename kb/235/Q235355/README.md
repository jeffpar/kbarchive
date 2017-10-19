---
layout: page
title: "Q235355: PRB: CMonthCalCtl::GetCurSel(CTime) Returns Wrong Value"
permalink: /kb/235/Q235355/
---

## Q235355: PRB: CMonthCalCtl::GetCurSel(CTime) Returns Wrong Value

	Article: Q235355
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbDateTime kbMFC kbMonthCalCtrl kbVC600 kbDSupport kbGrpDSMFCATL
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
	
	When you use the CMonthCalCtrl::GetCurSel(CTime) to get the date selected from
	the Month Calendar Common control, the date in the CTime class is incorrect.
	
	CAUSE
	=====
	
	MFC's implementation of CMonthCalCtrl::GetCurSel() for the CTime class calls
	SendMessage(MCM_GETCURSEL, &sysTime) where sysTime is a SYSTEMTIME
	structure. The MCM_GETCURSEL message does not fill in the hours, minutes, and
	seconds part of the sysTime Structure with valid values. However, the
	constructor for CTime class takes these values into consideration, so the date
	in CTime class is incorrect.
	
	RESOLUTION
	==========
	
	The workaround is to use the CMonthCalCtrl::GetCurSel(SYSTEMTIME*) version of
	GetCurSel for this class to get the correct date. The code will look like the
	following example:
	
	     SYSTEMTIME sysTime;
	
	     m_MonthCal.GetCurSel(&sysTime);
	
	     sysTime.wHour = sysTime.wMinute = sysTime.wSecond =    sysTime.wMilliseconds = 0;
	    
	     CTime l_time(sysTime);
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbDateTime kbMFC kbMonthCalCtrl kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
