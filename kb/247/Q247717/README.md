---
layout: page
title: "Q247717: Repeatedly Loading an XML Document May Crash in MSXML.dll"
permalink: /kb/247/Q247717/
---

## Q247717: Repeatedly Loading an XML Document May Crash in MSXML.dll

	Article: Q247717
	Product(s): Internet Information Server
	Version(s): WINDOWS:5; winnt:4.0
	Operating System(s): 
	Keyword(s): kbie500 kbie500bug kbXML kbGrpDSMDAC kbDSupport kbiis400 kbMSXMLnosweep
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer version 5 for Windows NT 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While repeatedly loading an XML document using MSXML.dll version 5.0.2314.1000,
	an application may stop responding with the following application error:
	
	  The instruction at "0x7111a681" referenced memory at "0x00000000". The memory
	  could not be read. Click on OK to terminate the application. Click on CANCEL
	  to debug the application.
	
	If you click CANCEL, Microsoft Visual C++ is installed as the default debugger, a
	Visual C++ dialog box displays an Unhandled exception in xxx.exe (MSXML.dll):
	0xC0000005: Access Violation.
	
	RESOLUTION
	==========
	
	A supported fix for the MSXML.dll that corrects this problem is now available
	from Microsoft, however it has not been fully regression tested and should be
	applied only to systems experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MSXML.dll version 5.0.2314.1000.
	
	MORE INFORMATION
	================
	
	If a debugger is started upon the application error, the last two calls in the
	call stack before the crash may show as:
	
	  MSXML! 7111a681()
	  MSXML! 71101315()
	
	or
	
	  MSXML+0x1a681	
	  MSXML+0x1315	
	
	With the following disassembly code:
	
	  7111A659   cmp         dword ptr [esi],0
	  7111A65C   mov         edi,esi
	  7111A65E   je          7111A686
	  7111A660   mov         ecx,edi
	  7111A662   call        71105105
	  7111A667   mov         ebx,eax
	  7111A669   cmp         ebx,0FFh
	  7111A66C   je          711050AB
	  7111A672   add         edi,4
	  7111A675   push        ebx
	  7111A676   push        edi
	  7111A677   call        71101266
	  7111A67C   and         ebx,0F9h
	  7111A67F   mov         edi,ebx
	  7111A681   cmp         dword ptr [edi],0
	  7111A684   jne         7111A660
	
	The crash occurs at instruction 7111A681 where the register EDI = 00000000.
	
	Additional query words: MSXML.DLL load crash AV access violation 7111a681 1a681
	
	======================================================================
	Keywords          : kbie500 kbie500bug kbXML kbGrpDSMDAC kbDSupport kbiis400 kbMSXMLnosweep 
	Technology        : kbiisSearch kbIEsearch kbiis400 kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE500WinNT400
	Version           : WINDOWS:5; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
