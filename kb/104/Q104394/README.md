---
layout: page
title: "Q104394: Dynamic Data Exchange Interface for Replacement Shells"
permalink: /kb/104/Q104394/
---

## Q104394: Dynamic Data Exchange Interface for Replacement Shells

	Article: Q104394
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is a reprint of the Windows 3.1 SDK WIN31WH.HLP section on the
	WinOldAp dynamic data exchange (DDE) specification.
	
	MORE INFORMATION
	================
	
	You may choose to write an application that replaces the Windows shell. This
	replacement shell must be able to provide property information to the
	application that starts non-Windows programs in an MS-DOS window. (This
	application is known as WinOldApp.) This section discusses how a replacement
	shell can provide property information for WinOldApp. Applications other than
	WinOldApp do not need this information. The DDE protocol described in this
	section may not be supported in future versions of Windows.
	
	Properties
	----------
	
	A replacement shell should maintain several pieces of information, called
	properties, for each application that WinOldApp might start. These are the same
	properties that appear in the Program Item Properties dialog box of Program
	Manager. These properties include:
	
	  Description (title)
	
	  Command line
	
	  Working directory
	
	  Shortcut key
	
	  Icon
	
	The shell must provide a DDE interface that allows WinOldApp to obtain three of
	these properties: description, working directory, and icon. To obtain its
	properties from the shell, WinOldApp must accomplish the following tasks:
	
	- Establish a DDE conversation with the shell.
	
	- Request a property from the shell.
	
	- Receive a property from the shell.
	
	- Terminate the DDE conversation.
	
	Establishing a DDE Conversation
	-------------------------------
	
	WinOldApp requests property data from the shell by using the SendMessage function
	to broadcast the WM_DDE_INITIATE message. The wParam parameter of the
	SendMessage function is the handle of WinOldApp's DDE window. The low-order word
	of the lParam parameter is an atom that represents the name of the shell
	application: "Shell". The high-order word is an atom that represents the name of
	the properties topic: "AppProperties". A "Shell" DDE server that supports the
	AppProperties topic responds to the WM_DDE_INITIATE message by sending a
	WM_DDE_ACK message. The server should send the following parameters with the
	WM_DDE_ACK message:
	
	  Parameter       Description
	  -------------------------------------------------------------------
	  hwnd            Specifies the handle of WinOldApp's DDE window. The
	                  shell should use the handle that WinOldApp specified
	                  as the wParam parameter in the WM_DDE_INITIATE message.
	
	  message         Specifies the WM_DDE_ACK message.
	
	  wParam          Specifies the handle of the "Shell" server's DDE
	                  window.
	
	  HIWORD(lParam)  Specifies an atom that represents the name of the
	                  shell application: "Shell".
	
	  LOWORD(lParam)  Specifies an atom that represents the name of the
	                  properties topic: "AppProperties".
	
	It is not necessary to free the atoms used in a conversation with WinOldApp. It
	is WinOldApp's responsibility to create and free the atoms.
	
	Providing Property Data
	-----------------------
	
	After the DDE server that provides a replacement shell responds with a WM_DDE_ACK
	message to the WM_DDE_INITIATE from WinOldApp, WinOldApp sends a WM_DDE_REQUEST
	message to request property data. The server can respond to the WM_DDE_REQUEST
	message by posting a WM_DDE_DATA message.
	
	The Windows shell associates an item name with each of the application properties
	that it provides. The item names are described in the following table:
	
	  Item name       Description
	  ---------------------------------------------------------------
	
	  GetDescription  The shell provides an application's description
	                  (title) property.
	
	  GetWorkingDIR   The shell provides an application's
	                  working-directory property.
	
	  GetIcon         The shell provides an application's icon property.
	
	WinOldApp requests properties by obtaining an atom for each of the item-name
	strings and passing the atoms to the shell in a sequence of WM_DDE_REQUEST
	messages (one message for each property). WinOldApp also passes the handle of
	the application's instance as the low-order word of the lParam parameter in the
	WM_DDE_REQUEST message. The shell should use this instance handle to find the
	properties associated with the application. If a "Shell" DDE server does not
	recognize the application's instance handle, the server does not support
	properties for the application instance. In this case, the server should respond
	by sending a negative WM_DDE_ACK message. The parameters passed with the
	negative WM_DDE_ACK message are as follows:
	
	  Parameter       Description
	  ------------------------------------------------------------------
	
	  hwnd            Specifies the handle of WinOldApp's DDE window. The
	                  shell should use the handle that WinOldApp specified
	                  as the wParam parameter in the WM_DDE_REQUEST message.
	  message         Specifies the WM_DDE_ACK message.
	
	  wParam          Specifies the handle of the "Shell" server's DDE window.
	
	  LOWORD(lParam)  Specifies zero. The "Shell" DDE server does not support
	                  properties for the specified application instance.
	
	  HIWORD(lParam)  Specifies an atom that represents the item name of
	                  the requested property. Depending on the type of
	                  property requested, the atom should identify one of
	                  the following strings: "GetDescription",
	"GetWorkingDIR",
	                  or "GetIcon".
	
	When WinOldApp receives a negative WM_DDE_ACK message, it terminates the
	conversation with the "Shell" DDE server. If a "Shell" DDE server recognizes the
	application's instance handle and the requested property is available, it should
	allocate a global memory object and copy the property data to the object. Then
	it should post a WM_DDE_DATA message to WinOldApp. The WM_DDE_DATA message
	should contain the handle of the global memory object.
	
	The contents of the global memory object allocated by the shell depend on the
	type of property WinOldApp requested. The following three sections describe the
	description, working-directory, and icon properties.
	
	Providing the Description Property
	----------------------------------
	
	If the shell is responding to a request for the "GetDescription" property, the
	shell should pass the following parameters with the WM_DDE_DATA message:
	
	  Parameter       Description
	  -------------------------------------------------------------------
	
	  hwnd            Specifies the handle of WinOldApp's DDE window. The
	                  shell should use the handle that WinOldApp specified
	                  as the wParam parameter in the WM_DDE_REQUEST message.
	
	  message         Specifies the WM_DDE_DATA message.
	
	  wParam          Specifies the handle of the shell's DDE window.
	
	  LOWORD(lParam)  Specifies a handle to a global memory object that
	                  contains a DDEDATA structure. A description of the
	                  contents of the DDEDATA structure follows this table.
	                  To report an error, the server should use one of the
	                  error values listed with the WinExec function.
	
	  HIWORD(lParam)  Specifies an atom that represents the string,
	                  "GetDescription".
	
	The low-order word of the lParam parameter should be a handle to a global memory
	object that contains a DDEDATA structure (defined in the DDE.H header file). The
	contents of the DDEDATA structure are as follows:
	
	  #include <dde.h>
	
	  typedef struct tagDDEDATA {   /* ddedat */ 
	      WORD    unused:12,
	              fResponse:1,
	              fRelease:1,
	              reserved:1,
	              fAckReq:1;
	      short   cfFormat;
	      BYTE    Value[1];
	  } DDEDATA;
	
	The Value member should contain the description property, in the form of a
	null-terminated string of characters from the Windows character set. The string
	can be any size but typically contains fewer than 30 characters. If the server
	sets the fAckReq bit, WinOldApp responds to the WM_DDE_DATA message by posting a
	WM_DDE_ACK message after processing the data. If the server sets the fRelease
	bit, WinOldApp frees the global memory object after copying the description
	string. Otherwise, WinOldApp does not free the memory object.
	
	Providing the Working-Directory Property
	----------------------------------------
	
	If the shell is responding to WinOldApp's request for the "GetWorkingDIR"
	property, the shell passes the following parameters with the WM_DDE_DATA
	message:
	
	  Parameter       Description
	  ------------------------------------------------------------------
	
	  hwnd            Specifies the handle of WinOldApp's DDE window. The
	                  shell should use the handle that WinOldApp specified
	                  as the wParam parameter in the WM_DDE_REQUEST message.
	
	  message         Specifies the WM_DDE_DATA message.
	
	  wParam          Specifies the handle of the shell's DDE window.
	
	  LOWORD(lParam)  Specifies a handle to a global memory object that
	                  contains a DDEDATA structure. A description of the
	                  contents of the DDEDATA structure follows this table.
	                  To report an error, the server should use one of the
	                  error values listed with the WinExec function.
	
	  HIWORD(lParam)  Specifies an atom that represents the string,
	                  "GetWorkingDIR".
	
	The low-order word of the lParam parameter is a handle to a global memory object
	that contains a DDEDATA structure. The contents of the DDEDATA structure are as
	follows:
	
	  #include <dde.h>
	
	  typedef struct tagDDEDATA {   /* ddedat */ 
	      WORD    unused:12,
	              fResponse:1,
	              fRelease:1,
	              reserved:1,
	              fAckReq:1;
	      short   cfFormat;
	      BYTE    Value[1];
	  } DDEDATA;
	
	The Value member should specify the location (drive and path) of the
	application's executable file, in the form of a null-terminated string of
	characters from the Windows character set. The character string has a maximum
	size of 128 characters (including the terminating null character). If the server
	sets the fAckReq bit, WinOldApp responds to the WM_DDE_DATA message by posting a
	WM_DDE_ACK message after processing the working-directory property. If the
	server sets the fRelease bit, WinOldApp frees the global memory object after
	copying the working-directory string. Otherwise, WinOldApp does not free the
	memory object.
	
	Providing the Icon Property
	---------------------------
	
	If the shell is responding to WinOldApp's request for "GetIcon" property, the
	shell passes the following parameters with the WM_DDE_DATA message:
	
	  Parameter       Description
	  -------------------------------------------------------------------
	
	  hwnd            Specifies the handle of WinOldApp's DDE window. The
	                  shell should use the handle that WinOldApp specified
	                  as the wParam parameter in the WM_DDE_REQUEST message.
	
	  message         Specifies the WM_DDE_DATA message.
	
	  wParam          Specifies the handle of the shell's DDE window.
	
	  LOWORD(lParam)  Specifies a handle to a global memory object that
	
	                  contains a DDEDATA structure. A description of the
	                  contents of the DDEDATA structure follows this table.
	                  To report an error, the server should use one of the
	                  error values listed with the WinExec function.
	
	  HIWORD(lParam)  Specifies an atom that represents the string,
	                  "GetIcon".
	
	The low-order word of the lParam parameter is a handle to a global memory object
	that contains icon-property data. The icon data should be in the following
	form:
	
	  unsigned reserved:12,  reserved            
	               fResponse:1,   /* always 1                         */ 
	               fRelease:1,    /* 1 if app. frees object, else 0   */ 
	               reserved:1,    /* reserved                         */ 
	               fAckReq:1;     /* 1 if app. should respond, else 0 */ 
	      int      cfFormat;      /* clipboard format (not used)      */ 
	      int      nWidth;        /* width, in pixels, of the icon    */ 
	      int      nHeight;       /* height, in pixels, of the icon   */ 
	      BYTE     nPlanes;       /* number of planes in XOR mask     */ 
	
	      BYTE     nBitsPixel;    /* number of bits/pixel in XOR mask */ 
	      LPBYTE   lpANDbits;     /* points to AND mask array         */ 
	      LPBYTE   lpXORbits;     /* points to XOR mask array         */ 
	  } ICONPROPS;
	
	If the server sets the fAckReq bit, WinOldApp responds to the WM_DDE_DATA message
	with a WM_DDE_ACK message after processing the data. If the server sets the
	fRelease bit, WinOldApp frees the global memory object after copying the
	working-directory string. Otherwise, WinOldApp does not free the memory object.
	
	The lpANDbits and lpXORbits pointers may be either near or far. If the pointers
	are near (that is, the segment selector portion of the pointers is zero), the
	bits are part of the global memory object. The offset portion of the pointers is
	a near offset from byte zero of the object. Because the bits are part of the
	global memory object, they are freed along with the object. The combined size of
	the ICONPROPS structure together with the bits pointed to by the lpANDbits and
	lpXORbits members must be no more than 64K.
	
	If the server needs to use far pointers for the lpANDbits and lpXORbits members,
	the bits must be part of a separate memory object. This object is not freed
	automatically when the global memory object is freed.
	
	Terminating the DDE Conversation
	--------------------------------
	
	The shell may terminate the conversation at any time by posting a
	WM_DDE_TERMINATE message. After WinOldApp has obtained its properties from the
	shell, it terminates the DDE conversation by posting a WM_DDE_TERMINATE message.
	
	Additional query words: no32bit 3.10 dosapp winexec
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
