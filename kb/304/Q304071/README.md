---
layout: page
title: "Q304071: BUG: WebClass Application with Japanese Templates May Fail"
permalink: /kb/304/Q304071/
---

## Q304071: BUG: WebClass Application with Japanese Templates May Fail

{% raw %}

	Article: Q304071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp kbWebClasses kbJapanese
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a WebClass application uses templates that contain Japanese characters and
	runs on a system where the default language is Japanese, the WebClass
	application may fail under heavy load. When this occurs, the following entry (or
	similar) appears in the Application Event log:
	
	  WebClass Runtime (0x800A2328)
	  An internal exception has occurred
	
	NOTE: This error may occur for reasons other than the specific problem that is
	described in this article. To determine if you are experiencing this specific
	problem, attach a native code debugger such as Microsoft WinDBG to the process
	that hosts the WebClass application while it is running to catch the exception
	on first chance. The call stack should look similar to the following call
	stack:
	
	  
	
	  0108cc0c 2764a744 0014fd76 00000159 OLEAUT32!SysAllocStringLen+0x7a
	  0108cc24 2764a989 00000003 0014fd76 mswcrun!CTemplItem__SetItem+0x24
	  0108cc50 2764b122 00000003 0014fd76 mswcrun!CTemplItems__Add+0x129
	  0108ccf8 2764bc2a 00154e48 03100000 mswcrun!CTemplateFile__ScanTemplate+0x272
	  0108cd8c 27644e6f 00154e48 00110010 mswcrun!CTemplateFile__SendToClient+0x15a
	  0108d02c 3b0c9c6c 00134b3c 00000008 mswcrun!CWebItem__WriteTemplate+0x21f
	
	Even if you do not have debug symbols available, the main indicator for this
	problem is that OLEAUT32 appears in the top stack frame, and MSWCRUN appears in
	a few stack frames below.
	
	CAUSE
	=====
	
	This problem occurs because of a bug in the WebClass runtime. The problem may
	not be reproduced consistently. Although the problem has only been seen on a
	system in which Japanese is set as the default language and when WebClass
	applications use templates that contain characters with Shift_JIS encoding, the
	same problem may occur on systems that are configured for other bi-directional
	character sets and other character encodings.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version      Size     File name     
	  ----------------------------------------------------
	  3-Jul-2001 01:04   6.0.91.15    299,008  MSWCRUN.DLL   
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	WebClass templates are saved as ANSI-encoded files, regardless of whether they
	contain text that is defined by using a charset such as Shift_JIS. Do not save
	these templates in Unicode or UTF-8 format, or else they will not render
	correctly.
	
	REFERENCES
	----------
	
	The latest version of WinDBG is available from the following Microsoft Windows
	Debuggers Web site:
	
	  http://www.microsoft.com/ddk/debugging/
	
	Additional query words: bidi crash av access violation 0x800A2328
	
	======================================================================
	Keywords          : kbVBp kbWebClasses kbJapanese 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
