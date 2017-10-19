---
layout: page
title: "Q108933: Top 10 DDEML Support Issues"
permalink: /kb/108/Q108933/
---

## Q108933: Top 10 DDEML Support Issues

	Article: Q108933
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the top 10 commonly asked DDEML issues:
	
	1. Q. The documentation for DdeCreateStringHandle() states that it applies to
	  strings of any length. Why am I finding that strings are limited to 255
	  characters?
	
	  A. Strings in DDEML are internally implemented as atoms, and as such, inherit
	  the 255 character limit. This limit is maintained in 32-bit DDEML for
	  backward compatibility.
	
	  For more information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q102570 DOCERR: DdeCreateStringHandle() lpszString param
	
	2. Q. Why is my call to DdeClientTransaction (..XTYP_EXECUTE,,) failing? I have
	  specified a length of lstrlen (szBuffer).
	
	  A. The documentation doesn't mention it, however, the buffer length specified
	  should account for the null-terminating character, and therefore should be
	  lstrlen(szBuffer) +1. You can verify this easily with DDESPY; watch garbage
	  characters get appended to the command- string if an inadequate length is
	  specified in the DdeClientTransaction() call.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q107387 PRB: Inadequate Buffer Length Causes Strange Problems in DDEML.
	
	3. Q. Is there a way for a client application to get to the result of an execute
	  command it had sent a server application to execute? DdeClientTransaction()'s
	  return value does not seem to help, nor does its lpuResult parameter contain
	  anything relevant.
	
	  A. You will have to establish your own protocol to do this. Either issue a
	  separate XTYP_REQUEST for some item name (for example, ExecResult) after the
	  XTYP_EXECUTE was sent, or set up an advise loop that immediately notifies the
	  client of the execute result as soon as the command has executed.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q102574 XTYP EXECUTE and its Return Value Limitations
	
	4. Q. When should a server application free data handles? How about a client
	  application?
	
	  A. Servers should free data handles when:
	
	   - Created as HDATA_APPOWNED
	
	   - The data handle is not passed to a client application
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q83413 Freeing Memory in a DDEML Server Application
	
	  Clients should free data handles when:
	
	   - Received synchronously as a return value from a call to
	     DdeClientTransaction (..XTYP_REQUEST,,).
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q83912 Freeing Memory for Transactions in a DDEML Client App
	
	5. Q. Why does my DdeInitialize() call fail when called from my dynamic- link
	  library's (DLL's) LibMain() function? Calling it elsewhere in my DLL seems to
	  work.
	
	  A. DdeInitialize() causes windows to be created for DDEML's own use. This then
	  causes messages to be sent to the calling application's message queue, which
	  does not exist yet during LibMain() or DllMain() in an implicitly-loaded DLL.
	  Moving the call to DdeInitialize() anywhere else in the DLL, or explicitly
	  loading the DLL via LoadLibrary(), should fix the problem.
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q94954 PRB: DdeInitialize Fails in Implicitly-Loaded DLL's LibMain()
	
	6. Q. How do I implement Paste Link in my client/server application? Q94954 A.
	  Client and Server applications that support the Paste Link command should
	  register the "Link" clipboard format as shown:
	
	  cfLink = RegisterClipboardFormat ("Link");
	
	  When a user chooses Copy from a server application's Edit menu, the server
	  copies to the clipboard a string in this format
	
	  application\0topic\0item\0\0
	
	  with a single null character separating the names, and two null characters
	  terminating the string.
	
	  When the user chooses Paste Link from a client's Edit menu, the client opens
	  the clipboard and starts parsing the application, topic, and item names from
	  the clipboard data. Using these names, it then attempts to establish a
	  conversation on the application!topic, and sets up a hot advise loop on the
	  item name.
	
	  Refer to the Windows SDK version 3.1 SDK "Guide to Programming," manual,
	  Section 22.4.3.2, page 529.
	
	7. Q. I'm having a problem with the DdeCreateDataHandle() function; it does not
	  seem to work as documented.
	
	  A. The cbInitData param should be documented as specifying the amount of
	  memory, in bytes, to copy from the source buffer pointed to by lpvSrcBuff.
	
	  The offSrcBuf should have been documented as offTargetBuff, to point to the
	  beginning of the global memory object (NOT the source buffer) where data is
	  supposed to be copied.
	
	8. Q. I get a stack overflow when I call DdePostAdvise().
	
	  A. You might be calling DdePostAdvise() from your DdeCallback, while
	  processing the XTYP_ADVREQ transaction. This is the equivalent of calling
	  InvalidateRect() from a window procedure's WM_PAINT case, which results in a
	  similar stack overflow, because InvalidateRect() generates a WM_PAINT
	  message.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q102571 Calling DdePostAdvise() from XTYP ADVREQ
	
	  -and-
	
	  Q92540 Is DdePostAdvise Synchronous?
	
	9. Q. 16-bit Windows only: When I call DdeCreateDataHandle() to allocate memory
	  for a buffer 5-bytes long, why does DdeGetData(hData,NULL,0,0) return 32
	  bytes (or 28 bytes, depending on the transaction type) as the size of the
	  memory block allocated?
	
	  A. Internally, DDEML calls GlobalAlloc (GMEM_DDESHARE) to allocate global
	  memory and create data handles. When GlobalAlloc() allocates memory, it
	  aligns the allocation size to a 32 byte boundary, thus all memory allocations
	  are done in multiples of 32 bytes.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q108926 DdeCreateDataHandle Memory Allocation Granularity DDEML
	
	10. Q. How do I set up a conversation with Word/Excel and get either of them to
	  execute commands?
	
	  A. Call DdeConnect(), specifying "WinWord" and "System" or "Excel" and
	  "System" as service and topic names respectively, and then send the command
	  string to execute (in WordBasic command or Excel macro format respectively),
	  enclosed in open and close brackets [].
	
	  For example, to send WinWord a command to open a file, your call to
	  DdeClientTransaction() should resemble the following:
	
	            char szExecute[100];
	            lstrcpy (szExecute,"[FileOpen(\"C:\\README.DOC\")]");
	            DdeClientTransaction(lpszExecString, lstrlen (lpszExecString) +1,
	                                 hConvServer, NULL,
	                                 CF_TEXT, XTYP_EXECUTE,
	                               1000, NULL);
	
	Additional query words: 3.10 3.50 4.00 95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,3.5,3.51,4.0
	
	=============================================================================
	
