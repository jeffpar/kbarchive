---
layout: page
title: "Q165682: INFO: Visual C++ 5.0 Readme, Documentation Issues"
permalink: kb/165/Q165682/
---

## Q165682: INFO: Visual C++ 5.0 Readme, Documentation Issues

	Article: Q165682
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Documentation Issues
	--------------------
	
	Inactive Links in the Online Documentation
	Avoid Disc Swapping During Full-Text Search of the Documentation
	ODBC 3.0 Programmer's Reference and SDK Guide
	Error in the Scribble MDI Drawing Application Documentation
	The Properties Menu Item is Now Located on the View Menu
	Microsoft Oracle ODBC Driver is Missing from the "ODBC Driver List" Topic
	Typographical Error in Circle Tutorial
	Documentation Errors in ATL Tutorial
	Missing Help Topic for "Ignore Export Library" Check Box
	Changes to ATL Stock Property Macros
	Changes to the MFC Reference Documentation
	
	MORE INFORMATION
	================
	
	Inactive Links in the Online Documentation
	------------------------------------------
	
	Certain types of links in the online documentation do not work. They look like
	links, but if you click them, nothing happens.
	
	Such inactive links may be due to a setting in your Internet Explorer 3.0 that
	prevents ActiveX scripts from running.
	
	To enable the links, do the following:
	
	1. Open Internet Explorer 3.0.
	
	2. From the View menu, select Options.
	
	3. In the Options dialog box, click the Security tab.
	
	4. Under Active content, check the Run ActiveX scripts check box.
	
	5. Click Apply.
	
	6. Click OK.
	
	Avoid Disc Swapping During Full-Text Search of the Documentation
	----------------------------------------------------------------
	
	The MSDN CD contains all of the online documentation for all products in Visual
	Studio 97. If you install MSDN and leave it in the CD drive, you will not have
	to swap discs to search online content.
	
	If you chose the CD-ROM installation option when you installed Visual C++, you
	will need to have the Visual C++ CD in your CD ROM drive most of the time. To
	avoid looking for on-line content that is not on the Visual C++ CD, use the
	Define Subsets command from the Help menu to create a restricted search subset
	of the following Visual C++ documentation:
	
	- Welcome to Visual C++ (vcedit)
	
	- Visual C++ Tutorials (vctutor)
	
	- Visual C++ Programmer's Guide (vccore)
	
	- Microsoft Foundation Class Reference (vcmfc)
	
	- C/C++ Language and C++ Libraries (vclang)
	
	- Visual C++ Samples (vcsample)
	
	Use this subset when doing most full-text searches. Use the "Entire Contents"
	subset when you need to search all of the online documentation and don't care
	about disc swapping.
	
	ODBC 3.0 Programmer's Reference and SDK Guide
	---------------------------------------------
	
	The ODBC 3.0 documentation was not available for integration into Visual C++ 5.0
	Infoviewer at the time of manufacture. (The ODBC documentation that you can find
	in the InfoViewer is for ODBC 2.5)
	
	However, the following Windows Help files (WinHlp32.exe) are installed during
	setup in the DevStudio\SharedIDE\Help directory:
	
	- ODBC.HLP -- ODBC 3.0 Programmer's Reference
	
	- SDKGUIDE.HLP -- ODBC 3.0 SDK Guide
	
	- ODBCJET.HLP -- ODBC Microsoft Desktop Database Drivers Help
	
	- ODBCJTNW.HLP -- ODBC Desktop Database Drivers - What's New Help
	
	Use the following procedure to add them to the Tools menu:
	
	1. From the Tools menu, click Customize.
	
	2. Click the Tools tab.
	
	3. Scroll to the bottom of the Menu contents grid, add a string to represent
	  launching one of the Help files. For example, type "ODBC 3.0 Programmer's
	  Reference".
	
	4. In the Command edit box, type "WinHlp32.exe".
	
	5. In the Arguments edit box, type the location of ODBC.hlp. For example, type
	  "C:\Program Files\DevStudio\SharedIDE\Help\ODBC.hlp".
	
	6. Click Close.
	
	7. Repeat for each Help file you wish to use.
	
	Error in the Scribble MDI Drawing Application Documentation
	-----------------------------------------------------------
	
	In the topic "Create the Dialog Box," in the procedure, "To create the Pen Widths
	dialog box," Step 3 suggests that you double-click the dialog box to bring up
	the dialog box property page. To bring up the property page, right- click the
	dialog box, and then click Properties.
	
	The Properties Menu Item is Now Located on the View Menu
	--------------------------------------------------------
	
	In the topics "Associating the Toolbar Button with a Command ID" and "Adding a
	Tool Tip" in the Scribble MDI Drawing Application, you are instructed to click
	Properties from the Edit menu. The Properties item is now located on the View
	menu.
	
	Microsoft Oracle ODBC Driver is Missing From the "ODBC Driver List" Topic
	-------------------------------------------------------------------------
	
	The list of ODBC drivers, found in the "ODBC Driver List" topic, should include
	the Microsoft Oracle ODBC driver.
	
	Typographical Error in Circle Tutorial
	--------------------------------------
	
	In the topic "Creating the Basic Control," the first class name in the table that
	describes the class templates created by ControlWizards is incorrect. The
	correct class name is CCircApp.
	
	  Class      Files        Comments
	  CCircApp   CIRC.H       Implements the main DLL source.
	             CIRC.CPP     Typically, there is no need to modify this code.
	
	Documentation Errors in ATL Tutorial
	------------------------------------
	
	The ATL Tutorial contains the following two errors:
	
	- Step 4 includes instructions for removing the DllMain entry point. Because
	  the ATL COM AppWizard no longer sets DllMain as the entry point, this step is
	  unnecessary.
	- In Step 6, the statement:
	
	     #include Polygon.h
	   
	
	  should be replaced by
	
	     #include "Polygon.h"
	
	Missing Help Topic for "Ignore Export Library" Check Box
	--------------------------------------------------------
	
	On the Link tab, General category, when a DLL project (/DLL is one of the link
	options) is selected in the file tree, there is a new check box, Ignore export
	library. The context-sensitive Help for this check box is not available. The
	Help text for the Ignore export library check box is as follows:
	
	When the Ignore export library box is checked, the parent project will not
	automatically attempt to link to the export library of the subproject. Select
	this setting when building a resource-only DLL as a subproject of an EXE.
	
	Changes to ATL Stock Property Macros
	------------------------------------
	
	The macro IMPLEMENT_SMARTPTR_STOCKPROP has been removed from ATL. The macro
	IMPLEMENT_BOOL_STOCKPROP has been added and should be used for all stock
	properties that are boolean values, such as the standard AUTOSIZE,
	BORDERVISIBLE, ENABLED, TABSTOP, and VALID stock properties.
	
	Changes to the MFC Reference Documentation
	------------------------------------------
	
	Three changes to the MFC Reference documentation are included below.
	
	1. Details aboutCOleDateTime If you create a COleDateTime object with a date
	  less than 100, the date will be accepted, but subsequent calls to GetYear,
	  GetMonth, GetDay, GetHour, GetMinute, and GetSecond will fail and return -1.
	  Previously, you could use two-digit dates, but dates must be 100 or greater
	  in VC++ 4.2.To avoid problems, specify a four-digit date. For example:
	
	        COleDateTime.mytime(1996,1,1,0,0,0);
	   
	
	2. A new override of GetHttpConnection was added: CHttpConnection*
	  GetHttpConnection(LPCTSTR pstrServer, DWORD dwFlags, INTERNET_PORT nPort =
	  INTERNET_INVALID_PORT_NUMBER, LPCTSTR pstrUserName = NULL, LPCTSTR
	  pstrPassword = NULL);
	
	3. The following replacement topic for CInternetSession::OpenURL:
	
	     CInternetSession::OpenURL
	
	     CStdioFile* OpenURL( LPCTSTR pstrURL, DWORD dwContext = 1,
	
	     DWORD dwFlags = 0, LPCTSTR pstrHeaders = NULL, DWORD
	
	     dwHeadersLength = 0 );
	
	     Throw ( CInternetException );
	   
	
	Return Value
	
	Returns a file handle for FTP, GOPHER, HTTP, and FILE-type Internet services
	only. Returns NULL if parsing was unsuccessful. The pointer that OpenURL returns
	depends on pszURL's type of service. The table below illustrates the possible
	pointers OpenURL can return.
	
	  URL type Returns
	
	  file://CStdioFile*
	
	  http://CHttpFile*
	
	  gopher://CGopherFile*
	
	  ftp://CInternetFile*
	
	Parameters
	
	pstrURL A pointer to the name of the URL to begin reading. Only URLs beginning
	with file:, ftp:, gopher:, or http: are supported. ASSERTS if pszURL is NULL.
	
	dwContext An application-defined value passed with the returned handle in
	callback.
	
	dwFlags The flags describing how to handle this connection. The valid flags,
	which can be combined with the bitwise OR operator (|), are:
	
	- INTERNET_FLAG_TRANSFER_ASCII The file is transferred as a text file.
	- INTERNET_FLAG_TRANSFER_BINARY The file is transferred as a binary file.
	- INTERNET_FLAG_RELOAD Get the data from the wire even if it is locally cached.
	- INTERNET_FLAG_DONT_CACHE Do not cache the data, either locally or in any
	  gateways.
	- INTERNET_FLAG_SECURE This flag is applicable to HTTP requests only. It
	  requests secure transactions on the wire with Secure Sockets Layer or PCT.
	- INTERNET_OPEN_FLAG_USE_EXISTING_CONNECT If possible, reuse the existing
	  connections to the server for new requests generated by OpenURL instead of
	  creating a new session for each connection request.
	- INTERNET_FLAG_PASSIVE Used for an FTP site. Uses passive FTP semantics. Used
	  with CInternetConnection of OpenURL.
	
	pstrHeaders A pointer to a string containing the headers to be sent to the HTTP
	server.
	
	dwHeadersLength The length, in characters, of the additional headers. If this is
	-1L and pstrHeaders is non-NULL, then pstrHeaders is assumed to be zero
	terminated and the length is calculated.
	
	Remarks
	
	Call this member function to send the specified request to the HTTP server and
	allow the client to specify additional RFC822, MIME, or HTTP headers to send
	along with the request. OpenURL, which wraps the Win32 function InternetOpenURL,
	allows only downloading, retrieving, and reading the data from an Internet
	server. OpenURL allows no file manipulation on a remote location, so it requires
	no CInternetConnection object. To use connection- specific (that is,
	protocol-specific) functions, such as writing to a file, you must open a
	session, then open a particular kind of connection, then use that connection to
	open a file in the desired mode. See CInternetConnection for more information
	about connection-specific functions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : :5.0
	
	=============================================================================
	
