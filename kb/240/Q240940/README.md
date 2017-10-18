---
layout: page
title: "Q240940: BUG: CTime::GetCurrentTime Returns Incorrect Date for CE 2.11"
permalink: kb/240/Q240940/
---

## Q240940: BUG: CTime::GetCurrentTime Returns Incorrect Date for CE 2.11

	Article: Q240940
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC600bug kbVS600bug kbLocalization kbOSWinCE211 kbDSupport kbGrpDSMFCATL
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following code returns an incorrect date when the time zone is set to a
	non-United States time, such as Singapore, Australia, Japan, or England:
	
	  CTime ctCur = CTime::GetCurrentTime();
	  CString csMsg;
	  csMsg.Format(_T("%d / %d / %d"), ctCur.GetYear(), ctCur.GetMonth() , ctCur.GetDay());	
	  AfxMessageBox(csMsg);
	
	This behavior occurs only on devices running Windows CE version 2.11. This
	behavior cannot be reproduced on the emulation or earlier versions of Windows CE
	2.0 or 2.01.
	
	CAUSE
	=====
	
	The data type (time_t) of the wce_GetTZBias() function's parameter pTZBiasSecs
	is not correct. The date type (time_t) is defined as "unsigned long". However,
	*pTZBiasSec can be negative. For example, if Beijing time is GMT-8, *pTZBiasSec
	should be -8*60*60.
	
	  static void wce_GetTZBias(time_t* pTZBiasSecs = NULL, int* pDSTBiasSecs = NULL)
	
	Thus, when the set time zone has a negative BiasSec, wce_GetTZBias returns a
	large number for pTZBiasSecs. Because it changed a negative int to an unsigned
	int, the wrong Date is returned for some time zones when calling
	CTime::GetCurrentTime or CTime::GetYear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From a device running Windows CE, click the Start menu, and click Settings,
	  Control Panel, and World Clock.
	
	2. Select Home City as Singapore (Singapore) and click OK.
	
	3. Using the Windows CE MFC AppWizard (exe), create a dialog-based application.
	
	4. Add a button to the dialog box and in the handler for the button's BN_CLICKED
	  message add the following code:
	
	  CTime ctCur = CTime::GetCurrentTime();
	  CString csMsg;
	  csMsg.Format(_T("%d / %d / %d"), ctCur.GetYear(), ctCur.GetMonth() , ctCur.GetDay());	
	  AfxMessageBox(csMsg);
	
	5. Build for H/PC Pro 2.11 and run the application on the device.
	
	6. Click the button on the dialog box.
	
	An incorrect date appears in the MessageBox.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: CTime, GetYear, GetTZBias, GetLocalTm, wce_GetTZBias
	
	======================================================================
	Keywords          : kbMFC kbVC600bug kbVS600bug kbLocalization kbOSWinCE211 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
