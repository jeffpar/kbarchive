---
layout: page
title: "Q160321: DOC: User Supplied RASAdmin.dll Callbacks Must Use _stdcall"
permalink: kb/160/Q160321/
---

## Q160321: DOC: User Supplied RASAdmin.dll Callbacks Must Use _stdcall

	Article: Q160321
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.2;
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On the Microsoft Developers Network (MSDN) CD-ROM, the four user callback
	function entry points in the RASAdmin.dll (supplied by the user) in Windows NT
	4.0 must have _stdcall in their function declarations. The declarations in these
	files should include CALLBACK or WINAPI or __stdcall as is specified for other
	callback functions. Look at the page for EnumICMProfilesProc for an example of a
	callback function declaration. The documentation errors are located in the
	following files:
	
	  MSDN/Products/Win32SDK/Win32 Programmer's Reference/Reference/
	  Functions/RASGetIpAddressForUser
	
	  MSDN/Products/Win32SDK/Win32 Programmer's Reference/Reference/
	  Functions/RASReleaseIpAddress
	
	  MSDN/Products/Win32SDK/Win32 Programmer's Reference/Reference/
	  Functions/RASAcceptNewConnection
	
	  MSDN/Products/Win32SDK/Win32 Programmer's Reference/Reference/
	  Functions/RASHangupConnection
	
	MORE INFORMATION
	================
	
	Third-party RAS server administration DLLs have four entry points declared in
	the WIN32SDK programmer's reference. The declarations do not include the
	_stdcall calling sequence specifier. If you build your DLL using Visual C++ 4.x
	defaults, your DLL does not work correctly. You can either set your project to
	use __stdcall as the default by choosing:
	
	"Build\Settings\C/C++:Category Code Generation:Calling Convention __stdcall"
	(without the quotation marks)
	
	-or-
	
	you can change your code and Rassapi.h to use the following function
	declarations:
	
	  DWORD APIENTRY RasAdminGetIpAddressForUser(
	      WCHAR *lpszUserName,   // pointer to the name of the remote user
	      WCHAR *lpszPortName,   // pointer to the name of the port
	      IPADDR *pipAddress,         // pointer to the IP address
	      BOOL *bNotifyRelease   // indicates whether RAS should call
	  RasAdminReleaseIpAddress
	     );
	  VOID APIENTRY RasAdminReleaseIpAddress(
	      WCHAR *lpszUserName,   // pointer to the name of the remote user
	      WCHAR *lpszPortName,   // pointer to the name of the port
	      IPADDR *pipAddress         // pointer to the IP address
	     );
	  BOOL APIENTRY RasAdminAcceptNewConnection(
	      RAS_PORT_1 *pRasPort1, // pointer to connection information
	      RAS_PORT_STATISTICS *pRasStats, // pointer to port statistics
	      RAS_PARAMETERS *pRasParams   // pointer to an array of parameters
	     );
	
	  VOID APIENTRY RasAdminConnectionHangupNotification(
	      RAS_PORT_1 *pRasPort1, // pointer to connection information
	      RAS_PORT_STATISTICS *pRasStats, // pointer to port statistics
	      RAS_PARAMETERS *pRasParams   // pointer to an array of parameters
	     );
	
	NOTE: The remaining RasAdmin... functions are correctly declared in rassapi.h
	using APIENTRY.
	
	
	Additional query words: MSDN
	
	======================================================================
	Keywords          : kbnetwork kbdocerr 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINNT:4.2;
	
	=============================================================================
	
