---
layout: page
title: "Q217201: FIX: CControlBar Crashes When TOOLTIPTEXT.lpszText Is ID for SR"
permalink: kb/217/Q217201/
---

## Q217201: FIX: CControlBar Crashes When TOOLTIPTEXT.lpszText Is ID for SR

	Article: Q217201
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMFC kbToolbar kbToolTip kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation occurs with the CControlBar::WindowProc() file when
	executing the statement:
	
	  if ((pNMHDR->code == TTN_NEEDTEXTA && (!pTTTA->lpszText || !*pTTTA->lpszText)) ||
	  (pNMHDR->code == TTN_NEEDTEXTW && (!pTTTW->lpszText || !*pTTTW->lpszText)))
	
	This statement is at line 457 in the Barcore.cpp file.
	
	CAUSE
	=====
	
	The assertion occurs in the preceding code if the lpszText member of the TOOLTIP
	structure is an identifier of a string resource. In this case, the code is
	trying to dereference a pointer; however, *pTTTA->lpszText is "pointing" to a
	value instead of a valid memory location.
	
	RESOLUTION
	==========
	
	Copy the address of the buffer that contains the text to the lpszText TOOLTIP
	member. If the text to appear as tool tip text is stored as a string resource,
	use the LoadString function to load the string from the string table into a
	buffer and assign that buffer to the lpszText TOOLTIP member.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This bug was introduced in Visual C++ version 6.0 with the reimplementation of
	the CControlBar::WindowProc() function.
	
	REFERENCES
	==========
	
	See the document titled "The TOOLTIPTEXT Structure" in the online documentation
	included with Visual C++ 6.0 for more information about how to initialize the
	members of the TOOLTIPTEXT structure.
	
	Additional query words: TTN_NEEDTEXTA TTN_NEEDTEXTW tooltip control
	
	======================================================================
	Keywords          : kbservicepack kbMFC kbToolbar kbToolTip kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
