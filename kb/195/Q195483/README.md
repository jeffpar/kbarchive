---
layout: page
title: "Q195483: WD97: CAPI and WLL Support Policy"
permalink: /kb/195/Q195483/
---

## Q195483: WD97: CAPI and WLL Support Policy

{% raw %}

	Article: Q195483
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbmacro kbpolicy kbdta word97
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The CAPI and the creation of WLLs are only supported through the Office
	Developer Consulting Line, which provides consulting services at a rate of $195
	per hour. The consulting line can be reached at 800-936-5200. Support is done on
	a call-back basis.
	
	Questions regarding the CAPI and WLLs can be posted to the Microsoft Internet
	Newsgroups at
	
	http://support.microsoft.com/isapi/gosupport.asp?target=/newsgroups/. These
	newsgroups are public forums and not directly supported by Microsoft.
	
	NOTE: The Microsoft Word Developer's Kit includes MAPI Extensions (WBMAPI.DLL)
	and ODBC Extensions (WBODBC.WLL). These add-ons are examples only and are not
	supported by Microsoft, as documented in the beginning of the Appendixes in the
	third edition of the Microsoft Word Developer's Kit.
	
	
	
	MORE INFORMATION
	================
	
	The CAPI or Word Application Programming Interface is described in Appendix C of
	the Microsoft Word Developer's Kit. The CAPI allows C programmers to create
	Windows DLL files that contain code to drive Word. These DLLs contain equivalent
	WordBasic code in the C language.
	
	WLLs are add-ons to Word that are typically placed in the <Winword>\Startup
	folder. WLLs are basically renamed DLLs that offer faster add-on functionality
	than what WordBasic offers.
	
	The Microsoft Word Developer's Kit includes two extensions to Word:
	
	- WBMAPI.DLL, documented in Appendix A, is installed in the
	  <Windows>\System directory and allows WordBasic macros to integrate
	  with a MAPI mail system.
	
	- WBODBC.WLL, documented in Appendix B, is a Word add-on that is either placed
	  in the <Winword>\Startup folder or loaded using the File Templates
	  dialog box. This WLL allows WordBasic macros to access data in any database
	  management system that supports ODBC.
	
	Additional query words: boundaries policy rules guidelines guideline limits limitations limited extra above beyond boundary winword word7 word95 word6
	
	======================================================================
	Keywords          : kbmacro kbpolicy kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
