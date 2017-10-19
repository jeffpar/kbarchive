---
layout: page
title: "Q83456: Introduction to STRICT and Message Crackers"
permalink: /kb/083/Q83456/
---

## Q83456: Introduction to STRICT and Message Crackers

	Article: Q83456
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WINDOWS.H and WINDOWSX.H header files in version 3.1 of the Microsoft
	Windows Software Development Kit (SDK) provide new features to make developing
	applications for the Windows environment faster and easier. These features
	enable the C compiler to find many common programming errors at compile time.
	
	This article provides an overview and examples of the new features, as well as a
	road map to other resources in the SDK that explain them.
	
	MORE INFORMATION
	================
	
	The WINDOWS.H and WINDOWSX.H header files provide the following features:
	
	- New data types and their associated definitions
	
	- A preprocessor variable, STRICT, which enforces the strictest possible type
	  checking by the compiler
	
	- Macros to simplify many common operations in Windows programming
	
	- Control macros to simplify communication with Windows controls
	
	- Message crackers (which are a convenient, portable, and type-safe method to
	  handle messages) and their associated parameters and return values in the
	  Windows environment
	
	The new types and STRICT type checking are implemented in the WINDOWS.H file; the
	macros, control macros, and message crackers are implemented in WINDOWSX.H. The
	Windows SDK installation program copies each of these files into the include
	directory (by default, C:\WINDEV\INCLUDE).
	
	The SDK also provides the following resources:
	
	- WINDOWS.TXT, which explains the new types and STRICT features provided by
	  WINDOWS.H.
	
	- WINDOWSX.TXT, which explains the macros, control macros, and message crackers
	  provided by WINDOWSX.H.
	
	- MAKEAPP sample application, which uses all the new features of WINDOWS.H and
	  WINDOWSX.H. MAKEAPP can create application templates that use all the new
	  features.
	
	- MAKEAPP.TXT, which explains how to use MAKEAPP as an application template
	  generator.
	
	Any new code developed for Windows should use the new data types and define the
	STRICT preprocessor variable. Doing so provides powerful type checking and
	enables the C compiler to find many problems at compile time.
	
	Using the macros, control macros, and message crackers assists in the process of
	finding errors and increases code portability; however, using these features is
	a matter of taste. Some developers like them and find them useful, others do
	not.
	
	The simplest way to become familiar with the new features is to review the
	WINDOWS.H and WINDOWSX.H header files, the associated WINDOWS.TXT and
	WINDOWSX.TXT text files, and the MAKEAPP sample application. Each of the new
	features is implemented in one of the header files (usually as a fairly simple
	macro) and is explained in one of the text files.
	
	Each of the new features is designed to address three goals:
	
	- Make the source code for an application easier to read
	
	- Enable the C compiler to catch programming errors
	
	- Ease porting to 32-bit Windows
	
	In general, the new features can be used as appropriate throughout an
	application. Some of the code can use traditional methods and other code can use
	various combinations of the new features. The one exception to this is the
	STRICT preprocessor variable--if STRICT is defined in any source module, the
	entire module must be "STRICT compliant" before it will compile successfully.
	
	Each of the new features is compatible with Windows 3.0. You can use the new
	features in an application that will run under version 3.0 and you can modify
	existing code to use the new features.
	
	The remainder of this article provides an introduction to each of the new
	features.
	
	New Data Types, Type Definitions, and Helper Macros
	---------------------------------------------------
	
	The new data types are implemented in WINDOWS.H and described in WINDOWS.TXT.
	Examples of new data types are WPARAM, LPARAM, and UINT. Examples of new handle
	types are HINSTANCE, HMODULE, and HTASK. Using the new data types can make
	source code easier to read and simplify porting to 32-bit Windows.
	
	STRICT Preprocessor Variable
	----------------------------
	
	The STRICT preprocessor variable is implemented in WINDOWS.H and described in
	WINDOWSX.TXT. When an application defines STRICT, the C compiler enforces the
	highest possible level of type checking, which enables the compiler to find as
	many errors as possible. It is much more productive to find errors at compile
	time than to find them later using a debugger.
	
	While an application can use the new data types described above without defining
	STRICT, it must use the new types if STRICT is defined.
	
	To enable STRICT type checking, an application must define the STRICT environment
	variable before including WINDOWS.H, as follows:
	
	     #define STRICT
	     #include windows.h
	
	The STRICT environment variable and the new data types are compatible with
	Windows 3.0, C++, the Microsoft C Compiler's highest warning level (specified by
	the -W4 option switch), and ANSI C.
	
	An Example of Using STRICT
	--------------------------
	
	The ReleaseDC function is prototyped as follows:
	
	     int WINAPI ReleaseDC(HWND, HDC);
	
	In an application, a programmer might mistakenly switch the two parameters to the
	ReleaseDC function, as follows:
	
	     ReleaseDC(hDC, hWnd);
	
	Traditionally, the compiler will not catch this error because both the HDC and
	HWND data types are defined to be UINT variables. However, if STRICT is enabled,
	the HDC and HWND data types are defined as completely different types, which
	enables the compiler to catch the error at compile time. (For more information
	about how the HWND and HDC data types are defined, see the DECLARE_HANDLE macro
	in WINDOWS.H.)
	
	The WINDOWS.TXT file contains step-by-step instructions for writing
	STRICT-compliant Windows code. WINDOWS.TXT also lists the most common compiler
	errors generated while compiling an application with STRICT defined, and methods
	to address these errors.
	
	Converting Existing Code to STRICT
	----------------------------------
	
	WINDOWS.TXT describes how to convert existing Windows code to be compatible with
	STRICT. However, this conversion requires a fair amount of effort. If the
	existing code is stable and not modified very often, the effort to convert the
	code may not be worthwhile.
	
	Macros
	------
	
	The macros are implemented in WINDOWSX.H. Each one is listed and described in
	WINDOWSX.TXT.
	
	The macros can be used to simplify many common Windows programming operations.
	Macros are designed to make code easier to read and write. They can eliminate
	much typing and prevent type casting errors. The macros are compatible with
	32-bit Windows.
	
	As an example, the traditional method to subclass a window involves code such as
	the following:
	
	     lpfnOldWndProc = SetWindowLong(hwnd, GWL_WNDPROC,
	                                    (LPARAM)(WNDPROC)lpfnNewWndProc);
	
	The following code, which uses a new macro, accomplishes the same task:
	
	     lpfnOldWndProc = SubclassWindow(hwnd, lpfnNewWndProc);
	
	Other macros include: GlobalAllocPtr, DeletePen, SelectBitmap, and GetWindowID.
	
	Control Message Macros
	----------------------
	
	The control message macros are implemented in WINDOWSX.H. Each one is listed and
	described in WINDOWSX.TXT.
	
	The control message macros simplify dealing with Windows controls (edit controls,
	list boxes, and so forth). Using the control message macros makes code smaller,
	potentially more readable, and handles all type casting required. When used in
	conjunction with the STRICT preprocessor variable, the control message functions
	prevent type errors and incorrect parameter passing.
	
	Examples of control message macros are: Static_Enable, Button_GetCheck,
	Edit_GetLineCount, and ScrollBar_SetRange.
	
	Each control message macro corresponds to an existing control message or window
	manager function. For example, Button_GetCheck can be used in place of the
	BM_GETCHECK message and Button_SetText can be used in place of SetWindowText.
	
	A Control Message Macro Example
	-------------------------------
	
	The following example illustrates the power of the control message macros.
	
	The following code uses traditional SendMessage calls to retrieve all the lines
	of text from an edit control:
	
	     void PrintLines(HWND hwndEdit)
	     {
	        int line;
	        int lineLast = (int)SendMessage(hwndEdit, EM_GETLINECOUNT,
	                                        0, 0L);
	
	        for (line = 0; line < lineLast; line)
	        {
	           int cch;
	           char ach[80];
	
	           *((LPINT)ach) = sizeof(ach);
	           cch = (int)SendMessage(hwndEdit, EM_GETLINE,
	                                  line, (LONG)(LPSTR)ach);
	
	           printf(ach); // or whatever ...
	        }
	     }
	
	The following code uses control message macros to perform the same task,
	retrieving all the lines of text from an edit control:
	
	     void PrintLines(HWND hwndEdit)
	     {
	        int line;
	        int lineLast = Edit_GetLineCount(hwndEdit);
	
	        for (line = 0; line < lineLast; line++)
	        {
	           int cch;
	           char ach[80];
	
	           cch = Edit_GetLine(hwndEdit, line, ach, sizeof(ach));
	
	           printf(ach); // or whatever ...
	        }
	     }
	
	Message Crackers
	----------------
	
	The message crackers are implemented in WINDOWSX.H. The message crackers are
	described in WINDOWSX.TXT, which also explains in some detail how to use them.
	WINDOWSX.TXT does not list all message crackers; the list is available in
	WINDOWSX.H.
	
	The two biggest advantages to using message crackers are:
	
	- Data type safety, because the message crackers perform a great deal of type
	  casting
	
	- Simplified porting to 32-bit Windows
	
	An application can use message crackers whether or not it defines STRICT. Also,
	an application can use message crackers to process some messages and traditional
	code to process others.
	
	Using message crackers radically alters the appearance of a window procedure (see
	the example below). Whether or not this change of appearance is a desirable side
	effect depends on the coding tastes of the application developer.
	
	Typically, a window procedure will handle many messages, with code in the
	procedure to process each message. This often leads to the source code for a
	window procedure continuing on for many pages. When an application uses message
	crackers, almost any window procedure can be listed very concisely. The bulk of
	the code is transferred to message- handling functions that the message crackers
	call.
	
	A Simple Message Cracker Example
	--------------------------------
	
	The following code sample demonstrates using the HANDLE_WM_* message crackers in
	a window procedure:
	
	     LRESULT _export CALLBACK Template_WndProc(HWND hwnd, WORD msg,
	                                               WPARAM wParam,
	                                               LPARAM lParam)
	     {
	        switch (msg)
	        {
	        case WM_MOUSEMOVE:
	           return HANDLE_WM_MOUSEMOVE(hwnd, wParam, lParam,
	                                      Template_OnMouseMove);
	
	        case WM_LBUTTONDOWN:
	           return HANDLE_WM_LBUTTONDOWN(hwnd, wParam, lParam,
	                                        Template_OnLButtonDown);
	
	        case WM_LBUTTONUP:
	           return HANDLE_WM_LBUTTONDUP(hwnd, wParam, lParam,
	                                       Template_OnLButtonUp);
	
	        case WM_CTLCOLOR:
	           return HANDLE_WM_CTLCOLOR(hwnd, wParam, lParam,
	                                     Template_OnCtlColor);
	
	        default:
	           return Template_DefProc(hwnd, msg, wParam, lParam);
	        }
	     }
	
	The application must also contain the following message-handling functions that
	are called by the message crackers:
	
	     void Template_OnMouseMove(HWND hwnd, int x, int y, UINT keyFlags)
	     {
	        // code to handle WM_MOUSEMOVE...
	     }
	
	     void Template_OnLButtonDown(HWND hwnd, BOOL fDoubleClick, int x,
	                                 int y, UINT keyFlags)
	     {
	        // code to handle WM_LBUTTONDOWN...
	     }
	
	     void Template_OnLButtonUp(HWND hwnd, int x, int y, UINT keyFlags)
	     {
	        // code to handle WM_LBUTTONUP
	     }
	
	     HBRUSH Template_OnCtlColor(HWND hwnd, HDC hdc, HWND hwndChild,
	                                int type)
	     {
	        // code to handle WM_CTLCOLOR
	     }
	
	While the window procedure code given above is compact, the HANDLE_MSG macro
	simplifies the code even further. For example:
	
	     LRESULT _export CALLBACK Template_WndProc(HWND hwnd, WORD msg,
	                                               WPARAM wParam,
	                                               LPARAM lParam)
	     {
	         switch (msg)
	         {
	         HANDLE_MSG(hwnd, WM_MOUSEMOVE, Template_OnMouseMove);
	         HANDLE_MSG(hwnd, WM_LBUTTONDOWN, Template_OnLButtonDown);
	         HANDLE_MSG(hwnd, WM_LBUTTONDBLCLK, Template_OnLButtonDown);
	         HANDLE_MSG(hwnd, WM_LBUTTONUP, Template_OnLButtonUp);
	
	         default:
	             return Template_DefProc(hwnd, msg, wParam, lParam);
	         }
	     }
	
	Message Cracker Basics
	----------------------
	
	If a window procedure uses a message cracker to process a particular message, it
	must also implement a function to process that message. This function must have
	a specific "signature" (the order and types of parameters and the function's
	return type). The correct signature for each function is listed in WINDOWSX.H
	next to the corresponding message cracker.
	
	For example, if the window procedure in the example above uses the
	HANDLE_WM_MOUSEMOVE message cracker, it must also implement the
	Template_OnMouseMove function, which the message cracker calls.
	
	Once the application implements Template_OnMouseMove, the message cracker
	processes the message as follows:
	
	1. Splits wParam and lParam into component parts
	
	2. Type casts the parts correctly
	
	3. Passes the values as parameters to the application-supplied function (in this
	  case, the Template_OnMouseMove function)
	
	4. Returns an appropriate value from processing the message
	
	For more information on the inner workings of the message crackers, see the
	section titled "How Message Crackers Work" in WINDOWSX.TXT.
	
	Message Crackers Have Many Uses
	-------------------------------
	
	The WINDOWSX.TXT text file explains and illustrates how to use message crackers
	in many different application programming situations, including the following:
	
	- Passing messages to DefWindowProc, CallWindowProc, and so forth.
	
	- Private and registered window messages.
	
	- Windows with instance data.
	
	- Dialog box procedures.
	
	- Window subclassing.
	
	- Another way to create dialog box procedures that allows a dialog box
	  procedure to return an LRESULT data type. This method allows an application
	  to bypass the traditional limitation that dialog box procedures must return a
	  BOOL data type.
	
	Additional query words: no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
