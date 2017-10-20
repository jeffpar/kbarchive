---
layout: page
title: "Q105286: HOWTO: Clean Up Temporary MFC Object in _USRDLL DLLs"
permalink: /kb/105/Q105286/
---

## Q105286: HOWTO: Clean Up Temporary MFC Object in _USRDLL DLLs

{% raw %}

	Article: Q105286
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Class (MFC) Libraries create temporary objects that are
	used inside of message handler functions. In MFC applications, these temporary
	objects are automatically cleaned up in the CWinApp::OnIdle() function that is
	called in between processing messages. However, in MFC dynamic-link libraries
	(DLLs) built using the _USRDLL model, the OnIdle() function is not automatically
	called. As a result, temporary objects are not automatically cleaned up. To
	clean up temporary objects, the DLL must explicitly call OnIdle(1) periodically.
	
	MORE INFORMATION
	================
	
	MFC maintains a set of maps that associate windows' handles with MFC objects.
	When the FromHandle() function is called, it checks the map to see whether an
	MFC object exists that is associated with the handle. If there is, FromHandle()
	returns a pointer to the object; if not, FromHandle() creates a temporary
	object. These temporary objects are cleaned up when CWinApp::OnIdle() is called
	with a count of 1.
	
	In an MFC application, the OnIdle() function is called when the message loop is
	idle. It is called inside of a ::PeekMessage() loop that checks for new
	messages. The ::PeekMessage() loop is in the function CWinApp::Run(). The
	OnIdle() function is passed an "lCount" parameter, which indicates how many
	times OnIdle() has been called since the last message. When OnIdle() is called
	with an lCount equal to 1, the temporary objects are cleaned up. However,
	because an MFC _USRDLL DLL does not contain a main message loop, OnIdle() is not
	automatically called and the temporary objects are not cleaned up. To clean up
	the temporary objects, the DLL must call OnIdle() explicitly.
	
	In general, it can be difficult to determine the best time to call OnIdle()- -it
	needs to be called often enough that temporary objects do not accumulate, and it
	needs to be called when no temporary objects are in use. Below are three
	strategies for calling OnIdle() in _USRDLL DLLs:
	
	1. Call the OnIdle() function at the beginning of each exported function. This
	  will clean up the temporary objects each time the DLL is entered. This method
	  works as long as the DLL doesn't re-enter itself by calling other functions
	  in the DLL that also clean up temporary objects when they exit. Also, the
	  function in the DLL must not yield to Windows by calling functions such as
	  CWnd::MessageBox(), CDialog::DoModal(), and ::PeekMessage(). These functions
	  allow other applications to process messages. If any of these other
	  applications were called back in to the DLL, it would cause the temporary
	  objects to be cleaned up.
	
	2. Have the DLL export a function to be used only for cleaning up temporary
	  objects. Then have each application that uses the DLL call this function when
	  its main message loop is idle. This will allow functions in the DLL to call
	  other functions in the DLL with out prematurely cleaning up the temporary
	  objects. Note, however, that this approach is not safe if the DLL's
	  functions, such as CWnd::MessageBox(), CDialog::DoModal(), and
	  ::PeekMessage(), yield to Windows. The DLLTRACE sample shipped with Visual
	  C++ demonstrates this approach.
	
	3. Maintain a counter that indicates whether the DLL is in the middle of a
	  function. At the beginning of each exported function, increment the counter
	  by 1; at the end of the function, decrement the counter by 1. If at the end
	  of the function the counter is zero, then it is safe to call OnIdle(). The
	  following code demonstrates one way to implement this approach:
	
	Sample Code
	-----------
	
	     static DWORD dwEntryCount = 0;
	
	     void LockTemporaryObjects()
	     {
	          InterlockedIncrement (&dwEntryCount);
	     }
	
	     void UnlockTemporaryObjects()
	     {
	         if (dwEntryCount == 0)
	     return;//Keep us from going negative
	
	      if (0 == InterlockedDecrement((&dwEntryCount))
	         {
	             AfxGetApp()->CWinApp::OnIdle(0);  // Updates UI objects
	             AfxGetApp()->CWinApp::OnIdle(1);  // Free's tempory objects
	         }
	     }
	
	The LockTemporaryObjects() and UnlockTemporaryObjects() function are then used as
	follows:
	
	Sample Code
	-----------
	
	     void PASCAL FAR EXPORT MyDllRoutine()
	     {
	          TRY
	          {
	                LockTemporaryObjects();
	
	           // Do work
	
	              UnlockTemporaryObjects();
	          }
	          CATCH_ALL(e)
	          {
	              // Good idea to deal with exceptions in _USRDLL anyway
	              UnlockTemporaryObjects();
	          }
	          END_CATCH_ALL
	     }
	
	These approaches are easy to implement for functions that the DLL explicitly
	exports; however, it is also possible to enter the DLL through the window
	procedure used by MFC windows created in the DLL. If the DLL creates a window
	that has a long lifetime, such as a modeless dialog box or a frame window, then
	you may want to clean up temporary objects in between calls to the this window's
	window procedure. You can do this by overriding the WindowProc() function for
	the window object. This function is called once for each message that the window
	processes. Because it is very common for message handlers to call functions that
	end up sending more messages to the window, you need to use the counter method
	mentioned above to make sure that you aren't cleaning up temporary objects that
	are still being used. The following code fragment demonstrates how this could be
	done for a modeless dialog box in a class derived from CDialog:
	
	     CMyDialog::WindowProc(UINT message, WPARAM wParam, LPARAM lParam)
	       {
	          LockTemporaryObjects();
	          LRESULT lResult = CDialog::WindowProc( message, wParam, lParam);
	          UnlockTemporaryObjects();
	          return lResult;
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDLL kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
