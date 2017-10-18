---
layout: page
title: "Q262108: Inside Server-Based Applications Comments and Corrections"
permalink: kb/262/Q262108/
---

## Q262108: Inside Server-Based Applications Comments and Corrections

	Article: Q262108
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 06-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Server-Based Applications ISBN 1-57231-817-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside Server-Based Applications, ISBN
	1-57231-817-1.
	
	The following topics are covered:
	
	- CD-ROM: Sample Code Corrections For ODBClass.cpp
	
	- Page 48: Listing 2-1 Code Corrections
	
	- Page 267: Figure 8-3 Is Incorrect
	
	- Chapter 9: <ES> Tags Should Be <BR>
	
	MORE INFORMATION
	================
	
	CD-ROM: Sample Code Corrections For ODBClass.cpp
	------------------------------------------------
	
	Several of the sample applications that use ODBClass.cpp may fail. The problem is
	in the bindColumn function. It currently returns a pointer to the local variable
	retLen, which later causes the SQLFetch function to return random information.
	
	None of this code appears in the book; it's only in the projects on the CD-ROM.
	The ODBClass.cpp file is used in the Chapter 8 ODBCTest project, the Chapter 10
	ISAPIPhone project, the Chapter 11 FilterRaw project, the Chapter 14
	MonitorService and TestMonitor projects, and the Chapter 15 MonitorService
	project.
	
	In each project, change the bindColumn function in the ODBClass.cpp file from:
	
	  RETCODE CODBCCursor::bindColumn(UWORD& col, char *columnName,
	      SDWORD len, SWORD type)
	  {
	      SDWORD retLen;
	      EnterCriticalSection(&CriticalSection);
	      col = assignColumn(columnName, len);
	      colInfo[col]->type = type;
	      LeaveCriticalSection(&CriticalSection);
	      return(SQLBindCol(hstmt, col, type, colInfo[col]->data,
	          len, &retLen));
	  }
	
	To:
	
	    RETCODE CODBCCursor::bindColumn(UWORD& col, char *columnName,
	        SDWORD len, SWORD type)
	    {
	        EnterCriticalSection(&CriticalSection);
	        col = assignColumn(columnName, len);
	        colInfo[col]->type = type;
	        LeaveCriticalSection(&CriticalSection);
	        return(SQLBindCol(hstmt, col, type, colInfo[col]->data,
	            len, &colInfo[col]->retLen));
	    }
	
	
	Page 48: Listing 2-1 Code Corrections
	-------------------------------------
	
	On page 48 and 49, the code in Listing 2-1 should be corrected to read as
	follows.
	
	  #include <stdio.h>
	  #include <conio.h>
	  #include <windows.h>
	  #include <process.h>
	
	  CRITICAL_SECTION csExit;
	  BOOL exitNow=FALSE;
	  HANDLE hMutex;
	
	  unsigned __stdcall SecondThreadFunc(void* pArguments);
	  int main(int argc, char* argv[]);
	
	  unsigned __stdcall SecondThreadFunc(void* pArguments) 
	  { 
	      int threadNum;
	      threadNum=*((int *)pArguments);
	      printf("In thread %d...\n",threadNum);
	      
	      while (TRUE)
	      {
	          DWORD rv = WaitForSingleObject(hMutex,INFINITE);
	
	          // Check for an error
	          if (rv == WAIT_FAILED)
	          {
	              LPVOID lpMsgBuf;
	              
	              FormatMessage( 
	                  FORMAT_MESSAGE_ALLOCATE_BUFFER | 
	                  FORMAT_MESSAGE_FROM_SYSTEM  | 
	                  FORMAT_MESSAGE_IGNORE_INSERTS,
	                  NULL,
	                  GetLastError(),
	                  MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), // Default language
	                  (LPTSTR) &lpMsgBuf,
	                  0,
	                  NULL);
	
	              MessageBox( NULL, (LPCTSTR)lpMsgBuf, "Error", MB_OK | MB_ICONINFORMATION );
	
	              LocalFree( lpMsgBuf );
	          }
	
	          Sleep(1000*threadNum);
	          EnterCriticalSection(&csExit);
	          if (exitNow) 
	          {
	              printf("\nThread %d GONE!",threadNum);
	          
	              LeaveCriticalSection(&csExit);
	              ReleaseMutex(hMutex);
	   
	              _endthreadex(0);
	          }
	          LeaveCriticalSection(&csExit);
	          ReleaseMutex(hMutex);
	          printf("\nThread %d still going",threadNum);
	      }
	      return 0;
	  }
	
	  int main(int argc, char* argv[])
	  {
	      int loop;
	      int threadCount[5];
	      unsigned threadID[5];
	      HANDLE   threadHandle[5];
	
	      // Got to reate the Mutex first. 
	      hMutex = CreateMutex(0, FALSE, 0); 
	
	      InitializeCriticalSection(&csExit);
	      __try
	      {
	          for (loop=0 ; loop<5 ; loop++)
	          {
	              threadCount[loop] = loop+1;
	
	              threadHandle[loop] = 
	                  (HANDLE) _beginthreadex(
	                      NULL,
	                      0,
	                      &SecondThreadFunc,
	                      &threadCount[loop],
	                      0,
	                      &threadID[loop]);
	          }
	
	          getch();
	
	          EnterCriticalSection(&csExit);
	          exitNow=TRUE;
	          LeaveCriticalSection(&csExit);
	      }
	      __finally
	      {
	
	          // Make sure the threads have exited...
	          WaitForMultipleObjects(5, threadHandle, TRUE, INFINITE);
	
	          DeleteCriticalSection(&csExit);
	      }
	      
	      CloseHandle(hMutex);
	
	      printf("\nProgram completed");
	
	      return 0;
	  }
	
	
	Page 276: Figure 8-3 Is Incorrect
	---------------------------------
	
	On page 276, Figure 8-2 and Figure 8-3 are exactly the same. Figure 8-3 is
	incorrect and will not match your computer screen.
	
	
	Chapter 9: <ES> Tags Should Be <BR>
	-----------------------------------
	
	In several places in Chapter 9, the code samples include an <ES> tag. This
	tag should be changed to <BR>.
	
	The affected code samples are:
	
	- Page 330 line 11
	
	- Page 334 line 10
	
	- Page 338 line 26
	
	- Page 341 line 18
	
	- Page 342 line 12
	
	- Page 343 lines 36, 41, 43
	
	- Page 344 lines 5, 6
	
	- Page 346 lines 23, 30
	
	- Page 347 line 23
	
	The same correction must be made in the text on page 334, paragraph 1, sentences
	3 & 4.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-817-1 DEVBOOK Reilly
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
