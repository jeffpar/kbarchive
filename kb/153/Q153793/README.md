---
layout: page
title: "Q153793: How To Check for a Remote Access Service Connection"
permalink: /kb/153/Q153793/
---

## Q153793: How To Check for a Remote Access Service Connection

	Article: Q153793
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some windows APIs related to a Remote Access Service. The
	tasks described in this article are available as commands in Microsoft FoxPro
	version 2.6 for Windows, as well as versions 3.0 and 3.0b. This article
	describes how to verify the RAS (Remote Access Service) while using the remote
	view.
	
	MORE INFORMATION
	================
	
	Often, you can anticipate the run-time errors when you work with the remote view
	due to the bad telephone connection. You can shield from these errors by
	including the error-handling code included in this article using APIs.
	
	It is possible to check whether a Remote Access Service has been disconnected.
	This verification can be controlled by using some API calls (RasEnumConnections
	and RasGetConnectStatus). In this article, the customized API routine was
	written using Microsoft Visual C++ 4.0 to check the status of RAS connections.
	
	The following sample program illustrates the contents of the .DLL file written in
	Microsoft Visual C++ 4.0 and shows a way to verify the connection of RAS
	successfully through the Win32 SDK.
	
	NOTE: This sample program illustrates many Microsoft Visual C++ commands. The use
	of these commands is beyond the scope of Microsoft FoxPro Product Support. Users
	with substantial experience using API routines should be able to write the
	following sample .DLL file. For this sample .DLL file to work, you need a .DEF
	file to export the rasnt function.
	
	Sample C++ Program (DLL)
	------------------------
	
	     #include <stdio.h>
	     #include <windows.h>
	     #include <ras.h>
	
	     HANDLE hInst;
	     HWND   hDlg;
	     HANDLE hHeap;
	
	     BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_being_called, LPVOID
	     lpReserved)
	     {
	         return 1;
	             UNREFERENCED_PARAMETER(hInst);
	             UNREFERENCED_PARAMETER(ul_reason_being_called);
	             UNREFERENCED_PARAMETER(lpReserved);
	     }
	
	     int APIENTRY rasnt(void)
	     {
	         LPRASCONN     lpRasConn = NULL;
	         DWORD   cbBuf = 0;
	         DWORD   cConn = 0;
	         DWORD   dwRet = 0;
	         HRASCONN   hrasconn;
	         RASCONNSTATUS rasStatus;
	         UINT    ndx;
	
	         // enumerate connections
	         cbBuf = sizeof(RASCONN);
	         if ( (lpRasConn = ( LPRASCONN ) malloc((UINT)cbBuf)) != NULL)
	         {
	             lpRasConn->dwSize = sizeof( RASCONN );
	             dwRet = RasEnumConnections( lpRasConn, &cbBuf, &cConn );
	        for (ndx = 0; ndx < cConn; ndx++)
	        {
	            // get to HRASCONN
	            hrasconn = lpRasConn[ndx].hrasconn;
	
	            // get connection status
	            rasStatus.dwSize = sizeof(RASCONNSTATUS);
	            dwRet = RasGetConnectStatus( hrasconn, &rasStatus );
	            if ( dwRet ) return 0;
	            else
	            {
	           if (rasStatus.rasconnstate == RASCS_Connected) return 1;
	           else return 0;
	            }
	        }
	         }
	
	         return 0;
	     }
	
	Sample DEF File
	---------------
	
	     LIBRARY   rasnt
	
	     CODE    PRELOAD MOVEABLE DISCARDABLE
	     DATA    PRELOAD SINGLE
	
	     EXPORTS
	         rasnt      @2
	
	Sample Visual FoxPro Program
	----------------------------
	
	     DECLARE integer rasnt IN RASNT.DLL
	     retval = rasnt()
	
	     IF retval = 1 THEN
	        WAIT WINDOW "there is connection"
	     ELSE
	        WAIT WINDOW "there is no connection"
	     ENDIF
	
	Sample Program (Notes)
	----------------------
	
	- To create a .DLL file in Visual C++, please refer to a Help file in Microsoft
	  Visual C++ 4.0.
	
	- Note that the Rasnt.dll should be in the same directory as your FoxPro
	  project, or should be in the path of the Windows Win32 directory.
	
	In order to compile the above DLL properly, you need to include RASAPI32.LIB.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
