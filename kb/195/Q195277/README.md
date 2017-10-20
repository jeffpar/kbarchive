---
layout: page
title: "Q195277: Programming Visual C++ 5th Ed. Comments and Corrections"
permalink: /kb/195/Q195277/
---

## Q195277: Programming Visual C++ 5th Ed. Comments and Corrections

{% raw %}

	Article: Q195277
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 04-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Microsoft Visual C++, Fifth Edition ISBN 1-57231-857-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Microsoft Visual C++, Fifth
	Edition, ISBN 1-57231-857-0.
	
	The following topics are covered:
	
	- Page 87: Calculate Display Size By Dividing
	
	- Page 117: Incorrect Table Entry
	
	- Page 178: Text Incorrect
	
	- Page 188: Change CWebBrowser to CWebBrowser2
	
	- Page 190: Code Change To ON_EVENT Macro In ex08b
	
	- Page 283: #include "StdAfx.h" Should Be #include <afxmt.h>
	
	- Page 350: Text Incorrect
	
	- Page 358: Figure Mislabeled
	
	- Page 379: Figure Mislabeled
	
	- Page 502: Text Incorrect
	
	- Page 561: Text Incorrect
	
	- Page 696: Code Missing
	
	- Page 803: Change In Sample Code For The Release() Function
	
	- Page 923: Example 31C Memory Leak
	
	- Page 1027: Correction For Code In Step 4
	
	- Index: Wrong page listed for GetProfileInt and GetProfileString
	
	- Second Author Biography Page: Misspelled First Name
	
	MORE INFORMATION
	================
	
	Page 87: Calculate Display Size By Dividing
	-------------------------------------------
	
	On page 87, the first paragraph states that you will need to multiply HORZRES and
	VERTRES by LOGPIXELSX and LOGPIXELSY, respectively, in order to calculate the
	display size. This is incorrect. You will need to divide.
	
	Change:
	"You can also calculate a display size by multiplying HORZRES and VERTRES by
	LOGPIXELSX and LOGPIXELSY, respectively."
	
	To:
	"You can also calculate a display size by dividing HORZRES and VERTRES by
	LOGPIXELSX and LOGPIXELSY, respectively."
	
	
	Page 117: Incorrect Table Entry
	-------------------------------
	
	IDC_LANG m_nLang CString should be IDC_LANG m_nLang int
	
	
	Page 178: Text Incorrect
	------------------------
	
	Page 178, #4: "Edit the Calendar control class to handle help messages."
	The sentence "Add Calendar.cpp to the following message map code:" should read
	"Add the following message map code to Calendar.cpp:"
	
	
	Page 188: CWebBrowser should be CWebBrowser2
	--------------------------------------------
	
	On page 188, in Step 3, in the last sentence CWebBrowser should be CWebBrowser2.
	
	Change:
	"Visual C++ will generate the wrapper class CWebBrowser and add the files to your
	project."
	
	To:
	"Visual C++ will generate the wrapper class CWebBrowser2 and add the files to
	your project."
	
	
	Page 190: Code change to ON_EVENT macro in ex08b
	------------------------------------------------
	
	When the two resource symbols ID_BROWSER_SEARCH and ID_BROWSER_TARGET are
	defined, (step 5, page 188) note the value. The ON_EVENT macro (step 8, page
	190) may need to be changed to match the generated IDs.
	
	
	Page 283: #include "StdAfx.h" Should Be #include <afxmt.h>
	----------------------------------------------------------
	
	On page 283, in figure 12-2, #include "StdAfx.h" Should Be #include
	<afxmt.h>.
	
	In visual C++ version 6.0 the class CCriticalSection is not defined with
	"StdAfx.h".
	In the case of critical section the include has to be: #include <afxmt.h>.
	
	Change:
	#include "StdAfx.h"
	
	To:
	#include <afxmt.h>
	
	
	Page 350: Text Incorrect
	------------------------
	
	The sentence "You can use the persistent view class..." should read "You can use
	the persistent frame class..."
	
	
	Page 358: Figure Mislabeled
	---------------------------
	
	The caption for figure 15-1 should read "The CPersistentFrame class listing".
	
	
	Page 379: Figure Mislabeled
	---------------------------
	
	Figure 16-2 should be labeled "The CStudent class listing".
	
	
	Page 502: Text Incorrect
	------------------------
	
	The text "In the application class header file, ex20d.cpp, the following data
	member and function prototype have been added:"
	This sentence should read "...the following data member has been added:"
	
	
	Page 561: Text Incorrect
	------------------------
	
	The line "You don't need the three handlers for Windows 95,..." should read "You
	don't need the two handlers for Windows 95,..."
	
	
	Page 696: Code Missing
	----------------------
	
	The line "// Memory is MOVEABLE, so we must use GlobalLock!" should be preceded
	by the code at the bottom of page 681 in the 4th edition of this book.
	
	This code can be found in its entirety on the CD-ROM.
	
	
	Page 803: Change in sample code for Release() function
	------------------------------------------------------
	
	Page 803, "Writing COM Code": The sample code for the Release() function calls
	InterlockedIncrement() but it should actually be calling
	InterlockedDecrement().
	
	Change:
	
	  ULONG Release(){
	  ULONG cRef = InterlockedIncrement(&m_cRef);
	
	To:
	
	  ULONG Release(){
	  ULONG cRef = InterlockedDecrement(&m_cRef);<BR/>
	
	
	Page 923: Example 31C memory leak
	---------------------------------
	
	When running Example 31C, the program will run correctly, but upon exiting, you
	may get a warning of a memory leak.
	
	The problem derives from the code in the function OnNewDocument, a code segment
	of which is listed on page 923 of the book. You can delete the data member
	m_pEx31bSet in the destructor for the class and the leak will not occur.
	
	The memory will also be cleaned up when you exit the program.
	
	
	Page 1027: Correction for code in Step 4
	----------------------------------------
	
	The code on page 1027, Step 4, is incorrect.
	Function CAsyncMonikerFile::OnDataAvailable() has a parameter dwSize which can be
	greater than the buffer size we are reading data into. Corrected code should
	appear as follows:
	
	  void CMyMonikerFile::OnDataAvailable
	  (DWORD dwSize, DWORD bscfFlag)
	  {
	  try {
	  while (dwSize>0) {
	  UINT nBytesRead = Read(m_buffer, MAXBUF - 1);
	  dwSize -= nBytesRead;
	  }
	  }
	  catch (CFileException *pe) {
	  TRACE(_T("File exception %d\n"), pe->m_cause);
	  }
	  }
	
	
	Index: Wrong page listed for GetProfileInt and GetProfileString
	---------------------------------------------------------------
	
	The index listing on page 1138 for GetProfileInt and GetProfileString cites page
	348, which is incorrect.
	
	
	Second Author Biography Page: Misspelled first name
	---------------------------------------------------
	
	The author's first name is misspelled on the biography page for Scot Wingo.
	
	Change:
	"Scott Wingo..."
	
	To:
	"Scot Wingo..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: VC DevBook kruglinski Shepherd Wingo
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
