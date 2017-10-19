---
layout: page
title: "Q196026: PRB: Firing Event in Second Thread Causes IPF or GPF"
permalink: /kb/196/Q196026/
---

## Q196026: PRB: Firing Event in Second Thread Causes IPF or GPF

	Article: Q196026
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbActivexEvents kbATL kbThread kbVBp kbVBp600 kbVC600 kbGrpDSVB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, an event fired by an ActiveX component from a thread other than
	the main thread will sometimes cause an Invalid Page Fault (IPF) or General
	Protection Fault (GPF). Usually it seems to work fine in the Visual Basic IDE
	but fails when it runs as a standalone EXE.
	
	CAUSE
	=====
	
	Visual Basic uses an apartment threading model. Cross-thread function calls need
	to be marshalled. Visual Basic does not support events fired directly from any
	thread other than the main thread created by a Visual Basic project without
	marshalling.
	
	RESOLUTION
	==========
	
	Method 1 
	--------
	
	Marshall the event firing code:
	
	1. The thread being spun off needs to call CoInitialize/CoUnInitialize.
	
	2. The sink interface being called back on in the thread must be marshalled over
	  to that thread with
	  CoMarshalInterThreadInterfaceInStream/CoGetInterfaceAndReleaseStream.
	
	Method 2
	--------
	
	Instead of firing an event from a secondary thread, post a message back to the
	main thread and fire the event there. An example of this method is given later
	in this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example first creates an ATL project, then a Visual Basic 6.0
	project. It then uses these to demonstrate the proper way to have a secondary
	thread request that the primary thread fire an event.
	
	Steps to Create an ATL Project with Visual C++
	----------------------------------------------
	
	1. Create a new ATL COM AppWizard Project named MyAtlDll and keep the default
	  settings.
	
	2. In the class view, right-click the project name and select New ATL Object.
	  Select Simple Object in the displayed dialog box and click Next. Type in
	  "MyAtl" as the C++ short name. Click the Attribute tab and select Support
	  Connection Points. Click OK and a new ATL object is added.
	
	3. In the class view, right-click the IMyAtl and choose Add Method. Type
	  "InitTask" in the Method Name text box and "[in] long number" in the
	  parameters text box. Click OK.
	
	4. In the class view, right-click _IMyAtlEvents and select Add Method. Select
	  "void" from return type drop-down list box. Type "TaskFinished" in the Method
	  Name text box and "[in] long result" in the parameters text box. Click OK.
	
	5. In the class view, right-click CMyAtl and choose Add member variable. Type
	  "long" in the variable type text box and "m_number" in the variable name text
	  box.
	
	6. Build the project to generate the type library needed for step 10.
	
	7. In the class view, expand and double-click CMyAtl -> IMyAtl ->
	  InitTask. Edit the InitTask function to make it appear as follows:
	
	        STDMETHODIMP CMyAtl::InitTask(long number)
	        {
	           HANDLE hThrd;
	           DWORD tid;
	
	           m_number = number;
	           if((hThrd = CreateThread(
	                   0,
	                   0,
	                   (LPTHREAD_START_ROUTINE)justDoIt,
	                   (void *)this,
	                   0,
	                   &tid)) == NULL)
	           {
	              //error handling here
	           }
	           CloseHandle(hThrd);
	           return S_OK;
	        }
	
	8. Add the following code to the MyAtl.cpp file:
	
	        DWORD WINAPI justDoIt(LPVOID lpParameter)
	        {
	           CMyAtl *myAtl = (CMyAtl*)lpParameter;
	
	           long result;
	           for (int i = 1; i <= myAtl->m_number; ++i)
	              result = i * 2;
	
	           myAtl->Fire_TaskFinished(result);
	
	           return 0;
	        }
	
	9. Add the following code right above the line "#endif //__MYATL_H_" in MyAtl.h
	  file:
	
	        DWORD WINAPI justDoIt(LPVOID lpParameter);
	
	10. In the class view, right-click CMyAtl and select Implement Connection Point.
	  Select _IMyAt-Events in the displayed dialog box. Click OK.
	
	11. Build the ATL project and the control will be registered automatically.
	
	Steps to Create the Visual Basic 6.0 Project
	--------------------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Choose References from the Project menu, select "MyAtlDll 1.0 Type library,"
	  and click OK.
	
	3. Add a CommandButton to the form and keep the default name (command1).
	
	4. Add the following code to the code window of form1:
	
	        Option Explicit
	        Private WithEvents vbATL As MYATLDLLLib.MyAtl
	
	        Private Sub Command1_Click()
	           vbATL.InitTask 11111
	        End Sub
	
	        Private Sub Form_Load()
	           Set vbATL = New MYATLDLLLib.MyAtl
	        End Sub
	
	        Private Sub vbATL_TaskFinished(ByVal result As Long)
	           MsgBox result
	        End Sub
	
	5. Press the F5 key to run the project. Click Command1 and you will get 22222 in
	  a message box.
	
	6. Build the project to be an EXE and run the EXE outside the IDE. You will get
	  an error message when you click the CommandButton.
	
	  Note that it may work sometimes, but it does not work consistently.
	
	To fix the problem in this specific sample, you need to derive the CMyAtl from
	CWindowImpl, and add a message map. Make sure the window is hidden. Now, instead
	of firing an event from the secondary thread, you can post a message to the main
	thread, and fire the event in the message handler.
	
	Step by Step Example
	--------------------
	
	1. Using the ATL project created in the steps above, add the following line:
	
	        #include <atlwin.h>
	
	  after the line:
	
	        #define _MYATL_H
	
	  in the MyAtl.h file.
	
	2. Add the line:
	
	        #define WM_TASK_FINISH  (WM_USER + 101)
	
	  before the line:
	
	        class ATL_NO_VTABLE CMyAtl :
	
	  in the MyAtl.h file.
	
	3. Add CWindowImpl to one of the parent classes of CMyAtl by adding the
	  following line:
	
	        public CWindowImpl<CMyAtl>,
	
	  right after the line:
	
	        class ATL_NO_VTABLE CMyAtl :
	
	  in the file MyAtl.h.
	
	4. Add the following code to the CMyAtl definition part of the MyAtl.h file:
	
	        public:
	           DECLARE_WND_CLASS("MyAtl")
	
	           BEGIN_MSG_MAP(CMyAtl)
	              MESSAGE_HANDLER(WM_TASK_FINISH, OnTaskFinished)
	           END_MSG_MAP()
	        public:
	           LRESULT OnTaskFinished(UINT uMsg, WPARAM wParam,
	                          LPARAM lParam, BOOL& bHandled)
	           {
	              Fire_TaskFinished((long)wParam);
	              return 0;
	           }
	
	          HRESULT FinalConstruct()
	          {
	             RECT rect;
	             rect.left=0;
	             rect.right=100;
	             rect.top=0;
	             rect.bottom=100;
	
	             HWND hwnd = Create( NULL, rect, "MyAtlWindow", WS_POPUP);
	
	             if (hwnd)
	                 return S_OK;
	             else
	                 return HRESULT_FROM_WIN32(GetLastError());
	          }
	
	          void FinalRelease()
	          {
	             if (m_hWnd != NULL)
	                 DestroyWindow();
	          }
	
	5. Change the following line:
	
	        myAtl->Fire_TaskFinished(result);
	
	  in the function
	
	        DWORD WINAPI justDoIt(LPVOID lpParameter)
	
	  in the file MyAtl.cpp, to be:
	
	        myAtl->PostMessage(WM_TASK_FINISH,result,0);
	
	6. Rebuild the ATL project.
	
	7. Run the Visual Basic project from the IDE and as an EXE. Note that the event
	  fires just fine either way.
	
	REFERENCES
	==========
	
	For information on firing an event from a second thread and information on why
	the PostMessage method is recommended, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q157437 : FILE: Fireev.exe Fires Events from a Second Thread
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbActivexEvents kbATL kbThread kbVBp kbVBp600 kbVC600 kbGrpDSVB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
