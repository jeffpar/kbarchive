---
layout: page
title: "Q152099: MFC Dialog Font Substitution Under DBCS System"
permalink: kb/152/Q152099/
---

## Q152099: MFC Dialog Font Substitution Under DBCS System

	Article: Q152099
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbIntl kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an MFC application is run under a DBCS (Double-byte Character Set,
	including Japanese, Chinese and Korean) in Windows NT or Windows 95, the default
	font specified for the dialog boxes within that application will be changed to
	the system font if they were originally set as "MS Sans Serif" or "Helv" in the
	RC file.
	
	MORE INFORMATION
	================
	
	CDialog::DoModal eventually calls the following code (excerpt from MFC source
	code dlgcore.cpp):
	
	     // On DBCS systems, also change "MS Sans Serif" or "Helv" to system
	             font.
	     if ((!bSetSysFont) && GetSystemMetrics(SM_DBCSENABLED))
	     {
	        bSetSysFont = ((strFace == _T("MS Sans Serif")) ||
	           (strFace == _T("Helv")));
	        if (bSetSysFont && (wSize == 8))
	           wSize = 0;
	     }
	     if (bSetSysFont)
	     {
	        CDialogTemplate dlgTemp(lpDialogTemplate);
	        dlgTemp.SetSystemFont(wSize);
	        hTemplate = dlgTemp.Detach();
	     }
	
	"MS Sans Serif" and "Helv" cannot correctly display double-byte strings.
	Therefore, under a DBCS-enabled system, dialog boxes need to use the system font
	instead.
	
	This font substitution does not occur on non-DBCS versions of Windows NT or
	Windows 95.
	
	Additional query words: 4.00 4.10 Kanji Hiragana Katakana Hangeul Hanzi
	
	======================================================================
	Keywords          : kbIntl kbIntlDev 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	
	=============================================================================
	
