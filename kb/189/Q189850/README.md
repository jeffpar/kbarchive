---
layout: page
title: "Q189850: INFO: Using WinInet APIs Asynchronously Within Visual Basic"
permalink: /kb/189/Q189850/
---

## Q189850: INFO: Using WinInet APIs Asynchronously Within Visual Basic

{% raw %}

	Article: Q189850
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the necessary steps to implement asynchronous WinInet APIs
	within Visual Basic. This article will also attempt to explain the difficulties
	involved in using the WinInet API in an asynchronous manner.
	
	It should be noted that Microsoft does not recommend using WinInet in Visual
	Basic in an asynchronous mode. It should also be noted that Microsoft does not
	support such use. This article is strictly for informational purposes only.
	
	MORE INFORMATION
	================
	
	WinInet provides a mechanism to make all I/O calls in an asynchronous manner
	(that is, the call is guaranteed to not block, and when the I/O request
	completes, a registered callback routine is fired with a specific set of
	parameters indicating the completion of the call). To implement this, a callback
	function must be defined and registered. To register a callback routine use the
	following (from the Internet Client SDK aka Internet Explorer Author's Toolkit
	documentation):
	
	     INTERNET_STATUS_CALLBACK InternetSetStatusCallback(
	           IN HINTERNET hInternet,
	           IN INTERNET_STATUS_CALLBACK lpfnInternetCallback
	     );
	
	InternetSetStatusCallback() will take the handle returned from InternetOpen() or
	InternetConnect() and a function pointer to the callback routine. In Visual
	Basic, this function pointer can be obtained using the AddressOf statement:
	
	     Sub MyCallBack( _
	        ByVal hInternet As Long, _
	        ByVal dwContext As Long, _
	        ByVal dwInternetStatus As Long, _
	        ByVal pbStatusInformation As Long, _
	        ByVal dwStatusInformationLength As Long)
	
	        ' Callback routine implementation.
	     End Sub
	
	     InternetSetStatusCallback(hSession, AddressOf MyCallBack)
	
	The signature of the callback routine is defined as:
	
	     VOID (CALLBACK * INTERNET_STATUS_CALLBACK)(
	        IN HINTERNET hInternet,
	        IN DWORD dwContext,
	        IN DWORD dwInternetStatus,
	        IN LPVOID lpvStatusInformation,
	        IN DWORD dwStatusInformationLength
	     );
	
	in the WININET.H header file (the header file is part of the Internet Client SDK
	aka Internet Explorer Author's Toolkit).
	
	Normally, this should suffice for setting up a callback routine in Visual Basic
	with WinInet APIs. However, there is a problem with how buffers are passed to
	calls like InternetReadFile(). In the Microsoft Knowledge Base article Q185519
	"Vbinet.exe WinInet API Declarations for Visual Basic," InternetReadFile() is
	declared as follows:
	
	     Public Declare Function InternetReadFile Lib "wininet.dll" ( _
	        ByVal hFile As Long, _
	        ByVal sBuffer As String, _
	        ByVal lNumBytesToRead As Long, _
	        lNumberOfBytesRead As Long) As Integer
	
	While this declaration will work with synchronous WinInet calls within Visual
	Basic, there will be a problem with asynchronous operations. The problem stems
	from the fact that when the data arrives over the wire, the Visual Basic
	run-time will temporarily copy the data into an internal buffer and then format
	it to fit into the Visual Basic String data type. When the call is invoked in an
	asynchronous manner, the data is never copied from the temporary buffer.
	Consequently, the sBuffer variable in the above declaration will never be filled
	with the data that arrived.
	
	To work around this problem, you must manually allocate a buffer for the WinInet
	to copy the arriving data. For this, you must manage all memory allocation and
	deallocation using the Win32 memory management APIs (such as
	LocalAlloc()/LocalFree(), etc...). You must also manage the serialized access to
	these memory structures using various synchronization objects (mutexes,
	semaphores, events, etc...), again using the Win32 APIs
	(CreateMutex()/CreateSemaphore()/CreateEvent()). Once that is accomplished, the
	declaration of the InternetReadFile() (and all calls like it, such as taking a
	buffer that WinInet will fill in or read from) must use a declaration like
	below:
	
	     Public Declare Function InternetReadFile Lib "wininet.dll" ( _
	        ByVal hFile As Long, _
	        ByVal sBuffer As Long, _
	        ByVal lNumBytesToRead As Long, _
	        lNumberOfBytesRead As Long) As Integer
	
	The difference is that instead of passing a String data type, you are actually
	passing the memory address of the newly allocated buffer.
	
	The basic flow the application will be as follows:
	
	1. Call InternetOpen() with the INTERNET_FLAG_ASYNC to indicate asynchronous
	  operations.
	
	2. Pass the handle from InternetOpen() to InternetSetStatusCallback().
	
	3. Call InternetConnect() with a valid context value. If InternetConnect() can
	  block (for example, connecting to an ftp server that is very slow in
	  accepting new connection requests), the call will return immediately and be
	  treated as a blocking I/O call. Steps 4 to 6 will apply in this case.
	
	4. Make I/O calls that would otherwise block. In async mode, these calls should
	  return immediately.
	
	5. If the I/O can complete immediately, when you return from the I/O call, the
	  data you requested or attempted to send will have been received or sent. If
	  the I/O can't complete immediately, the I/O call will return with a code
	  indicating that the I/O call is pending.
	
	6. On pending I/O, when the I/O completes, the WinInet layer will call the
	  callback routine. Within the callback routine, you will then issue the I/O
	  call again, this time the call should return immediately (for example, the
	  data you requested is immediately available or the data you attempted to send
	  was just sent).
	
	7. The actions in steps 4 to 6 will repeat indefinitely depending on how many
	  outstanding I/O calls you have.
	
	  It should be noted that memory allocation/deallocation and access has to be
	  serialized within your application. You are in effect passing WinInet a
	  pointer to a function in your application and pointers to various memory
	  buffers. Given that WinInet is multi-threaded and that your application is
	  running in asynchronous mode, you will need to make sure that access to
	  various memory locations are serialized. For example, one thread should not
	  attempt to overwrite a piece of memory currently being used by another
	  thread. To this end, you must use synchronization objects such as Win32
	  events, mutexes, or semaphores. A strong understanding of multi-threaded
	  application design and synchronization objects will be required.
	
	  At this point, it should be noted that the necessary skill set to accomplish
	  asynchronous WinInet APIs within Visual Basic will be the same as the skill
	  set needed to write a C/C++ application using WinInet in asynchronous mode.
	  This makes using WinInet APIs in Visual Basic asynchronously an undesirable
	  option.
	
	REFERENCES
	==========
	
	Internet Client SDK (Internet Explorer Author's Toolkit)
	
	Microsoft Visual C++ On-Line Win32 API Documentation
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q185519 : Vbinet.exe WinInet API Declarations for Visual Basic
	
	Additional query words: kbDSupport kbWNet kbVBp600 kbVBp kbInternet kbdsi kbVC500 kbAPI kbSDKWin32
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
