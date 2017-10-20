---
layout: page
title: "Q215362: HOWTO: Detect DCOM Installation Under VFP 6.0"
permalink: /kb/215/Q215362/
---

## Q215362: HOWTO: Detect DCOM Installation Under VFP 6.0

{% raw %}

	Article: Q215362
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbOSWinNT400 kbvfp600 kbOSWin95 kbOSWin98 kbFFC
	Last Modified: 04-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how to detect whether DCOM is installed in a Windows
	95/98 or a Windows NT 4.0 machine from within Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	An application created with a Top-Level form needs DCOM installed in order to
	work properly when the Visual FoxPro main desktop is suppressed in the
	Config.fpw with SCREEN=OFF.
	
	With the code below, you can detect that DCOM is present. Based on this
	information, you can shut down the application if necessary.
	
	  #DEFINE HKEY_LOCAL_MACHINE  -2147483646
	  #DEFINE DCOMKEYSTRING 'SOFTWARE\Microsoft\OLE'
	  #DEFINE ENABLEDCOMKEY 'EnableDCOM'
	
	  SET CLASSLIB TO HOME()+"ffc/REGISTRY.VCX"
	  oReg=CREATEOBJECT('registry')
	  LOCAL lFoundDCOM
	  lFoundDCOM = .F.
	  IF oReg.OpenKey(DCOMKEYSTRING,HKEY_LOCAL_MACHINE,.F.) = 0
	     LOCAL cValue
	     cValue = ''
	     IF oReg.GetKeyValue(ENABLEDCOMKEY,@cValue) = 0
	        lFoundDCOM = !EMPTY(cValue)
	     ENDIF
	  ENDIF
	  IF !lFoundDCOM
	     MESSAGEBOX('DCOM not install on system')
	  ELSE
	     MESSAGEBOX('DCOM install on system')
	  ENDIF
	
	REFERENCES
	==========
	
	For additional information about exception errors terminating Top-Level form in
	Visual FoxPro applications, please see the following article in the Microsoft
	Knowledge Base:
	
	Q193472 BUG: Exception Error Exiting Top-Level Form App in Windows 95
	
	Additional query words: DCOM
	
	======================================================================
	Keywords          : kbDCOM kbOSWinNT400 kbvfp600 kbOSWin95 kbOSWin98 kbFFC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
