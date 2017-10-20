---
layout: page
title: "Q194298: INFO: Changes in MFC Between Visual C++ 5.0 and 6.0"
permalink: /kb/194/Q194298/
---

## Q194298: INFO: Changes in MFC Between Visual C++ 5.0 and 6.0

{% raw %}

	Article: Q194298
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC600 kbFAQ kbGrpDSMFCATL kbNoUpdate
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFC has changed substantially since it shipped in Visual C++ version 5.0. MFC
	6.0 (Mfc42.dll, version 6.00.8168.0), shipping with Visual C++ 6.0, contains
	many new classes, new member functions, bug fixes and enhancements. This
	document provides an overview of the more substantial changes in MFC.
	
	Largely, the changes made to the library fit in one of several categories. First,
	many changes were made in an effort to make the library more efficient. Even
	though MFC 6.0 has many new features, the size of the DLL is just about the same
	as it was in the last version. You'll notice that the statically-linked version
	of the library is more granular-many problems which caused unused code to be
	brought into the library were addressed in this version. Finally, there are many
	new classes and member functions in the libraries that provide for integrated
	access to new operating system features.
	
	While the library has undergone some growth, you should be able to recompile your
	programs with the new library without changing them. Further, you should be able
	to install the MFC DLLs over old versions without recompiling programs which use
	the library.
	
	Since some of the changes to the library were made to address very broad goals,
	this document contains a section on global changes. After those global changes
	are addressed, there's a section on each new or changed class. We've made every
	attempt to make this document as comprehensive as possible, but it's main
	purpose is to provide an aid to understanding the differences between this and
	the previous version of the library. Because of resource limitations, this
	document does not, by any means, include a comprehensive list of all bugs fixed
	since the last release of the library.
	
	MORE INFORMATION
	================
	
	Global Changes
	--------------
	
	- MFC uses __declspec(selectany). The compiler provides this __declspec() to
	  control the section in which initialized data will be placed within the
	  executable. MFC uses the macros AFX_STATIC and AFX_STATIC_DATA to apply the
	  modifier on initialized data which the library needs. You'll see AFX_STATIC
	  and AFX_STATIC_DATA used aggressively throughout the library source.
	
	- The unused m_hInst member of the private AFX_COM class was removed. This
	  unused variable in an MFC implementation class wasn't necessary. Code to
	  initialize it was deleted from the library.
	
	- The CPushRoutingFrame and CPushRoutingView implementation classes were added
	  to the library. These classes encapsulate code that was previously used in
	  the OnCmdMsg() handler for views and frames in MFC.
	
	- Placement syntax support for global operator delete(). The compiler now
	  supports placement-syntax delete operators which properly delete memory in
	  situations where placement syntax operator new was used. Since MFC makes
	  heavy use of placement syntax new in both debug and non-debug builds, support
	  for the placement syntax delete operator was added.
	
	  For example, the debug global 'operator new' function in MFC is defined as:
	
	  void operator new(size_t nSize, LPCSTR lpszFileName, int nLine)
	
	  because we have a overridden global 'new' operator defined, we need to define
	  a global operator delete which also takes the same number of arguments so MFC
	  has defined the 'delete' operator as:
	
	  void operator delete(void * pData, LPCSTR /*lpszFileName */,
	                       int /*nLine*/)
	
	Library Implementation Changes
	------------------------------
	
	- Thread safety in the CThreadSlotData implementation class has improved. This
	  fixes problems with deadlocks and thread safety usually apparent only on
	  multiprocessor machines. CThreadSlotData is used internally by MFC to manage
	  thread-local data for the library.
	
	- COMCTL preregistration code was rewritten to be more efficient. MFC will
	  initialize the COMCTL32.DLL library appropriately as your application
	  executes. Since a recent update to that DLL allows applications to only
	  register window classes they need (rather than all classes supplied by the
	  library) MFC will use the more efficient API when it is available. When the
	  updated COMCTL32.DLL is not available, MFC falls back on its original
	  behavior.
	
	- MFC.DLL build uses /DELAYLOAD linker option. The shared DLL version of MFC
	  now uses the linker's new /DELAYLOAD option. This makes the library only load
	  DLLs when it is necessary to actually initialize them rather than load and
	  initialize all referenced DLLs. This significantly reduces the size of the
	  DLL.
	
	Collection Classes
	------------------
	
	- MFC uses memmove() where appropriate. The collection classes would sometimes
	  use memcpy() where memmove() was actually required.
	
	- FindIndex() returns NULL for negative indexes. List-based collections with a
	  FindIndex() member will return NULL if the index passed to the function is
	  negative. In previous releases, this scenario caused a hang or an access
	  violation.
	
	CArchive
	--------
	
	- To improve runtime performance, enhancements to the class were made to avoid
	  double-buffering while writing to or reading from the archive.
	
	- Don't reset schema when loading old objects. Reading code in the class would
	  reset the expected schema number when reading older objects into memory. The
	  buggy code caused problems when reading some partially updated file types and
	  was fixed in this version of the library.
	
	CAsyncSocket
	------------
	
	- SendTo() member correctly returns errors. In previous versions of MFC,
	  CAsyncSocket::SendTo() returned FALSE for some errors. The function now
	  returns a proper WinSock error code in all circumstances.
	
	CCheckListBox
	-------------
	
	- CCheckListBox features a new SetSelectionCheck() member which can check (or
	  uncheck) the selected items within the box.
	
	CComboBox
	---------
	
	- MFC-created combo boxes now properly initialize their contents from data
	  provided by the resource editor.
	
	CControlBar
	-----------
	
	- The new SetBorders() member is a public accessor which allows other classes
	  to set the bar's borders.
	
	- The new DrawGripper() member function draws a "gripper", which is a
	  user-interface clue on command bars that are movable or resizable.
	
	- CalcInsideRect() adjusts for the correct sizing of a bar that has a gripper.
	
	- The CControlBar class will assert that the m_dwStyle member only contains
	  MFC-specific bits masked by CBRS_ALL. This assertion will fire if user code
	  sets window-style bits which is wrong.
	
	- The floating and docking behavior of control bars has been fixed to work
	  acceptably on multiple monitor systems.
	
	CDC
	---
	
	- In previous versions of MFC, CDC member functions would sometimes return
	  unpredictable values for extreme failure conditions. These functions have
	  been cleaned up and will return the correct error code.
	
	CTabCtrl
	--------
	
	- SetItemState() and GetItemState() member functions have been added in order
	  to support new functionality exposed by the revised COMCTL32.DLL.
	
	CToolBar
	--------
	
	- SetSizes() can be called when toolbar isn't created. The function previously
	  ASSERTed when it wasn't attached to a window, but now reacts by setting them
	  member data of the object to reflect the size instead of moving the window's
	  position.
	
	- The CToolBar class has been significantly cleaned up for efficiency and also
	  modified to gracefully handle compatibility issues with old and new
	  COMCTL32.DLL implementations.
	
	CTreeCtrl
	---------
	
	- The GetCheck() and SetCheck() members have been added to support checked tree
	  controls.
	
	COleControl
	-----------
	
	- The style bit fastBeginPaint is now ignored. OLE Controls are always expected
	  to erase their background in OnDraw(), as they won't receive WM_ERASEBKGND
	  when rendering to a metafile DC.
	
	- The handlers for the mouse button messages in the class were rewritten to be
	  more efficient without changing their functionality.
	
	- Several small bugs in the in-place activation implementation have been fixed.
	
	- The MFC-supplied tracker now clips properly.
	
	- OnSetObjectRects() has been fixed. This function's implementation ignored the
	  clipping rectangle and would cause spurious window movement (resulting in
	  extra repaints) during windowless activation. The code has been fixed to
	  avoid those problems.
	
	- The reflector window now handles WM_SIZE appropriately. Previously, the
	  message was ignored.
	
	- CreateTracker()/DestroyTracker() now call OnSetObjectRects(). Duplicated code
	  in the CreateTracker() and DestroyTracker() members has been folded into
	  OnSetObjectRects() to save space. Since adding or removing the tracker does
	  cause the objects' bounding rectangle size to change, it's appropriate that
	  the action now cause call to OnSetObjectRects().
	
	COleDateTime
	------------
	
	- Several rounding errors existed in previous versions of this class. All known
	  rounding problems have been remedied.
	
	- The class now features a GetAsSystemTime() member function, which can be used
	  to convert the time object's value to a SYSTEMTIME structure.
	
	CTime
	-----
	
	- The class now features a GetAsSystemTime() member function, which can be used
	  to convert the time object's value to a SYSTEMTIME structure.
	
	CWinApp
	-------
	
	- MFC no longer calls CloseHandle() on the m_hThread handle member of the
	  application object. The new behavior avoids leaks and diagnostic messages.
	
	- Registry deletion code was cleaned up. Significant duplicated code to remove
	  keys from the registry has been removed from the library, resulting in a
	  space savings.
	
	- Applications which register themselves as a DocObject server,
	  OAT_DOC_OBJECT_SERVER, will enter their file extension directly from the
	  document resource string's filterExt field, if it is available. Otherwise,
	  MFC will try to parse an extension from the filterName field.
	
	CObject
	-------
	
	- Placement syntax has been added for CObject's operator delete(). The compiler
	  now supports placement-syntax delete operators which properly delete memory
	  in situations where placement syntax operator new was used. Since MFC makes
	  heavy use of placement syntax new in both debug and non-debug builds, support
	  for the placement syntax delete operator was added.
	
	CDaoDatabase
	------------
	
	- Not dependent on DAO 3.5. Some recent releases of MFC had problems running
	  correctly on machines that weren't updated to DAO 3.5. Those problems have
	  been resolved, but it is advisable to upgrade to DAO 3.5 anyway due to
	  performance and stability improvements.
	
	CDaoRecordset
	-------------
	
	- IsBOF() and IsEOF() are now const.
	
	- The Unicode DFX_Text() function would not allocate enough space when binding
	  Unicode strings. This problem has been fixed.
	
	- A DDX routine to work with the CSlider control has been provided. The routine
	  exchanges the slider's integer with a field in the database.
	
	CDatabase
	---------
	
	- ODBC 3.0 dependency relieved. MFC DLLs previously worked only against ODBC
	  3.0, and are now compatible with ODBC 2.5.
	
	CHttpFile
	---------
	
	- Support for log post data. The CHttpFile class now supports long post data
	  via the SendRequestEx() and EndRequest() member functions.
	
	CHttpServer
	-----------
	
	- An overridable function named OnTerminateExtension() has been provided to
	  support the termination notification sent by newer ISAPI servers.
	
	- MFC will write the response stream in blocks to be compatible with HTTPS and
	  other protocols with size limitations. The new m_dwChunkSize member variable
	  determines the block size, and the OnWriteBody() function can be overridden
	  to alter the writing behavior.
	
	- A new parse map parameter type has been added. You may retrieve the raw
	  parameters from the client by using the ITS_RAW parameter type.
	
	- Via the TransmitFile() member and OnWriteBody() override, the class now
	  supports overlapped I/O.
	
	CInternetFile
	-------------
	
	- In some circumstances, the ReadString() member function would truncate data
	  read from the connection. This bug has been fixed.
	
	CInternetSession
	----------------
	
	- CInternetSession has new member functions to aid with the management of
	  cookies.
	
	- All internet-related functions in MFC more aggressively ASSERT on the
	  validity of memory buffer pointer parameters.
	
	- INTERNET_FLAG_ASYNC was never supported by MFC. The presence of this flag now
	  causes debug builds of MFC to ASSERT.
	
	CListCtrl
	---------
	
	- Member functions have been added to support virtual list views.
	
	CMDIChildWnd
	------------
	
	- CMDIChildWnd features a new CreateNewChild() which facilitates the creation
	  of MDI child windows outside of the doc-view architecture.
	
	COleDocument
	------------
	
	- Previous versions of MFC opened storages with STGM_SHARE_EXCLUSIVE. MFC now
	  uses the more appropriate STGM_SHARE_DENY_WRITE flag, which allows other
	  applications to read the storage while it is opened by the document object.
	
	COleIPFrame
	-----------
	
	- Menu merging, IOleCommandTarget, and command forwarding support was added to
	  COleIPFrame in order to support DocObject containment.
	
	CSlider
	-------
	
	- There's now DDX_Slider(), which facilitates data exchange with an integer
	  variable and a slider control.
	
	CPropertyPage
	-------------
	
	- The creation of a property sheet with pages from a DIALOGEX resource would
	  sometimes needlessly ASSERT. The assertion has been corrected.
	
	- The MapWizardResult() member function would sometimes return an incorrect
	  value. This problem has been corrected.
	
	- Some property page creations would result in a blank dialog. This problem was
	  fixed.
	
	- MFC's handler for EndDialog() incorrectly returned IDCANCEL instead of
	  PSBTN_CANCEL.
	
	- A property page closed with the system menu or by the user pressing the close
	  button might not correctly set the m_nModalResult member to IDCANCEL. This
	  has been fixed.
	
	CRecordset
	----------
	
	- The RFX_Int() function incorrectly handled NULL values in previous versions
	  of the library. This problem has been corrected.
	
	CScrollView
	-----------
	
	- A bug that caused a bogus assert when the mouse wheel was used to scroll a
	  CScrollView has been fixed.
	
	- Mouse wheel page-mode scrolling has been fixed. A bug which made page-by-page
	  views scroll in the wrong direction has been fixed.
	
	CString
	-------
	
	- CString has been modified to use an extremely fast fixed-size memory
	  allocator. The memory allocator will work for string sizes up to 64
	  characters, 128 characters, 256 characters, and 512 characters to improve
	  performance for the most commonly encountered string sizes.
	
	- CString now includes several new utility functions to ease string
	  programming. Find() has a new overload that takes an offset. There are
	  length-based string constructors. Delete() and Insert() functions provide for
	  removal and insertion, respectively, of characters within the string.
	  Replace() provides a way to substitute a substring for another substring, or
	  a character for another character. TrimRight() and TrimLeft() now feature new
	  overrides which can trim user-specified characters or sets of characters.
	
	- Format supports __int64. The Format() member now supports the "%I64"
	  formatting string for use with __int64 data types.
	
	CView
	-----
	
	- The print preview bar has been restored to its rightful position-within the
	  parent frame.
	
	CWinThread
	----------
	
	- The MFC-supplied PreTranslateMessage() member function is no longer
	  responsible for canceling active tooltips. This code has been moved to
	  CWnd::FilterToolTipMessage(). This change was necessary in order to support
	  the new tracking tooltip styles.
	
	CWnd
	----
	
	- All CWnd-derived classes will print a TRACE message upon failure in their
	  creation functions. The message identifies the failure point and shows the
	  last error value to aid in diagnosis.
	
	- The CenterWindow() function has been fixed to work properly on multiple
	  monitor machines.
	
	New Classes
	-----------
	
	- To support newly available common controls, the CMonthCalCtrl, CDateTimeCtrl,
	  and CIPAddressCtrl classes have been added to the library. Appropriate
	  overrides of DDX_ and RFX_ functions have been added to the library, as well.
	
	- The CReBar and CReBarCtrl classes was added to the library to provide access
	  to the new rebar control.
	
	- The CHtmlView class is used to contain the Internet Explorer ActiveX Control.
	
	- The CPropSheetEx and CPropPageEx classes were added to support new user
	  interface styles in the property page API.
	
	Socket Support
	--------------
	
	- MFC changed how WinSock specific thread state information is stored. Pointers
	  to handle maps, instead of the handle maps themselves, are stored in the
	  AFX_MODULE_THREAD_STATE data.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC600 kbFAQ kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
