---
layout: page
title: "Q280447: BUG: Text from a Rich Edit Control Is Truncated During DDX"
permalink: /kb/280/Q280447/
---

## Q280447: BUG: Text from a Rich Edit Control Is Truncated During DDX

{% raw %}

	Article: Q280447
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbMFC kbRichEdit kbClassWizard
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text in a rich edit control may be truncated under the following
	circumstances:
	
	- You associate a CString variable with the rich edit control on a dialog box
	  template.
	
	- The rich edit control exceeds 64 kilobytes (KB).
	
	CAUSE
	=====
	
	This problem occurs because the WM_GETTEXT message is not programmed to work
	with rich edit controls that are larger than 64 KB. The Class Wizard generates
	code that uses the DDX_Text function to exchange data between the rich edit
	control and the CString variable. The DDX_Text function uses the GetWindowText
	function, which sends the WM_GETTEXT message to the control to retrieve the text
	in the control. The WM_GETTEXT message does not accept text that is larger than
	64 KB.
	
	RESOLUTION
	==========
	
	To work around this problem, use the DDX_RichText function as demonstrated in
	the "More Information" section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To work around this problem, add the following two functions to your project:
	
	      DWORD CALLBACK ES2MemCallBack(DWORD_PTR dwCookie,
	                                    LPBYTE pbBuff, LONG cb, LONG *pcb)
	      {
	          LPTSTR& lpszStrFill = *(LPTSTR*)dwCookie;
	          memcpy(lpszStrFill, pbBuff, *pcb = cb);
	          lpszStrFill += cb;
	          *lpszStrFill = TCHAR('\0');
	
	          return 0;
	      }
	
	      void AFXAPI DDX_RichText(CDataExchange* pDX, int nIDC, CString& value)
	      {
	          extern void AFXAPI AfxSetWindowText(HWND hWndCtrl, LPCTSTR lpszNew);
	          HWND hWndCtrl = pDX->PrepareEditCtrl(nIDC);
	          if (pDX->m_bSaveAndValidate)
	          {
	              int nLen = ::GetWindowTextLength(hWndCtrl);
	
	              LPTSTR lpszStrFill = value.GetBufferSetLength(nLen);
	              EDITSTREAM es = { (DWORD_PTR) &lpszStrFill, 0, ES2MemCallBack };
	              ::SendMessage(hWndCtrl, EM_STREAMOUT, SF_TEXT, (LPARAM) &es);
	              value.ReleaseBuffer();
	          }
	          else
	          {
	              AfxSetWindowText(hWndCtrl, value);
	          }
	      }
	
	To add Class Wizard support for the new data exchange function, add the following
	lines to the .clw file or to the Ddx.clw file of your project:
	
	See the "References" section of this article for more information about DDX and
	DDV Routines.
	
	      ExtraDDXCount=1
	      ExtraDDX1=7;;TextOver64KB;CString;;RichText;Retrieves text in excess of 64KB from RichEdit controls
	
	Alternatively, if the ExtraDDXCount line already exists, you can increment the
	value of ExtraDDXCount by one.
	
	NOTE: Seven is the numeric constant that indicates a rich edit control.
	
	If you do not use the preceding step, you must manually replace all calls to
	DDX_Text with DDX_RichText. Then, you must move these calls outside the
	wizard-controlled code. Wizard-controlled code is the code that is bracketed by
	//{{AFX_DATA_INIT(...) and //}}AFX_DATA_INIT, and //{{AFX_DATA_MAP(...)
	//}}AFX_DATA_MAP.
	
	For more information about DDX and dialog data validation (DDV) routines, see the
	"References" section.
	
	REFERENCES
	==========
	
	For more information, see the following MSDN Web sites:
	
	TN026: DDX and DDV Routines:
	http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_mfcnotes_tn026.htm
	
	Windows User Interface WM_GETTEXT:
	http://msdn.microsoft.com/library/default.asp?url=/library/en-us/winui/windows_34ok.asp
	
	Additional query words: CRichEdit truncate
	
	======================================================================
	Keywords          : kbCmnCtrls kbMFC kbRichEdit kbClassWizard 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
