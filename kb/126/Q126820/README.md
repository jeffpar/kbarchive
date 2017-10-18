---
layout: page
title: "Q126820: BUG: EM_LIMITTEXT Causes GPF in Japanese and Chinese Windows"
permalink: kb/126/Q126820/
---

## Q126820: BUG: EM_LIMITTEXT Causes GPF in Japanese and Chinese Windows

	Article: Q126820
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows (Japanese and Traditional Chinese), version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the Japanese and Traditional Chinese versions of Windows version 3.1, if
	an edit control has style ES_AUTOHSCROLL, and EM_LIMITTEXT is sent to the edit
	control to limit the number of bytes the user can input to the edit control, a
	general protection fault (GPF) will occur when the user is entering a
	double-byte character for the last byte.
	
	For example, if the following function is used to limit the number of bytes a
	user can input to 7:
	
	     SendMessage (hWnd, EM_LIMITEXT, 7, NULL);
	
	The user enters ABCDEF ( all single-byte character) to the edit control, then try
	to enter a double-byte 'G' to the edit control, a GPF will occur.
	
	Also, a GPF will also occur under the Japanese version of Windows version 3.1, if
	EM_LIMITTEXT is used and the edit control has style ES_UPPERCASE and the edit
	control is using the MS MINCHO or MS GOTHIC font.
	
	Hangeul (Korean) Windows version 3.1 does not GPF if EM_LIMITTEXT is used along
	with the ES_UPPERCASE style and the MS MINCHO or MS GOTHIC font.
	
	RESOLUTION
	==========
	
	Subclass the edit control, and check the WM_CHAR message coming in. If the
	WM_CHAR message for the last byte is a DBCS leadbyte, discard the WM_CHAR
	message along with the next WM_CHAR message. The following code demonstrates
	this workaround:
	
	  LONG FAR PASCAL SubClassFunc(HWND hWnd,
	                               WORD Message,
	                               WORD wParam,
	                               LONG lParam)
	  {
	  static BOOL bInvalidchar=FALSE; // Is this the last byte?
	     if ( Message == WM_CHAR )
	     {
	        if (bInvalidchar==TRUE) //The trailing byte of a DBCS character
	        {                       //that comes in for the last byte in edit.
	           bInvalidchar=FALSE;  //Reset the flag. Next char is valid.
	           return 0;            //Throw away the trailing byte.
	        }
	        else
	        {
	           // Is this the last byte?  Is the incoming WM_CHAR a DBCS
	           //   leadbyte?
	           if ( IsDBCSLeadByte(LOBYTE(wParam)) &&
	              (( TEXTLIMIT - SendMessage(hWnd, WM_GETTEXTLENGTH, 0,0)) == 1))
	           {
	              bInvalidchar=TRUE;   //The character is invalid.
	              return 0;               // Throw away this byte.
	           }
	           else return CallWindowProc(lpfnOldWndProc,
	                                       hWnd,
	                                       Message,
	                                       wParam,
	                                       lParam);
	        }
	     }
	     else return CallWindowProc(lpfnOldWndProc,
	                                hWnd,
	                                Message,
	                                wParam,
	                                lParam);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the product(s) listed at the
	beginning of this article.
	
	This problem does not occur in Chinese or Japenese Windows 95 or Windows NT.
	
	Additional query words: cwin jwin fesdk
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbHLangJapanese kbHLangChineseTrad kbAudDeveloper kbWin3xSearch kbSDKSearch kbZNotKeyword3 kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
