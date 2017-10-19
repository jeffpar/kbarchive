---
layout: page
title: "Q257607: Programming Applications for Microsoft Windows Comments and Corr"
permalink: /kb/257/Q257607/
---

## Q257607: Programming Applications for Microsoft Windows Comments and Corr

	Article: Q257607
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Applications for Microsoft Windows ISBN 1-57231-996-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Applications for Microsoft
	Windows, ISBN 1-57231-996-8.
	
	The following topics are covered:
	
	- Page xxxi: Microsoft Press Support Link Is Incorrect
	
	- Page xxxi: "Welcome directory" Described Is Not On CD-ROM
	
	- Page xxxi: Microsoft Platform SDK Should Be Listed In System Requirements
	
	- Page 12: Add Flag to Second Call to FormatMessage
	
	- Page 59: Insert CloseHandle(h) Before First Return
	
	- Page 74: Error In Code Sample
	
	- Page 82: Correction to ExpandEnvironmentStrings Function
	
	- Page 271: Correction to Code
	
	- Page 294: Typo in Code
	
	- Page 541: Correction to Calculation in Code
	
	- Page 601: Text Correction
	
	- Page 621: Correction to Code Comments
	
	MORE INFORMATION
	================
	
	Page xxxi: Microsoft Press Support Link Is Incorrect
	----------------------------------------------------
	
	The current URL for Microsoft Press Support listed on page xxxi is
	http://mspress.microsoft.com/mspress/support.
	
	The URL should be http://mspress.microsoft.com/support/.
	
	
	Page xxxi: "Welcome directory" Described Is Not On CD-ROM
	---------------------------------------------------------
	
	The last paragraph of the About the CD-ROM/System Requirements section states:
	"... go into the Welcome directory and execute the PressCD.exe application".
	
	There is no Welcome directory on the CD. There is a \Setup directory, containing
	PressCDx86.exe and PressCDalpha.exe. Please execute the proper file for your
	system.
	
	
	Page xxxi: Microsoft Platform SDK Should Be Listed In System Requirements
	-------------------------------------------------------------------------
	
	The Microsoft Platform SDK is one of the system requirements for this title. This
	item should be added to the "About the CD-ROM/System Requirements" section.
	
	
	Page 12: Add Flag to Second Call to FormatMessage
	-------------------------------------------------
	
	On page 12, the second call to FormatMessage should include the
	FORMAT_MESSAGE_ALLOCATE_BUFFER flag.
	
	Change:
	
	  If (hDll != NULL) {
	     FormatMessage(
	        FORMAT_MESSAGE_FROM_HMODULE | FORMAT_MESSAGE_FROM_SYSTEM, 
	        hDll, dwError, MAKELANGID(LANG_ENGLISH, SUBLANG_ENGLISH_US),
	        (PTSTR) &hlocal, 0, NULL);
	     FreeLibrary(hDll);
	
	To:
	
	  If (hDll != NULL) {
	     FormatMessage(
	        FORMAT_MESSAGE_FROM_HMODULE | FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_ALLOCATE_BUFFER, 
	        hDll, dwError, MAKELANGID(LANG_ENGLISH, SUBLANG_ENGLISH_US),
	        (PTSTR) &hlocal, 0, NULL);
	     FreeLibrary(hDll);
	
	
	Page 59: Insert CloseHandle(h) Before First Return
	--------------------------------------------------
	
	On page 59, CloseHandle(h) should appear immediately before the first return
	statement.
	
	Change:
	
	  if (GetLastError() == ERROR_ALREADY_EXISTS) {
	     //There is already an instance of this application running.
	     return(0);
	
	To:
	
	  if (GetLastError() == ERROR_ALREADY_EXISTS) {
	     //There is already an instance of this application running.
	     CloseHandle(h);
	     return(0);
	
	
	Page 74: Error In Code Sample
	-----------------------------
	
	On page 74, the opening parenthesis for function WindMain() is missing.
	
	Change:
	"int nMainRetVal = WinMainGetModuleHandle(NULL), NULL, pszCommandLineAnsi,"
	
	To:
	"int nMainRetVal = WinMain(GetModuleHandle(NULL), NULL, pszCommandLineAnsi,"
	
	
	Page 82: Correction to ExpandEnvironmentStrings Function
	--------------------------------------------------------
	
	On page 82, at the bottom of the page, the prototype for ExpandEnvironmentStrings
	is incorrect.
	
	Change:
	
	  DWORD ExpandEnvironmentStrings(
	      PCSTR pszSrc,
	      PSTR pszDst,
	      DWORD nSize);
	
	To:
	
	  DWORD ExpandEnvironmentStrings(
	      PCTSTR pszSrc,
	      PTSTR pszDst,
	      DWORD nSize);
	
	
	Page 271: Correction to Code
	----------------------------
	
	On page 271, in the code at the bottom of the page, the while statement's
	conditional test of g_nIndex is not thread safe since the test is outside the
	critical section. The functions should be written as follows:
	
	             DWORD WINAPI FirstThread(PVOID pvParam) {
	                for (BOOL fContinue = TRUE; fContinue; ) {
	                   EnterCriticalSection(&g_cs);
	                   if (g_nIndex < MAX_TIMES) {
	                      g_dwTimes[g_nIndex] = GetTickCount();
	                      g_nIndex++;
	                   } else fContinue = FALSE;
	                   LeaveCriticalSection(&g_cs);
	                }
	                return(0);
	             }
	
	             DWORD WINAPI SecondThread(PVOID pvParam) {
	                for (BOOL fContinue = TRUE; fContinue; ) {
	                   EnterCriticalSection(&g_cs);
	                   if (g_nIndex < MAX_TIMES) {
	                      g_nIndex++;
	                      g_dwTimes[g_nIndex - 1] = GetTickCount();
	                   } else fContinue = FALSE;
	                   LeaveCriticalSection(&g_cs);
	                }
	                return(0);
	             }
	
	
	Page 294: Typo in Code
	----------------------
	
	On page 294, there is a typo in the code at the bottom of the page.
	
	Change:
	
	  g_hEvent = CreateEve\nt(NULL, TRUE, FALSE, NULL);
	
	To:
	
	  g_hEvent = CreateEvent(NULL, TRUE, FALSE, NULL);
	
	
	Page 541: Correction to Calculation in Code
	-------------------------------------------
	
	On page 541, the calculation to determine the number of RAM pages for the desired
	number of bytes is incorrect.
	
	Change:
	
	  ULONG_PTR ulRAMPages = ulRAMBytes / sinf.dwPageSize
	
	To:
	
	  ULONG_PTR ulRAMPages = (ulRAMBytes + sinf.dwPageSize - 1) / sinf.dwPageSize;
	
	
	Page 601: Text Correction
	-------------------------
	
	On page 601, the last sentence of the 2nd full paragraph is incorrect.
	
	Change:
	"For files that are 4 GB or less, dwMaximumSizeHigh will always be 0."
	
	To:
	"For files that are less than 4 GB, dwMaximumSizeHigh will always be 0."
	
	
	Page 621: Correction to Code Comments
	-------------------------------------
	
	On page 621, there is a typo in the code comment on the fifth line.
	
	Change:
	"// Count the number of Js in this block"
	
	To:
	"// Count the number of 0s in this block".
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 1-57231-996-8
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
