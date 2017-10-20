---
layout: page
title: "Q151446: FIX: Internal State of ControlBars Corrupted"
permalink: /kb/151/Q151446/
---

## Q151446: FIX: Internal State of ControlBars Corrupted

{% raw %}

	Article: Q151446
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The internal state of the controlbars is corrupted when controlbars are docked
	and undocked. The size of the Registry key or the .INI file grows when
	SaveBarState is a result of this corruption.
	
	CAUSE
	=====
	
	The code for managing the controlbar docking and undocking has a bug which does
	not correctly remove information from the data structures. None of this code can
	be overridden to fix the bug because it is undocumented private implementation
	of the MFC.
	
	RESOLUTION
	==========
	
	The sample code at the end of this article cleans up the state of these internal
	structures. The CleanUpControlBarState function cleans up the information in the
	CDockState object passed to it. When the function returns, the CDockState object
	has the clean information.
	
	Call this function with the present state of the controlbars, and use the
	information after calling CleanUpControlBarState.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	There are two ways to get information into a CDockState object:
	
	- Call the CDockState::LoadState to load the state of the controlbars from the
	  Registry or .INI file.
	
	- Use the CFrameWnd::GetDockState.
	
	To save the state to the Registry or .INI file, use CDockState::SaveState. Use
	CFrameWnd::SetDockState to set the state of the controlbars at run time.
	
	The following code was added to the Docktool sample. This code saves the
	non-corrupted controlbar information to the .INI file:
	
	     void CMainFrame::OnClose()
	     {
	         // SaveBarState saves everything but the number of Columns in
	         // the Palette we need to do that ourselves.
	         SaveBarState(_T("General"));
	
	     // Following code was added to the sample with Visual C++ 4.1
	     #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410
	
	         CDockState state;
	         GetDockState(state);
	
	         CleanUpControlBarState(state);
	
	         state.SaveState(_T("General"));
	
	     #endif
	     ...
	
	Sample Code
	-----------
	
	  // In this case the function is defined as a global function.
	  // You could make it a member of one of your classes
	
	  Add the following prototype to the end of your stdafx.h:
	
	  #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410
	
	  void CleanUpControlBarState(CDockState& state);
	
	  #endif
	
	  and add the following code to one of your CPP files:
	
	  #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410
	  void CleanUpControlBarState(CDockState& state)
	  {
	
	      for (int i = 0; i < state.m_arrBarInfo.GetSize(); i++)
	      {
	          CControlBarInfo* pInfo1 = (CControlBarInfo*)state.m_arrBarInfo[i];
	
	          for (int j = 0; j < state.m_arrBarInfo.GetSize(); j++)
	          {
	              if (i == j)
	                  continue;
	
	              CControlBarInfo* pInfo2 =
	                  (CControlBarInfo*)state.m_arrBarInfo[j];
	
	              if (pInfo1->m_uMRUDockID == pInfo2->m_nBarID)
	                  continue;
	
	              int nSize = pInfo2->m_arrBarID.GetSize();
	              for (int k = 0; k < nSize - 1; k++)
	              {
	                  if ((LONG)pInfo2->m_arrBarID[k] ==
	                      (LONG)pInfo1->m_nBarID + 0x10000)
	
	                      pInfo2->m_arrBarID[k] = NULL;
	              }
	          }
	      }
	
	      for (i = 0; i < state.m_arrBarInfo.GetSize(); i++)
	      {
	          CControlBarInfo* pInfo = (CControlBarInfo*)state.m_arrBarInfo[i];
	
	          int nSize = pInfo->m_arrBarID.GetSize();
	          for (int j = 0; j < nSize - 1; j++)
	          {
	              if (pInfo->m_arrBarID[j]==NULL)
	                  continue;
	
	              for (int k = j + 1; k < nSize; k++)
	              {
	                  if (pInfo->m_arrBarID[k]==NULL)
	                      continue;
	
	                  if (pInfo->m_arrBarID[k]==pInfo->m_arrBarID[j])
	                      pInfo->m_arrBarID[k] = NULL;
	              }
	          }
	
	          while ((nSize!=0) && (pInfo->m_arrBarID[nSize-1]==NULL))
	          {
	              nSize--;
	              pInfo->m_arrBarID.RemoveAt(nSize);
	          }
	          if (nSize)
	              pInfo->m_arrBarID.InsertAt(nSize, (void*)NULL);
	      }
	  }
	
	  #endif
	
	NOTE: The sample code above uses undocumented functionality of the MFC. To be
	compatible with future versions of MFC, enclose the code between the following
	directives:
	
	     #if _MFC_VER == 0x0400 || _MFC_VER == 0x0410
	     ...
	     ...
	     #endif
	
	Also include any call to CleanUpControlBarState between these directives.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 LoadBarState SaveBarState ini grow vcfixlist420 kbui MfcUI
	
	======================================================================
	Keywords          : kbMFC kbToolbar KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
